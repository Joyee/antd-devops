import React from 'react';
import Layout from './Layout';
import './styles.less';
import { Card } from 'antd';
import { Application } from '@/services/types';
import { Link } from '@umijs/max';
import { formatTimeToRelativeTime } from '@/utils';

const BaseInfo = (props: Application) => {
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
      value: () => (
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
      value: `${formatTimeToRelativeTime}(${props.createdAt})`,
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
    },
  ];

  const CardItem = (item) => {
    return <div className="card-item"></div>;
  };

  return (
    <Layout>
      <div className="card-content">
        <Card><CardItem /></Card>
      </div>
    </Layout>
  );
};

export default BaseInfo;
