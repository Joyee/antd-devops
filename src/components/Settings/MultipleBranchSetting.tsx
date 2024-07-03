import React, { useEffect, useMemo, useState } from 'react';
import { getMasterBranches } from '@/services/application';
import { useParams } from '@umijs/max';
import { BranchIntegrationItem } from '@/services/types';
import { Tabs, Form as AntdForm, Input as AntdInput } from 'antd';
import { requestGetTaskSettingsIntegration } from '@/services/settings';
import { FormProvider, createSchemaField } from '@formily/react';
import { Checkbox, Form, FormItem, FormLayout, Input, Select } from '@formily/antd-v5';
import { createForm, onFieldMount } from '@formily/core';
import DomainSetting from './DomainSetting';
import ObjectCard from './ObjectCard';

const SchemaField = createSchemaField({
  components: {
    Input,
    Select,
    Form,
    FormItem,
    FormLayout,
    Checkbox,
    DomainSetting,
    ObjectCard,
  },
});

const Container: React.FC = () => {
  const { id } = useParams();
  const [integrations, setIntegrations] = useState<BranchIntegrationItem[]>([]);
  const [activeKey, setActiveKey] = useState('');
  const [flowKey, setFlowKey] = useState('');
  const [schema, setSchema] = useState<Record<string, any>>();
  const [initialValues, setInitialValues] = useState<Record<string, any>>();

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

  function recursive(obj: Record<string, any>) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          obj[key]['x-decorator'] = 'FormItem';
        }
        if (obj[key].hasOwnProperty('type')) {
          if (!obj[key].hasOwnProperty('x-decorator')) {
            obj[key]['x-decorator'] = 'FormItem';
          }

          if (obj[key].type === 'boolean') {
            obj[key]['x-component'] = 'Checkbox';
          } else if (obj[key].type === 'string') {
            obj[key]['x-component'] = 'Input';
          }
        }

        if (typeof obj[key] === 'object' && obj[key] !== null) {
          recursive(obj[key]);
        }
        if (key === 'gold-keeper-runtime-check__envs') {
          obj[key]['x-component'] = 'ObjectCard';
        }
      }
    }
  }

  useEffect(() => {
    if (!flowKey) return;
    requestGetTaskSettingsIntegration(Number(activeKey), flowKey).then((res) => {
      setInitialValues(res.initialValues);
      recursive(res.schema);
      setSchema(res.schema);
    });
  }, [flowKey]);

  const form = useMemo(
    () =>
      createForm({
        effects() {
          if (initialValues) {
            Object.keys(initialValues).forEach((key) => {
              onFieldMount(key, (field) => {
                const { address } = field.getState();
                field.setValue(initialValues[address as string]);
              });
            });
          }
        },
      }),
    [initialValues],
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
                <AntdForm labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <AntdForm.Item required label="集成区名称" name="name">
                    <AntdInput defaultValue="发布集成" />
                  </AntdForm.Item>
                  <AntdForm.Item required label="集成区流程" name="flowName">
                    <AntdInput defaultValue="Air应用FAT-UAT-PRO流程" />
                  </AntdForm.Item>
                </AntdForm>
                <Form labelCol={4} wrapperCol={16}>
                  <SchemaField schema={schema} />
                </Form>
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
