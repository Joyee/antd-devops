import { Tag } from 'antd';
import { envColor } from '@/utils/common';

export default ({ env = 'DEV' }) => <Tag color={envColor[env]}>{env}</Tag>;
