import { request } from '@umijs/max';
import type { EventLogContextItem } from './types';

export interface PublishLogItem {
  id: number;
  name: string;
  creator: string;
  content: string;
  context: EventLogContextItem;
  masterBranch: string;
  env: string;
  createdAt: string;
  updatedAt: string;
  creatorUser: {
    id: number;
    nickName: string;
    mobile: string;
  };
}

export const getPublishLogs = (appId: string, current: number, pageSize = 10) =>
  request<{ rows: PublishLogItem[]; count: number }>(`/api/apps/${appId}/publish-logs`, {
    method: 'GET',
    params: { current, pageSize },
  });

export const getUserListByIds = (userIds: string[]) =>
  request(`/api/user/list-by-ids`, { method: 'POST', userIds });
