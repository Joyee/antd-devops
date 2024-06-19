import { getEventLogs } from '@/services/workspace';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from '@umijs/max'
import { EventLogContextItem } from '@/services/types'

dayjs.extend(relativeTime);

const DynamicArea: React.FC = () => {
  const [dataSource] = useState([]);

  const columns: ColumnsType = [
    { title: '时间', dataIndex: 'createdAt', render: (text) => `${dayjs(text).fromNow()}` },
    { title: '用户', dataIndex: ['creator', 'nickName'] },
    { title: '内容', dataIndex: ['content'], render: (text, record: EventLogContextItem) => {
      return (<><span>在应用&nbsp;</span><Link to={`/app/${record.appId}`}></Link></>)
    } },
  ];

  const loadEventLogs = async () => {
    try {
      const res = await getEventLogs();
      console.log(res);
    } catch (error) {}
  };

  const onChange = (pagination) => {
    console.log(pagination);
  };

  useEffect(() => {
    loadEventLogs();
  }, []);

  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      columns={columns}
      pagination={{ position: ['bottomRight'] }}
      showHeader={false}
      onChange={onChange}
    ></Table>
  );
};

export default DynamicArea;
