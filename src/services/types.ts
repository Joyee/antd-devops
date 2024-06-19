export interface ChangeActionItem {
  name: string;
  label: string;
}

export interface CreatorUser {
  createdAt: string;
  deletedAt: null | string;
  email: string;
  empNo: string;
  id: number;
  mobile: string;
  nickName: string;
  orgNames: string;
  orgPath: string;
  postCode: string;
  postName: string;
  updatedAt: string;
  userId: string;
  userName: string;
}

export interface IntegrationRelationItem {
  changeId: number;
  commitId: string;
  createdAt: string;
  id: number;
  integrationId: number;
  updatedAt: string;
}

export interface ChangeItem {
  id: number;
  name: string;
  actions: ChangeActionItem[];
  app: {
    id: number;
  };
  appId: number;
  branch: string;
  createdAt: string;
  creator: string;
  creatorUser: CreatorUser;
  endCommitId: null | number;
  gitWebURL: string;
  integrationRelations: IntegrationRelationItem[];
  integrationStates: {
    env: string;
    version: string;
    deployAt: number;
    isDeploy: boolean;
    grayscale: number;
  }[];
  masterBranch: {
    id: number;
    name: string;
    app: {
      id: number;
      name: string;
    };
    integrations: { name: string; id: number }[];
  };
  projectId: number | null;
  startCommitId: string;
  status: string;
  statusText: string;
  tenantId: string;
  updatedAt: string;
}

export interface ApplicationItem {
  appCode: string;
  changeCount: number;
  desc: string | null;
  id: number;
  name: string;
  lastDeployedAt: string;
  template: {
    id: number;
    name: string;
    icon: string;
  };
  typeDetail: {
    id: number;
    name: string;
    type: string;
    parentId: number;
    icon: string;
  };
  typeId: number;
}

export interface PiplineQueueItem {
  key: 'static-build';
  name: '构建';
  task: 'air-static-build';
  state: 'successed';
  bizCode: 'INTEGRATION_1535_20240617-194833_deploypro-main-static-build';
  duration: 98000;
  startTime: '2024-06-17T11:51:13.000Z';
  taskInstanceId: 789014;
}

export interface DeployListItem {
  path: string;
  isCDN: true;
  state: string;
  domain: string;
}
export interface EventLogContextItem {
  env: string;
  name: string;
  appId: number;
  space: string;
  bizKey: string;
  webURL: string;
  appName: string;
  changes: {
    id: number;
    name: string;
    branch: string;
    creator: string;
    commit_id: null;
  }[];
  version: string;
  deployList: DeployListItem[];
  projectPath: string;
  masterBranch: string;
  pipelineQueue: PiplineQueueItem[];
  integrationName: string;
  pipelineBizCode: string;
}

export interface EventLogItem {
  id: number;
  appId: number;
  creator: string;
  name: string;
  content: string;
  context: EventLogContextItem;
  extra: string;
  extra1: string;
  extra2: null;
  createdAt: string;
  updatedAt: string;
  creatorUser: CreatorUser;
  app: {
    id: number;
    name: string;
    appCode: string;
    typeDetail: {
      id: number;
      name: string;
      type: string;
    };
  };
}
