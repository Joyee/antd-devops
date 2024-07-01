import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { formatTimeToRelativeTime } from '@/utils';
import { getPublishLogs, type PublishLogItem } from '@/services/publish-history';
import { useParams } from '@umijs/max';
import './styles.less';
import CommonTag from '@/components/CommonTag';

const PublishingHistory = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataSource, setDataSource] = useState<PublishLogItem[]>([]);
  const [total, setTotal] = useState(0);

  const onChange = (current: number, pageSize: number) => {
    setCurrent(current);
    setPageSize(pageSize);
  };

  const onClickDetail = (bizKey: string) => {
    console.log('bizKey: ' + bizKey);
  };

  const onClickRollback = (id: number) => {
    console.log('id: ' + id);
  };

  const columns: TableColumnsType = [
    {
      dataIndex: 'createdAt',
      title: '发布时间',
      render: (text) => `${formatTimeToRelativeTime(text)}`,
    },
    { dataIndex: 'name', title: '操作类型' },
    { dataIndex: 'masterBranch', title: '主干分支' },
    { dataIndex: 'env', title: '环境', render: (env: string) => <CommonTag env={env} /> },
    { dataIndex: ['context', 'integrationName'], title: '集成区' },
    { dataIndex: ['context', 'version'], title: '版本号' },
    {
      dataIndex: 'creator',
      title: '变更信息',
      render: (text, record: PublishLogItem) => {
        return record.context.changes.map(
          (change) => `${change.creator}-${change.name}:${change.branch}`,
        );
      },
    },
    {
      dataIndex: ['context', 'bizKey'],
      title: '详情',
      render: (_) => (
        <Button
          type="link"
          onClick={() => onClickDetail(_)}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          详情
        </Button>
      ),
    },
    {
      dataIndex: 'creatorUser',
      title: '发布人',
      render: (text, record: PublishLogItem) => (
        <Button type="link" href="#" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {record.creatorUser.nickName}
        </Button>
      ),
    },
    {
      dataIndex: 'id',
      title: '操作',
      render: (_) => (
        <Button
          type="link"
          onClick={() => onClickRollback(_)}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          回滚
        </Button>
      ),
    },
  ];

  const fetchPublishLogs = async () => {
    if (!id) return;

    try {
      const res = await getPublishLogs(id, current, pageSize);

      setTotal(res.count);
      setDataSource(res.rows);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPublishLogs();
  }, [id]);

  return (
    <div className="app-detail-publish-history-container">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current,
          pageSize: 10,
          onChange,
          total,
        }}
      />
    </div>
  );
};

export default PublishingHistory;
