import React from 'react';
import { useOutletContext } from '@umijs/max';

const Changes = () => {
  const props = useOutletContext();

  return <div>变更列表</div>;
};

export default Changes;
