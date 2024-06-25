import { getEventLogs } from '@/services/workspace';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { EventLogItem } from '@/services/types';
import DynamicLog from './DynamicLog';

dayjs.extend(relativeTime);

const DynamicArea: React.FC = () => {
  const [dataSource, setDataSource] = useState<EventLogItem[]>([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const columns: ColumnsType = [
    {
      title: '时间',
      dataIndex: 'createdAt',
      width: 150,
      render: (text) => `${dayjs(text).fromNow()}`,
    },
    { title: '用户', dataIndex: ['creatorUser', 'nickName'], width: 150 },
    {
      title: '内容',
      dataIndex: ['content'],
      render: (text, record: EventLogItem) => {
        return record.context ? <DynamicLog {...record} /> : <span>{record.content}</span>;
      },
    },
  ];

  const loadEventLogs = async () => {
    try {
      const res = await getEventLogs(current, pageSize);

      setDataSource(res.rows);
      setTotal(res.count);
    } catch (error) {}
  };

  const onChange = (pagination: TablePaginationConfig) => {
    setCurrent(pagination?.current || 1);
    setPageSize(pagination?.pageSize || 10);
  };

  useEffect(() => {
    loadEventLogs();
  }, [current, pageSize]);

  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      columns={columns}
      pagination={{ position: ['bottomRight'], total }}
      showHeader={false}
      onChange={onChange}
    ></Table>
  );
};

export default DynamicArea;
