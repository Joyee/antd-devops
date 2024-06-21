export interface CommonResponse<T> {
  code: number;
  success: boolean;
  data: T;
}

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

export interface TypeDetail {
  id: number;
  name: string;
  type: string;
  parentId: number;
  icon: string;
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
  typeDetail: TypeDetail;
  typeId: number;
}

export interface PiplineQueueItem {
  key: string;
  name: string;
  task: string;
  state: string;
  bizCode: string;
  duration: number;
  startTime: string;
  taskInstanceId: number;
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

// application
export interface Application {
  actions: {
    description: string;
    label: string;
    name: string;
  }[];
  appCode: string;
  createdAt: string;
  creator: string;
  creatorDetail: CreatorUser;
  defaultMasterBranch: string;
  deletedAt: string;
  desc: string;
  devopsCode: string;
  devopsTeamId: string;
  gitHTTPURL: string;
  gitRepo: string;
  gitSSHURL: string;
  gitWebURL: string;
  id: number;
  isMultiMaster: null;
  isMultiVersion: null;
  name: string;
  owner: string;
  ownerDetail: CreatorUser;
  productId: null;
  templateId: number;
  tenantId: string;
  typeDetail: TypeDetail;
  typeId: number;
  typeList: {
    appCreateProcessId: number;
    createdAt: string;
    deletedAt: null;
    description: string;
    icon: string;
    id: number;
    integrations: null;
    name: string;
    parentId: null | number[];
    templateIds: null | number[];
    tenantId: string;
    type: string;
    updatedAt: string;
  }[];
  updatedAt: string;
}
