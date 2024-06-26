import { request } from '@umijs/max';
import type {
  Application,
  ChangeActionItem,
  ChangeItem,
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
