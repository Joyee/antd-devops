// // import { FormItem, FormLayout } from '@formily/antd-v5';
// import { Checkbox, FormItem } from '@formily/antd-v5';
// import { createForm } from '@formily/core';
// import { createSchemaField, useFieldSchema } from '@formily/react';
import { Card } from 'antd';
import React from 'react';

// const SchemaField = createSchemaField({
//   components: {
//     Checkbox,
//     FormItem,
//   },
// });

const ObjectCard: React.FC = (props) => {
  // const schema = useFieldSchema();
  // const form = createForm();
  return <Card>{props.children}</Card>;
};

export default ObjectCard;
