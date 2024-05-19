import React from 'react';
import { Input } from 'antd';

export const InputField = ({ name, type, value, onChange }) => {
  return <Input name={name} type={type} value={value} onChange={onChange} />;
};
