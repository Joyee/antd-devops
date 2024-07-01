import { request } from '@umijs/max';
import { CreatorUser } from './types';

export interface MemberItem {
  role: string[];
  roleText: string[];
  id: number;
  appId: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: CreatorUser;
  isOwner: boolean;
  actions: {
    name: string;
    label: string;
    description: string;
  }[];
  lastPublishAt: string;
}

export const getAppMembers = (appId: string) =>
  request<{
    rows: any[];
    count: number;
    data: MemberItem[];
    actions: {
      description: string;
      label: string;
      name: string;
    }[];
  }>(`/api/apps/${appId}/members`);
