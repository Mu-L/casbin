// Copyright 2017 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package defaultrolemanager

import (
	"errors"
	"fmt"
	"strings"
	"sync"

	"github.com/casbin/casbin/v2/log"
	"github.com/casbin/casbin/v2/rbac"
	"github.com/casbin/casbin/v2/util"
)

const defaultDomain string = ""

// Role represents the data structure for a role in RBAC.
type Role struct {
	name                       string
	roles                      *sync.Map
	users                      *sync.Map
	matched                    *sync.Map
	matchedBy                  *sync.Map
	linkConditionFuncMap       *sync.Map
	linkConditionFuncParamsMap *sync.Map
}

func newRole(name string) *Role {
	r := Role{}
	r.name = name
	r.roles = &sync.Map{}
	r.users = &sync.Map{}
	r.matched = &sync.Map{}
	r.matchedBy = &sync.Map{}
	r.linkConditionFuncMap = &sync.Map{}
	r.linkConditionFuncParamsMap = &sync.Map{}
	return &r
}

func (r *Role) addRole(role *Role) {
	r.roles.Store(role.name, role)
	role.addUser(r)
}

func (r *Role) removeRole(role *Role) {
	r.roles.Delete(role.name)
	role.removeUser(r)
}

// should only be called inside addRole.
func (r *Role) addUser(user *Role) {
	r.users.Store(user.name, user)
}

// should only be called inside removeRole.
func (r *Role) removeUser(user *Role) {
	r.users.Delete(user.name)
}

func (r *Role) addMatch(role *Role) {
	r.matched.Store(role.name, role)
	role.matchedBy.Store(r.name, r)
}

func (r *Role) removeMatch(role *Role) {
	r.matched.Delete(role.name)
	role.matchedBy.Delete(r.name)
}

func (r *Role) removeMatches() {
	r.matched.Range(func(key, value interface{}) bool {
		r.removeMatch(value.(*Role))
		return true
	})
	r.matchedBy.Range(func(key, value interface{}) bool {
		value.(*Role).removeMatch(r)
		return true
	})
}

func (r *Role) rangeRoles(fn func(key, value interface{}) bool) {
	r.roles.Range(fn)
	r.roles.Range(func(key, value interface{}) bool {
		role := value.(*Role)
		role.matched.Range(fn)
		return true
	})
	r.matchedBy.Range(func(key, value interface{}) bool {
		role := value.(*Role)
		role.roles.Range(fn)
		return true
	})
}

func (r *Role) rangeUsers(fn func(key, value interface{}) bool) {
	r.users.Range(fn)
	r.users.Range(func(key, value interface{}) bool {
		role := value.(*Role)
		role.matched.Range(fn)
		return true
	})
	r.matchedBy.Range(func(key, value interface{}) bool {
		role := value.(*Role)
		role.users.Range(fn)
		return true
	})
}

func (r *Role) toString() string {
	roles := r.getRoles()

	if len(roles) == 0 {
		return ""
	}

	var sb strings.Builder
	sb.WriteString(r.name)
	sb.WriteString(" < ")
	if len(roles) != 1 {
		sb.WriteString("(")
	}

	for i, role := range roles {
		if i == 0 {
			sb.WriteString(role)
		} else {
			sb.WriteString(", ")
			sb.WriteString(role)
		}
	}

	if len(roles) != 1 {
		sb.WriteString(")")
	}

	return sb.String()
}

func (r *Role) getRoles() []string {
	var names []string
	r.rangeRoles(func(key, value interface{}) bool {
		names = append(names, key.(string))
		return true
	})
	return util.RemoveDuplicateElement(names)
}

func (r *Role) getUsers() []string {
	var names []string
	r.rangeUsers(func(key, value interface{}) bool {
		names = append(names, key.(string))
		return true
	})
	return names
}

type linkConditionFuncKey struct {
	roleName   string
	domainName string
}

func (r *Role) addLinkConditionFunc(role *Role, domain string, fn rbac.LinkConditionFunc) {
	r.linkConditionFuncMap.Store(linkConditionFuncKey{role.name, domain}, fn)
}

func (r *Role) getLinkConditionFunc(role *Role, domain string) (rbac.LinkConditionFunc, bool) {
	fn, ok := r.linkConditionFuncMap.Load(linkConditionFuncKey{role.name, domain})
	if fn == nil {
		return nil, ok
	}
	return fn.(rbac.LinkConditionFunc), ok
}

func (r *Role) setLinkConditionFuncParams(role *Role, domain string, params ...string) {
	r.linkConditionFuncParamsMap.Store(linkConditionFuncKey{role.name, domain}, params)
}

