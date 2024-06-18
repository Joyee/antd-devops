import { request } from '@umijs/max';
import type { ChangeItem } from './types';

export async function getChanges() {
  return request<{
    data: {
      actions: any[];
      count: number;
      data: ChangeItem[];
      rows: any[];
    }
  }>('/api/changes', { method: 'GET', params: { isMine: true } });
}
