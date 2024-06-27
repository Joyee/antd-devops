import React, { useState, useEffect } from 'react';
import { useParams, useOutletContext } from '@umijs/max';
import { Button, Dropdown, Space, Table, TableColumnType } from 'antd';
import { getAppChangesById } from '@/services/application';
import './styles.less';
import type { Application, ChangeActionItem, ChangeItem } from '@/services/types';
import { formatTimeToRelativeTime } from '@/utils';
import AddChangeModal from '@/components/AddChangeModal';

const Changes = () => {
  const props = useOutletContext() as Application;
  const { id } = useParams();

  const columns: TableColumnType<any>[] = [
    {
      dataIndex: 'name',
      title: '变更名称',
    },
    {
      dataIndex: 'branch',
      title: '变更分支',
      render: (text, record: ChangeItem) => (
        <Button type="link" onClick={() => window.open(record.gitWebURL, '_blank')}>
          {text}
        </Button>
      ),
    },
    {
      dataIndex: ['creatorUser', 'nickName'],
      title: '创建人',
    },
    {
      dataIndex: 'createdAt',
      title: '创建时间',
      render: (text) => `${formatTimeToRelativeTime(text)}`,
    },
    {
      dataIndex: 'statusText',
      title: '变更状态',
    },
    {
      key: 'action',
      title: '操作',
      render: (_, record: ChangeItem) => (
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
      ),
    },
  ];
  const [changesList, setChangesList] = useState<ChangeItem[]>([]);
  const [actions, setActions] = useState<ChangeActionItem[]>([]);

  async function fetchChanges(appId: string) {
    try {
      const data = await getAppChangesById(appId);

      setActions(data.actions);
      setChangesList(data.data);
    } catch (error) {}
  }

  useEffect(() => {
    if (!id) return;
    fetchChanges(id);
  }, [id]);

  const [modalVisible, setModalVisible] = useState(false);

  const onClickBtn = (name: string) => {
    switch (name) {
      case 'create-change':
        setModalVisible(true);
        break;
    }
  };

  return (
    <div className="app-detail-changes-container">
      <div className="action-wrapper">
        {actions &&
          actions.length &&
          actions.map((action) => (
            <Button key={action.name} type="primary" onClick={() => onClickBtn(action.name)}>
              {action.label}
            </Button>
          ))}
      </div>
      <Table columns={columns} dataSource={changesList} />

      <AddChangeModal
        visible={modalVisible}
        onVisible={(value: boolean) => setModalVisible(value)}
        appName={props.name}
      />
    </div>
  );
};

export default Changes;