func (r *Role) getLinkConditionFuncParams(role *Role, domain string) ([]string, bool) {
	params, ok := r.linkConditionFuncParamsMap.Load(linkConditionFuncKey{role.name, domain})
	if params == nil {
		return nil, ok
	}
	return params.([]string), ok
}

// RoleManagerImpl provides a default implementation for the RoleManager interface.
type RoleManagerImpl struct {
	allRoles           *sync.Map
	maxHierarchyLevel  int
	matchingFunc       rbac.MatchingFunc
	domainMatchingFunc rbac.MatchingFunc
	logger             log.Logger
	matchingFuncCache  *util.SyncLRUCache
	mutex              sync.Mutex
}

// NewRoleManagerImpl is the constructor for creating an instance of the
// default RoleManager implementation.
func NewRoleManagerImpl(maxHierarchyLevel int) *RoleManagerImpl {
	rm := RoleManagerImpl{}
	_ = rm.Clear() // init allRoles and matchingFuncCache
	rm.maxHierarchyLevel = maxHierarchyLevel
	rm.SetLogger(&log.DefaultLogger{})
	return &rm
}

// use this constructor to avoid rebuild of AddMatchingFunc.
func newRoleManagerWithMatchingFunc(maxHierarchyLevel int, fn rbac.MatchingFunc) *RoleManagerImpl {
	rm := NewRoleManagerImpl(maxHierarchyLevel)
	rm.matchingFunc = fn
	return rm
}

// rebuilds role cache.
func (rm *RoleManagerImpl) rebuild() {
	roles := rm.allRoles
	_ = rm.Clear()
	rangeLinks(roles, func(name1, name2 string, domain ...string) bool {
		_ = rm.AddLink(name1, name2, domain...)
		return true
	})
}

func (rm *RoleManagerImpl) Match(str string, pattern string) bool {
	if str == pattern {
		return true
	}

	if rm.matchingFunc != nil {
		return rm.matchingFunc(str, pattern)
	} else {
		return false
	}
}

func (rm *RoleManagerImpl) rangeMatchingRoles(name string, isPattern bool, fn func(role *Role) bool) {
	rm.allRoles.Range(func(key, value interface{}) bool {
		name2 := key.(string)
		if isPattern && name != name2 && rm.Match(name2, name) {
			fn(value.(*Role))
		} else if !isPattern && name != name2 && rm.Match(name, name2) {
			fn(value.(*Role))
		}
		return true
	})
}

func (rm *RoleManagerImpl) load(name interface{}) (value *Role, ok bool) {
	if r, ok := rm.allRoles.Load(name); ok {
		return r.(*Role), true
	}
	return nil, false
}

// loads or creates a role.
func (rm *RoleManagerImpl) getRole(name string) (r *Role, created bool) {
	var role *Role
	var ok bool

	if role, ok = rm.load(name); !ok {
		role = newRole(name)
		rm.allRoles.Store(name, role)

		if rm.matchingFunc != nil {
			rm.rangeMatchingRoles(name, false, func(r *Role) bool {
				r.addMatch(role)
				return true
			})

			rm.rangeMatchingRoles(name, true, func(r *Role) bool {
				role.addMatch(r)
				return true
			})
		}
	}

	return role, !ok
}

func loadAndDelete(m *sync.Map, name string) (value interface{}, loaded bool) {
	value, loaded = m.Load(name)
	if loaded {
		m.Delete(name)
	}
	return value, loaded
}

func (rm *RoleManagerImpl) removeRole(name string) {
	if role, ok := loadAndDelete(rm.allRoles, name); ok {
		role.(*Role).removeMatches()
	}
}

// AddMatchingFunc support use pattern in g.
func (rm *RoleManagerImpl) AddMatchingFunc(name string, fn rbac.MatchingFunc) {
	rm.matchingFunc = fn
	rm.rebuild()
}

// AddDomainMatchingFunc support use domain pattern in g.
func (rm *RoleManagerImpl) AddDomainMatchingFunc(name string, fn rbac.MatchingFunc) {
	rm.domainMatchingFunc = fn
}

// SetLogger sets role manager's logger.
func (rm *RoleManagerImpl) SetLogger(logger log.Logger) {
	rm.logger = logger
}

// Clear clears all stored data and resets the role manager to the initial state.
func (rm *RoleManagerImpl) Clear() error {
	rm.matchingFuncCache = util.NewSyncLRUCache(100)
	rm.allRoles = &sync.Map{}
	return nil
}

