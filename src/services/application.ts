import { request } from '@umijs/max';
import type {
  Application,
  BranchIntegrationItem,
  ChangeActionItem,
  ChangeItem,
  CommitMapItem,
  CommonResponse,
  CreatorUser,
  MasterBranchItem,
  ProcessInstanceNodeItem,
  QueueItem,
  SummaryItem,
} from './types';

export const getApplicationInfo = (id: number | string) => {
  return request<CommonResponse<Application>>(`/api/apps/${id}`, { method: 'GET' });
};

export const getAppChangesById = (id: number | string) =>
  request<{
    actions: ChangeActionItem[];
    count: number;
    data: ChangeItem[];
    rows: any[];
  }>(`/api/apps/${id}/changes`, { method: 'GET' });

export const getAppGitBranches = (appId: string | number, scene: string, ref: string) =>
  request(`/api/apps/${appId}/git-branches`, {
    method: 'GET',
    params: { scene, ref },
  });

export const getMasterBranches = (appId: string | number) =>
  request<{
    actions: ChangeActionItem[];
    count: number;
    data: MasterBranchItem[];
    rows: any[];
  }>(`/api/apps/${appId}/master-branches`, { method: 'GET' });

export const getMasterBranchesIntegrations = (integrationId: string | number) =>
  request<{
    actions: ChangeActionItem[];
    count: number;
    data: BranchIntegrationItem[];
    rows: any[];
  }>(`/api/master-branches/${integrationId}/integrations`, { method: 'GET' });

export const getIntegrationCommit = (integrationId: string) =>
  request<{
    commitsMap: Record<string, CommitMapItem>;
    deployBranch: string;
    masterBranch: string;
  }>(`/api/integrations/${integrationId}/commits`, { method: 'GET' });

export const getProcessInstanceNodes = (flowInstanceId: string) =>
  request<{
    current: number;
    list: ProcessInstanceNodeItem[];
    processInstance: {
      bizCode: string;
      createdAt: string;
      definitionId: number;
      endTime: null;
      id: number;
      pid: null | number;
      reqContext: Record<string, any>;
      resContext: Record<string, any>;
      startTime: string;
      state: string;
      type: string;
      updatedAt: string;
    };
    state: string;
  }>(`/api/process/instance/${flowInstanceId}/nodes`, { method: 'GET' });

export const getPipelineInstanceIntegration = (bizCode: string) =>
  request<{
    bizCode: string;
    createdAt: string;
    currentIndex: number;
    currentItemKey: string;
    definitionId: number;
    endTime: string;
    id: number;
    pid: number;
    startTime: string;
    state: string;
    type: string;
    updatedAt: string;
    queue: QueueItem[] | QueueItem[][];
    reqContext: Record<string, any>;
    resContext: Record<string, any>;
  }>(`/api/pipeline/instance/${bizCode}`, { method: 'GET', params: { pipelineDetail: true } });

export const getProcessInstanceNodesByNodeId = (processNodeId: number) =>
  request<{
    approverUsers: CreatorUser[];
    bizCode: string;
    createdAt: string;
    definitionId: number;
    endTime: null | string;
    startTime: string;
    state: string;
    type: string;
    updatedAt: string;
    id: number;
    pid: number | null;
    reqContext: Record<string, any>;
    resContext: Record<string, any>;
  }>(`/api/process/node-instance/${processNodeId}`, {
    method: 'GET',
    params: { approverUsers: true },
  });

export const getPipelineInstanceSummary = (id: number) =>
  request<SummaryItem[]>(`/api/pipeline/instance/${id}/summary`);
