import React, { useState } from 'react';
import { Form, Select, Spin } from 'antd';
import { getUsers } from '@utils/api/users';

const { Option } = Select;

interface UserSelectFieldProps {
  name: string;
}

export const UserSelectField: React.FC<UserSelectFieldProps> = ({ name }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async (search: string) => {
    setLoading(true);
    try {
      const { data } = await getUsers(1); // Пока без поиска, добавим позже
      setUsers(data);
    } catch (error) {
      console.error('Ошибка загрузки пользователей:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form.Item
      name={name}
      label="Пользователь"
      rules={[{ required: true, message: 'Выберите пользователя' }]}
    >
      <Select
        showSearch
        placeholder="Выберите пользователя"
        filterOption={false}
        onSearch={fetchUsers}
        loading={loading}
        notFoundContent={loading ? <Spin size="small" /> : 'Ничего не найдено'}
      >
        {users.map((user: any) => (
          <Option key={user.id} value={user.id}>
            {`${user.last_name} ${user.first_name[0]}.`}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};