// AddLink adds the inheritance link between role: name1 and role: name2.
// aka role: name1 inherits role: name2.
func (rm *RoleManagerImpl) AddLink(name1 string, name2 string, domains ...string) error {
	user, _ := rm.getRole(name1)
	role, _ := rm.getRole(name2)
	user.addRole(role)
	return nil
}

// DeleteLink deletes the inheritance link between role: name1 and role: name2.
// aka role: name1 does not inherit role: name2 any more.
func (rm *RoleManagerImpl) DeleteLink(name1 string, name2 string, domains ...string) error {
	user, _ := rm.getRole(name1)
	role, _ := rm.getRole(name2)
	user.removeRole(role)
	return nil
}

// HasLink determines whether role: name1 inherits role: name2.
func (rm *RoleManagerImpl) HasLink(name1 string, name2 string, domains ...string) (bool, error) {
	if name1 == name2 || (rm.matchingFunc != nil && rm.Match(name1, name2)) {
		return true, nil
	}

	// Lock to prevent race conditions between getRole and removeRole
	rm.mutex.Lock()
	defer rm.mutex.Unlock()

	user, userCreated := rm.getRole(name1)
	role, roleCreated := rm.getRole(name2)

	if userCreated {
		defer rm.removeRole(user.name)
	}
	if roleCreated {
		defer rm.removeRole(role.name)
	}

	return rm.hasLinkHelper(role.name, map[string]*Role{user.name: user}, rm.maxHierarchyLevel), nil
}

func (rm *RoleManagerImpl) hasLinkHelper(targetName string, roles map[string]*Role, level int) bool {
	if level < 0 || len(roles) == 0 {
		return false
	}

	nextRoles := map[string]*Role{}
	for _, role := range roles {
		if targetName == role.name || (rm.matchingFunc != nil && rm.Match(role.name, targetName)) {
			return true
		}
		role.rangeRoles(func(key, value interface{}) bool {
			nextRoles[key.(string)] = value.(*Role)
			return true
		})
	}

	return rm.hasLinkHelper(targetName, nextRoles, level-1)
}

// GetRoles gets the roles that a user inherits.
func (rm *RoleManagerImpl) GetRoles(name string, domains ...string) ([]string, error) {
	user, created := rm.getRole(name)
	if created {
		defer rm.removeRole(user.name)
	}
	return user.getRoles(), nil
}

// GetUsers gets the users of a role.
// domain is an unreferenced parameter here, may be used in other implementations.
func (rm *RoleManagerImpl) GetUsers(name string, domain ...string) ([]string, error) {
	role, created := rm.getRole(name)
	if created {
		defer rm.removeRole(role.name)
	}
	return role.getUsers(), nil
}

func (rm *RoleManagerImpl) toString() []string {
	var roles []string

	rm.allRoles.Range(func(key, value interface{}) bool {
		role := value.(*Role)
		if text := role.toString(); text != "" {
			roles = append(roles, text)
		}
		return true
	})

	return roles
}

// PrintRoles prints all the roles to log.
func (rm *RoleManagerImpl) PrintRoles() error {
	if !(rm.logger).IsEnabled() {
		return nil
	}
	roles := rm.toString()
	rm.logger.LogRole(roles)
	return nil
}

// GetDomains gets domains that a user has.
func (rm *RoleManagerImpl) GetDomains(name string) ([]string, error) {
	domains := []string{defaultDomain}
	return domains, nil
}

// GetAllDomains gets all domains.
func (rm *RoleManagerImpl) GetAllDomains() ([]string, error) {
	domains := []string{defaultDomain}
	return domains, nil
}

func (rm *RoleManagerImpl) copyFrom(other *RoleManagerImpl) {
	other.Range(func(name1, name2 string, domain ...string) bool {
		_ = rm.AddLink(name1, name2, domain...)
		return true
	})
}

func rangeLinks(users *sync.Map, fn func(name1, name2 string, domain ...string) bool) {
	users.Range(func(_, value interface{}) bool {
		user := value.(*Role)
		user.roles.Range(func(key, _ interface{}) bool {
			roleName := key.(string)
			return fn(user.name, roleName, defaultDomain)
		})
		return true
	})
}

func (rm *RoleManagerImpl) Range(fn func(name1, name2 string, domain ...string) bool) {
	rangeLinks(rm.allRoles, fn)
}

// Deprecated: BuildRelationship is no longer required.
func (rm *RoleManagerImpl) BuildRelationship(name1 string, name2 string, domain ...string) error {
	return nil
}

type DomainManager struct {
	rmMap              *sync.Map
	maxHierarchyLevel  int
	matchingFunc       rbac.MatchingFunc
	domainMatchingFunc rbac.MatchingFunc
	logger             log.Logger
	matchingFuncCache  *util.SyncLRUCache
}

