import styles from './styles.less';
import { getApplicationInfo } from '@/services/application';
import { PageContainer } from '@ant-design/pro-components';
import { Outlet, useLocation, useNavigate, useParams } from '@umijs/max';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { Application } from '@/services/types';

export default () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();
  const [detail, setDetail] = useState<Application>();
  const [tabActiveKey, setTabActiveKey] = useState(`/app/${id}`);

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
  ].map((tab) => ({ key: `/app/${id}${tab.key === '_' ? '' : '/' + tab.key}`, label: tab.label }));

  const count = useRef(0);

  async function fetchDetail(applicationId: string = '') {
    if (count.current > 1) return;

    setTabActiveKey(location.pathname);

    if (!applicationId) {
      return;
    }

    getApplicationInfo(applicationId)
      .then((info) => {
        if (info.code === 200) {
          setDetail(info.data);
        }
      })
      .catch(() => {});
  }

  useEffect(() => {
    count.current++;
    fetchDetail(id);
  }, [id]);

  const handleTabChange = useCallback(
    (activeKey: string) => {
      setTabActiveKey(activeKey);
      navigate(activeKey, { replace: true });
    },
    [tabActiveKey, navigate],
  );

  return (
    <PageContainer
      header={{
        title: `应用——${detail?.name}`,
      }}
      tabList={tabs}
      tabActiveKey={tabActiveKey}
      className={styles['app-detail-container']}
      onTabChange={handleTabChange}
    >
      <Outlet context={{ ...detail }} />
    </PageContainer>
  );
};
