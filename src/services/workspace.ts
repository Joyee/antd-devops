import { request } from '@umijs/max';
import type { ChangeItem, ApplicationItem } from './types';

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

export async function getApp(scope = 'mine') {
  return request<{
    actions: { name: string; description: string }[];
    count: number;
    data: ApplicationItem[];
  }>('/api/apps', { method: 'GET', params: { scope } });
}
