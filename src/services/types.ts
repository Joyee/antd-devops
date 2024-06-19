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
