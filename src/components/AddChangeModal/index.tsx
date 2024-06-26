import {
  ModalForm,
  ProFormText,
  ProFormSelect,
  ProFormRadio,
  ProFormDependency,
} from '@ant-design/pro-components';
import { Form } from 'antd';
import { useEffect, useState } from 'react';
import './style.less';
import { useParams } from '@umijs/max';
import { getMasterBranches } from '@/services/application';
import { getApps } from '@/services/workspace';

export default ({
  visible,
  onVisible,
  appName,
}: {
  visible: boolean;
  onVisible: (value: boolean) => void;
  appName: string;
}) => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [gitBranches] = useState([]);
  const [showVisible, setShowVisible] = useState(false);
  const [masterBranch, setMasterBranch] = useState<{ label: string; value: number }[]>([]);

  const onFinishAdd = async (values: any) => {
    console.log(values);
    return true;
  };

  useEffect(() => {
    if (visible) {
      setShowVisible(true);
    }
  }, [visible, id]);

  const requestForm = async () => {
    if (!id) return;
    try {
      const apps = await getApps({ appTypeCode: 'app', pageSize: 100, current: 1 });
      console.log('apps:');
      console.log(apps);
      const currentApp = apps.data.find((item) => item.id + '' === id + '');

      const res = await getMasterBranches(id);
      console.log('branches');
      console.log(res);
      const branches = res.data.map((branch) => ({ label: branch.name, value: branch.id }));
      setMasterBranch(branches);
      return {
        appId: currentApp ? currentApp.name : '',
        name: '',
        masterBranch: branches.length > 0 ? branches[0].value : '',
        branchType: 'create',
      };
    } catch (error) {}
  };

  return (
    <ModalForm
      open={showVisible}
      title="创建变更"
      form={form}
      modalProps={{
        destroyOnClose: false,
        onCancel: () => {
          setShowVisible(false);
          onVisible(false);
        },
      }}
      onFinish={onFinishAdd}
      onOpenChange={onVisible}
      layout="horizontal"
      {...{ labelCol: { span: 4 }, wrapperCol: { span: 14 } }}
      request={requestForm}
    >
      <ProFormText readonly name="appId" label="所属应用" />
      <ProFormText required name="name" label="变更名称" placeholder="请输入变更名称" />
      <ProFormSelect
        required
        name="masterBranch"
        label="主干分支"
        fieldProps={{ allowClear: false }}
        options={masterBranch}
      />
      <ProFormRadio.Group
        required
        name="branchType"
        label="分支类型"
        options={[
          {
            label: '新建分支',
            value: 'create',
          },
          {
            label: '关联分支',
            value: 'ref',
          },
        ]}
      ></ProFormRadio.Group>
      <ProFormDependency name={['branchType']}>
        {({ branchType }) => {
          return branchType === 'ref' ? (
            <ProFormSelect
              required
              name="branch"
              label="变更分支"
              options={gitBranches}
              extra={<p>请确保要关联分支已经合并过主干（master）最新commit</p>}
            />
          ) : (
            <ProFormText
              required
              name="branch"
              label="变更分支"
              fieldProps={{ prefix: 'feature/' }}
              extra={<p>请确保要关联分支已经合并过主干（master）最新commit</p>}
            />
          );
        }}
      </ProFormDependency>
    </ModalForm>
  );
};
