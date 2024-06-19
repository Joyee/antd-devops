import { PageContainer, GridContent } from '@ant-design/pro-components';
import { Button, Card, Dropdown, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './Workspace.less';
import { getChanges } from '@/services/workspace';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Applications from '@/components/Applications';
import type { ColumnsType } from 'antd/es/table';
import type { ChangeItem } from '@/services/types';

dayjs.extend(relativeTime);

const columns: ColumnsType<any> = [
  {
    title: '变更名称',
    dataIndex: 'name',
    fixed: 'left',
    ellipsis: true,
    render: (text, record: ChangeItem) => (
      <a
        href={`/app/${record.appId}/publishing?mainBranchId=${record.appId}&integrationId=${record.integrationRelations[0].integrationId}`}
      >
        {text}
      </a>
    ),
  },
  {
    dataIndex: ['masterBranch', 'app', 'name'],
    ellipsis: true,
    title: '所属应用/分支',
    render: (text, record: ChangeItem) => (
      <div>
        <a href={`/app/${record.appId}`}>{text}</a>
        <div className={styles.component_copy}>
          <div className="children">
            <a href={record.gitWebURL}>
              <span>{record.branch}</span>
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 150,
    render: (text) => `${dayjs(text).fromNow()}`,
  },
  {
    title: '部署状态',
    dataIndex: 'statusText',
    render: (text, record: ChangeItem) => (
      <a href={`/app/${record.appId}/publish-history`}>
        <div className={styles['tag-container']}>
          {record.integrationStates.map((state) => (
            <div key={state.env} className={styles['tag']}>
              <Tag
                color={state.env === 'FAT' ? 'orange' : state.env === 'UAT' ? 'blue' : 'green'}
                className={styles['tag-left']}
              >
                {state.env}
              </Tag>
              <Tag className={styles['tag-right']}>{state.version}</Tag>
            </div>
          ))}
        </div>
      </a>
    ),
  },
  {
    fixed: 'right',
    key: 'action',
    title: '操作',
    render: (text, record: ChangeItem) => {
      return (
        <Space align="center" wrap={true} size="small">
          {record.actions.map((action) => (
            <Space.Compact key={action.name}>
              {action.name === 'add-intergration' ? (
                <Dropdown
                  menu={{
                    items: record.masterBranch.integrations.map((item) => ({
                      label: `${item.name}${
                        record.integrationRelations.map((e) => e.integrationId).includes(item.id)
                          ? '(已加入)'
                          : ''
                      }`,
                      key: item.id,
                    })),
                  }}
                >
                  <Button type="link">{action.label}</Button>
                </Dropdown>
              ) : (
                <Button type="link">{action.label}</Button>
              )}
            </Space.Compact>
          ))}
        </Space>
      );
    },
  },
];

const Workspace: React.FC = () => {
  const [dataSource, setDataSource] = useState<ChangeItem[]>([]);

  useEffect(() => {
    getChanges().then(({ data }) => {
      console.log(data.data);
      setDataSource(data.data);
    });
  }, []);

  return (
    <PageContainer
      header={{
        title: '工作区',
        style: { backgroundColor: '#fff' },
        extra: [
          <Button key="1" type="primary">
            创建应用
          </Button>,
        ],
      }}
    >
      <GridContent style={{ paddingTop: '20px' }}>
        <div className={styles.home}>
          <div className={styles.main}>
            <Card
              title="进行中的变更"
              extra={<Button type="link">创建变更</Button>}
              style={{ marginBottom: '24px' }}
            >
              <Table rowKey="id" dataSource={dataSource} columns={columns} />
            </Card>
            <Card title="动态">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className={styles.right}>
            <Applications />
          </div>
        </div>
      </GridContent>
    </PageContainer>
  );
};

export default Workspace;
