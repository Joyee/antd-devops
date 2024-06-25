import { EventLogItem } from '@/services/types';
import { envColor } from '@/utils/common';
import { Link } from '@umijs/max';
import { Tag } from 'antd';

export default function DynamicLog(record: EventLogItem) {
  return (
    <>
      <span>在应用&nbsp;</span>
      <Link to={`/app/${record.appId}`}>
        {record.app.name}({record.app?.appCode})
      </Link>
      &nbsp;部署完成，
      <span>
        环境：<Tag color={envColor[record.context?.env]}>{record.context?.env}</Tag>
        版本：<Tag>{record.context?.version}</Tag>
      </span>
      <Link to={record.context?.webURL}>应用预览</Link>
    </>
  );
}
