import { Link } from '@umijs/max';
import { Avatar, Button, Card, List } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './styles.less';
import { getApps } from '@/services/workspace';
import type { ApplicationItem } from '@/services/types';

const Applications: React.FC = () => {
  const [apps, setApps] = useState<ApplicationItem[]>([]);

  const getMyApps = async () => {
    try {
      const res = await getApps('mine');

      setApps(res.data.slice(0, 20));
    } catch (error) {}
  };

  useEffect(() => {
    getMyApps();
  }, []);

  return (
    <Card
      title="我的应用"
      className={styles['my-app']}
      extra={
        <>
          <Link to="/app/create">
            <Button type="link">创建应用</Button>
          </Link>
          <Link to="/app">
            <Button type="link">全部应用</Button>
          </Link>
        </>
      }
      style={{ width: 300 }}
    >
      <List
        rowKey="id"
        dataSource={apps}
        renderItem={(item: ApplicationItem) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar shape="circle" style={{ backgroundColor: 'rgb(153,153,153)' }}>
                  {item.name.slice(0, 1)}
                </Avatar>
              }
              title={
                <Link to={`/app/${item.id}`}>
                  <Button type="link" className={styles['extra-btn']}>
                    {item.name}
                  </Button>
                </Link>
              }
              description={`${item.changeCount}个进行中的变更`}
            />
          </List.Item>
        )}
      ></List>
    </Card>
  );
};

export default Applications;
