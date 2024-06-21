import { request } from '@umijs/max';
import type { Application, CommonResponse } from './types';

export const getApplicationInfo = (id: number | string) => {
  return request<CommonResponse<Application>>(`/api/apps/${id}`, { method: 'GET' });
};
