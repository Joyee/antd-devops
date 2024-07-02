import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  type TableColumnProps,
} from 'antd';
import { useParams } from '@umijs/max';
import { getAppMembers, type MemberItem } from '@/services/member';
import { formatTimeToRelativeTime } from '@/utils';
import './styles.less';
import { myEmpNo } from '@/utils/common';

const roleTextMap: Record<string, string> = {
  developer: '开发者',
  admin: '管理员',
  tester: '测试',
};

const roleColorMap: Record<string, string> = {
  developer: 'blue',
  admin: 'gold',
  tester: 'green',
};

const roleOptions = [
  { label: '管理员', value: 'admin' },
  { label: '开发者', value: 'developer' },
  { label: '测试', value: 'tester' },
];

type FieldType = {
  userId: string;
  role: string;
  syncGitlabRole: boolean;
};

const Members: React.FC = () => {
  const onDeleteRole = (e: React.MouseEvent<HTMLElement>, role: string, id: number) => {
    e.preventDefault();
    console.log(`删除用户${id}的角色${role}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickAction = (name: string) => {
    console.log(`操作${name}`);
    switch (name) {
      case 'add-member':
        setIsModalOpen(true);
        break;
    }
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: TableColumnProps<any>[] = [
    {
      dataIndex: ['user', 'nickName'],
      title: '成员名称',
      render: (text, record: MemberItem) => {
        return (
          <>
            {text}
            {record.isOwner ? (
              record.user.empNo !== myEmpNo ? (
                <Tag color="red">owner</Tag>
              ) : (
                '(自己)'
              )
            ) : null}
          </>
        );
      },
    },
    {
      dataIndex: 'lastPublishAt',
      title: '最后发布时间',
      render: (text) => `${text ? formatTimeToRelativeTime(text) : '90日内无发布'}`,
    },
    {
      dataIndex: 'createdAt',
      title: '加入时间',
      render: (text) => `${formatTimeToRelativeTime(text)}`,
    },
    {
      dataIndex: 'role',
      title: '角色',
      render: (roleText: MemberItem['roleText'], record: MemberItem) =>
        roleText.map((text) => (
          <Tag
            key={text}
            color={roleColorMap[text]}
            closeIcon
            onClose={(e) => onDeleteRole(e, text, record.user.id)}
          >
            {roleTextMap[text]}
          </Tag>
        )),
    },
  ];

  const [dataSource, setDataSource] = useState<MemberItem[]>([]);
  // const [total, setTotal] = useState(0);
  const [actions, setActions] = useState<
    {
      name: string;
      label: string;
      description: string;
    }[]
  >([]);

  const { id } = useParams();

  const fetchMembers = async () => {
    if (!id) return;

    try {
      const data = await getAppMembers(id);
      // setTotal(data.count);
      const memebers = data.data
        .filter((item) => item.user.empNo !== myEmpNo)
        .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

      const found = data.data.find((item) => item.user.empNo === myEmpNo);
      if (found) {
        memebers.unshift(found);
      }
      setDataSource(memebers);
      setActions(data.actions);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMembers();
  }, [id]);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log(values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="app-detail-members-container">
      <Space className="header-container" size={8}>
        {actions.map((action) => (
          <Button key={action.name} type="primary" onClick={() => onClickAction(action.name)}>
            {action.label}
          </Button>
        ))}
      </Space>
      <Table columns={columns} dataSource={dataSource} rowKey="id" />

      <Modal title="添加应用成员" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType> label="用户" required name="userId">
            <Input placeholder="请输入itcode或者姓名搜索用户" />
          </Form.Item>
          <Form.Item<FieldType> label="成员角色" required name="role">
            <Select options={roleOptions}></Select>
          </Form.Item>
          <Form.Item<FieldType>
            label=" "
            name="syncGitlabRole"
            extra="管理员对应 Maintainer 角色，开发者对应 Developer 角色。"
            colon={false}
            valuePropName="checked"
          >
            <Checkbox defaultChecked>同时赋予Gitlab权限</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Members;
