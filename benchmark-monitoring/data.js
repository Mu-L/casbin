window.BENCHMARK_DATA = {
  "lastUpdate": 1706740015406,
  "repoUrl": "https://github.com/Mu-L/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9dd1ab08d9600d01779b76528d731a57b41d67b3",
          "message": "feat: benchmark monitoring action (#1263)\n\n* feat: benchmark monitoring\r\n\r\n* fix: action gh-pages-branch\r\n\r\n* fix: change gh-pages-branch",
          "timestamp": "2023-06-15T21:34:23+08:00",
          "tree_id": "ccd939904f3ddedfe83574582cb14277d9a3e712",
          "url": "https://github.com/Mu-L/casbin/commit/9dd1ab08d9600d01779b76528d731a57b41d67b3"
        },
        "date": 1686880050122,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57299929 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 212.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5409248 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 213.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5617522 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 231,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5144967 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 233.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4986878 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 217.7,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "5336877 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 221.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5386929 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 252.5,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "5017689 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3864,
            "unit": "ns/op\t    1519 B/op\t      18 allocs/op",
            "extra": "281382 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 245.3,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "4756662 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 217.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5467713 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 217.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5428090 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 214.4,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5257626 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 671.8,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1806225 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 720.7,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1671033 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 735,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1649438 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 693,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1713685 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 888.5,
            "unit": "ns/op\t     180 B/op\t       7 allocs/op",
            "extra": "1295800 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1508,
            "unit": "ns/op\t     477 B/op\t       9 allocs/op",
            "extra": "881521 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 685.4,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1729754 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 787.9,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1473591 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1587,
            "unit": "ns/op\t     297 B/op\t      13 allocs/op",
            "extra": "919890 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57387612 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4891,
            "unit": "ns/op\t    1491 B/op\t      17 allocs/op",
            "extra": "235006 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7213,
            "unit": "ns/op\t    2035 B/op\t      35 allocs/op",
            "extra": "163160 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 64271,
            "unit": "ns/op\t   19977 B/op\t     480 allocs/op",
            "extra": "18846 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 658421,
            "unit": "ns/op\t  191225 B/op\t    4827 allocs/op",
            "extra": "1812 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 7885698,
            "unit": "ns/op\t 1901447 B/op\t   48229 allocs/op",
            "extra": "157 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 76615,
            "unit": "ns/op\t   20032 B/op\t     615 allocs/op",
            "extra": "15517 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 751995,
            "unit": "ns/op\t  194352 B/op\t    6023 allocs/op",
            "extra": "1425 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8326740,
            "unit": "ns/op\t 1946466 B/op\t   60870 allocs/op",
            "extra": "129 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5983,
            "unit": "ns/op\t    1821 B/op\t      27 allocs/op",
            "extra": "191372 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6694,
            "unit": "ns/op\t    1803 B/op\t      25 allocs/op",
            "extra": "177386 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3739,
            "unit": "ns/op\t    1512 B/op\t      17 allocs/op",
            "extra": "313504 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5196420,
            "unit": "ns/op\t 1303204 B/op\t   40088 allocs/op",
            "extra": "231 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7917,
            "unit": "ns/op\t    3022 B/op\t      37 allocs/op",
            "extra": "149653 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9168,
            "unit": "ns/op\t    2443 B/op\t      49 allocs/op",
            "extra": "126552 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5648,
            "unit": "ns/op\t    1739 B/op\t      22 allocs/op",
            "extra": "208341 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 30321,
            "unit": "ns/op\t   16606 B/op\t     164 allocs/op",
            "extra": "39962 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 103097,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1068473,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1075 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 14619334,
            "unit": "ns/op\t 1349921 B/op\t   89741 allocs/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7596814451,
            "unit": "ns/op\t5285156192 B/op\t60930448 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 213065064,
            "unit": "ns/op\t139509331 B/op\t 1670237 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7891621210,
            "unit": "ns/op\t5422379480 B/op\t62540881 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 13435,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "86907 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 709.6,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1684040 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13222,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "90531 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f18f44a619c1045258d3d980348027e3107082d",
          "message": "ci: change CI benchmark alert threshold (#1266)",
          "timestamp": "2023-06-17T00:18:17+08:00",
          "tree_id": "2c8a631c329bf5edbfb83b9e2cb12f1b4352b5e7",
          "url": "https://github.com/Mu-L/casbin/commit/4f18f44a619c1045258d3d980348027e3107082d"
        },
        "date": 1686994953154,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57358489 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 216.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5193631 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 207.8,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5828406 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 222.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5393804 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 233,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4994338 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 207,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "5285920 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 212.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5553804 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 231.6,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "5171120 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3681,
            "unit": "ns/op\t    1520 B/op\t      18 allocs/op",
            "extra": "309500 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 237.7,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "5047334 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 206.7,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5780832 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 209,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5739554 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 214.3,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5553558 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 655.9,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1828099 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 696.5,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1762311 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 714.6,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1659349 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 666.7,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1804762 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 828.5,
            "unit": "ns/op\t     177 B/op\t       7 allocs/op",
            "extra": "1444834 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1589,
            "unit": "ns/op\t     478 B/op\t       9 allocs/op",
            "extra": "982843 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 667,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1770198 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 773.1,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1440750 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1598,
            "unit": "ns/op\t     286 B/op\t      13 allocs/op",
            "extra": "673233 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57410894 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4718,
            "unit": "ns/op\t    1488 B/op\t      17 allocs/op",
            "extra": "250470 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7068,
            "unit": "ns/op\t    2033 B/op\t      35 allocs/op",
            "extra": "164977 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 62784,
            "unit": "ns/op\t   19957 B/op\t     480 allocs/op",
            "extra": "19149 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 635254,
            "unit": "ns/op\t  191283 B/op\t    4828 allocs/op",
            "extra": "1898 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 7241444,
            "unit": "ns/op\t 1901756 B/op\t   48245 allocs/op",
            "extra": "162 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 76090,
            "unit": "ns/op\t   20064 B/op\t     615 allocs/op",
            "extra": "15968 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 724326,
            "unit": "ns/op\t  194176 B/op\t    6022 allocs/op",
            "extra": "1489 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8141319,
            "unit": "ns/op\t 1945620 B/op\t   60826 allocs/op",
            "extra": "136 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5854,
            "unit": "ns/op\t    1820 B/op\t      27 allocs/op",
            "extra": "197910 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6527,
            "unit": "ns/op\t    1801 B/op\t      25 allocs/op",
            "extra": "182152 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3634,
            "unit": "ns/op\t    1512 B/op\t      17 allocs/op",
            "extra": "314376 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5217504,
            "unit": "ns/op\t 1303180 B/op\t   40088 allocs/op",
            "extra": "229 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7692,
            "unit": "ns/op\t    3018 B/op\t      37 allocs/op",
            "extra": "154722 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9015,
            "unit": "ns/op\t    2442 B/op\t      49 allocs/op",
            "extra": "130684 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5393,
            "unit": "ns/op\t    1740 B/op\t      22 allocs/op",
            "extra": "211486 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 27949,
            "unit": "ns/op\t   16609 B/op\t     164 allocs/op",
            "extra": "42690 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 102298,
            "unit": "ns/op\t   11952 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1063065,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1074 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 11688340,
            "unit": "ns/op\t 1349917 B/op\t   89741 allocs/op",
            "extra": "86 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7438657837,
            "unit": "ns/op\t5285217864 B/op\t60929780 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 198873204,
            "unit": "ns/op\t139503041 B/op\t 1670208 allocs/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7565469566,
            "unit": "ns/op\t5422023768 B/op\t62540118 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 12974,
            "unit": "ns/op\t    7547 B/op\t     111 allocs/op",
            "extra": "93300 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 724.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1711250 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13045,
            "unit": "ns/op\t    7547 B/op\t     111 allocs/op",
            "extra": "92072 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peymanmortazavi@users.noreply.github.com",
            "name": "Peyman Mortazavi",
            "username": "peymanmortazavi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8353eda2716fb0038c5324f3cb7a41e51f36ee0c",
          "message": "fix: add EnforceContext' GetCacheKey() (#1265)\n\n* allow enforce context to get cached\r\n\r\n* add tests\r\n\r\n* Update enforcer_cached.go\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-06-17T22:31:53+08:00",
          "tree_id": "e865f6b93eafc3c706bd611174ae3ec2a9a16aeb",
          "url": "https://github.com/Mu-L/casbin/commit/8353eda2716fb0038c5324f3cb7a41e51f36ee0c"
        },
        "date": 1687088670138,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58342429 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 225.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5331597 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 228.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5300610 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 225.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5253240 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 241,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4730186 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 221.1,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "5257242 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 229.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5270348 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 237.5,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "4572757 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3728,
            "unit": "ns/op\t    1519 B/op\t      18 allocs/op",
            "extra": "310688 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 250.5,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "4678581 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 225.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5303356 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 225.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5303120 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 423.2,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "2806791 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 223.9,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "4973475 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 691.5,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1714544 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 743.1,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1611681 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 801.5,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1513929 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 729.1,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1674182 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 1002,
            "unit": "ns/op\t     182 B/op\t       7 allocs/op",
            "extra": "1174004 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1652,
            "unit": "ns/op\t     473 B/op\t       9 allocs/op",
            "extra": "893418 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 731.7,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1637209 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 843.9,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1358996 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1666,
            "unit": "ns/op\t     289 B/op\t      13 allocs/op",
            "extra": "701304 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58083432 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4593,
            "unit": "ns/op\t    1488 B/op\t      17 allocs/op",
            "extra": "249900 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7128,
            "unit": "ns/op\t    2034 B/op\t      35 allocs/op",
            "extra": "167036 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 63452,
            "unit": "ns/op\t   19965 B/op\t     480 allocs/op",
            "extra": "19192 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 728446,
            "unit": "ns/op\t  191304 B/op\t    4831 allocs/op",
            "extra": "1639 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 9008937,
            "unit": "ns/op\t 1895346 B/op\t   48057 allocs/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 78986,
            "unit": "ns/op\t   20034 B/op\t     615 allocs/op",
            "extra": "15238 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 774207,
            "unit": "ns/op\t  194146 B/op\t    6022 allocs/op",
            "extra": "1430 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 9375237,
            "unit": "ns/op\t 1945945 B/op\t   60851 allocs/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5930,
            "unit": "ns/op\t    1820 B/op\t      27 allocs/op",
            "extra": "194642 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6552,
            "unit": "ns/op\t    1803 B/op\t      25 allocs/op",
            "extra": "180229 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3509,
            "unit": "ns/op\t    1512 B/op\t      17 allocs/op",
            "extra": "317041 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 4925888,
            "unit": "ns/op\t 1303358 B/op\t   40088 allocs/op",
            "extra": "244 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7791,
            "unit": "ns/op\t    3021 B/op\t      37 allocs/op",
            "extra": "155194 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9033,
            "unit": "ns/op\t    2442 B/op\t      49 allocs/op",
            "extra": "126117 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5399,
            "unit": "ns/op\t    1738 B/op\t      22 allocs/op",
            "extra": "217554 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 30852,
            "unit": "ns/op\t   16613 B/op\t     164 allocs/op",
            "extra": "39259 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 104288,
            "unit": "ns/op\t   11952 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1088082,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1038 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 14447489,
            "unit": "ns/op\t 1349918 B/op\t   89741 allocs/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 8393717973,
            "unit": "ns/op\t5285129592 B/op\t60929957 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 228439829,
            "unit": "ns/op\t139558984 B/op\t 1670226 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 8826553791,
            "unit": "ns/op\t5422638136 B/op\t62540382 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 13906,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "84568 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 732.7,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1590319 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13994,
            "unit": "ns/op\t    7549 B/op\t     111 allocs/op",
            "extra": "83434 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "YunShuEmail@foxmail.com",
            "name": "YunShu",
            "username": "Selflocking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12c6c5f67f6b0ed2894e963dc690d95c31e93aaf",
          "message": "docs: replace gitter links with discord (#1271)",
          "timestamp": "2023-07-08T23:17:39+08:00",
          "tree_id": "0fb04e043421294ba6bb55e4875c65fb2f2fb5f5",
          "url": "https://github.com/Mu-L/casbin/commit/12c6c5f67f6b0ed2894e963dc690d95c31e93aaf"
        },
        "date": 1688913089611,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 29.02,
            "unit": "ns/op",
            "extra": "42461719 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42461719 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42461719 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 286.6,
            "unit": "ns/op",
            "extra": "4148835 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4148835 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4148835 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 290.1,
            "unit": "ns/op",
            "extra": "4061373 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4061373 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4061373 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 310.1,
            "unit": "ns/op",
            "extra": "3546716 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3546716 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3546716 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 327.6,
            "unit": "ns/op",
            "extra": "3759385 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3759385 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3759385 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 308.8,
            "unit": "ns/op",
            "extra": "3937444 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "3937444 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3937444 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 293,
            "unit": "ns/op",
            "extra": "4152680 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4152680 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4152680 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 314.6,
            "unit": "ns/op",
            "extra": "3740548 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3740548 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3740548 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4482,
            "unit": "ns/op",
            "extra": "271308 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1521,
            "unit": "B/op",
            "extra": "271308 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "271308 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 315.9,
            "unit": "ns/op",
            "extra": "4079553 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4079553 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4079553 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 297.6,
            "unit": "ns/op",
            "extra": "4045591 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4045591 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4045591 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 294,
            "unit": "ns/op",
            "extra": "4102398 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4102398 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4102398 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 535.1,
            "unit": "ns/op",
            "extra": "2168294 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2168294 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2168294 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 276.5,
            "unit": "ns/op",
            "extra": "4096833 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "4096833 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4096833 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 841.9,
            "unit": "ns/op",
            "extra": "1282928 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1282928 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1282928 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 880.9,
            "unit": "ns/op",
            "extra": "1281025 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1281025 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1281025 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 1034,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 902.7,
            "unit": "ns/op",
            "extra": "1320933 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1320933 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1320933 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1341,
            "unit": "ns/op",
            "extra": "764156 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 194,
            "unit": "B/op",
            "extra": "764156 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "764156 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 2252,
            "unit": "ns/op",
            "extra": "652744 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 440,
            "unit": "B/op",
            "extra": "652744 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "652744 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 901.6,
            "unit": "ns/op",
            "extra": "1303804 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1303804 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1303804 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1058,
            "unit": "ns/op",
            "extra": "1101892 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1101892 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1101892 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2322,
            "unit": "ns/op",
            "extra": "598312 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 289,
            "unit": "B/op",
            "extra": "598312 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "598312 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 28.67,
            "unit": "ns/op",
            "extra": "43281903 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43281903 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43281903 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 6093,
            "unit": "ns/op",
            "extra": "178944 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "178944 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "178944 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8872,
            "unit": "ns/op",
            "extra": "140572 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2034,
            "unit": "B/op",
            "extra": "140572 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "140572 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 88043,
            "unit": "ns/op",
            "extra": "14196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20054,
            "unit": "B/op",
            "extra": "14196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "14196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 951464,
            "unit": "ns/op",
            "extra": "1231 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191349,
            "unit": "B/op",
            "extra": "1231 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4832,
            "unit": "allocs/op",
            "extra": "1231 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10866287,
            "unit": "ns/op",
            "extra": "121 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899325,
            "unit": "B/op",
            "extra": "121 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48167,
            "unit": "allocs/op",
            "extra": "121 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 102107,
            "unit": "ns/op",
            "extra": "12141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20061,
            "unit": "B/op",
            "extra": "12141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 1010876,
            "unit": "ns/op",
            "extra": "1137 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194184,
            "unit": "B/op",
            "extra": "1137 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1137 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 12428157,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1957424,
            "unit": "B/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61313,
            "unit": "allocs/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7483,
            "unit": "ns/op",
            "extra": "144454 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "144454 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "144454 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8219,
            "unit": "ns/op",
            "extra": "141078 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1805,
            "unit": "B/op",
            "extra": "141078 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "141078 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4541,
            "unit": "ns/op",
            "extra": "266716 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1514,
            "unit": "B/op",
            "extra": "266716 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "266716 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 6101510,
            "unit": "ns/op",
            "extra": "189 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1305260,
            "unit": "B/op",
            "extra": "189 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40089,
            "unit": "allocs/op",
            "extra": "189 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9739,
            "unit": "ns/op",
            "extra": "131350 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3024,
            "unit": "B/op",
            "extra": "131350 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "131350 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 11084,
            "unit": "ns/op",
            "extra": "101296 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "101296 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "101296 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6800,
            "unit": "ns/op",
            "extra": "173328 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "173328 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "173328 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 40043,
            "unit": "ns/op",
            "extra": "29852 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16600,
            "unit": "B/op",
            "extra": "29852 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "29852 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 131442,
            "unit": "ns/op",
            "extra": "8696 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "8696 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "8696 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1455347,
            "unit": "ns/op",
            "extra": "841 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "841 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "841 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 18432406,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349921,
            "unit": "B/op",
            "extra": "57 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "57 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 10459903097,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5286017032,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60931739,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 314286167,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139545130,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670273,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 10664698041,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423513936,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62542339,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 18471,
            "unit": "ns/op",
            "extra": "66060 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7554,
            "unit": "B/op",
            "extra": "66060 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "66060 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 913.6,
            "unit": "ns/op",
            "extra": "1297512 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1297512 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1297512 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 17822,
            "unit": "ns/op",
            "extra": "61771 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7547,
            "unit": "B/op",
            "extra": "61771 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "61771 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18f37ae11d3a95467edaa72799de3cbe85e82667",
          "message": "fix: Preprocess the access to the request object in the policy (#1279)",
          "timestamp": "2023-07-17T23:02:53+08:00",
          "tree_id": "47ce318e56722a75c49f3b0f8adcd58596bb0758",
          "url": "https://github.com/Mu-L/casbin/commit/18f37ae11d3a95467edaa72799de3cbe85e82667"
        },
        "date": 1689706204214,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.65,
            "unit": "ns/op",
            "extra": "57975798 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57975798 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57975798 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 236.6,
            "unit": "ns/op",
            "extra": "5103081 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5103081 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5103081 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 237.7,
            "unit": "ns/op",
            "extra": "5036192 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5036192 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5036192 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 244.8,
            "unit": "ns/op",
            "extra": "4827432 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4827432 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4827432 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 267.5,
            "unit": "ns/op",
            "extra": "4368266 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4368266 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4368266 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 241.5,
            "unit": "ns/op",
            "extra": "5056906 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5056906 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5056906 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 238.5,
            "unit": "ns/op",
            "extra": "4955002 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4955002 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4955002 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 247,
            "unit": "ns/op",
            "extra": "4792122 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4792122 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4792122 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3831,
            "unit": "ns/op",
            "extra": "309535 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1523,
            "unit": "B/op",
            "extra": "309535 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "309535 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 255.4,
            "unit": "ns/op",
            "extra": "4711868 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4711868 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4711868 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 252.7,
            "unit": "ns/op",
            "extra": "5041754 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5041754 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5041754 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 238.2,
            "unit": "ns/op",
            "extra": "5006464 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5006464 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5006464 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 438.2,
            "unit": "ns/op",
            "extra": "2697428 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2697428 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2697428 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 232.8,
            "unit": "ns/op",
            "extra": "4443020 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "4443020 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4443020 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 720.4,
            "unit": "ns/op",
            "extra": "1652449 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1652449 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1652449 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 759.4,
            "unit": "ns/op",
            "extra": "1564275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1564275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1564275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 840.8,
            "unit": "ns/op",
            "extra": "1401795 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1401795 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1401795 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 748.9,
            "unit": "ns/op",
            "extra": "1604314 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1604314 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1604314 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1136,
            "unit": "ns/op",
            "extra": "914790 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "914790 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "914790 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1763,
            "unit": "ns/op",
            "extra": "762253 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 439,
            "unit": "B/op",
            "extra": "762253 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "762253 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 778.1,
            "unit": "ns/op",
            "extra": "1564533 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1564533 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1564533 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 863.7,
            "unit": "ns/op",
            "extra": "1262811 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1262811 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1262811 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2014,
            "unit": "ns/op",
            "extra": "689809 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 295,
            "unit": "B/op",
            "extra": "689809 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "689809 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.6,
            "unit": "ns/op",
            "extra": "58127925 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58127925 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58127925 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4986,
            "unit": "ns/op",
            "extra": "231506 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1491,
            "unit": "B/op",
            "extra": "231506 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "231506 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7605,
            "unit": "ns/op",
            "extra": "158452 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "158452 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "158452 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 69226,
            "unit": "ns/op",
            "extra": "17469 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19958,
            "unit": "B/op",
            "extra": "17469 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "17469 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 858766,
            "unit": "ns/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191318,
            "unit": "B/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1359 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10066279,
            "unit": "ns/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1893482,
            "unit": "B/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48003,
            "unit": "allocs/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 82774,
            "unit": "ns/op",
            "extra": "14298 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20032,
            "unit": "B/op",
            "extra": "14298 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "14298 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 796238,
            "unit": "ns/op",
            "extra": "1327 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194483,
            "unit": "B/op",
            "extra": "1327 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6023,
            "unit": "allocs/op",
            "extra": "1327 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 11039330,
            "unit": "ns/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1954767,
            "unit": "B/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61189,
            "unit": "allocs/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6482,
            "unit": "ns/op",
            "extra": "185937 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "185937 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "185937 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6961,
            "unit": "ns/op",
            "extra": "168794 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "168794 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "168794 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3944,
            "unit": "ns/op",
            "extra": "298852 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1511,
            "unit": "B/op",
            "extra": "298852 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "298852 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5287721,
            "unit": "ns/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303859,
            "unit": "B/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 8633,
            "unit": "ns/op",
            "extra": "140776 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3022,
            "unit": "B/op",
            "extra": "140776 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "140776 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9698,
            "unit": "ns/op",
            "extra": "118736 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2443,
            "unit": "B/op",
            "extra": "118736 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "118736 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5714,
            "unit": "ns/op",
            "extra": "205693 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1739,
            "unit": "B/op",
            "extra": "205693 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "205693 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 35871,
            "unit": "ns/op",
            "extra": "34434 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16600,
            "unit": "B/op",
            "extra": "34434 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "34434 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 108276,
            "unit": "ns/op",
            "extra": "9502 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9502 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9502 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1125136,
            "unit": "ns/op",
            "extra": "1104 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1104 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1104 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 17638600,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349921,
            "unit": "B/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9455759848,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5294189480,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60932084,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 244675683,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139754739,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670281,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 9038861581,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5432726456,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62542892,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 14211,
            "unit": "ns/op",
            "extra": "82802 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7550,
            "unit": "B/op",
            "extra": "82802 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "82802 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 741,
            "unit": "ns/op",
            "extra": "1606849 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1606849 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1606849 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 14090,
            "unit": "ns/op",
            "extra": "84973 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7551,
            "unit": "B/op",
            "extra": "84973 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "84973 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8595764@qq.com",
            "name": "Charles",
            "username": "zcyc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "108943a73e2b4c389aa5129e2331e7e1a5e542e8",
          "message": "feat: add AddPermissionsForUser function for SyncedEnforcer struct (#1285)",
          "timestamp": "2023-07-28T17:58:58+08:00",
          "tree_id": "1d1c9f388ecceb5dd91f2354d8ea4b285858c663",
          "url": "https://github.com/Mu-L/casbin/commit/108943a73e2b4c389aa5129e2331e7e1a5e542e8"
        },
        "date": 1690698323758,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57354919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57354919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57354919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 204.9,
            "unit": "ns/op",
            "extra": "5615604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5615604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5615604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 205.3,
            "unit": "ns/op",
            "extra": "5838020 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5838020 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5838020 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 227.8,
            "unit": "ns/op",
            "extra": "5291182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5291182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5291182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 229.7,
            "unit": "ns/op",
            "extra": "4981842 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4981842 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4981842 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 206.2,
            "unit": "ns/op",
            "extra": "5527554 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5527554 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5527554 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 205.8,
            "unit": "ns/op",
            "extra": "5801362 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5801362 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5801362 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 229.5,
            "unit": "ns/op",
            "extra": "4943434 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4943434 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4943434 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3749,
            "unit": "ns/op",
            "extra": "314445 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1523,
            "unit": "B/op",
            "extra": "314445 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "314445 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 236,
            "unit": "ns/op",
            "extra": "4730460 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4730460 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4730460 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 206.7,
            "unit": "ns/op",
            "extra": "5741503 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5741503 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5741503 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 205.8,
            "unit": "ns/op",
            "extra": "5809335 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5809335 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5809335 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 420.3,
            "unit": "ns/op",
            "extra": "2818936 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2818936 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2818936 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 216,
            "unit": "ns/op",
            "extra": "5220414 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5220414 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5220414 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 650,
            "unit": "ns/op",
            "extra": "1796684 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1796684 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1796684 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 704.9,
            "unit": "ns/op",
            "extra": "1740672 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1740672 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1740672 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 723,
            "unit": "ns/op",
            "extra": "1655236 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1655236 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1655236 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 664.6,
            "unit": "ns/op",
            "extra": "1769652 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1769652 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1769652 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 798.3,
            "unit": "ns/op",
            "extra": "1406962 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1406962 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1406962 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1544,
            "unit": "ns/op",
            "extra": "955840 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 456,
            "unit": "B/op",
            "extra": "955840 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "955840 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 673.4,
            "unit": "ns/op",
            "extra": "1766133 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1766133 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1766133 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 774.9,
            "unit": "ns/op",
            "extra": "1447656 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1447656 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1447656 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1692,
            "unit": "ns/op",
            "extra": "705769 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 295,
            "unit": "B/op",
            "extra": "705769 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "705769 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.89,
            "unit": "ns/op",
            "extra": "57374935 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57374935 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57374935 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4764,
            "unit": "ns/op",
            "extra": "248876 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1493,
            "unit": "B/op",
            "extra": "248876 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "248876 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7172,
            "unit": "ns/op",
            "extra": "169803 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2040,
            "unit": "B/op",
            "extra": "169803 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "169803 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 62128,
            "unit": "ns/op",
            "extra": "19204 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20004,
            "unit": "B/op",
            "extra": "19204 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "19204 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 644789,
            "unit": "ns/op",
            "extra": "1846 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191179,
            "unit": "B/op",
            "extra": "1846 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1846 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7453535,
            "unit": "ns/op",
            "extra": "159 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1905982,
            "unit": "B/op",
            "extra": "159 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48356,
            "unit": "allocs/op",
            "extra": "159 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 74958,
            "unit": "ns/op",
            "extra": "15732 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20074,
            "unit": "B/op",
            "extra": "15732 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15732 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 750824,
            "unit": "ns/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194280,
            "unit": "B/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1474 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8258844,
            "unit": "ns/op",
            "extra": "122 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1947927,
            "unit": "B/op",
            "extra": "122 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60919,
            "unit": "allocs/op",
            "extra": "122 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5949,
            "unit": "ns/op",
            "extra": "189212 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1823,
            "unit": "B/op",
            "extra": "189212 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "189212 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6655,
            "unit": "ns/op",
            "extra": "180801 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1807,
            "unit": "B/op",
            "extra": "180801 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "180801 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3672,
            "unit": "ns/op",
            "extra": "323372 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1515,
            "unit": "B/op",
            "extra": "323372 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "323372 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5212653,
            "unit": "ns/op",
            "extra": "230 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1306599,
            "unit": "B/op",
            "extra": "230 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "230 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7748,
            "unit": "ns/op",
            "extra": "153969 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3027,
            "unit": "B/op",
            "extra": "153969 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "153969 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9167,
            "unit": "ns/op",
            "extra": "130759 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2450,
            "unit": "B/op",
            "extra": "130759 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "130759 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5441,
            "unit": "ns/op",
            "extra": "215007 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1742,
            "unit": "B/op",
            "extra": "215007 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "215007 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 27831,
            "unit": "ns/op",
            "extra": "42823 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16607,
            "unit": "B/op",
            "extra": "42823 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "42823 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 105330,
            "unit": "ns/op",
            "extra": "9716 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9716 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9716 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1084423,
            "unit": "ns/op",
            "extra": "1065 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1065 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1065 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 13003163,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349917,
            "unit": "B/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7520609051,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5296091752,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60932757,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 201493685,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139762990,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670287,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7745376926,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5433083032,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62543122,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13226,
            "unit": "ns/op",
            "extra": "79735 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7548,
            "unit": "B/op",
            "extra": "79735 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "79735 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 715.6,
            "unit": "ns/op",
            "extra": "1654729 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1654729 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1654729 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13091,
            "unit": "ns/op",
            "extra": "92418 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7552,
            "unit": "B/op",
            "extra": "92418 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "92418 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "hsluoyz",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d4621f72a66cb3ed2cb377a5646b282843c311c",
          "message": "Update README.md",
          "timestamp": "2023-08-08T14:27:40+08:00",
          "tree_id": "1d1c9f388ecceb5dd91f2354d8ea4b285858c663",
          "url": "https://github.com/Mu-L/casbin/commit/8d4621f72a66cb3ed2cb377a5646b282843c311c"
        },
        "date": 1691534076447,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 22.52,
            "unit": "ns/op",
            "extra": "51917098 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51917098 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51917098 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 267.4,
            "unit": "ns/op",
            "extra": "4292188 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4292188 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4292188 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 257.8,
            "unit": "ns/op",
            "extra": "4774036 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4774036 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4774036 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 263.7,
            "unit": "ns/op",
            "extra": "4505751 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4505751 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4505751 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 280.6,
            "unit": "ns/op",
            "extra": "4442208 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4442208 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4442208 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 262.8,
            "unit": "ns/op",
            "extra": "4020220 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4020220 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4020220 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 260.6,
            "unit": "ns/op",
            "extra": "4618923 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4618923 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4618923 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 269.9,
            "unit": "ns/op",
            "extra": "4501582 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4501582 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4501582 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4442,
            "unit": "ns/op",
            "extra": "273834 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "273834 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "273834 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 282.4,
            "unit": "ns/op",
            "extra": "3951034 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3951034 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3951034 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 254.6,
            "unit": "ns/op",
            "extra": "4599133 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4599133 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4599133 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 258.2,
            "unit": "ns/op",
            "extra": "4424470 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4424470 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4424470 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 518.3,
            "unit": "ns/op",
            "extra": "2448802 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2448802 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2448802 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 240,
            "unit": "ns/op",
            "extra": "4931416 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4931416 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4931416 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 751.6,
            "unit": "ns/op",
            "extra": "1559290 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1559290 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1559290 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 811,
            "unit": "ns/op",
            "extra": "1480248 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1480248 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1480248 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 872,
            "unit": "ns/op",
            "extra": "1403222 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1403222 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1403222 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 822,
            "unit": "ns/op",
            "extra": "1509849 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1509849 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1509849 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1077,
            "unit": "ns/op",
            "extra": "1119309 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 183,
            "unit": "B/op",
            "extra": "1119309 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1119309 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1804,
            "unit": "ns/op",
            "extra": "698037 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 426,
            "unit": "B/op",
            "extra": "698037 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "698037 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 851.5,
            "unit": "ns/op",
            "extra": "1471249 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1471249 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1471249 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 938.5,
            "unit": "ns/op",
            "extra": "1161260 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1161260 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1161260 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2180,
            "unit": "ns/op",
            "extra": "626721 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 294,
            "unit": "B/op",
            "extra": "626721 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "626721 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 22.46,
            "unit": "ns/op",
            "extra": "52488746 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52488746 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52488746 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5286,
            "unit": "ns/op",
            "extra": "212888 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "212888 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "212888 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7867,
            "unit": "ns/op",
            "extra": "141489 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2034,
            "unit": "B/op",
            "extra": "141489 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "141489 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 71619,
            "unit": "ns/op",
            "extra": "15908 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19981,
            "unit": "B/op",
            "extra": "15908 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "15908 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 925882,
            "unit": "ns/op",
            "extra": "1166 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191397,
            "unit": "B/op",
            "extra": "1166 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1166 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 8879133,
            "unit": "ns/op",
            "extra": "116 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1891614,
            "unit": "B/op",
            "extra": "116 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 47960,
            "unit": "allocs/op",
            "extra": "116 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 92359,
            "unit": "ns/op",
            "extra": "14107 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20075,
            "unit": "B/op",
            "extra": "14107 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "14107 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 902829,
            "unit": "ns/op",
            "extra": "1108 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194431,
            "unit": "B/op",
            "extra": "1108 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6025,
            "unit": "allocs/op",
            "extra": "1108 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 10910650,
            "unit": "ns/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1952438,
            "unit": "B/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61097,
            "unit": "allocs/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6525,
            "unit": "ns/op",
            "extra": "168044 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1819,
            "unit": "B/op",
            "extra": "168044 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "168044 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7393,
            "unit": "ns/op",
            "extra": "151440 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "151440 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "151440 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4013,
            "unit": "ns/op",
            "extra": "289593 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "289593 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "289593 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5430785,
            "unit": "ns/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1304174,
            "unit": "B/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9095,
            "unit": "ns/op",
            "extra": "141451 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3021,
            "unit": "B/op",
            "extra": "141451 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "141451 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 10561,
            "unit": "ns/op",
            "extra": "107880 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "107880 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "107880 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6175,
            "unit": "ns/op",
            "extra": "183891 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "183891 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "183891 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 36568,
            "unit": "ns/op",
            "extra": "32593 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16608,
            "unit": "B/op",
            "extra": "32593 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "32593 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 116683,
            "unit": "ns/op",
            "extra": "10437 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10437 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10437 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1252996,
            "unit": "ns/op",
            "extra": "883 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "883 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "883 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14464731,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349919,
            "unit": "B/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 8822556695,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285619104,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60930673,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 238050719,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139538923,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670241,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 9239386067,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423029392,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541170,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 15277,
            "unit": "ns/op",
            "extra": "76275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7539,
            "unit": "B/op",
            "extra": "76275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "76275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 789,
            "unit": "ns/op",
            "extra": "1462168 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1462168 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1462168 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 15530,
            "unit": "ns/op",
            "extra": "80584 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "80584 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "80584 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "im@yunshu.site",
            "name": "YunShu",
            "username": "Selflocking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ffd73bebfb5202679dc39cf0eff568509f5902f",
          "message": "docs: update build badge (#1293)\n\n* docs: update build badge\r\n\r\n* Update default.yml\r\n\r\n* Update README.md\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-08-11T00:50:02+08:00",
          "tree_id": "d75829edc27d7c453f565d89b68248bbfddaaab1",
          "url": "https://github.com/Mu-L/casbin/commit/9ffd73bebfb5202679dc39cf0eff568509f5902f"
        },
        "date": 1691727844833,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 28.14,
            "unit": "ns/op",
            "extra": "41138504 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41138504 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41138504 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 293.2,
            "unit": "ns/op",
            "extra": "4163604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4163604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4163604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 292.8,
            "unit": "ns/op",
            "extra": "4205948 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4205948 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4205948 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 288.8,
            "unit": "ns/op",
            "extra": "4084742 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4084742 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4084742 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 304.8,
            "unit": "ns/op",
            "extra": "3389706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3389706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3389706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 295,
            "unit": "ns/op",
            "extra": "3626706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "3626706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3626706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 292.6,
            "unit": "ns/op",
            "extra": "4096710 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4096710 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4096710 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 298.6,
            "unit": "ns/op",
            "extra": "3907879 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3907879 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3907879 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4572,
            "unit": "ns/op",
            "extra": "254923 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1523,
            "unit": "B/op",
            "extra": "254923 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "254923 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 336.4,
            "unit": "ns/op",
            "extra": "3745218 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3745218 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3745218 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 293.4,
            "unit": "ns/op",
            "extra": "3988657 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3988657 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3988657 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 286.6,
            "unit": "ns/op",
            "extra": "4016332 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4016332 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4016332 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 555.9,
            "unit": "ns/op",
            "extra": "2180671 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2180671 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2180671 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 273.6,
            "unit": "ns/op",
            "extra": "4109030 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "4109030 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4109030 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 870.1,
            "unit": "ns/op",
            "extra": "1375514 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1375514 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1375514 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 929.4,
            "unit": "ns/op",
            "extra": "1334289 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1334289 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1334289 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 953.4,
            "unit": "ns/op",
            "extra": "1226716 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1226716 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1226716 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 931.9,
            "unit": "ns/op",
            "extra": "1295552 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1295552 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1295552 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1174,
            "unit": "ns/op",
            "extra": "1002277 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 185,
            "unit": "B/op",
            "extra": "1002277 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1002277 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 2058,
            "unit": "ns/op",
            "extra": "689080 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 429,
            "unit": "B/op",
            "extra": "689080 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "689080 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 903.3,
            "unit": "ns/op",
            "extra": "1345813 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1345813 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1345813 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1061,
            "unit": "ns/op",
            "extra": "1069239 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1069239 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1069239 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2045,
            "unit": "ns/op",
            "extra": "566187 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 295,
            "unit": "B/op",
            "extra": "566187 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "566187 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 27.89,
            "unit": "ns/op",
            "extra": "42552937 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42552937 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42552937 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 6043,
            "unit": "ns/op",
            "extra": "183084 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "183084 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "183084 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8914,
            "unit": "ns/op",
            "extra": "134636 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2034,
            "unit": "B/op",
            "extra": "134636 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "134636 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 80343,
            "unit": "ns/op",
            "extra": "14985 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20001,
            "unit": "B/op",
            "extra": "14985 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "14985 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 900198,
            "unit": "ns/op",
            "extra": "1269 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191173,
            "unit": "B/op",
            "extra": "1269 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "1269 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10880860,
            "unit": "ns/op",
            "extra": "106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1902619,
            "unit": "B/op",
            "extra": "106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48256,
            "unit": "allocs/op",
            "extra": "106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 98392,
            "unit": "ns/op",
            "extra": "12630 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20070,
            "unit": "B/op",
            "extra": "12630 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12630 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 959712,
            "unit": "ns/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194565,
            "unit": "B/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 11485575,
            "unit": "ns/op",
            "extra": "103 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1951782,
            "unit": "B/op",
            "extra": "103 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61086,
            "unit": "allocs/op",
            "extra": "103 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7570,
            "unit": "ns/op",
            "extra": "144052 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "144052 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "144052 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8216,
            "unit": "ns/op",
            "extra": "142383 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1804,
            "unit": "B/op",
            "extra": "142383 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "142383 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4485,
            "unit": "ns/op",
            "extra": "276777 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "276777 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "276777 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5987425,
            "unit": "ns/op",
            "extra": "199 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1304069,
            "unit": "B/op",
            "extra": "199 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "199 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9685,
            "unit": "ns/op",
            "extra": "119977 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3022,
            "unit": "B/op",
            "extra": "119977 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "119977 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 11609,
            "unit": "ns/op",
            "extra": "95944 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2443,
            "unit": "B/op",
            "extra": "95944 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "95944 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6815,
            "unit": "ns/op",
            "extra": "175168 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "175168 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "175168 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 37284,
            "unit": "ns/op",
            "extra": "32294 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16597,
            "unit": "B/op",
            "extra": "32294 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "32294 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 129415,
            "unit": "ns/op",
            "extra": "8169 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "8169 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "8169 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1376041,
            "unit": "ns/op",
            "extra": "861 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "861 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "861 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 16883887,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349925,
            "unit": "B/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9762051980,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285639576,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60930573,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 271622781,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139520934,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670231,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 10281894227,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423061712,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541148,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 16586,
            "unit": "ns/op",
            "extra": "72436 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7538,
            "unit": "B/op",
            "extra": "72436 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "72436 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 892.6,
            "unit": "ns/op",
            "extra": "1334166 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1334166 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1334166 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 16444,
            "unit": "ns/op",
            "extra": "72883 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "72883 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "72883 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "ae1a9341510d705722374e4e0961e94f931f9977",
          "message": "feat: add g rules to CasbinJsGetPermissionForUser()",
          "timestamp": "2023-08-14T18:59:57+08:00",
          "tree_id": "bab49b95d6bb014726053b5cdfcbf6956ac3bdb0",
          "url": "https://github.com/Mu-L/casbin/commit/ae1a9341510d705722374e4e0961e94f931f9977"
        },
        "date": 1692050299887,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.95,
            "unit": "ns/op",
            "extra": "57215230 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57215230 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57215230 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 210.1,
            "unit": "ns/op",
            "extra": "5720330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5720330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5720330 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 213.5,
            "unit": "ns/op",
            "extra": "5642600 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5642600 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5642600 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 226.2,
            "unit": "ns/op",
            "extra": "5038932 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5038932 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5038932 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 226.3,
            "unit": "ns/op",
            "extra": "5178997 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5178997 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5178997 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 221.3,
            "unit": "ns/op",
            "extra": "4950200 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "4950200 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4950200 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 211.1,
            "unit": "ns/op",
            "extra": "5646078 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5646078 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5646078 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 241.8,
            "unit": "ns/op",
            "extra": "5031243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5031243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5031243 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3809,
            "unit": "ns/op",
            "extra": "302274 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1524,
            "unit": "B/op",
            "extra": "302274 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "302274 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 239.6,
            "unit": "ns/op",
            "extra": "4945322 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4945322 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4945322 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 213.5,
            "unit": "ns/op",
            "extra": "5635164 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5635164 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5635164 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 215.4,
            "unit": "ns/op",
            "extra": "5681332 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5681332 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5681332 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 435.8,
            "unit": "ns/op",
            "extra": "2445489 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2445489 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2445489 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 252.1,
            "unit": "ns/op",
            "extra": "5277693 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5277693 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5277693 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 676.8,
            "unit": "ns/op",
            "extra": "1777744 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1777744 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1777744 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 709.9,
            "unit": "ns/op",
            "extra": "1690558 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1690558 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1690558 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 753.1,
            "unit": "ns/op",
            "extra": "1604085 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1604085 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1604085 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 677.4,
            "unit": "ns/op",
            "extra": "1763109 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1763109 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1763109 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 883.6,
            "unit": "ns/op",
            "extra": "1348153 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1348153 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1348153 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1594,
            "unit": "ns/op",
            "extra": "916554 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 467,
            "unit": "B/op",
            "extra": "916554 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "916554 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 690,
            "unit": "ns/op",
            "extra": "1717210 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1717210 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1717210 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 803.1,
            "unit": "ns/op",
            "extra": "1430388 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1430388 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1430388 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1607,
            "unit": "ns/op",
            "extra": "743187 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 301,
            "unit": "B/op",
            "extra": "743187 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "743187 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.9,
            "unit": "ns/op",
            "extra": "57310369 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57310369 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57310369 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4763,
            "unit": "ns/op",
            "extra": "249000 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1493,
            "unit": "B/op",
            "extra": "249000 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "249000 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7152,
            "unit": "ns/op",
            "extra": "165468 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2040,
            "unit": "B/op",
            "extra": "165468 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "165468 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 66254,
            "unit": "ns/op",
            "extra": "17952 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19982,
            "unit": "B/op",
            "extra": "17952 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "17952 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 658528,
            "unit": "ns/op",
            "extra": "1816 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191417,
            "unit": "B/op",
            "extra": "1816 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1816 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7831179,
            "unit": "ns/op",
            "extra": "152 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1896705,
            "unit": "B/op",
            "extra": "152 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48097,
            "unit": "allocs/op",
            "extra": "152 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 80361,
            "unit": "ns/op",
            "extra": "15286 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20066,
            "unit": "B/op",
            "extra": "15286 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15286 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 767046,
            "unit": "ns/op",
            "extra": "1447 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194368,
            "unit": "B/op",
            "extra": "1447 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1447 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8811698,
            "unit": "ns/op",
            "extra": "128 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1946927,
            "unit": "B/op",
            "extra": "128 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60877,
            "unit": "allocs/op",
            "extra": "128 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6128,
            "unit": "ns/op",
            "extra": "184383 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1823,
            "unit": "B/op",
            "extra": "184383 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "184383 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6739,
            "unit": "ns/op",
            "extra": "170925 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1806,
            "unit": "B/op",
            "extra": "170925 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "170925 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3717,
            "unit": "ns/op",
            "extra": "316518 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1516,
            "unit": "B/op",
            "extra": "316518 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "316518 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5271170,
            "unit": "ns/op",
            "extra": "228 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1305363,
            "unit": "B/op",
            "extra": "228 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "228 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7775,
            "unit": "ns/op",
            "extra": "151806 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3031,
            "unit": "B/op",
            "extra": "151806 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "151806 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9251,
            "unit": "ns/op",
            "extra": "129964 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2453,
            "unit": "B/op",
            "extra": "129964 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "129964 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5474,
            "unit": "ns/op",
            "extra": "211926 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1743,
            "unit": "B/op",
            "extra": "211926 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "211926 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 28846,
            "unit": "ns/op",
            "extra": "43544 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16628,
            "unit": "B/op",
            "extra": "43544 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "43544 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 105041,
            "unit": "ns/op",
            "extra": "9950 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9950 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9950 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1088116,
            "unit": "ns/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1064 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14415354,
            "unit": "ns/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349922,
            "unit": "B/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "80 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7624971068,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5300442872,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60933577,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 208647549,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139872715,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670300,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7857034656,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5436590160,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62543872,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13433,
            "unit": "ns/op",
            "extra": "89157 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7552,
            "unit": "B/op",
            "extra": "89157 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "89157 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 724.8,
            "unit": "ns/op",
            "extra": "1650175 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1650175 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1650175 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13099,
            "unit": "ns/op",
            "extra": "90459 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7547,
            "unit": "B/op",
            "extra": "90459 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "90459 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "c907b9054e5a179fe7d1f64b3003837de3969bcc",
          "message": "Improve README table",
          "timestamp": "2023-09-25T19:23:35+08:00",
          "tree_id": "aa1f53a4ef1150c4d74263b08901cdfd8753e3da",
          "url": "https://github.com/Mu-L/casbin/commit/c907b9054e5a179fe7d1f64b3003837de3969bcc"
        },
        "date": 1698301270151,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 24.6,
            "unit": "ns/op",
            "extra": "46565568 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46565568 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46565568 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 297.1,
            "unit": "ns/op",
            "extra": "4204160 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4204160 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4204160 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 291.1,
            "unit": "ns/op",
            "extra": "4211792 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4211792 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4211792 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 288.2,
            "unit": "ns/op",
            "extra": "4111390 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4111390 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4111390 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 305.3,
            "unit": "ns/op",
            "extra": "4206747 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4206747 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4206747 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 268.5,
            "unit": "ns/op",
            "extra": "4321833 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4321833 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4321833 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 286.1,
            "unit": "ns/op",
            "extra": "4142466 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4142466 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4142466 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 310.6,
            "unit": "ns/op",
            "extra": "3886216 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3886216 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3886216 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4357,
            "unit": "ns/op",
            "extra": "250360 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1523,
            "unit": "B/op",
            "extra": "250360 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "250360 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 324.5,
            "unit": "ns/op",
            "extra": "3847837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3847837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3847837 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 299.5,
            "unit": "ns/op",
            "extra": "4033407 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4033407 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4033407 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 287.9,
            "unit": "ns/op",
            "extra": "4145178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4145178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4145178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 550.6,
            "unit": "ns/op",
            "extra": "2188794 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2188794 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2188794 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 281.4,
            "unit": "ns/op",
            "extra": "3864447 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "3864447 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3864447 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 837.1,
            "unit": "ns/op",
            "extra": "1377531 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1377531 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1377531 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 899.2,
            "unit": "ns/op",
            "extra": "1310838 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1310838 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1310838 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 947.2,
            "unit": "ns/op",
            "extra": "1245740 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1245740 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1245740 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 910.3,
            "unit": "ns/op",
            "extra": "1266914 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1266914 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1266914 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1171,
            "unit": "ns/op",
            "extra": "1005256 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 185,
            "unit": "B/op",
            "extra": "1005256 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1005256 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1929,
            "unit": "ns/op",
            "extra": "726928 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 418,
            "unit": "B/op",
            "extra": "726928 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "726928 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 883.1,
            "unit": "ns/op",
            "extra": "1374170 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1374170 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1374170 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1071,
            "unit": "ns/op",
            "extra": "1005426 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 180,
            "unit": "B/op",
            "extra": "1005426 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "1005426 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2448,
            "unit": "ns/op",
            "extra": "632960 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 298,
            "unit": "B/op",
            "extra": "632960 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "632960 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.38,
            "unit": "ns/op",
            "extra": "45350587 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45350587 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45350587 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5827,
            "unit": "ns/op",
            "extra": "208196 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "208196 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "208196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8772,
            "unit": "ns/op",
            "extra": "135253 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "135253 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "135253 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 81241,
            "unit": "ns/op",
            "extra": "14530 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19970,
            "unit": "B/op",
            "extra": "14530 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "14530 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 938930,
            "unit": "ns/op",
            "extra": "1285 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191196,
            "unit": "B/op",
            "extra": "1285 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1285 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10462733,
            "unit": "ns/op",
            "extra": "124 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1905829,
            "unit": "B/op",
            "extra": "124 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48339,
            "unit": "allocs/op",
            "extra": "124 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 98799,
            "unit": "ns/op",
            "extra": "12680 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20047,
            "unit": "B/op",
            "extra": "12680 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12680 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 941190,
            "unit": "ns/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194302,
            "unit": "B/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 11203021,
            "unit": "ns/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1952061,
            "unit": "B/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61097,
            "unit": "allocs/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7250,
            "unit": "ns/op",
            "extra": "160083 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "160083 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "160083 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8121,
            "unit": "ns/op",
            "extra": "148941 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1805,
            "unit": "B/op",
            "extra": "148941 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "148941 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4404,
            "unit": "ns/op",
            "extra": "266800 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "266800 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "266800 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5574299,
            "unit": "ns/op",
            "extra": "213 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303733,
            "unit": "B/op",
            "extra": "213 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "213 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9257,
            "unit": "ns/op",
            "extra": "127116 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3021,
            "unit": "B/op",
            "extra": "127116 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "127116 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 10830,
            "unit": "ns/op",
            "extra": "111408 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2443,
            "unit": "B/op",
            "extra": "111408 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "111408 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6358,
            "unit": "ns/op",
            "extra": "190441 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1740,
            "unit": "B/op",
            "extra": "190441 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "190441 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 37886,
            "unit": "ns/op",
            "extra": "30792 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16596,
            "unit": "B/op",
            "extra": "30792 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "30792 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 124592,
            "unit": "ns/op",
            "extra": "9046 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9046 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9046 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1279647,
            "unit": "ns/op",
            "extra": "884 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "884 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "884 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 17233265,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349923,
            "unit": "B/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9789698226,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285941776,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60936730,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 275212188,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139760530,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676182,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 10370154461,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423347008,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62547180,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 16322,
            "unit": "ns/op",
            "extra": "74992 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7538,
            "unit": "B/op",
            "extra": "74992 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "74992 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 918.3,
            "unit": "ns/op",
            "extra": "1335754 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1335754 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1335754 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 15833,
            "unit": "ns/op",
            "extra": "71450 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "71450 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "71450 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "17becaef6cfd033a07874fce1ade4953e6ead8b5",
          "message": "Remove PerformancePR.yml for security issue",
          "timestamp": "2023-10-30T14:05:45+08:00",
          "tree_id": "0c6d6373c498a1bfc104886cb2eeb041767416f3",
          "url": "https://github.com/Mu-L/casbin/commit/17becaef6cfd033a07874fce1ade4953e6ead8b5"
        },
        "date": 1698779620771,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.58,
            "unit": "ns/op",
            "extra": "68051282 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68051282 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68051282 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 169.4,
            "unit": "ns/op",
            "extra": "7009005 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7009005 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7009005 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 169.2,
            "unit": "ns/op",
            "extra": "7062351 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7062351 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7062351 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 185.6,
            "unit": "ns/op",
            "extra": "6321132 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6321132 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6321132 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 192.5,
            "unit": "ns/op",
            "extra": "6210141 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6210141 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6210141 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 171.5,
            "unit": "ns/op",
            "extra": "6772969 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "6772969 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6772969 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 170.4,
            "unit": "ns/op",
            "extra": "6397760 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6397760 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6397760 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 181.4,
            "unit": "ns/op",
            "extra": "6594688 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6594688 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6594688 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2947,
            "unit": "ns/op",
            "extra": "399709 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1543,
            "unit": "B/op",
            "extra": "399709 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "399709 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 185.7,
            "unit": "ns/op",
            "extra": "6393223 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6393223 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6393223 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 170.2,
            "unit": "ns/op",
            "extra": "6969544 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6969544 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6969544 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 173.2,
            "unit": "ns/op",
            "extra": "6862086 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6862086 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6862086 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 306.7,
            "unit": "ns/op",
            "extra": "3926586 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3926586 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3926586 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 121.4,
            "unit": "ns/op",
            "extra": "9695961 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "9695961 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9695961 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 453.5,
            "unit": "ns/op",
            "extra": "2629918 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2629918 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2629918 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 477.8,
            "unit": "ns/op",
            "extra": "2468580 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2468580 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2468580 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 502.9,
            "unit": "ns/op",
            "extra": "2392952 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2392952 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2392952 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 498.6,
            "unit": "ns/op",
            "extra": "2415444 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2415444 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2415444 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 551.9,
            "unit": "ns/op",
            "extra": "2092431 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2092431 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2092431 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1180,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 475.3,
            "unit": "ns/op",
            "extra": "2539470 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2539470 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2539470 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 535.8,
            "unit": "ns/op",
            "extra": "2087887 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2087887 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2087887 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1175,
            "unit": "ns/op",
            "extra": "1092402 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 278,
            "unit": "B/op",
            "extra": "1092402 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1092402 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.65,
            "unit": "ns/op",
            "extra": "68196375 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68196375 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68196375 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3695,
            "unit": "ns/op",
            "extra": "313848 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1509,
            "unit": "B/op",
            "extra": "313848 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "313848 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5523,
            "unit": "ns/op",
            "extra": "213679 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2066,
            "unit": "B/op",
            "extra": "213679 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "213679 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 47911,
            "unit": "ns/op",
            "extra": "24894 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20234,
            "unit": "B/op",
            "extra": "24894 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "24894 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 491856,
            "unit": "ns/op",
            "extra": "2455 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191685,
            "unit": "B/op",
            "extra": "2455 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4830,
            "unit": "allocs/op",
            "extra": "2455 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5257684,
            "unit": "ns/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1902114,
            "unit": "B/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48229,
            "unit": "allocs/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 59036,
            "unit": "ns/op",
            "extra": "20744 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20339,
            "unit": "B/op",
            "extra": "20744 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20744 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 552023,
            "unit": "ns/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194710,
            "unit": "B/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6020,
            "unit": "allocs/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5983073,
            "unit": "ns/op",
            "extra": "192 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1940294,
            "unit": "B/op",
            "extra": "192 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60590,
            "unit": "allocs/op",
            "extra": "192 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4642,
            "unit": "ns/op",
            "extra": "240428 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1842,
            "unit": "B/op",
            "extra": "240428 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "240428 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5226,
            "unit": "ns/op",
            "extra": "230289 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1827,
            "unit": "B/op",
            "extra": "230289 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "230289 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2847,
            "unit": "ns/op",
            "extra": "407331 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1535,
            "unit": "B/op",
            "extra": "407331 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "407331 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3932636,
            "unit": "ns/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1322948,
            "unit": "B/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40091,
            "unit": "allocs/op",
            "extra": "303 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6165,
            "unit": "ns/op",
            "extra": "189163 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3067,
            "unit": "B/op",
            "extra": "189163 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "189163 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6975,
            "unit": "ns/op",
            "extra": "167796 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2477,
            "unit": "B/op",
            "extra": "167796 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "167796 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4320,
            "unit": "ns/op",
            "extra": "273685 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1759,
            "unit": "B/op",
            "extra": "273685 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "273685 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23385,
            "unit": "ns/op",
            "extra": "50647 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16735,
            "unit": "B/op",
            "extra": "50647 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "50647 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 71486,
            "unit": "ns/op",
            "extra": "17024 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "17024 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17024 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 728836,
            "unit": "ns/op",
            "extra": "1670 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125914,
            "unit": "B/op",
            "extra": "1670 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1670 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8275321,
            "unit": "ns/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349926,
            "unit": "B/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6060778744,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5341572472,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60948883,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 165017806,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141279643,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676512,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6240666590,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5478876368,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62559442,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10337,
            "unit": "ns/op",
            "extra": "115676 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7606,
            "unit": "B/op",
            "extra": "115676 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "115676 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 480,
            "unit": "ns/op",
            "extra": "2494893 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2494893 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2494893 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10446,
            "unit": "ns/op",
            "extra": "112220 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7609,
            "unit": "B/op",
            "extra": "112220 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "112220 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "72999113+bartventer@users.noreply.github.com",
            "name": "Bart Venter",
            "username": "bartventer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c66aada23606abd050caa4587f50a14f56c18022",
          "message": "feat: update IEnforcer for missing domain methods (#1350)",
          "timestamp": "2023-12-31T18:32:49+08:00",
          "tree_id": "6c8f25bc648a9f9bfc3a3f7428d1012fb8de8076",
          "url": "https://github.com/Mu-L/casbin/commit/c66aada23606abd050caa4587f50a14f56c18022"
        },
        "date": 1706740015019,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.7,
            "unit": "ns/op",
            "extra": "67928041 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67928041 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67928041 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 164.4,
            "unit": "ns/op",
            "extra": "7257021 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7257021 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7257021 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 167.7,
            "unit": "ns/op",
            "extra": "7109205 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7109205 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7109205 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 170.9,
            "unit": "ns/op",
            "extra": "6809536 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6809536 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6809536 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 177.7,
            "unit": "ns/op",
            "extra": "6475470 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6475470 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6475470 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 162.9,
            "unit": "ns/op",
            "extra": "7073497 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7073497 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7073497 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 165,
            "unit": "ns/op",
            "extra": "7019978 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7019978 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7019978 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 173.9,
            "unit": "ns/op",
            "extra": "6877066 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6877066 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6877066 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2909,
            "unit": "ns/op",
            "extra": "406610 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1540,
            "unit": "B/op",
            "extra": "406610 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "406610 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 180,
            "unit": "ns/op",
            "extra": "6590371 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6590371 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6590371 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 166.2,
            "unit": "ns/op",
            "extra": "7225690 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7225690 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7225690 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 173.9,
            "unit": "ns/op",
            "extra": "7168881 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7168881 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7168881 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 301.7,
            "unit": "ns/op",
            "extra": "3980833 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3980833 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3980833 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 168.7,
            "unit": "ns/op",
            "extra": "7273317 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "7273317 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7273317 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 448.1,
            "unit": "ns/op",
            "extra": "2672954 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2672954 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2672954 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 470.8,
            "unit": "ns/op",
            "extra": "2608827 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2608827 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2608827 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 498.9,
            "unit": "ns/op",
            "extra": "2459593 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2459593 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2459593 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 472.9,
            "unit": "ns/op",
            "extra": "2509963 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2509963 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2509963 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 554.5,
            "unit": "ns/op",
            "extra": "2039696 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2039696 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2039696 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1211,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 471.7,
            "unit": "ns/op",
            "extra": "2620676 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2620676 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2620676 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 512.4,
            "unit": "ns/op",
            "extra": "2215170 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2215170 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2215170 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1163,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 293,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.6,
            "unit": "ns/op",
            "extra": "67608820 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67608820 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67608820 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3637,
            "unit": "ns/op",
            "extra": "328147 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1507,
            "unit": "B/op",
            "extra": "328147 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "328147 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5406,
            "unit": "ns/op",
            "extra": "215869 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2057,
            "unit": "B/op",
            "extra": "215869 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "215869 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 47774,
            "unit": "ns/op",
            "extra": "25130 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20263,
            "unit": "B/op",
            "extra": "25130 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "25130 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 493464,
            "unit": "ns/op",
            "extra": "2461 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191614,
            "unit": "B/op",
            "extra": "2461 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "2461 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5399120,
            "unit": "ns/op",
            "extra": "229 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899579,
            "unit": "B/op",
            "extra": "229 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48173,
            "unit": "allocs/op",
            "extra": "229 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 56503,
            "unit": "ns/op",
            "extra": "20707 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20249,
            "unit": "B/op",
            "extra": "20707 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20707 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 552722,
            "unit": "ns/op",
            "extra": "1909 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194588,
            "unit": "B/op",
            "extra": "1909 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6021,
            "unit": "allocs/op",
            "extra": "1909 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5876372,
            "unit": "ns/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1940715,
            "unit": "B/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60615,
            "unit": "allocs/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4575,
            "unit": "ns/op",
            "extra": "238551 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1844,
            "unit": "B/op",
            "extra": "238551 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "238551 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5040,
            "unit": "ns/op",
            "extra": "231730 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "231730 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "231730 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2842,
            "unit": "ns/op",
            "extra": "406479 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1532,
            "unit": "B/op",
            "extra": "406479 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "406479 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3993917,
            "unit": "ns/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1325128,
            "unit": "B/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6154,
            "unit": "ns/op",
            "extra": "196342 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3064,
            "unit": "B/op",
            "extra": "196342 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "196342 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6825,
            "unit": "ns/op",
            "extra": "173094 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2476,
            "unit": "B/op",
            "extra": "173094 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "173094 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4220,
            "unit": "ns/op",
            "extra": "278076 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1761,
            "unit": "B/op",
            "extra": "278076 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "278076 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23800,
            "unit": "ns/op",
            "extra": "49494 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16733,
            "unit": "B/op",
            "extra": "49494 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "49494 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 69492,
            "unit": "ns/op",
            "extra": "17222 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "17222 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17222 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 737260,
            "unit": "ns/op",
            "extra": "1634 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125914,
            "unit": "B/op",
            "extra": "1634 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1634 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8178621,
            "unit": "ns/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349921,
            "unit": "B/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6118634095,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5341546384,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60949074,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 159783581,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140901149,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676435,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6215347336,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5489726560,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62561520,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10521,
            "unit": "ns/op",
            "extra": "114637 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7611,
            "unit": "B/op",
            "extra": "114637 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "114637 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 494,
            "unit": "ns/op",
            "extra": "2433894 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2433894 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2433894 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10533,
            "unit": "ns/op",
            "extra": "115405 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7608,
            "unit": "B/op",
            "extra": "115405 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "115405 times\n4 procs"
          }
        ]
      }
    ]
  }
}