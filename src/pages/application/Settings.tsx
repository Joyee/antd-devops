import React from 'react';
import { useOutletContext } from '@umijs/max';
import { Tabs, TabsProps } from 'antd';
import BaseSetting from '@/components/Settings/BaseSetting';
import MultipleBranchSetting from '@/components/Settings/MultipleBranchSetting';
import AdvancedSetting from '@/components/Settings/AdvancedSetting';
import './styles.less';
import { Application } from '@/services/types';

const Settings: React.FC = () => {
  const props = useOutletContext() as Application;
  console.log(props);

  const tabs: TabsProps['items'] = [
    {
      key: 'base',
      label: '基本设置',
      children: (
        <BaseSetting
          gitWebURL={props.gitWebURL}
          devopsTeamId={props.devopsTeamId}
          name={props.name}
          desc={props.desc}
        />
      ),
    },
    {
      key: 'deploy',
      label: '发布设置',
      children: <MultipleBranchSetting />,
    },
    { key: 'goalkeepr', label: '门神设置', children: <div></div> },
    { key: 'advanced', label: '高级设置', children: <AdvancedSetting /> },
  ];

  return (
    <div className="app-detail-settings-container">
      <Tabs tabPosition="left" items={tabs} />
    </div>
  );
};

export default Settings;
