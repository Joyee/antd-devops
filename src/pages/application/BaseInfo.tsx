import React, { useEffect, useState } from 'react';
import './styles.less';
import { Card, Space, Table, TablePaginationConfig } from 'antd';
import { Link, useOutletContext } from '@umijs/max';
import { formatTimeToRelativeTime } from '@/utils';
import type { Application, EventLogItem } from '@/services/types';
import dayjs from 'dayjs';
import { getEventLogs, getTemplatesById } from '@/services/workspace';
import DynamicLog from '@/components/DynamicLog';

const MAX_PAGE_SIZE = 5;

const BaseInfo = () => {
  const props = useOutletContext() as Application;

  const [templateName, setTemplateName] = useState('');
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(MAX_PAGE_SIZE);
  const [logs, setLogs] = useState<EventLogItem[]>([]);
  const [total, setTotal] = useState(0);

  const items = [
    {
      label: '应用描述',
      value: props.desc || '暂无应用描述',
    },
    {
      label: '所属租户',
      value: '新奥新智',
    },
    {
      label: '仓库地址',
      value: (
        <div className="component-gitlab-address-root">
          <Link to={props.gitHTTPURL} target="_blank">
            <span>{props.gitHTTPURL}</span>
          </Link>
        </div>
      ),
    },
    {
      label: '创建人',
      value: props.creatorDetail?.nickName,
    },
    {
      label: '创建时间',
      value: `${formatTimeToRelativeTime(props.createdAt)}(${dayjs(
        new Date(props.createdAt),
      ).format('YYYY-MM-DD HH:mm:ss')})`,
    },
    {
      label: '发布类型',
      value: 'PC / 应用',
    },
    {
      label: '多主干发布',
      value: '否',
    },
    {
      label: 'AppCode',
      value: 'matter-evaluation-admin',
    },
    {
      label: '模板信息',
      value: templateName || '',
    },
  ];

  const CardItem = ({ label, value }: { label: string; value?: any }) => {
    return (
      <div className="card-item">
        <div className="card-item-label">{label}</div>
        <div className="card-item-value">{value}</div>
      </div>
    );
  };

  async function loadEventLogs() {
    try {
      const logs = await getEventLogs(current, pageSize, props.id, false);
      setLogs(logs.rows || []);
      setTotal(logs.count);
    } catch (error) {}
  }

  useEffect(() => {
    if (!props.templateId) return;
    getTemplatesById(props.templateId).then((res) => {
      setTemplateName(res.name);
    });
  }, [props?.templateId]);

  const onChange = (pagination: TablePaginationConfig) => {
    setCurrent(pagination?.current || 1);
    setPageSize(pagination?.pageSize || MAX_PAGE_SIZE);
  };

  useEffect(() => {
    loadEventLogs();
  }, [current, pageSize]);

  return (
    <div className="app-detail-baseinfo-container">
      <Card className="card-wrap" title={props.name}>
        <div className="card-content">
          {items.map((item) => (
            <CardItem key={item.label} {...item} />
          ))}
        </div>
      </Card>
      <div style={{ width: '25vw' }}>
        <Card title="动态">
          <Table
            columns={[
              {
                dataIndex: ['content'],
                render: (text, record: EventLogItem) => {
                  return (
                    <>
                      <span>{formatTimeToRelativeTime(record.createdAt)}</span>&nbsp;
                      <Space size={8}>
                        <Link to={'#'}>{record.creatorUser.nickName}</Link>
                      </Space>
                      <br />
                      {record.context ? <DynamicLog {...record} /> : <span>{record.content}</span>}
                    </>
                  );
                },
              },
            ]}
            rowKey="id"
            pagination={{ total, showSizeChanger: false, pageSize, position: ['bottomCenter'] }}
            showHeader={false}
            onChange={onChange}
            dataSource={logs}
          />
        </Card>
      </div>
    </div>
  );
};

export default BaseInfo;
