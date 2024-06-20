import { request } from '@umijs/max';
import type { ChangeItem, ApplicationItem, EventLogItem } from './types';

export async function getChanges() {
  return request<{
    data: {
      actions: any[];
      count: number;
      data: ChangeItem[];
      rows: any[];
    };
  }>('/api/changes', { method: 'GET', params: { isMine: true } });
}

export async function getApps(scope: string = 'mine', pageSize = 20) {
  return request<{
    actions: { name: string; description: string }[];
    count: number;
    data: ApplicationItem[];
  }>('/api/apps', { method: 'GET', params: { scope, pageSize } });
}

export async function getEventLogs(current = 1, pageSize = 10) {
  return request<{ count: number; rows: EventLogItem[] }>('/api/event-logs/related-me', {
    method: 'GET',
    params: { current, pageSize },
  });
}
