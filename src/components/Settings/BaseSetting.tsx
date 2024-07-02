import { Button, Divider, Form, Input, Select, SelectProps } from 'antd';
import { useEffect, useState } from 'react';
import { requestGetBizDomains } from '@/services/settings';
import { Link } from '@umijs/max';

export default ({
  gitWebURL,
  devopsTeamId,
  name,
  desc,
}: {
  gitWebURL: string;
  devopsTeamId: string;
  name: string;
  desc: string;
}) => {
  const [domains, setDomains] = useState<SelectProps['options']>([]);

  const fetchDomains = async () => {
    try {
      const res = await requestGetBizDomains({ pageNum: 1, pageSize: 500, select: true });

      const data = res.data.map((item) => ({ label: item.teamName, value: item.devopsId }));
      setDomains(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className="base-setting">
      <div className="title">基本设置</div>
      <Divider />
      <Form
        initialValues={{
          gitWebURL,
          devopsTeamId,
          name,
          desc,
        }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
      >
        <Form.Item label="仓库地址" name="gitWebURL">
          <div className="component-gitlab-address-root">
            <Link to={gitWebURL} target="_blank">
              {gitWebURL}
            </Link>
          </div>
        </Form.Item>
        <Form.Item required label="业务域" name="devopsTeamId">
          <Select options={domains} disabled defaultValue={devopsTeamId}></Select>
        </Form.Item>
        <Form.Item required label="名称" name="name">
          <Input defaultValue={name} />
        </Form.Item>
        <Form.Item label="描述" name="desc">
          <Input.TextArea defaultValue={desc} autoSize={{ minRows: 2 }} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
