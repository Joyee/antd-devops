export interface CommonResponse<T> {
  code: number;
  success: boolean;
  data: T;
}

export interface ChangeActionItem {
  name: string;
  label: string;
  description?: string;
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

export type ApplicationAction = {
  description: string;
  label: string;
  name: string;
};

export interface ApplicationProp {
  appCode: string;
  createdAt: string;
  creator: string;
  defaultMasterBranch: string;
  deletedAt: string | null;
  desc: string;
  devopsCode: string;
  devopsTeamId: string;
  gitHTTPURL: string;
  gitRepo: string;
  gitSSHURL: string;
  gitWebURL: string;
  id: number;
  isMultiMaster: boolean | null;
  isMultiVersion: boolean | null;
  name: string;
  owner: string;
  productId: number | null;
  templateId: number;
  tenantId: string;
  typeId: number;
  updatedAt: string;
}
// application
export interface Application extends ApplicationProp {
  actions: ApplicationAction[];
  ownerDetail: CreatorUser;
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
}

export interface IntegrationChangeItem {
  app: {
    gitRepo: string;
    gitWebURL: string;
    id: number;
  };
  appId: number;
  branch: string;
  createdAt: string;
  creator: string;
  creatorUser: CreatorUser;
  endCommitId: null | string;
  gitWebURL: string;
  id: number;
  masterBranchId: number;
  name: string;
  projectId: null | string;
  startCommitId: string;
  status: string;
  statusText: string;
  tenantId: string;
  updatedAt: string;
}

export interface BranchIntegrationChangeItem {
  change: IntegrationChangeItem;
  actions: ChangeActionItem[];
  changeId: number;
  commitId: string;
  createdAt: string;
  id: number;
  integrationId: number;
  updatedAt: string;
}

export interface BranchIntegrationItem {
  appId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  creator: string;
  deployBranch: string;
  flowInstanceId: string;
  flowKey: string;
  flowName: string;
  id: number;
  isDefault: number;
  masterBranchId: number;
  tenantId: string;
  context: {
    targetInfo: Record<
      'FAT' | 'UAT' | 'PRO',
      {
        commitId: string;
        url: string;
        version: string;
      }
    >;
    deployCommitId: string;
    deployVersions: Record<
      'FAT' | 'UAT' | 'PRO',
      {
        deployAt: 1714295165252;
        grayscale: 1;
        isDeploy: true;
        version: '0.0.186';
      }
    >;
  };
  changes: BranchIntegrationChangeItem[];
}

// branch
export interface MasterBranchItem {
  action: ApplicationAction[];
  app: ApplicationProp;
  appId: number;
  createdAt: string;
  updatedAt: string;
  deletable: boolean;
  defaultIntegration: BranchIntegrationItem;
  deployTarget: string;
  desc: string | null;
  domain: string;
  domainType: string;
  gitWebURL: string;
  id: number;
  name: string;
  isMultiVersion: boolean;
  webPath: string;
  integrations: BranchIntegrationItem[];
}

export interface CommitMapItem {
  author_email: string;
  author_name: string;
  authored_date: string;
  branchType: string;
  committed_date: string;
  committer_email: string;
  committer_name: string;
  created_at: string;
  id: string;
  isNewCommit: boolean;
  message: string;
  parent_ids: string[];
  short_id: string;
  title: string;
  trailers: object;
  web_url: string;
}

export interface ProcessInstanceNodeItem {
  approvers: any[];
  bizCode: string;
  code: string;
  eniginInstId: string;
  id: number;
  label: string;
  passBtnShow: boolean;
  retryBtnShow: boolean;
  startBtnShow: boolean;
  state: string;
  type: string;
}

export interface QueueItem {
  bizCode: string;
  duration: number;
  key: string;
  name: string;
  startTime: string;
  state: string;
  task: string;
  taskInstanceId: number;
  isAsync?: boolean;
}

export interface SummaryItem {
  type: string;
  key?: string;
  value: {
    label: string;
    value: string;
  }[];
}