// NewDomainManager is the constructor for creating an instance of the
// default DomainManager implementation.
func NewDomainManager(maxHierarchyLevel int) *DomainManager {
	dm := &DomainManager{}
	_ = dm.Clear() // init rmMap and rmCache
	dm.maxHierarchyLevel = maxHierarchyLevel
	return dm
}

// SetLogger sets role manager's logger.
func (dm *DomainManager) SetLogger(logger log.Logger) {
	dm.logger = logger
}

// AddMatchingFunc support use pattern in g.
func (dm *DomainManager) AddMatchingFunc(name string, fn rbac.MatchingFunc) {
	dm.matchingFunc = fn
	dm.rmMap.Range(func(key, value interface{}) bool {
		value.(*RoleManagerImpl).AddMatchingFunc(name, fn)
		return true
	})
}

// AddDomainMatchingFunc support use domain pattern in g.
func (dm *DomainManager) AddDomainMatchingFunc(name string, fn rbac.MatchingFunc) {
	dm.domainMatchingFunc = fn
	dm.rmMap.Range(func(key, value interface{}) bool {
		value.(*RoleManagerImpl).AddDomainMatchingFunc(name, fn)
		return true
	})
	dm.rebuild()
}

// clears the map of RoleManagers.
func (dm *DomainManager) rebuild() {
	rmMap := dm.rmMap
	_ = dm.Clear()
	rmMap.Range(func(key, value interface{}) bool {
		domain := key.(string)
		rm := value.(*RoleManagerImpl)

		rm.Range(func(name1, name2 string, _ ...string) bool {
			_ = dm.AddLink(name1, name2, domain)
			return true
		})
		return true
	})
}

// Clear clears all stored data and resets the role manager to the initial state.
func (dm *DomainManager) Clear() error {
	dm.rmMap = &sync.Map{}
	dm.matchingFuncCache = util.NewSyncLRUCache(100)
	return nil
}

func (dm *DomainManager) getDomain(domains ...string) (domain string, err error) {
	switch len(domains) {
	case 0:
		return defaultDomain, nil
	default:
		return domains[0], nil
	}
}

func (dm *DomainManager) Match(str string, pattern string) bool {
	if str == pattern {
		return true
	}

	if dm.domainMatchingFunc != nil {
		return dm.domainMatchingFunc(str, pattern)
	} else {
		return false
	}
}

func (dm *DomainManager) rangeAffectedRoleManagers(domain string, fn func(rm *RoleManagerImpl)) {
	if dm.domainMatchingFunc != nil {
		dm.rmMap.Range(func(key, value interface{}) bool {
			domain2 := key.(string)
			if domain != domain2 && dm.Match(domain2, domain) {
				fn(value.(*RoleManagerImpl))
			}
			return true
		})
	}
}

func (dm *DomainManager) load(name interface{}) (value *RoleManagerImpl, ok bool) {
	if r, ok := dm.rmMap.Load(name); ok {
		return r.(*RoleManagerImpl), true
	}
	return nil, false
}

// load or create a RoleManager instance of domain.
func (dm *DomainManager) getRoleManager(domain string, store bool) *RoleManagerImpl {
	var rm *RoleManagerImpl
	var ok bool

	if rm, ok = dm.load(domain); !ok {
		rm = newRoleManagerWithMatchingFunc(dm.maxHierarchyLevel, dm.matchingFunc)
		if store {
			dm.rmMap.Store(domain, rm)
		}
		if dm.domainMatchingFunc != nil {
			dm.rmMap.Range(func(key, value interface{}) bool {
				domain2 := key.(string)
				rm2 := value.(*RoleManagerImpl)
				if domain != domain2 && dm.Match(domain, domain2) {
					rm.copyFrom(rm2)
				}
				return true
			})
		}
	}
	return rm
}

// AddLink adds the inheritance link between role: name1 and role: name2.
// aka role: name1 inherits role: name2.
func (dm *DomainManager) AddLink(name1 string, name2 string, domains ...string) error {
	domain, err := dm.getDomain(domains...)
	if err != nil {
		return err
	}
	roleManager := dm.getRoleManager(domain, true) // create role manager if it does not exist
	_ = roleManager.AddLink(name1, name2, domains...)

	dm.rangeAffectedRoleManagers(domain, func(rm *RoleManagerImpl) {
		_ = rm.AddLink(name1, name2, domains...)
	})
	return nil
}

