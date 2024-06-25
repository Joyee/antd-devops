import { request } from '@umijs/max';
import type { ChangeItem, ApplicationItem, EventLogItem } from './types';

export async function getChanges(isMine?: boolean) {
  return request<{
    data: {
      actions: any[];
      count: number;
      data: ChangeItem[];
      rows: any[];
    };
  }>('/api/changes', { method: 'GET', params: isMine ? { isMine: true } : {} });
}

export async function getApps(scope: string = 'mine', pageSize = 20) {
  return request<{
    actions: { name: string; description: string }[];
    count: number;
    data: ApplicationItem[];
  }>('/api/apps', { method: 'GET', params: { scope, pageSize } });
}

export async function getEventLogs(current = 1, pageSize: number, appId?: number, isMe = true) {
  return request<{ count: number; rows: EventLogItem[] }>(
    `/api/event-logs${isMe ? '/related-me' : ''}`,
    {
      method: 'GET',
      params: { current, pageSize, appId },
    },
  );
}

export const getTemplatesById = async (templateId: number) => {
  return request(`/api/templates/${templateId}`, { method: 'GET' });
};
