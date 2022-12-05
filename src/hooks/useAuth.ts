import { useState, useEffect } from 'react';
import { IUser } from '../interfaces/IUser';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }

    setUser(JSON.parse(user) as IUser);
    setIsLogin(true);
  }, []);

  const handleLogin = (user: IUser) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const handleLogOut = () => {
    if (!isLogin) {
      return;
    }

    setIsLogin(false);
    localStorage.removeItem('user');
    setUser(null);
  };

  return { user, isLogin, handleLogin, handleLogOut };
};