// DeleteLink deletes the inheritance link between role: name1 and role: name2.
// aka role: name1 does not inherit role: name2 any more.
func (dm *DomainManager) DeleteLink(name1 string, name2 string, domains ...string) error {
	domain, err := dm.getDomain(domains...)
	if err != nil {
		return err
	}
	roleManager := dm.getRoleManager(domain, true) // create role manager if it does not exist
	_ = roleManager.DeleteLink(name1, name2, domains...)

	dm.rangeAffectedRoleManagers(domain, func(rm *RoleManagerImpl) {
		_ = rm.DeleteLink(name1, name2, domains...)
	})
	return nil
}

// HasLink determines whether role: name1 inherits role: name2.
func (dm *DomainManager) HasLink(name1 string, name2 string, domains ...string) (bool, error) {
	domain, err := dm.getDomain(domains...)
	if err != nil {
		return false, err
	}
	rm := dm.getRoleManager(domain, false)
	return rm.HasLink(name1, name2, domains...)
}

// GetRoles gets the roles that a subject inherits.
func (dm *DomainManager) GetRoles(name string, domains ...string) ([]string, error) {
	domain, err := dm.getDomain(domains...)
	if err != nil {
		return nil, err
	}
	rm := dm.getRoleManager(domain, false)
	return rm.GetRoles(name, domains...)
}

// GetUsers gets the users of a role.
func (dm *DomainManager) GetUsers(name string, domains ...string) ([]string, error) {
	domain, err := dm.getDomain(domains...)
	if err != nil {
		return nil, err
	}
	rm := dm.getRoleManager(domain, false)
	return rm.GetUsers(name, domains...)
}

func (dm *DomainManager) toString() []string {
	var roles []string

	dm.rmMap.Range(func(key, value interface{}) bool {
		domain := key.(string)
		rm := value.(*RoleManagerImpl)
		domainRoles := rm.toString()
		roles = append(roles, fmt.Sprintf("%s: %s", domain, strings.Join(domainRoles, ", ")))
		return true
	})

	return roles
}

// PrintRoles prints all the roles to log.
func (dm *DomainManager) PrintRoles() error {
	if !(dm.logger).IsEnabled() {
		return nil
	}

	roles := dm.toString()
	dm.logger.LogRole(roles)
	return nil
}

// GetDomains gets domains that a user has.
func (dm *DomainManager) GetDomains(name string) ([]string, error) {
	var domains []string
	dm.rmMap.Range(func(key, value interface{}) bool {
		domain := key.(string)
		rm := value.(*RoleManagerImpl)
		role, created := rm.getRole(name)
		if created {
			defer rm.removeRole(role.name)
		}
		if len(role.getUsers()) > 0 || len(role.getRoles()) > 0 {
			domains = append(domains, domain)
		}
		return true
	})
	return domains, nil
}

// GetAllDomains gets all domains.
func (dm *DomainManager) GetAllDomains() ([]string, error) {
	var domains []string
	dm.rmMap.Range(func(key, value interface{}) bool {
		domains = append(domains, key.(string))
		return true
	})
	return domains, nil
}

// Deprecated: BuildRelationship is no longer required.
func (dm *DomainManager) BuildRelationship(name1 string, name2 string, domain ...string) error {
	return nil
}

// DeleteDomain deletes the specified domain from DomainManager.
func (dm *DomainManager) DeleteDomain(domain string) error {
	dm.rmMap.Delete(domain)
	return nil
}

type RoleManager struct {
	*DomainManager
}

func NewRoleManager(maxHierarchyLevel int) *RoleManager {
	rm := &RoleManager{}
	rm.DomainManager = NewDomainManager(maxHierarchyLevel)
	return rm
}

// DeleteDomain does nothing for RoleManagerImpl (no domain concept).
func (rm *RoleManagerImpl) DeleteDomain(domain string) error {
	return errors.New("DeleteDomain is not supported by RoleManagerImpl (no domain concept)")
}

type ConditionalRoleManager struct {
	RoleManagerImpl
}

func (crm *ConditionalRoleManager) copyFrom(other *ConditionalRoleManager) {
	other.Range(func(name1, name2 string, domain ...string) bool {
		_ = crm.AddLink(name1, name2, domain...)
		return true
	})
}

// use this constructor to avoid rebuild of AddMatchingFunc.
func newConditionalRoleManagerWithMatchingFunc(maxHierarchyLevel int, fn rbac.MatchingFunc) *ConditionalRoleManager {
	rm := NewConditionalRoleManager(maxHierarchyLevel)
	rm.matchingFunc = fn
	return rm
}

