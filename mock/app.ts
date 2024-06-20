import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

function getApps(req: Request, res: Response) {
  console.log('req.params:', req.params);
  const data = {
    actions: [
      {
        name: 'create',
        description: '添加应用',
      },
    ],
    data: [
      {
        id: 826,
        name: '事项评估管理后台',
        desc: null,
        typeId: 3,
        appCode: 'matter-evaluation-admin',
        lastDeployAt: '2024-06-17T11:53:20.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 1,
          name: 'Ency Design PC (官方) ',
          icon: 'https://res.ennew.com/image/svg%2Bxml/57cf155939da44ef55491a72de7fcc96.svg',
        },
      },
      {
        id: 168,
        name: '评审工具-ICOME-H5',
        desc: null,
        typeId: 3,
        appCode: 'review-tools-mobile',
        lastDeployAt: '2024-06-14T10:14:51.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 52,
        name: '分享引擎pc管理系统',
        desc: 'vite+vue3+ts+ency design 分享引擎后台管理系统',
        typeId: 3,
        appCode: 'share-engine-admin',
        lastDeployAt: '2024-06-12T09:34:20.000Z',
        changeCount: 0,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 3,
          name: 'Frameless PC',
          icon: 'https://oss-statics.icomecloud.com/resource/image/png/558e215fd9e339567440449d48364c9b.webp',
        },
      },
      {
        id: 1123,
        name: '客创一体生态组织',
        desc: '客创一体生态组织',
        typeId: 5,
        appCode: 'organization',
        lastDeployAt: '2024-06-07T08:56:50.000Z',
        changeCount: 1,
        typeDetail: {
          id: 5,
          name: '应用',
          type: 'app',
          parentId: 2,
          icon: 'https://res.ennew.com/image/svg%2Bxml/cb55407b84d59d9176b5e47e7d3b93f9.svg',
        },
        template: {
          id: 7,
          name: 'Ency Design Mobile (官方)',
          icon: 'https://oss-statics.icomecloud.com/resource/image/svg%2Bxml/9a812b052e9e6175a05ad98500360156.svg',
        },
      },
      {
        id: 121,
        name: 'icome运营后台',
        desc: null,
        typeId: 3,
        appCode: 'icome-admin',
        lastDeployAt: '2024-06-04T10:29:40.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 183,
        name: '创值评估-ICOME-H5',
        desc: null,
        typeId: 3,
        appCode: 'icome-mobile-evaluation',
        lastDeployAt: '2024-06-03T13:56:57.000Z',
        changeCount: 2,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 238,
        name: '福利集市-h5',
        desc: null,
        typeId: 3,
        appCode: 'e-mall',
        lastDeployAt: '2024-05-28T10:13:44.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 237,
        name: '福利集市-pc',
        desc: null,
        typeId: 3,
        appCode: 'e-mall-pc',
        lastDeployAt: '2024-05-27T10:18:06.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 1124,
        name: '业务组件库社区',
        desc: '融合内外部组件，可在平台上进行发布和交流，帮助开发者提高效率',
        typeId: 3,
        appCode: 'ency-design-biz-sns',
        lastDeployAt: '2024-05-24T10:02:07.000Z',
        changeCount: 2,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 1,
          name: 'Ency Design PC (官方) ',
          icon: 'https://res.ennew.com/image/svg%2Bxml/57cf155939da44ef55491a72de7fcc96.svg',
        },
      },
      {
        id: 961,
        name: 'ency-design-biz业务组件库',
        desc: 'ency-design-biz业务组件库',
        typeId: 3,
        appCode: 'ency-design-biz',
        lastDeployAt: '2024-05-22T06:11:21.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 63,
        name: 'college-admin-config',
        desc: '大学大后台',
        typeId: 3,
        appCode: 'college-admin-config',
        lastDeployAt: '2024-05-21T06:25:05.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 677,
        name: '生态组织 创值目标820版',
        desc: '生态组织 创值目标820版，产品版本号为2.3.0\n',
        typeId: 3,
        appCode: 'value-creation-goals-for-eo-second',
        lastDeployAt: '2024-05-20T09:53:55.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 1,
          name: 'Ency Design PC (官方) ',
          icon: 'https://res.ennew.com/image/svg%2Bxml/57cf155939da44ef55491a72de7fcc96.svg',
        },
      },
      {
        id: 162,
        name: '评审+自主成长 PC icome',
        desc: 'ICOME PC 客户端评审+自主成长',
        typeId: 3,
        appCode: 'review-pc-icome',
        lastDeployAt: '2024-05-20T07:57:48.000Z',
        changeCount: 0,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 938,
        name: '创值机会-h5',
        desc: null,
        typeId: 5,
        appCode: 'value-creation-chance-h5',
        lastDeployAt: '2024-05-14T09:42:23.000Z',
        changeCount: 0,
        typeDetail: {
          id: 5,
          name: '应用',
          type: 'app',
          parentId: 2,
          icon: 'https://res.ennew.com/image/svg%2Bxml/cb55407b84d59d9176b5e47e7d3b93f9.svg',
        },
        template: {
          id: 7,
          name: 'Ency Design Mobile (官方)',
          icon: 'https://oss-statics.icomecloud.com/resource/image/svg%2Bxml/9a812b052e9e6175a05ad98500360156.svg',
        },
      },
      {
        id: 210,
        name: 'talents-engine-app',
        desc: '分享引擎pc客户端和app端的待办消息、服务跳转地址',
        typeId: 5,
        appCode: 'talents-engine-app',
        lastDeployAt: '2024-05-13T09:39:07.000Z',
        changeCount: 0,
        typeDetail: {
          id: 5,
          name: '应用',
          type: 'app',
          parentId: 2,
          icon: 'https://res.ennew.com/image/svg%2Bxml/cb55407b84d59d9176b5e47e7d3b93f9.svg',
        },
        template: {
          id: 4,
          name: '理正H5模板',
          icon: 'https://oss-statics.icomecloud.com/resource/image/png/1497cb11afdce9dae03982ce500cd1e2.webp',
        },
      },
      {
        id: 678,
        name: '创值机会iCome-PC',
        desc: 'iCome PC端--创值机会',
        typeId: 3,
        appCode: 'value-creation-chance-icome-pc',
        lastDeployAt: '2024-04-29T10:09:57.000Z',
        changeCount: 2,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 1,
          name: 'Ency Design PC (官方) ',
          icon: 'https://res.ennew.com/image/svg%2Bxml/57cf155939da44ef55491a72de7fcc96.svg',
        },
      },
      {
        id: 1128,
        name: '客创一体后台管理系统-外框',
        desc: null,
        typeId: 3,
        appCode: 'open-icome-admin-master',
        lastDeployAt: '2024-04-25T02:25:51.000Z',
        changeCount: 0,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 47,
          name: 'open主应用模板',
          icon: 'https://res.ennew.com/image/png/1077c0e94f0f8462be95dac686982271.png?optimize=true',
        },
      },
      {
        id: 44,
        name: '创值目标ICOME-PC端',
        desc: 'ICOME PC端 --- 创值目标前端项目',
        typeId: 3,
        appCode: 'value-creation-identification-pc',
        lastDeployAt: '2024-04-24T07:30:00.000Z',
        changeCount: 6,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 745,
        name: '创值识别',
        desc: '集成看板和打标等',
        typeId: 3,
        appCode: 'icome-recognition-web',
        lastDeployAt: '2024-04-12T09:50:20.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 5,
          name: '理正PC模板',
          icon: 'https://oss-statics.icomecloud.com/resource/image/png/bad0c5df41093642db29c1dd776453a7.webp_400x400',
        },
      },
      {
        id: 1129,
        name: '客创一体-生态组织后台管理系统',
        desc: null,
        typeId: 3,
        appCode: 'open-admin-orgnization',
        lastDeployAt: '2024-04-07T08:00:13.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 48,
          name: 'open子应用模板',
          icon: 'https://res.ennew.com/image/png/1077c0e94f0f8462be95dac686982271.png?optimize=true',
        },
      },
      {
        id: 169,
        name: '自主成长-ICOME-H5',
        desc: null,
        typeId: 3,
        appCode: 'independent-growth-icome-mobile',
        lastDeployAt: '2024-04-01T09:31:21.000Z',
        changeCount: 0,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 311,
        name: '创值目标pc管理系统',
        desc: '创值目标pc管理系统\n',
        typeId: 3,
        appCode: 'value-creation-identification-admin',
        lastDeployAt: '2023-12-22T09:33:27.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 5,
          name: '理正PC模板',
          icon: 'https://oss-statics.icomecloud.com/resource/image/png/bad0c5df41093642db29c1dd776453a7.webp_400x400',
        },
      },
      {
        id: 471,
        name: '编排案例',
        desc: null,
        typeId: 3,
        appCode: 'shape-demo',
        lastDeployAt: '2023-12-06T07:37:07.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 673,
        name: '创值机会-icome管理系统',
        desc: 'icome运营平台-创值机会',
        typeId: 3,
        appCode: 'value-creation-chance',
        lastDeployAt: '2023-09-11T14:51:26.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 3,
          name: 'Frameless PC',
          icon: 'https://oss-statics.icomecloud.com/resource/image/png/558e215fd9e339567440449d48364c9b.webp',
        },
      },
      {
        id: 734,
        name: '生态首页-目标穿透视图',
        desc: '生态首页-目标穿透视图',
        typeId: 3,
        appCode: 'target-view',
        lastDeployAt: '2023-09-01T20:07:27.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 1,
          name: 'Ency Design PC (官方) ',
          icon: 'https://res.ennew.com/image/svg%2Bxml/57cf155939da44ef55491a72de7fcc96.svg',
        },
      },
      {
        id: 518,
        name: '接班人',
        desc: 'icome运营平台-接班人',
        typeId: 3,
        appCode: 'icome-admin-successor',
        lastDeployAt: '2023-08-31T17:33:41.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 3,
          name: 'Frameless PC',
          icon: 'https://oss-statics.icomecloud.com/resource/image/png/558e215fd9e339567440449d48364c9b.webp',
        },
      },
      {
        id: 547,
        name: '创值目标-生态组织',
        desc: 'value creationgoals ecological organization\n从生态组织平台进入到的目标系统2.0',
        typeId: 3,
        appCode: 'value-creation-goals-for-eo',
        lastDeployAt: '2023-07-28T18:27:46.000Z',
        changeCount: 1,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: {
          id: 1,
          name: 'Ency Design PC (官方) ',
          icon: 'https://res.ennew.com/image/svg%2Bxml/57cf155939da44ef55491a72de7fcc96.svg',
        },
      },
      {
        id: 172,
        name: '接班人-ICOME-H5',
        desc: null,
        typeId: 3,
        appCode: 'successor-icome-mobile',
        lastDeployAt: '2023-07-07T22:49:22.000Z',
        changeCount: 0,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 186,
        name: '创值评估-ICOME-PC',
        desc: null,
        typeId: 3,
        appCode: 'icome-web-evaluation',
        lastDeployAt: '2023-01-03T22:21:19.000Z',
        changeCount: 0,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
      {
        id: 173,
        name: '创值记录-ICOME-H5',
        desc: null,
        typeId: 3,
        appCode: 'value-creation-record-icome-mobile',
        lastDeployAt: '2022-12-02T14:08:53.000Z',
        changeCount: 0,
        typeDetail: {
          id: 3,
          name: '应用',
          type: 'app',
          parentId: 1,
          icon: 'https://res.ennew.com/image/svg%2Bxml/00d2c125191b95fa9c187978c1582b5e.svg',
        },
        template: null,
      },
    ],
    count: 30,
  };
  res.status(200).send(data);
}

export default {
  'GET /api/apps': getApps,
};
