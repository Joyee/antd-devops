import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, Descriptions, Input, List, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './App.less';
import { ApplicationItem } from '@/services/types';
import { getApps } from '@/services/workspace';
import { Link } from '@umijs/max';
import { debounce } from 'lodash-es';

const Application: React.FC = () => {
  const [allApps, setAllApps] = useState<ApplicationItem[]>([]);
  const [apps, setApps] = useState<ApplicationItem[]>([]);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeKey, setActiveKey] = useState('mine');

  const loadApps = async (isRefresh = false) => {
    if (activeKey === 'related') {
      setTotal(0);
      setApps([]);
      setAllApps([]);
      return;
    }
    if (!isRefresh && allApps.length > 0) {
      const data = allApps.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      setApps(data);
      return;
    }
    try {
      const { data, count } = await getApps(activeKey, 100);
      setAllApps(data);
      const result = data.slice(0, pageSize);
      setApps(result);
      setTotal(count);
    } catch (error) {}
  };

  useEffect(() => {
    loadApps();
  }, [activeKey]);

  const onChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
    loadApps();
  };

  const onChangeSearch = debounce((value: string) => {
    const result = allApps.filter((app) => {
      return app.name.includes(value) || app.appCode.includes(value) || app.desc?.includes(value);
    });

    setApps(result);
  }, 500);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    onChangeSearch(e.target.value);
  };

  const onChangeTab = (activeKey: string) => {
    setActiveKey(activeKey);
  };

  const ListItem = (item: ApplicationItem) => {
    return (
      <List.Item>
        <Link to={`/app/${item.id}`}>
          <Card
            className={styles.card}
            size="small"
            title={
              <span className={styles.header}>
                <Avatar
                  className={styles.icon}
                  shape="circle"
                  src={item.template?.icon || item.typeDetail?.icon}
                />
                <span className={styles.title}>{item.name}</span>
              </span>
            }
          >
            <Descriptions
              size="small"
              column={1}
              items={[
                {
                  key: '1',
                  label: '描述',
                  children: (
                    <div className={styles['desc-value']}>{item.desc || '暂无应用描述'}</div>
                  ),
                },
                {
                  key: '2',
                  label: '变更',
                  children: (
                    <Link to={`app/${item.id}/changes`}>{item.changeCount}个进行中的变更</Link>
                  ),
                },
              ]}
            ></Descriptions>
          </Card>
        </Link>
      </List.Item>
    );
  };

  return (
    <PageContainer
      className={styles['app-container']}
      header={{
        style: { backgroundColor: '#fff' },
        ghost: true,
        footer: (
          <Tabs
            defaultActiveKey="mine"
            items={[
              { key: 'mine', label: '我的应用' },
              { key: 'related', label: '与我相关' },
            ]}
            onChange={onChangeTab}
          ></Tabs>
        ),
      }}
      extra={[
        <Button key="create" type="primary">
          创建应用
        </Button>,
      ]}
    >
      <div className={styles.search}>
        <Input
          placeholder="输入应用名称、描述或应用code"
          style={{ width: '300px' }}
          onChange={handleText}
        />
      </div>
      <List
        rowKey="id"
        dataSource={apps}
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 20,
          position: 'bottom',
          align: 'end',
          total,
          showTotal: (count) => `共 ${count}个`,
          showSizeChanger: true,
          onChange,
        }}
        grid={{ column: 5, gutter: 16 }}
        renderItem={ListItem}
      ></List>
    </PageContainer>
  );
};

export default Application;