// NewConditionalRoleManager is the constructor for creating an instance of the
// ConditionalRoleManager implementation.
func NewConditionalRoleManager(maxHierarchyLevel int) *ConditionalRoleManager {
	rm := ConditionalRoleManager{}
	_ = rm.Clear() // init allRoles and matchingFuncCache
	rm.maxHierarchyLevel = maxHierarchyLevel
	rm.SetLogger(&log.DefaultLogger{})
	return &rm
}

// HasLink determines whether role: name1 inherits role: name2.
func (crm *ConditionalRoleManager) HasLink(name1 string, name2 string, domains ...string) (bool, error) {
	if name1 == name2 || (crm.matchingFunc != nil && crm.Match(name1, name2)) {
		return true, nil
	}

	// Lock to prevent race conditions between getRole and removeRole
	crm.mutex.Lock()
	defer crm.mutex.Unlock()

	user, userCreated := crm.getRole(name1)
	role, roleCreated := crm.getRole(name2)

	if userCreated {
		defer crm.removeRole(user.name)
	}
	if roleCreated {
		defer crm.removeRole(role.name)
	}

	return crm.hasLinkHelper(role.name, map[string]*Role{user.name: user}, crm.maxHierarchyLevel, domains...), nil
}

// hasLinkHelper use the Breadth First Search algorithm to traverse the Role tree
// Judging whether the user has a role (has link) is to judge whether the role node can be reached from the user node.
func (crm *ConditionalRoleManager) hasLinkHelper(targetName string, roles map[string]*Role, level int, domains ...string) bool {
	if level < 0 || len(roles) == 0 {
		return false
	}
	nextRoles := map[string]*Role{}
	for _, role := range roles {
		if targetName == role.name || (crm.matchingFunc != nil && crm.Match(role.name, targetName)) {
			return true
		}
		role.rangeRoles(func(key, value interface{}) bool {
			nextRole := value.(*Role)
			return crm.getNextRoles(role, nextRole, domains, nextRoles)
		})
	}

	return crm.hasLinkHelper(targetName, nextRoles, level-1)
}

func (crm *ConditionalRoleManager) getNextRoles(currentRole, nextRole *Role, domains []string, nextRoles map[string]*Role) bool {
	passLinkConditionFunc, err := crm.checkLinkCondition(currentRole.name, nextRole.name, domains)

	if err != nil {
		crm.logger.LogError(err, "hasLinkHelper LinkCondition Error")
		return false
	}

	if passLinkConditionFunc {
		nextRoles[nextRole.name] = nextRole
	}

	return true
}

func (crm *ConditionalRoleManager) checkLinkCondition(name1, name2 string, domain []string) (bool, error) {
	passLinkConditionFunc := true
	var err error

	if len(domain) == 0 {
		if linkConditionFunc, existLinkCondition := crm.GetLinkConditionFunc(name1, name2); existLinkCondition {
			params, _ := crm.GetLinkConditionFuncParams(name1, name2)
			passLinkConditionFunc, err = linkConditionFunc(params...)
		}
	} else {
		if linkConditionFunc, existLinkCondition := crm.GetDomainLinkConditionFunc(name1, name2, domain[0]); existLinkCondition {
			params, _ := crm.GetLinkConditionFuncParams(name1, name2, domain[0])
			passLinkConditionFunc, err = linkConditionFunc(params...)
		}
	}

	return passLinkConditionFunc, err
}

func (crm *ConditionalRoleManager) GetRoles(name string, domains ...string) ([]string, error) {
	user, created := crm.getRole(name)
	if created {
		defer crm.removeRole(user.name)
	}
	var roles []string
	user.rangeRoles(func(key, value interface{}) bool {
		roleName := key.(string)
		passLinkConditionFunc, err := crm.checkLinkCondition(name, roleName, domains)
		if err != nil {
			crm.logger.LogError(err, "getRoles LinkCondition Error")
			return true
		}

		if passLinkConditionFunc {
			roles = append(roles, roleName)
		}

		return true
	})
	return roles, nil
}

func (crm *ConditionalRoleManager) GetUsers(name string, domains ...string) ([]string, error) {
	role, created := crm.getRole(name)
	if created {
		defer crm.removeRole(name)
	}
	var users []string
	role.rangeUsers(func(key, value interface{}) bool {
		userName := key.(string)

		passLinkConditionFunc, err := crm.checkLinkCondition(userName, name, domains)
		if err != nil {
			crm.logger.LogError(err, "getUsers LinkCondition Error")
			return true
		}

		if passLinkConditionFunc {
			users = append(users, userName)
		}

		return true
	})

	return users, nil
}

