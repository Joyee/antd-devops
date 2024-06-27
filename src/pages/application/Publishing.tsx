import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Divider, Space, Steps, Table, Tabs, Tag } from 'antd';
import {
  getIntegrationCommit,
  getMasterBranches,
  getMasterBranchesIntegrations,
} from '@/services/application';
import { useParams } from '@umijs/max';
import './styles.less';
import {
  CheckCircleOutlined,
  CheckOutlined,
  CopyOutlined,
  ExclamationCircleOutlined,
  FileSearchOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import type { CommitMapItem, BranchIntegrationChangeItem } from '@/services/types';
import type { TabsProps, DescriptionsProps, TableColumnsType } from 'antd';

interface ChangeItemProp extends BranchIntegrationChangeItem {
  commit: CommitMapItem;
}

const Publishing = () => {
  const { id } = useParams();

  const [tabs, setTabs] = useState<TabsProps['items']>([]);
  const [descriptions] = useState<DescriptionsProps['items']>([]);
  const [currentTab, setCurrentTab] = useState('');
  const [changes, setChanges] = useState<ChangeItemProp[]>([]);
  const [postDone, setPostDone] = useState(false);
  const [isCopyed, setIsCopyed] = useState(false);

  const columns: TableColumnsType<any> = [
    {
      dataIndex: ['change', 'name'],
      title: '变更名称',
    },
    {
      dataIndex: ['change', 'branch'],
      title: '变更分支',
      render: (text, record: ChangeItemProp) => (
        <div className="component-copy">
          <div className="children">
            <Button type="link" href={record.change.gitWebURL} target="_blank">
              {text}
            </Button>
          </div>
          {!isCopyed ? (
            <CopyOutlined
              className="icon"
              onClick={() => {
                navigator.clipboard
                  .writeText(text)
                  .then(() => {
                    setIsCopyed(true);
                    setTimeout(() => {
                      setIsCopyed(false);
                    }, 3000);
                  })
                  .catch(() => {});
              }}
            />
          ) : (
            <CheckOutlined />
          )}
        </div>
      ),
      // shouldCellUpdate: (record: ChangeItemProp) => {
      //   return isCopyed === true;
      // },
    },
    {
      dataIndex: 'commitId',
      title: '部署版本',
    },
    {
      dataIndex: ['commit', 'id'],
      title: '提交版本',
    },
    {
      dataIndex: ['commit', 'isMergedMaster'],
      title: '主干同步状态',
      width: 180,
      render: (text) => (
        <Tag
          icon={text ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />}
          color={text ? 'green' : 'orange'}
        >{`分支${text ? '已' : '未'}同步`}</Tag>
      ),
    },
    {
      dataIndex: ['change', 'creatorUser', 'nickName'],
      title: '创建人',
    },
    {
      dataIndex: 'actions',
      title: '操作',
      render: (text, record: ChangeItemProp) => (
        <Space>
          {record.actions.map((action) => (
            <Button key={action.name} type="link">
              {action.label}
            </Button>
          ))}
        </Space>
      ),
    },
  ];

  const PaneBox = () => {
    return (
      <>
        <div className="header">变更列表</div>
        <Table rowKey="id" loading={!postDone} columns={columns} dataSource={changes} />
        <div className="header">部署流程</div>
        <div className="flow-container">
          <div>
            <Steps
              current={1}
              items={[
                {
                  title: 'Finished',
                },
                {
                  title: 'In Progress',
                },
                {
                  title: 'Waiting',
                },
              ]}
              style={{ marginTop: 24 }}
            />
          </div>
          <Space size={8} style={{ margin: '24px 0' }}>
            <Button>重新发布</Button>
            <Button icon={<UnlockOutlined />}></Button>
            <Divider type="vertical" />
            <Button type="link" size="small" icon={<FileSearchOutlined />}>
              部署详情
            </Button>
          </Space>
          <div className="sub-flow">
            <Steps progressDot current={1} items={[]} />
          </div>
          <Descriptions className="node-summary-container" title="摘要信息" items={descriptions} />
        </div>
      </>
    );
  };

  const fetchMasterBranches = async (appId?: string) => {
    if (!appId) return;
    try {
      const res = await getMasterBranches(appId);

      if (res.data && res.data.length) {
        const { integrations } = res.data[0];
        const tabs = integrations.map((item) => ({
          key: item.id + '',
          label: item.name,
          children: <PaneBox />,
        }));
        setTabs(tabs);
        setCurrentTab(integrations[0].id + '');
      }
    } catch (error) {}
  };

  const fetchMasterBranchesIntegrations = async () => {
    if (!currentTab) return;
    try {
      const response = await getMasterBranchesIntegrations(currentTab);
      const found = response.data.find((item) => item.id + '' === currentTab);
      const commitRes = await getIntegrationCommit(currentTab);
      if (found) {
        const data = found.changes.map((item) => {
          return { ...item, commit: { ...commitRes.commitsMap[item.change.branch] } };
        });
        setChanges(data);
      }
      setTimeout(() => {
        setPostDone(true);
      }, 1000);
    } catch (error) {
      setPostDone(true);
    }
  };

  useEffect(() => {
    fetchMasterBranches(id);
  }, [id]);

  useEffect(() => {
    fetchMasterBranchesIntegrations();
  }, [currentTab]);

  return (
    <div className="app-detail-publishing-container">
      {postDone ? (
        <div className="card-box">
          <Tabs
            activeKey={currentTab}
            type="card"
            items={tabs}
            onTabClick={(key: string) => setCurrentTab(key)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Publishing;
