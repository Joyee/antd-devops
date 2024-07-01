import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Button, Descriptions, Divider, Space, Steps, Table, Tabs, Tag } from 'antd';
import {
  getIntegrationCommit,
  getMasterBranches,
  getMasterBranchesIntegrations,
  getPipelineInstanceIntegration,
  getPipelineInstanceSummary,
  getProcessDefinitionBuildNodes,
  getProcessInstanceNodes,
  getProcessInstanceNodesByNodeId,
} from '@/services/application';
import { useParams } from '@umijs/max';
import './styles.less';
import {
  CheckCircleFilled,
  CheckCircleOutlined,
  CheckOutlined,
  ClockCircleFilled,
  CopyOutlined,
  ExclamationCircleOutlined,
  FileSearchOutlined,
  StopOutlined,
  SyncOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import type { CommitMapItem, BranchIntegrationChangeItem } from '@/services/types';
import type { TabsProps, DescriptionsProps, TableColumnsType, StepsProps } from 'antd';

const statusMap: Record<
  string,
  { status: 'wait' | 'process' | 'finish' | 'error'; icon?: ReactNode }
> = {
  waiting: {
    status: 'wait',
    icon: null,
  },
  running: {
    status: 'process',
    icon: <SyncOutlined style={{ fontSize: 32 }} />,
  },
  successed: {
    status: 'finish',
    icon: <CheckCircleOutlined style={{ fontSize: 32 }} />,
  },
  error: {
    status: 'error',
  },
  wait_confirmed: {
    status: 'process',
    icon: <ClockCircleFilled style={{ fontSize: 32 }} />,
  },
};
interface ChangeItemProp extends BranchIntegrationChangeItem {
  commit: CommitMapItem;
}

const Publishing = () => {
  const { id } = useParams();

  const [tabs, setTabs] = useState<TabsProps['items']>([]);
  const [descriptions, setDescriptions] = useState<DescriptionsProps['items']>([]);
  const [currentTab, setCurrentTab] = useState('');
  const [defaultIntegrationId, setDefaultIntegrationId] = useState<number | undefined>();
  const [changes, setChanges] = useState<ChangeItemProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [flowInstanceId, setFlowInstanceId] = useState('');
  const [deploySteps, setDeploySteps] = useState<StepsProps['items']>([]);
  const [deployCurrent, setDeployCurrent] = useState(0);
  const [subFlowActive, setSubFlowActive] = useState(0);
  const [subFlowSteps, setSubFlowSteps] = useState<StepsProps['items']>([]);
  const [flowKey, setFlowKey] = useState('');

  const ChangeTable = () => {
    const [isCopyed, setIsCopyed] = useState(false);

    const columns: TableColumnsType<any> = useMemo(
      () => [
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
      ],
      [isCopyed],
    );

    return (
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={changes}
        pagination={false}
      />
    );
  };

  const fetchSummary = async (id: number) => {
    try {
      const data = await getPipelineInstanceSummary(id);

      const summary: DescriptionsProps['items'] = [];
      data.map((item) => {
        if (Array.isArray(item.value)) {
          item.value.map((cItem) => {
            summary.push({
              label: cItem.label,
              children: cItem.value.includes('href') ? (
                <span dangerouslySetInnerHTML={{ __html: cItem.value }}></span>
              ) : (
                cItem.value
              ),
            });
            return cItem;
          });
        }
        return item;
      });
      setDescriptions(summary);
    } catch (error) {}
  };

  const fetchProcessFlowInstanceNodes = async () => {
    if (!flowInstanceId) {
      if (flowKey) {
        // flowKey
        const buildNodes = await getProcessDefinitionBuildNodes(flowKey);
        console.log(buildNodes);
        const steps = buildNodes.map((node) => ({
          title: node.label,
          status: 'wait' as 'process' | 'wait' | 'finish' | 'error',
          icon: null,
        }));
        setDeployCurrent(-1);
        setDeploySteps(steps);
        setSubFlowSteps([]);
        setDescriptions([]);
      }
      return;
    }
    try {
      // TODO 定时查询
      const res = await getProcessInstanceNodes(flowInstanceId);
      // status: wait process finish error
      setDeployCurrent(res.current);
      const steps = res.list.map((item) => ({
        title: item.label,
        status: statusMap[item.state].status, // successed running waiting
        icon: statusMap[item.state].icon || null, // running <SyncOutlined />
        subTitle:
          item.state === 'wait_confirmed' ? (
            <Button type="primary" icon={<CheckCircleOutlined />}>
              通过
            </Button>
          ) : (
            ''
          ),
      }));
      setDeploySteps(steps);
      // 当前步骤
      const nodeId = res.list[res.current].id;
      const processNodeInstanceRes = await getProcessInstanceNodesByNodeId(nodeId);

      const { bizCode } = processNodeInstanceRes;
      const pipelineDetail = await getPipelineInstanceIntegration(bizCode + '-main');

      if (pipelineDetail && pipelineDetail.queue) {
        const steps: StepsProps['items'] = [];
        const { queue, currentIndex, id } = pipelineDetail;
        setSubFlowActive(currentIndex);
        queue.forEach((item) => {
          if (Array.isArray(item)) {
            steps.push({
              title: (
                <div className="queue-node">
                  {item.map((cItem) => (
                    <Space key={cItem.key} size={8}>
                      {cItem.state === 'successed' ? (
                        <CheckCircleFilled
                          style={{ color: 'rgb(53, 197, 3)' }}
                          className="state-icon"
                        />
                      ) : (
                        <StopOutlined className="state-icon" />
                      )}
                      <span
                        style={{
                          wordBreak: 'keep-all',
                          display: 'inline-flex',
                        }}
                      >
                        {cItem.name}
                      </span>
                    </Space>
                  ))}
                </div>
              ),
            });
          } else {
            steps.push({
              title: (
                <Space size={8}>
                  {item.state === 'successed' ? (
                    <CheckCircleFilled
                      style={{ color: 'rgb(53, 197, 3)' }}
                      className="state-icon"
                    />
                  ) : (
                    <StopOutlined className="state-icon" />
                  )}
                  <span
                    style={{
                      wordBreak: 'keep-all',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    {item?.isAsync ? <Tag color="blue">异步</Tag> : null}
                    {item.name}
                  </span>
                </Space>
              ),
            });
          }
        });
        setSubFlowSteps(steps);

        fetchSummary(id);
      }
    } catch (error) {}
  };

  async function fetchMasterBranchesIntegrations() {
    if (!defaultIntegrationId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const response = await getMasterBranchesIntegrations(defaultIntegrationId);
      const found = response.data.find((item) => item.id + '' === currentTab);
      const commitRes = await getIntegrationCommit(currentTab);

      if (found) {
        const data = found.changes.map((item) => {
          return { ...item, commit: { ...commitRes.commitsMap[item.change.branch] } };
        });
        setChanges(data);
        setFlowInstanceId(found.flowInstanceId);
        setFlowKey(found.flowKey);
      } else {
        setChanges([]);
        setFlowInstanceId('');
        setFlowKey('');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function fetchMasterBranches(appId?: string) {
    if (!appId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await getMasterBranches(appId);

      if (res.data && res.data.length) {
        const { integrations } = res.data[0];
        const tabs = integrations.map((item) => ({
          key: item.id + '',
          label: item.name,
        }));

        const defaultTab = integrations.find((integration) => integration.isDefault === true);
        let integrationId = integrations[0].id;
        if (defaultTab) {
          integrationId = defaultTab.id;
        }
        setTabs(tabs);
        setCurrentTab(integrationId + '');
        setDefaultIntegrationId(integrationId);
      } else {
        setLoading(false);
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchMasterBranches(id);
  }, [id]);

  useEffect(() => {
    fetchMasterBranchesIntegrations();
  }, [defaultIntegrationId, currentTab]);

  useEffect(() => {
    fetchProcessFlowInstanceNodes();
  }, [flowInstanceId]);

  return (
    <div className="app-detail-publishing-container">
      <div className="card-box">
        <Tabs
          activeKey={currentTab}
          type="card"
          items={tabs?.map((tab) => ({
            ...tab,
            children: (
              <>
                <div className="header">变更列表</div>
                <ChangeTable />
                <div className="header">部署流程</div>
                <div className="flow-container">
                  <div>
                    <Steps
                      current={deployCurrent}
                      labelPlacement="vertical"
                      items={deploySteps}
                      style={{ marginTop: 24 }}
                    />
                  </div>
                  {changes.length > 0 ? (
                    <Space size={8} style={{ margin: '24px 0' }}>
                      <Button>重新发布</Button>
                      <Button type="primary" ghost icon={<UnlockOutlined />}></Button>
                      <Divider type="vertical" />
                      <Button type="link" size="small" icon={<FileSearchOutlined />}>
                        部署详情
                      </Button>
                    </Space>
                  ) : (
                    <div style={{ marginTop: '16px' }}>
                      <Button type="primary">立即发布</Button>
                    </div>
                  )}
                  {subFlowSteps && subFlowSteps?.length > 0 ? (
                    <div className="sub-flow">
                      <Steps progressDot current={subFlowActive} items={subFlowSteps} />
                    </div>
                  ) : null}
                  {descriptions && descriptions?.length > 0 ? (
                    <Descriptions
                      className="node-summary-container"
                      title="摘要信息"
                      items={descriptions}
                      column={2}
                    />
                  ) : null}
                </div>
              </>
            ),
          }))}
          onTabClick={(key: string) => setCurrentTab(key)}
        />
      </div>
    </div>
  );
};

export default Publishing;
