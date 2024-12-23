import { Form, DatePicker } from 'antd';
import dayjs from 'dayjs';

export const DateField: React.FC<{ name: string }> = ({ name }) => (
  <Form.Item
    name={name}
    label="Дата рождения"
    rules={[
      {
        required: true,
        message: 'Укажите дату рождения',
      },
      {
        validator: (_, value) =>
          value && dayjs().diff(value, 'years') < 18
            ? Promise.reject('Пользователь должен быть старше 18 лет')
            : Promise.resolve(),
      },
    ]}
  >
    <DatePicker format="DD.MM.YYYY" placeholder="Выберите дату" />
  </Form.Item>
);
