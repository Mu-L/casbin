window.BENCHMARK_DATA = {
  "lastUpdate": 1687088670567,
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
      }
    ]
  }
}