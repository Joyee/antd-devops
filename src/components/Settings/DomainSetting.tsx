// import { useField, useForm } from '@formily/react';
import { Alert, Button, Form, Input, Select, Space, Tag } from 'antd';
import React from 'react';
import styles from './style.less';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from '@umijs/max';

const options = [
  { label: '通用域名', value: 'common' },
  { label: '共享域名', value: 'share' },
  { label: '自定义域名', value: 'custom' },
];

const domainOptions = [
  {
    id: 5,
    tenantId: '1369923265280311297',
    domain: 'air.fat.ennew.com',
    type: 'common',
    description: '',
    env: 'fat',
    owner: '1440360216018718722',
    isCDN: false,
    isDefault: true,
    deletedAt: null,
    createdAt: '2022-09-13T09:16:54.000Z',
    updatedAt: '2022-09-13T09:16:54.000Z',
    value: 'air.fat.ennew.com',
    label: ':air.fat.ennew.com',
  },
  {
    id: 6,
    tenantId: '1369923265280311297',
    domain: 'air-inc.fat.ennew.com',
    type: 'common',
    description: '',
    env: 'fat',
    owner: '1440360216018718722',
    isCDN: false,
    isDefault: false,
    deletedAt: null,
    createdAt: '2022-09-13T09:16:54.000Z',
    updatedAt: '2022-09-13T09:16:54.000Z',
    value: 'air-inc.fat.ennew.com',
    label: ':air-inc.fat.ennew.com',
  },
];

const colorAndText: Record<string, { color: string; label: string }> = {
  online: {
    color: 'green',
    label: '已上线',
  },
  add: { color: 'orange', label: '待保存' },
  onlinewaitting: { color: 'cyan', label: '待上线' },
};

const DomainSetting: React.FC = (props) => {
  // const field = useField();
  // const form = useForm();
  // const { address } = field.getState();
  const { value } = props;
  return (
    <div className="template">
      {value && Array.isArray(value)
        ? value.map((item) => (
            <>
              <Form.Item key={item.id} className={styles['domain-item-wrap']}>
                <Space className={styles['domain-item-container']} size={8}>
                  <Select
                    disabled={!item.editable}
                    defaultValue={item.type}
                    options={options}
                  ></Select>
                  <Select
                    disabled={!item.editable}
                    defaultValue={item.domain}
                    options={domainOptions}
                  ></Select>
                  <Input
                    style={{ width: 300 }}
                    disabled={!item.editable}
                    addonBefore="应用路径"
                    defaultValue={item.webPath}
                  />
                  <Space size={8}>
                    <div style={{ width: '60px' }}>
                      <Tag color={colorAndText[item.state].color}>
                        {colorAndText[item.state].label}
                      </Tag>
                      {item.isCDN ? <Tag color="green">CDN</Tag> : null}
                    </div>
                    <Button size={'small'} danger={item.state === 'online'}>
                      {item.state === 'online' ? '下线' : item.state === 'add' ? '保存' : '上线'}
                    </Button>
                  </Space>
                </Space>
              </Form.Item>
            </>
          ))
        : null}
      <Space align={'center'} size={8}>
        <Form.Item>
          <Button icon={<PlusOutlined />}>添加域名</Button>
        </Form.Item>
      </Space>
      <Space align={'center'} size={8}>
        <Link to="#">域名解析设置说明</Link>
        <Link to="#">域名解析设置说明</Link>
      </Space>
      <Alert
        type="info"
        message="未配置域名时，部署将会使用默认域名。未配置域名且租户下无默认域名，将无法部署。自定义域名非PRO环境，域名审核5分钟内生效"
      ></Alert>
    </div>
  );
};

export default DomainSetting;