// GetLinkConditionFunc get LinkConditionFunc based on userName, roleName.
func (crm *ConditionalRoleManager) GetLinkConditionFunc(userName, roleName string) (rbac.LinkConditionFunc, bool) {
	return crm.GetDomainLinkConditionFunc(userName, roleName, defaultDomain)
}

// GetDomainLinkConditionFunc get LinkConditionFunc based on userName, roleName, domain.
func (crm *ConditionalRoleManager) GetDomainLinkConditionFunc(userName, roleName, domain string) (rbac.LinkConditionFunc, bool) {
	user, userCreated := crm.getRole(userName)
	role, roleCreated := crm.getRole(roleName)

	if userCreated {
		crm.removeRole(user.name)
		return nil, false
	}

	if roleCreated {
		crm.removeRole(role.name)
		return nil, false
	}

	return user.getLinkConditionFunc(role, domain)
}

// GetLinkConditionFuncParams gets parameters of LinkConditionFunc based on userName, roleName, domain.
func (crm *ConditionalRoleManager) GetLinkConditionFuncParams(userName, roleName string, domain ...string) ([]string, bool) {
	user, userCreated := crm.getRole(userName)
	role, roleCreated := crm.getRole(roleName)

	if userCreated {
		crm.removeRole(user.name)
		return nil, false
	}

	if roleCreated {
		crm.removeRole(role.name)
		return nil, false
	}

	domainName := defaultDomain
	if len(domain) != 0 {
		domainName = domain[0]
	}

	if params, ok := user.getLinkConditionFuncParams(role, domainName); ok {
		return params, true
	} else {
		return nil, false
	}
}

// AddLinkConditionFunc is based on userName, roleName, add LinkConditionFunc.
func (crm *ConditionalRoleManager) AddLinkConditionFunc(userName, roleName string, fn rbac.LinkConditionFunc) {
	crm.AddDomainLinkConditionFunc(userName, roleName, defaultDomain, fn)
}

// AddDomainLinkConditionFunc is based on userName, roleName, domain, add LinkConditionFunc.
func (crm *ConditionalRoleManager) AddDomainLinkConditionFunc(userName, roleName, domain string, fn rbac.LinkConditionFunc) {
	user, _ := crm.getRole(userName)
	role, _ := crm.getRole(roleName)

	user.addLinkConditionFunc(role, domain, fn)
}

// SetLinkConditionFuncParams sets parameters of LinkConditionFunc based on userName, roleName, domain.
func (crm *ConditionalRoleManager) SetLinkConditionFuncParams(userName, roleName string, params ...string) {
	crm.SetDomainLinkConditionFuncParams(userName, roleName, defaultDomain, params...)
}

// SetDomainLinkConditionFuncParams sets parameters of LinkConditionFunc based on userName, roleName, domain.
func (crm *ConditionalRoleManager) SetDomainLinkConditionFuncParams(userName, roleName, domain string, params ...string) {
	user, _ := crm.getRole(userName)
	role, _ := crm.getRole(roleName)

	user.setLinkConditionFuncParams(role, domain, params...)
}

type ConditionalDomainManager struct {
	ConditionalRoleManager
	DomainManager
}

// NewConditionalDomainManager is the constructor for creating an instance of the
// ConditionalDomainManager implementation.
func NewConditionalDomainManager(maxHierarchyLevel int) *ConditionalDomainManager {
	rm := ConditionalDomainManager{}
	_ = rm.Clear() // init allRoles and matchingFuncCache
	rm.maxHierarchyLevel = maxHierarchyLevel
	rm.SetLogger(&log.DefaultLogger{})
	return &rm
}

func (cdm *ConditionalDomainManager) load(name interface{}) (value *ConditionalRoleManager, ok bool) {
	if r, ok := cdm.rmMap.Load(name); ok {
		return r.(*ConditionalRoleManager), true
	}
	return nil, false
}

// load or create a ConditionalRoleManager instance of domain.
func (cdm *ConditionalDomainManager) getConditionalRoleManager(domain string, store bool) *ConditionalRoleManager {
	var rm *ConditionalRoleManager
	var ok bool

	if rm, ok = cdm.load(domain); !ok {
		rm = newConditionalRoleManagerWithMatchingFunc(cdm.maxHierarchyLevel, cdm.matchingFunc)
		if store {
			cdm.rmMap.Store(domain, rm)
		}
		if cdm.domainMatchingFunc != nil {
			cdm.rmMap.Range(func(key, value interface{}) bool {
				domain2 := key.(string)
				rm2 := value.(*ConditionalRoleManager)
				if domain != domain2 && cdm.Match(domain, domain2) {
					rm.copyFrom(rm2)
				}
				return true
			})
		}
	}
	return rm
}

