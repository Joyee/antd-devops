import { PageContainer, GridContent } from '@ant-design/pro-components';
import { Button } from 'antd';
import React from 'react';

const Workspace: React.FC = () => {
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
      <GridContent>
        <div>
          <div className="main">Main</div>
          <div className="right">Right</div>
        </div>
      </GridContent>
    </PageContainer>
  );
};

export default Workspace;
