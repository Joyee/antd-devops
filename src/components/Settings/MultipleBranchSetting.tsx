import React, { useEffect, useMemo, useState } from 'react';
import { getMasterBranches } from '@/services/application';
import { useParams } from '@umijs/max';
import { BranchIntegrationItem } from '@/services/types';
import { Tabs } from 'antd';
import { requestGetTaskSettingsIntegration } from '@/services/settings';
import { FormProvider, createSchemaField } from '@formily/react';
import { Checkbox, FormItem, FormLayout, Input, Select } from '@formily/antd-v5';
import { createForm } from '@formily/core';
import DomainSetting from './DomainSetting';

const SchemaField = createSchemaField({
  components: {
    Input,
    Select,
    FormItem,
    FormLayout,
    Checkbox,
    DomainSetting,
  },
});

const Container: React.FC = () => {
  const { id } = useParams();
  const [integrations, setIntegrations] = useState<BranchIntegrationItem[]>([]);
  const [activeKey, setActiveKey] = useState('');
  const [flowKey, setFlowKey] = useState('');
  const [schema, setSchema] = useState();
  const [initialValues, setInitialValues] = useState();

  const fetchMasterBranches = async () => {
    if (!id) return;

    try {
      const res = await getMasterBranches(id);

      if (res.data && res.data.length > 0) {
        setIntegrations(res.data[0].integrations);
        setActiveKey(res.data[0].integrations[0].id + '');
        setFlowKey(res.data[0].integrations[0].flowKey);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchMasterBranches();
  }, [id]);

  const onTabClick = (key: string) => {
    setActiveKey(key);
    const found = integrations.find((item) => item.id + '' === key);
    if (found) {
      setFlowKey(found.flowKey);
    }
  };

  useEffect(() => {
    if (!flowKey) return;
    requestGetTaskSettingsIntegration(Number(activeKey), flowKey).then((res) => {
      setSchema(res.schema);
      setInitialValues(res.initialValues);
    });
  }, [flowKey]);

  const form = useMemo(
    () =>
      createForm({
        initialValues,
      }),
    [],
  );

  return (
    <div className="multiple-branch-setting">
      <div className="title">发布设置</div>
      <div>
        <Tabs
          activeKey={activeKey}
          items={integrations.map((item) => ({
            key: item.id + '',
            label: item.name,
            children: (
              <FormProvider form={form}>
                <SchemaField schema={schema} />
              </FormProvider>
            ),
          }))}
          onTabClick={onTabClick}
        />
      </div>
    </div>
  );
};

export default Container;