// HasLink determines whether role: name1 inherits role: name2.
func (cdm *ConditionalDomainManager) HasLink(name1 string, name2 string, domains ...string) (bool, error) {
	domain, err := cdm.getDomain(domains...)
	if err != nil {
		return false, err
	}
	rm := cdm.getConditionalRoleManager(domain, false)
	return rm.HasLink(name1, name2, domains...)
}

func (cdm *ConditionalDomainManager) GetRoles(name string, domains ...string) ([]string, error) {
	domain, err := cdm.getDomain(domains...)
	if err != nil {
		return nil, err
	}
	crm := cdm.getConditionalRoleManager(domain, false)
	return crm.GetRoles(name, domains...)
}

func (cdm *ConditionalDomainManager) GetUsers(name string, domains ...string) ([]string, error) {
	domain, err := cdm.getDomain(domains...)
	if err != nil {
		return nil, err
	}
	crm := cdm.getConditionalRoleManager(domain, false)
	return crm.GetUsers(name, domains...)
}

// AddLink adds the inheritance link between role: name1 and role: name2.
// aka role: name1 inherits role: name2.
func (cdm *ConditionalDomainManager) AddLink(name1 string, name2 string, domains ...string) error {
	domain, err := cdm.getDomain(domains...)
	if err != nil {
		return err
	}
	conditionalRoleManager := cdm.getConditionalRoleManager(domain, true) // create role manager if it does not exist
	_ = conditionalRoleManager.AddLink(name1, name2, domain)

	cdm.rangeAffectedRoleManagers(domain, func(rm *RoleManagerImpl) {
		_ = rm.AddLink(name1, name2, domain)
	})
	return nil
}

// DeleteLink deletes the inheritance link between role: name1 and role: name2.
// aka role: name1 does not inherit role: name2 any more.
func (cdm *ConditionalDomainManager) DeleteLink(name1 string, name2 string, domains ...string) error {
	domain, err := cdm.getDomain(domains...)
	if err != nil {
		return err
	}
	conditionalRoleManager := cdm.getConditionalRoleManager(domain, true) // create role manager if it does not exist
	_ = conditionalRoleManager.DeleteLink(name1, name2, domain)

	cdm.rangeAffectedRoleManagers(domain, func(rm *RoleManagerImpl) {
		_ = rm.DeleteLink(name1, name2, domain)
	})
	return nil
}

// AddLinkConditionFunc is based on userName, roleName, add LinkConditionFunc.
func (cdm *ConditionalDomainManager) AddLinkConditionFunc(userName, roleName string, fn rbac.LinkConditionFunc) {
	cdm.rmMap.Range(func(key, value interface{}) bool {
		value.(*ConditionalRoleManager).AddLinkConditionFunc(userName, roleName, fn)
		return true
	})
}

// AddDomainLinkConditionFunc is based on userName, roleName, domain, add LinkConditionFunc.
func (cdm *ConditionalDomainManager) AddDomainLinkConditionFunc(userName, roleName, domain string, fn rbac.LinkConditionFunc) {
	cdm.rmMap.Range(func(key, value interface{}) bool {
		value.(*ConditionalRoleManager).AddDomainLinkConditionFunc(userName, roleName, domain, fn)
		return true
	})
}

// SetLinkConditionFuncParams sets parameters of LinkConditionFunc based on userName, roleName.
func (cdm *ConditionalDomainManager) SetLinkConditionFuncParams(userName, roleName string, params ...string) {
	cdm.rmMap.Range(func(key, value interface{}) bool {
		value.(*ConditionalRoleManager).SetLinkConditionFuncParams(userName, roleName, params...)
		return true
	})
}

// SetDomainLinkConditionFuncParams sets parameters of LinkConditionFunc based on userName, roleName, domain.
func (cdm *ConditionalDomainManager) SetDomainLinkConditionFuncParams(userName, roleName, domain string, params ...string) {
	cdm.rmMap.Range(func(key, value interface{}) bool {
		value.(*ConditionalRoleManager).SetDomainLinkConditionFuncParams(userName, roleName, domain, params...)
		return true
	})
}

// AddDomainMatchingFunc support use domain pattern in g.
func (cdm *ConditionalDomainManager) AddDomainMatchingFunc(name string, fn rbac.MatchingFunc) {
	cdm.domainMatchingFunc = fn
	cdm.rmMap.Range(func(key, value interface{}) bool {
		value.(*ConditionalRoleManager).AddDomainMatchingFunc(name, fn)
		return true
	})
}
