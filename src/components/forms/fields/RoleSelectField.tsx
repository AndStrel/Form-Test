import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

interface RoleSelectFieldProps {
  name: string;
  genderField: string;
}

export const RoleSelectField: React.FC<RoleSelectFieldProps> = ({
  name,
  genderField,
}) => (
  <Form.Item
    name={name}
    label="Роль"
    rules={[{ required: true, message: 'Выберите роль' }]}
  >
    <Form.Item
      noStyle
      shouldUpdate={(prev, current) =>
        prev[genderField] !== current[genderField]
      }
    >
      {({ getFieldValue }) => {
        const gender = getFieldValue(genderField);
        return (
          <Select placeholder="Выберите роль">
            <Option value="Доктор">Доктор</Option>
            {gender === 'Мужской' && <Option value="Медбрат">Медбрат</Option>}
            {gender === 'Женский' && (
              <Option value="Медсестра">Медсестра</Option>
            )}
            {!gender && (
              <Option value="Медсестра/Медбрат">Медсестра/Медбрат</Option>
            )}
          </Select>
        );
      }}
    </Form.Item>
  </Form.Item>
);
