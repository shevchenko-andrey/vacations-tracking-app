import { Navigate, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { useAuth } from '../../hooks/useAuth';

export const Layout = () => {
  const { user, isLogin, handleLogOut } = useAuth();

  return (
    <>
      <Header
        auth={isLogin}
        user={user}
        handleLogOut={handleLogOut}
        title="Dushboard"
      />
      <main>
        <Outlet />
      </main>
      {isLogin && <Navigate to="/login" />}
    </>
  );
};
