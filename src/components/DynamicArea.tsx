import { getEventLogs } from '@/services/workspace';
import { Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from '@umijs/max';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { EventLogItem } from '@/services/types';

dayjs.extend(relativeTime);

const envColor: Record<string, string> = {
  DEV: 'magenta',
  FAT: 'orange',
  UAT: 'blue',
  PRO: 'green',
};

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
        return record.context ? (
          <>
            <span>在应用&nbsp;</span>
            <Link to={`/app/${record.appId}`}>
              {record.app.name}({record.app?.appCode})
            </Link>
            &nbsp;部署完成，
            <span>
              环境：<Tag color={envColor[record.context?.env]}>{record.context?.env}</Tag>
              版本：<Tag>{record.context?.version}</Tag>
            </span>
            <Link to={record.context?.webURL}>应用预览</Link>
          </>
        ) : (
          <span>{record.content}</span>
        );
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
