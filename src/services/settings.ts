import { request } from '@umijs/max';

export interface Domain {
  id: number;
  devopsId: string;
  teamName: string;
  teamCode: string;
  tenantId: string;
  membersCount: number;
  isDelete: number;
  creator: string;
  createTime: string;
  respPersonId: string;
  createdAt: string;
  updatedAt: string;
  used: boolean;
}

export const requestGetBizDomains = (
  params: {
    pageNum: number;
    pageSize: number;
    select?: boolean;
    teamName?: string;
  } = { pageNum: 1, pageSize: 10, teamName: '' },
) =>
  request<{
    count: number;
    data: Domain[];
    pageSize: number;
    pages: number;
    pageNum: number;
  }>(`/api/biz-domain`, { method: 'GET', params });

export const requestGetTaskSettingsIntegration = (integration: number, processDefId: string) =>
  request(`/api/task-settings/integration/${integration}`, {
    method: 'GET',
    params: { processDefId },
  });
