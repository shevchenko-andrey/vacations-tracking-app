import { FC } from 'react';
import { Header } from '../Header';
import { useUserContext } from '../../contexts/UserContext';
import { Container } from '@mui/material';

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
  backLinkPath?: string;
}

export const Layout: FC<ILayoutProps> = ({ title, children, backLinkPath }) => {
  const { email, handleLogOut, isLoggedIn } = useUserContext();

  return (
    <>
      <Header
        auth={isLoggedIn}
        email={email}
        handleLogOut={handleLogOut}
        title={title}
        backLinkPath={backLinkPath}
      />

      <Container component="main">{children}</Container>
    </>
  );
};
