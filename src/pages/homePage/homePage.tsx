import UserForm from '@components/forms/UserForm';
import { HomePageUI } from '@ui/pages';
import { TUser } from 'types/types';

export const HomePage: React.FC = () => {
  const handleLogin = () => {};

  return (
    <>
      <HomePageUI
        title="Главная страница"
        description="Добро пожаловать!"
        handleLogin={handleLogin}
      />
      <UserForm
        onSubmit={function (values: TUser): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
};
