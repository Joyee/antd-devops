export default {
  'GET /api/apps/52/changes': {
    data: [
      {
        actions: [
          {
            name: 'add-intergration',
            label: '加入集成区',
          },
          {
            name: 'close-change',
            label: '关闭变更',
          },
        ],
        statusText: '开发中',
        gitWebURL:
          'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin/-/tree/feature/v3.6',
        id: 9745,
        creator: '1353251190985920513',
        tenantId: '1369923265280311297',
        appId: 52,
        name: 'v3.6需求',
        status: 'developing',
        masterBranchId: 51,
        branch: 'feature/v3.6',
        projectId: null,
        startCommitId: '61cccb6e64cf2277db002de214aa3641635b7be2',
        endCommitId: null,
        createdAt: '2024-06-24T09:47:57.000Z',
        updatedAt: '2024-06-24T09:47:57.000Z',
        creatorUser: {
          id: 28,
          userId: '1353251190985920513',
          userName: 'QIUXIAOFENG',
          nickName: '邱晓峰',
          mobile: '13520704824',
          email: 'QIUXIAOFENG@ENN.CN',
          empNo: '10100975',
          orgPath: '10000000,10000001,50436871,50428277,50433156',
          orgNames: '新奥/新奥新智/智能平台运营集群/用户体验技术群/前端组',
          postCode: '50387925',
          postName: '信息技术与数字化/软件开发/前端开发/T3',
          deletedAt: null,
          createdAt: '2022-06-15T02:20:32.000Z',
          updatedAt: '2022-12-01T18:12:10.000Z',
        },
        integrationRelations: [
          {
            id: 15470,
            changeId: 9745,
            integrationId: 51,
            commitId: 'd3bb170b98711d643e2070c73ea6f81f32467ddf',
            createdAt: '2024-06-24T09:47:59.000Z',
            updatedAt: '2024-06-26T02:46:38.000Z',
          },
        ],
        masterBranch: {
          id: 51,
          name: 'master',
          app: {
            id: 52,
            name: '分享引擎pc管理系统',
            gitRepo: 'git@gitlab.enncloud.cn:ennew/lizheng_mg/talents/share-engine-admin.git',
          },
          integrations: [
            {
              name: '发布集成',
              id: 51,
            },
            {
              name: '日常集成',
              id: 52,
            },
          ],
        },
        app: {
          id: 52,
        },
      },
    ],
    rows: [],
    actions: [
      {
        name: 'create-change',
        label: '创建变更',
      },
    ],
    count: 1,
  },
  'GET /api/apps/52/git-branches?scene=change-branch&ref=master': [],
  'GET /api/apps/52/master-branches': {
    count: 2,
    data: [
      {
        gitWebURL:
          'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin/-/tree/master',
        id: 51,
        appId: 52,
        domainType: 'common',
        domain: 'air.ennew.com',
        webPath: 'share-engine-admin',
        name: 'master',
        desc: null,
        isMultiVersion: false,
        deployTarget: 'qi',
        deletable: false,
        createdAt: '2022-06-23T04:40:03.000Z',
        updatedAt: '2023-04-03T17:19:55.000Z',
        app: {
          gitWebURL: 'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin',
          gitHTTPURL: 'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin.git',
          gitSSHURL: 'git@gitlab.enncloud.cn:ennew/lizheng_mg/talents/share-engine-admin.git',
          devopsCode: 'share-engine-admin',
          owner: '1353251190985920513',
          id: 52,
          creator: '1353251190985920513',
          appCode: 'share-engine-admin',
          devopsTeamId: '1384698400564376590',
          tenantId: '1369923265280311297',
          name: '分享引擎pc管理系统',
          typeId: 3,
          gitRepo: 'git@gitlab.enncloud.cn:ennew/lizheng_mg/talents/share-engine-admin.git',
          defaultMasterBranch: 'master',
          productId: null,
          isMultiVersion: null,
          isMultiMaster: null,
          templateId: 3,
          desc: 'vite+vue3+ts+ency design 分享引擎后台管理系统',
          deletedAt: null,
          createdAt: '2022-06-23T04:40:03.000Z',
          updatedAt: '2023-12-12T10:08:52.000Z',
        },
        defaultIntegration: {
          id: 51,
          creator: '1353251190985920513',
          tenantId: '1369923265280311297',
          appId: 52,
          name: '发布集成',
          isDefault: true,
          masterBranchId: 51,
          flowName: 'Air应用FAT-PRO流程\n',
          flowKey: '3',
          flowInstanceId: '802048',
          deployBranch: 'deploy/master-2024-06-24-09-48-01-081Z',
          context: {
            targetInfo: {
              FAT: {
                url: 'https://build-product.obsv3.cn-lflt-1.enncloud.cn/resource/2024/06/26/57586c06-c349-4824-ac2a-9330e15f7669.tgz',
                version: '0.0.212',
                commitId: 'd3bb170b98711d643e2070c73ea6f81f32467ddf',
              },
            },
            deployCommitId: 'd3bb170b98711d643e2070c73ea6f81f32467ddf',
            deployVersions: {
              FAT: {
                version: '0.0.212',
                deployAt: 1719370453840,
                isDeploy: true,
                grayscale: 1,
              },
              PRO: {
                version: '0.0.211',
                deployAt: 1718184860414,
                isDeploy: true,
                grayscale: 1,
              },
              UAT: {
                version: '0.0.186',
                deployAt: 1714295165252,
                isDeploy: true,
                grayscale: 1,
              },
            },
          },
          createdAt: '2022-06-23T04:40:03.000Z',
          updatedAt: '2024-06-26T02:54:13.000Z',
        },
        integrations: [
          {
            id: 51,
            creator: '1353251190985920513',
            tenantId: '1369923265280311297',
            appId: 52,
            name: '发布集成',
            isDefault: true,
            masterBranchId: 51,
            flowName: 'Air应用FAT-PRO流程\n',
            flowKey: '3',
            flowInstanceId: '802048',
            deployBranch: 'deploy/master-2024-06-24-09-48-01-081Z',
            context: {
              targetInfo: {
                FAT: {
                  url: 'https://build-product.obsv3.cn-lflt-1.enncloud.cn/resource/2024/06/26/57586c06-c349-4824-ac2a-9330e15f7669.tgz',
                  version: '0.0.212',
                  commitId: 'd3bb170b98711d643e2070c73ea6f81f32467ddf',
                },
              },
              deployCommitId: 'd3bb170b98711d643e2070c73ea6f81f32467ddf',
              deployVersions: {
                FAT: {
                  version: '0.0.212',
                  deployAt: 1719370453840,
                  isDeploy: true,
                  grayscale: 1,
                },
                PRO: {
                  version: '0.0.211',
                  deployAt: 1718184860414,
                  isDeploy: true,
                  grayscale: 1,
                },
                UAT: {
                  version: '0.0.186',
                  deployAt: 1714295165252,
                  isDeploy: true,
                  grayscale: 1,
                },
              },
            },
            createdAt: '2022-06-23T04:40:03.000Z',
            updatedAt: '2024-06-26T02:54:13.000Z',
          },
          {
            id: 52,
            creator: '1353251190985920513',
            tenantId: '1369923265280311297',
            appId: 52,
            name: '日常集成',
            isDefault: false,
            masterBranchId: 51,
            flowName: '日常部署',
            flowKey: '2',
            flowInstanceId: '',
            deployBranch: '',
            context: {
              targetInfo: {
                DEV: {
                  url: 'https://build-product.obsv3.cn-lflt-1.enncloud.cn/resource/2024/04/09/05da6397-4493-40ab-b0e5-043a8be60fa5.tgz',
                  version: '0.0.185',
                  commitId: 'fb7ad8566cc13c5b12e75830c74fad6d8c1aa5c3',
                },
              },
              deployCommitId: 'fb7ad8566cc13c5b12e75830c74fad6d8c1aa5c3',
              deployVersions: {
                DEV: {
                  version: '0.0.185',
                  deployAt: 1712649350755,
                  isDeploy: true,
                  grayscale: 1,
                },
              },
            },
            createdAt: '2022-06-23T04:40:03.000Z',
            updatedAt: '2024-04-28T10:12:53.000Z',
          },
        ],
        actions: [
          {
            name: 'add-integration',
            label: '添加集成区',
            description: '添加集成区',
          },
        ],
      },
    ],
    rows: [],
    actions: [],
  },
  'GET /api/master-branches/51/integrations': {
    data: [
      {
        id: 51,
        creator: '1353251190985920513',
        tenantId: '1369923265280311297',
        appId: 52,
        name: '发布集成',
        isDefault: true,
        masterBranchId: 51,
        flowName: 'Air应用FAT-PRO流程\n',
        flowKey: '3',
        flowInstanceId: '804207',
        deployBranch: 'deploy/master-2024-06-24-09-48-01-081Z',
        context: {
          targetInfo: {
            FAT: {
              url: 'https://build-product.obsv3.cn-lflt-1.enncloud.cn/resource/2024/06/27/8318c7de-6634-4031-8804-d37a82a7981b.tgz',
              version: '0.0.212',
              commitId: 'd35011b02d5650d43be083905332410d1205b537',
            },
          },
          deployCommitId: 'd35011b02d5650d43be083905332410d1205b537',
          deployVersions: {
            FAT: {
              version: '0.0.212',
              deployAt: 1719453398975,
              isDeploy: true,
              grayscale: 1,
            },
            PRO: {
              version: '0.0.211',
              deployAt: 1718184860414,
              isDeploy: true,
              grayscale: 1,
            },
            UAT: {
              version: '0.0.186',
              deployAt: 1714295165252,
              isDeploy: true,
              grayscale: 1,
            },
          },
        },
        createdAt: '2022-06-23T04:40:03.000Z',
        updatedAt: '2024-06-27T01:56:38.000Z',
        changes: [
          {
            id: 15470,
            changeId: 9745,
            integrationId: 51,
            commitId: 'd35011b02d5650d43be083905332410d1205b537',
            createdAt: '2024-06-24T09:47:59.000Z',
            updatedAt: '2024-06-27T01:48:53.000Z',
            change: {
              statusText: '开发中',
              gitWebURL:
                'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin/-/tree/feature/v3.6',
              id: 9745,
              creator: '1353251190985920513',
              tenantId: '1369923265280311297',
              appId: 52,
              name: 'v3.6需求',
              status: 'developing',
              masterBranchId: 51,
              branch: 'feature/v3.6',
              projectId: null,
              startCommitId: '61cccb6e64cf2277db002de214aa3641635b7be2',
              endCommitId: null,
              createdAt: '2024-06-24T09:47:57.000Z',
              updatedAt: '2024-06-24T09:47:57.000Z',
              app: {
                gitWebURL: 'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin',
                id: 52,
                gitRepo: 'git@gitlab.enncloud.cn:ennew/lizheng_mg/talents/share-engine-admin.git',
              },
              creatorUser: {
                userId: '1353251190985920513',
                userName: 'QIUXIAOFENG',
                nickName: '邱晓峰',
                mobile: '13520704824',
              },
            },
            actions: [
              {
                name: 'quit-integration',
                label: '退出集成区',
                description: '退出集成区',
              },
            ],
          },
        ],
        app: {
          gitWebURL: 'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin',
          gitHTTPURL: 'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin.git',
          name: '分享引擎pc管理系统',
          gitRepo: 'git@gitlab.enncloud.cn:ennew/lizheng_mg/talents/share-engine-admin.git',
        },
      },
      {
        id: 52,
        creator: '1353251190985920513',
        tenantId: '1369923265280311297',
        appId: 52,
        name: '日常集成',
        isDefault: false,
        masterBranchId: 51,
        flowName: '日常部署',
        flowKey: '2',
        flowInstanceId: '',
        deployBranch: '',
        context: {
          targetInfo: {
            DEV: {
              url: 'https://build-product.obsv3.cn-lflt-1.enncloud.cn/resource/2024/04/09/05da6397-4493-40ab-b0e5-043a8be60fa5.tgz',
              version: '0.0.185',
              commitId: 'fb7ad8566cc13c5b12e75830c74fad6d8c1aa5c3',
            },
          },
          deployCommitId: 'fb7ad8566cc13c5b12e75830c74fad6d8c1aa5c3',
          deployVersions: {
            DEV: {
              version: '0.0.185',
              deployAt: 1712649350755,
              isDeploy: true,
              grayscale: 1,
            },
          },
        },
        createdAt: '2022-06-23T04:40:03.000Z',
        updatedAt: '2024-04-28T10:12:53.000Z',
        changes: [],
        app: {
          gitWebURL: 'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin',
          gitHTTPURL: 'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin.git',
          name: '分享引擎pc管理系统',
          gitRepo: 'git@gitlab.enncloud.cn:ennew/lizheng_mg/talents/share-engine-admin.git',
        },
      },
    ],
    rows: [],
    count: 2,
    actions: [],
  },
  'GET /api/integrations/52/commits': {
    masterBranch: 'master',
    deployBranch: '',
    commitsMap: {
      master: {
        branchType: 'master',
        id: '61cccb6e64cf2277db002de214aa3641635b7be2',
        short_id: '61cccb6e',
        created_at: '2024-06-12T17:21:14.000+08:00',
        parent_ids: ['05b0054c3bd76731dcdfe048039c131d0c59c4ba'],
        title: 'fix: 审批流配置组织-搜索问题',
        message: 'fix: 审批流配置组织-搜索问题\n',
        author_name: 'qiuxiaofeng',
        author_email: 'qiuxiaofeng@enn.cn',
        authored_date: '2024-06-12T17:21:14.000+08:00',
        committer_name: 'qiuxiaofeng',
        committer_email: 'qiuxiaofeng@enn.cn',
        committed_date: '2024-06-12T17:21:14.000+08:00',
        trailers: {},
        web_url:
          'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin/-/commit/61cccb6e64cf2277db002de214aa3641635b7be2',
        isNewCommit: false,
      },
    },
  },
  'GET /api/integrations/51/commits': {
    masterBranch: 'master',
    deployBranch: 'deploy/master-2024-06-24-09-48-01-081Z',
    commitsMap: {
      master: {
        branchType: 'master',
        id: '61cccb6e64cf2277db002de214aa3641635b7be2',
        short_id: '61cccb6e',
        created_at: '2024-06-12T17:21:14.000+08:00',
        parent_ids: ['05b0054c3bd76731dcdfe048039c131d0c59c4ba'],
        title: 'fix: 审批流配置组织-搜索问题',
        message: 'fix: 审批流配置组织-搜索问题\n',
        author_name: 'qiuxiaofeng',
        author_email: 'qiuxiaofeng@enn.cn',
        authored_date: '2024-06-12T17:21:14.000+08:00',
        committer_name: 'qiuxiaofeng',
        committer_email: 'qiuxiaofeng@enn.cn',
        committed_date: '2024-06-12T17:21:14.000+08:00',
        trailers: {},
        web_url:
          'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin/-/commit/61cccb6e64cf2277db002de214aa3641635b7be2',
        isNewCommit: false,
      },
      'feature/v3.6': {
        deployCommit: 'd35011b02d5650d43be083905332410d1205b537',
        isMergedMaster: true,
        masterBranch: 'master',
        deployBranch: 'deploy/master-2024-06-24-09-48-01-081Z',
        brancheType: 'feature',
        id: 'd35011b02d5650d43be083905332410d1205b537',
        short_id: 'd35011b0',
        created_at: '2024-06-27T09:48:14.000+08:00',
        parent_ids: ['68cbb2f4d7848d0178983bcb5c3550389fa9db01'],
        title: 'feat: 总额追加明细接口联调',
        message: 'feat: 总额追加明细接口联调\n',
        author_name: 'qiuxiaofeng',
        author_email: 'qiuxiaofeng@enn.cn',
        authored_date: '2024-06-27T09:48:14.000+08:00',
        committer_name: 'qiuxiaofeng',
        committer_email: 'qiuxiaofeng@enn.cn',
        committed_date: '2024-06-27T09:48:14.000+08:00',
        trailers: {},
        web_url:
          'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin/-/commit/d35011b02d5650d43be083905332410d1205b537',
        isNewCommit: false,
      },
      'deploy/master-2024-06-24-09-48-01-081Z': {
        brancheType: 'release',
        isMergedMaster: true,
        id: 'd35011b02d5650d43be083905332410d1205b537',
        short_id: 'd35011b0',
        created_at: '2024-06-27T09:48:14.000+08:00',
        parent_ids: ['68cbb2f4d7848d0178983bcb5c3550389fa9db01'],
        title: 'feat: 总额追加明细接口联调',
        message: 'feat: 总额追加明细接口联调\n',
        author_name: 'qiuxiaofeng',
        author_email: 'qiuxiaofeng@enn.cn',
        authored_date: '2024-06-27T09:48:14.000+08:00',
        committer_name: 'qiuxiaofeng',
        committer_email: 'qiuxiaofeng@enn.cn',
        committed_date: '2024-06-27T09:48:14.000+08:00',
        trailers: {},
        web_url:
          'https://gitlab.enncloud.cn/ennew/lizheng_mg/talents/share-engine-admin/-/commit/d35011b02d5650d43be083905332410d1205b537',
        isNewCommit: false,
      },
    },
  },
  'GET /api/process/instance/804207/nodes': {
    current: 1,
    list: [
      {
        id: 0,
        bizCode: '',
        type: 'startEvent',
        state: 'successed',
        label: '开始',
        code: 'start',
        approvers: [],
        startBtnShow: false,
        passBtnShow: false,
        retryBtnShow: false,
        eniginInstId: '',
      },
      {
        id: 807129,
        bizCode: 'INTEGRATION_51_20240628-104228_deployfat',
        type: 'serviceTask',
        state: 'wait_confirmed',
        label: 'FAT部署',
        code: 'deployfat',
        approvers: [],
        executor: '1353251190985920513',
        startBtnShow: false,
        passBtnShow: true,
        retryBtnShow: false,
        pipelineCode: 'air-static-branch-deploy',
        eniginInstId: '0f77fca1-34f8-11ef-b67e-a6b887165b78',
        updatedAt: '2024-06-28T02:50:30.000Z',
      },
      {
        id: 0,
        bizCode: '',
        type: 'userTask',
        state: 'waiting',
        label: '上线审批',
        code: 'proapprove',
        approvers: [],
        startBtnShow: false,
        passBtnShow: false,
        retryBtnShow: false,
        pipelineCode: null,
        eniginInstId: '',
      },
      {
        id: 0,
        bizCode: '',
        type: 'serviceTask',
        state: 'waiting',
        label: '线上部署',
        code: 'deploypro',
        approvers: [],
        startBtnShow: false,
        passBtnShow: false,
        retryBtnShow: false,
        pipelineCode: 'air-static-direct-deploy',
        eniginInstId: '',
      },
      {
        id: 0,
        bizCode: '',
        type: 'serviceTask',
        state: 'waiting',
        label: '关闭变更',
        code: 'close',
        approvers: [],
        startBtnShow: false,
        passBtnShow: false,
        retryBtnShow: false,
        pipelineCode: 'complete-integration',
        eniginInstId: '',
      },
      {
        id: 0,
        bizCode: '',
        type: 'endEvent',
        state: 'waiting',
        label: '结束',
        code: 'endNode',
        approvers: [],
        startBtnShow: false,
        passBtnShow: false,
        retryBtnShow: false,
        eniginInstId: '',
      },
    ],
    state: 'wait_confirmed',
    processInstance: {
      id: 807128,
      definitionId: 3,
      pid: null,
      bizCode: 'INTEGRATION_51_20240628-104228',
      state: 'wait_confirmed',
      type: 'PROCESS',
      startTime: '2024-06-28T02:42:28.000Z',
      endTime: null,
      reqContext: {
        __pk: 51,
        __ecs: [
          {
            name: 'tenant',
            type: 'service',
            value: '1369923265280311297',
          },
          {
            name: 'app',
            type: 'service',
            value: 52,
          },
          {
            name: 'integration',
            type: 'service',
            value: 51,
          },
          {
            name: 'process',
            type: 'instance',
            value: 807128,
          },
        ],
        __psp: 'integration',
        __tsc: ['INTEGRATION.51', 'PROCESS.3'],
        engine: 'rdfa-bp',
        tester: ['1347168972152705025', '1353251190985920513', '1386273874624548866'],
        bizCode: 'INTEGRATION_51_20240628-104228',
        defCode: 'flow_v2_fat_pro',
        EPDefCode: 'flow_v2_fat_pro',
        developer: [
          '1347167872116047873',
          '1347168972152705025',
          '1353251190985920513',
          '1386273874624548866',
          '1390924435315658754',
          '1391362394477203458',
          '1432387730073358337',
          '1437461137399910402',
          '1440360216018718722',
          '1455218084243292162',
          '1475149423694893057',
          '1519723661976715265',
        ],
        defUpdateAt: '2023-03-16T18:41:45.000Z',
        ownerDefCode: 51,
        EPStartUserID: '1353251190985920513',
        __taskOwnerCodeContext: {
          appId: 52,
          bizDomainId: '1384698400564376590',
          processDefId: 3,
          integrationId: 51,
        },
      },
      resContext: {
        state: 'wait_confirmed',
        bizCode: 'INTEGRATION_51_20240628-104228',
        defCode: 'flow_v2_fat_pro',
        version: '0.0.212',
        targetURL:
          'https://build-product.obsv3.cn-lflt-1.enncloud.cn/resource/2024/06/28/0ac2addf-8c36-4d64-b894-2772e43747e0.tgz',
        EPInstanceId: '0f77fc8c-34f8-11ef-b67e-a6b887165b78',
        buildVersion: '0.0.212-beta-062851042',
        latestApprover: '1353251190985920513',
        isBuiltResultChecked: true,
        isBuildOnceDeployAnywhere: false,
        isSupportBuildOnceDeployAnywhere: true,
      },
      createdAt: '2024-06-28T02:42:28.000Z',
      updatedAt: '2024-06-28T02:50:30.000Z',
    },
  },
  'GET /api/pipeline/instance/INTEGRATION_51_20240628-104228_deployfat-main': {
    id: 807130,
    definitionId: 1,
    pid: 807129,
    bizCode: 'INTEGRATION_51_20240628-104228_deployfat-main',
    state: 'successed',
    type: 'PIPELINE',
    startTime: '2024-06-28T02:42:29.000Z',
    endTime: '2024-06-28T02:50:30.000Z',
    reqContext: {
      __pk: 807129,
      __ecs: [
        {
          name: 'tenant',
          type: 'service',
          value: '1369923265280311297',
        },
        {
          name: 'app',
          type: 'service',
          value: 52,
        },
        {
          name: 'integration',
          type: 'service',
          value: 51,
        },
        {
          name: 'process',
          type: 'instance',
          value: 807128,
        },
        {
          name: 'processNode',
          type: 'instance',
          value: 807129,
        },
      ],
      __psp: 'process/nodeInstance',
      __tsc: ['INTEGRATION.51.fat.main', 'PROCESS.3.fat.main'],
      queue: [
        {
          key: 'deploy-branch-operater',
          name: '分支处理',
          task: 'branch-operater',
        },
        [
          {
            key: 'gold-keeper-code-check',
            name: '代码检查',
            task: 'gold-keeper-code-check',
          },
          {
            key: 'air-static-build',
            name: '构建',
            task: 'air-static-build',
          },
        ],
        {
          key: 'gold-keeper-target-check',
          name: '产物检查',
          task: 'gold-keeper-target-check',
        },
        {
          key: 'air-static-publish',
          name: '代码发布',
          task: 'air-static-publish',
        },
        {
          key: 'air-static-deploy',
          name: '部署',
          task: 'air-static-deploy',
        },
        {
          key: 'gold-keeper-runtime-check',
          name: 'UI自动化',
          task: 'gold-keeper-runtime-check',
          isAsync: true,
        },
      ],
      defCode: 'air-static-branch-deploy',
      pipelineType: 'main',
      __taskOwnerCodeContext: {
        appId: 52,
        bizDomainId: '1384698400564376590',
        nodeBizCode: 'fat',
        pipelineCode: 'air-static-branch-deploy',
        processDefId: 3,
        integrationId: 51,
        pipelinePosition: 'main',
      },
    },
    resContext: {
      space: 'xinzhi-static',
      state: 'successed',
      __ects: ['2024-06-28T02:42:29.319Z'],
      defCode: 'air-static-branch-deploy',
      version: '0.0.212',
      targetURL:
        'https://build-product.obsv3.cn-lflt-1.enncloud.cn/resource/2024/06/28/0ac2addf-8c36-4d64-b894-2772e43747e0.tgz',
      publicPath:
        'https://static.fat.ennew.com/ennew/lizheng_mg/talents/share-engine-admin/master/',
      projectPath: 'ennew/lizheng_mg/talents/share-engine-admin/master',
      buildVersion: '0.0.212-beta-062851042',
      deployBranch: 'deploy/master-2024-06-27-09-01-24-533Z',
      nodeBizCodes: [],
      airManifestURL:
        'https://fe-flow.obsv3.cn-lflt-1.enncloud.cn/fat/qi-version/manifest/air/ennew/lizheng_mg/talents/share-engine-admin/master/0.0.212-beta-062851042.json',
      isMultiVersion: false,
      encyCheckerLevel: '',
      staticManifestURL:
        'https://fe-flow.obsv3.cn-lflt-1.enncloud.cn/fat/qi-version/manifest/static/ennew/lizheng_mg/talents/share-engine-admin/master/0.0.212-beta-062851042.json',
    },
    createdAt: '2024-06-28T02:42:29.000Z',
    updatedAt: '2024-06-28T02:50:30.000Z',
    queue: [
      {
        key: 'deploy-branch-operater',
        name: '分支处理',
        task: 'branch-operater',
        bizCode: 'INTEGRATION_51_20240628-104228_deployfat-main-deploy-branch-operater',
        state: 'successed',
        taskInstanceId: 807131,
        startTime: '2024-06-28T02:42:29.000Z',
        duration: 22000,
      },
      [
        {
          key: 'gold-keeper-code-check',
          name: '代码检查',
          task: 'gold-keeper-code-check',
          bizCode: 'INTEGRATION_51_20240628-104228_deployfat-main-gold-keeper-code-check',
          state: 'successed',
          taskInstanceId: 807132,
          startTime: '2024-06-28T02:42:52.000Z',
          duration: 21000,
        },
        {
          key: 'air-static-build',
          name: '构建',
          task: 'air-static-build',
          bizCode: 'INTEGRATION_51_20240628-104228_deployfat-main-air-static-build',
          state: 'successed',
          taskInstanceId: 807133,
          startTime: '2024-06-28T02:42:52.000Z',
          duration: 406000,
        },
      ],
      {
        key: 'gold-keeper-target-check',
        name: '产物检查',
        task: 'gold-keeper-target-check',
        bizCode: 'INTEGRATION_51_20240628-104228_deployfat-main-gold-keeper-target-check',
        state: 'successed',
        taskInstanceId: 807151,
        startTime: '2024-06-28T02:49:39.000Z',
        duration: 9000,
      },
      {
        key: 'air-static-publish',
        name: '代码发布',
        task: 'air-static-publish',
        bizCode: 'INTEGRATION_51_20240628-104228_deployfat-main-air-static-publish',
        state: 'successed',
        taskInstanceId: 807152,
        startTime: '2024-06-28T02:49:48.000Z',
        duration: 25000,
      },
      {
        key: 'air-static-deploy',
        name: '部署',
        task: 'air-static-deploy',
        bizCode: 'INTEGRATION_51_20240628-104228_deployfat-main-air-static-deploy',
        state: 'successed',
        taskInstanceId: 807153,
        startTime: '2024-06-28T02:50:13.000Z',
        duration: 16000,
      },
      {
        key: 'gold-keeper-runtime-check',
        name: 'UI自动化',
        task: 'gold-keeper-runtime-check',
        isAsync: true,
        bizCode: 'INTEGRATION_51_20240628-104228_deployfat-main-gold-keeper-runtime-check',
        state: 'failed',
        taskInstanceId: 807154,
        startTime: '2024-06-28T02:50:30.000Z',
        duration: 16000,
      },
    ],
    currentItemKey: 'gold-keeper-runtime-check',
    currentIndex: 5,
  },
  'GET /api/process/node-instance/807129': {
    id: 807129,
    definitionId: 7,
    pid: 807128,
    bizCode: 'INTEGRATION_51_20240628-104228_deployfat',
    state: 'wait_confirmed',
    type: 'PROCESS_NODE',
    startTime: '2024-06-28T02:42:29.000Z',
    endTime: null,
    reqContext: {
      ENV: 'FAT',
      __dt: {
        type: 'tasks',
        value: [
          {
            key: 'record-release-log',
            task: 'record-release-log',
            triggerState: ['wait_confirmed', 'failed'],
          },
        ],
      },
      __pk: 807128,
      __pl: 'air-static-branch-deploy',
      __st: null,
      type: 'service',
      __ecs: [
        {
          name: 'tenant',
          type: 'service',
          value: '1369923265280311297',
        },
        {
          name: 'app',
          type: 'service',
          value: 52,
        },
        {
          name: 'integration',
          type: 'service',
          value: 51,
        },
        {
          name: 'process',
          type: 'instance',
          value: 807128,
        },
      ],
      __pdk: 3,
      __psp: 'process/instance',
      __tsc: ['INTEGRATION.51', 'PROCESS.3'],
      engine: 'rdfa-bp',
      bizCode: 'fat',
      defCode: 'deployfat',
      preCode: 'start',
      executor: '1353251190985920513',
      EPDefCode: 'deployfat',
      ownerCode: 'flow_v2_fat_pro',
      callbackPath:
        'http://rdfa-bp-web.ennewi.cn/workflow/bp/callback_active?BP_TENANT_ID=1369923265280311297&BP_PROCESS_INST_ID=0f77fc8c-34f8-11ef-b67e-a6b887165b78&BP_TASK_DEF_KEY=deployfat&BP_TASK_INST_ID=0f77fca1-34f8-11ef-b67e-a6b887165b78',
      EPStartUserID: '1353251190985920513',
      approverRoles: [],
      executorRoles: null,
      EPNodeInstanceId: '0f77fca1-34f8-11ef-b67e-a6b887165b78',
      __taskOwnerCodeContext: {
        appId: 52,
        bizDomainId: '1384698400564376590',
        processDefId: 3,
        integrationId: 51,
      },
    },
    resContext: {
      space: 'xinzhi-static',
      state: 'wait_confirmed',
      airURL: 'https://air.fat.ennew.com/share-engine-admin',
      bizCode: 'fat',
      defCode: 'deployfat',
      deployList: [
        {
          path: 'share-engine-admin',
          isCDN: false,
          state: 'online',
          domain: 'air.fat.ennew.com',
        },
      ],
      enpmDistTag: 'latest',
      projectPath: 'ennew/lizheng_mg/talents/share-engine-admin/master',
      buildVersion: '0.0.212-beta-062851042',
      enpmPrereleaseIdentifier: '',
    },
    createdAt: '2024-06-28T02:42:29.000Z',
    updatedAt: '2024-06-28T02:50:30.000Z',
    approverUsers: [
      {
        id: 28,
        userId: '1353251190985920513',
        userName: 'QIUXIAOFENG',
        nickName: '邱晓峰',
        mobile: '13520704824',
        email: 'QIUXIAOFENG@ENN.CN',
        empNo: '10100975',
        orgPath: '10000000,10000001,50436871,50428277,50433156',
        orgNames: '新奥/新奥新智/智能平台运营集群/用户体验技术群/前端组',
        postCode: '50387925',
        postName: '信息技术与数字化/软件开发/前端开发/T3',
        deletedAt: null,
        createdAt: '2022-06-15T02:20:32.000Z',
        updatedAt: '2022-12-01T18:12:10.000Z',
      },
      {
        id: 31,
        userId: '1347168972152705025',
        userName: 'LIJINLEI',
        nickName: '李金磊',
        mobile: '13403162090',
        email: 'LIJINLEI@ENN.CN',
        empNo: '10097461',
        orgPath: '10000000,10000001,50436871,50428277,50433156',
        orgNames: '新奥/新奥新智/智能平台运营集群/用户体验技术群/前端组',
        postCode: '50365768',
        postName: '信息技术与数字化/软件开发/前端开发/T3',
        deletedAt: null,
        createdAt: '2022-06-15T06:54:35.000Z',
        updatedAt: '2022-12-01T18:12:10.000Z',
      },
      {
        id: 28,
        userId: '1353251190985920513',
        userName: 'QIUXIAOFENG',
        nickName: '邱晓峰',
        mobile: '13520704824',
        email: 'QIUXIAOFENG@ENN.CN',
        empNo: '10100975',
        orgPath: '10000000,10000001,50436871,50428277,50433156',
        orgNames: '新奥/新奥新智/智能平台运营集群/用户体验技术群/前端组',
        postCode: '50387925',
        postName: '信息技术与数字化/软件开发/前端开发/T3',
        deletedAt: null,
        createdAt: '2022-06-15T02:20:32.000Z',
        updatedAt: '2022-12-01T18:12:10.000Z',
      },
      {
        id: 32,
        userId: '1386273874624548866',
        userName: 'SHENQINGQING',
        nickName: '申青青',
        mobile: '15227760778',
        email: 'SHENQINGQING@ENN.CN',
        empNo: '10104124',
        orgPath: '10000000,10000001,50436871,50428277,50433156',
        orgNames: '新奥/新奥新智/智能平台运营集群/用户体验技术群/前端组',
        postCode: '50394787',
        postName: '信息技术与数字化/软件开发/前端开发/T3',
        deletedAt: null,
        createdAt: '2022-06-15T10:42:00.000Z',
        updatedAt: '2024-06-21T16:01:08.000Z',
      },
    ],
  },
  'GET /api/pipeline/instance/807130/summary': [
    {
      type: 'default',
      value: [
        {
          label: '部署分支',
          value: 'deploy/master-2024-06-27-09-01-24-533Z',
        },
      ],
    },
    {
      type: 'default',
      value: [
        {
          label: '构建产物地址',
          value:
            ' <a href="https://build-product.obsv3.cn-lflt-1.enncloud.cn/resource/2024/06/28/0ac2addf-8c36-4d64-b894-2772e43747e0.tgz" target="_blank">下载</a>',
        },
        {
          label: '构建版本',
          value: '0.0.212-beta-062851042',
        },
      ],
    },
    {
      type: 'default',
      key: 'airURL',
      value: [
        {
          label: 'AIR部署地址',
          value:
            ' <a href="https://air.fat.ennew.com/share-engine-admin" target="_blank">https://air.fat.ennew.com/share-engine-admin</a> ',
        },
      ],
    },
  ],
};
