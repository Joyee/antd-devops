import { request } from '@umijs/max';
import type {
  Application,
  BranchIntegrationItem,
  ChangeActionItem,
  ChangeItem,
  CommitMapItem,
  CommonResponse,
  MasterBranchItem,
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
