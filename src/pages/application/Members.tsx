import React, { useEffect, useState } from 'react';
import { Table, Tag, type TableColumnProps } from 'antd';
import { useParams } from '@umijs/max';
import { getAppMembers, type MemberItem } from '@/services/member';
import { formatTimeToRelativeTime } from '@/utils';
import './styles.less';
import { myEmpNo } from '@/utils/common';

const Members = () => {
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
    { dataIndex: 'role', title: '角色', render: (text) => '' },
  ];

  const [dataSource, setDataSource] = useState<MemberItem[]>([]);
  // const [total, setTotal] = useState(0);

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
      console.log(memebers);
      setDataSource(memebers);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMembers();
  }, [id]);

  return (
    <div className="app-detail-members-container">
      <Table columns={columns} dataSource={dataSource} rowKey="id" />
    </div>
  );
};

export default Members;
