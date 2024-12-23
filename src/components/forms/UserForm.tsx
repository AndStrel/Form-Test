import { Form, Button, Input, DatePicker, Select } from 'antd';
import {
  UserSelectField,
  GenderSelectField,
  RoleSelectField,
  DateField,
} from './fields';
import { TUser } from 'types/types';

const { Option } = Select;

interface UserFormProps {
  onSubmit: (values: TUser) => void;
  initialValues?: Partial<TUser>;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
    } catch (error) {
      console.error('Ошибка валидации формы:', error);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={handleSubmit}
    >
      {/* Поле выбора пользователя */}
      <UserSelectField name="user" />

      {/* Пол выбора пола */}
      <GenderSelectField name="gender" />

      {/* Пол выбора роли */}
      <RoleSelectField name="role" genderField="gender" />

      {/* Поле выбора даты */}
      <DateField name="birthdate" />

      {/* Кнопка */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
