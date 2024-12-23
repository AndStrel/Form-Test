import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

export const GenderSelectField: React.FC<{ name: string }> = ({ name }) => (
  <Form.Item
    name={name}
    label="Пол"
    rules={[{ required: true, message: 'Выберите пол' }]}
  >
    <Select placeholder="Выберите пол">
      <Option value="Мужской">Мужской</Option>
      <Option value="Женский">Женский</Option>
    </Select>
  </Form.Item>
);
