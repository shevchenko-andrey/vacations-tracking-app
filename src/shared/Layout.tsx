import { Header } from './Header';
import { useUserContext } from '../contexts/UserContext';
import { Container } from '@mui/material';

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: ILayoutProps) => {
  const { email, handleLogOut, isLoggedIn } = useUserContext();

  return (
    <>
      <Header
        auth={isLoggedIn}
        email={email}
        handleLogOut={handleLogOut}
        title={title}
      />

      <Container component="main">{children}</Container>
    </>
  );
};
