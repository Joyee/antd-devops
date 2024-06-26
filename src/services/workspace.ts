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

export async function getApps({
  scope,
  pageSize = 20,
  current = 1,
  appTypeCode = '',
}: {
  scope?: string;
  pageSize?: number;
  current?: number;
  appTypeCode?: string;
}) {
  return request<{
    actions: { name: string; description: string }[];
    count: number;
    data: ApplicationItem[];
  }>('/api/apps', {
    method: 'GET',
    params: {
      scope: scope || undefined,
      pageSize,
      currenPage: current || undefined,
      appTypeCode: appTypeCode || undefined,
    },
  });
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
