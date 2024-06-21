import { getApplicationInfo } from '@/services/application';
import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { useEffect, useState } from 'react';
import type { Application } from '@/services/types';

const tabs = [
  {
    key: '_',
    label: '基本信息',
  },
  {
    key: 'changes',
    label: '变更列表',
  },
  {
    key: 'publishing',
    label: '变更发布',
  },
  {
    key: 'publish-history',
    label: '发布记录',
  },
  {
    key: 'members',
    label: '成员',
  },
  {
    key: 'settings',
    label: '设置',
  },
];

export default (props: any) => {
  const { id } = useParams();
  const [detail, setDetail] = useState<Application>();

  useEffect(() => {
    if (!id) return;
    getApplicationInfo(id).then((info) => {
      if (info.code === 200) {
        setDetail(info.data);
      }
    });
  }, [id]);

  return (
    <PageContainer
      header={{
        title: `应用——${detail?.name}`,
      }}
      tabList={tabs.map((tab) => ({
        key: `/app/${id}/${tab.key === '_' ? '' : tab.key}`,
        tab: tab.label,
      }))}
      style={{ backgroundColor: '#fff' }}
    >
      {props.children}
    </PageContainer>
  );
};
