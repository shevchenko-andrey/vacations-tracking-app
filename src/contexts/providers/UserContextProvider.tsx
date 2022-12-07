import { useState, useEffect } from 'react';
import { IUser, IUserForm } from '../../models/user.models';
import { UserContext } from '../UserContext';

interface IProviderProps {
  children: JSX.Element[] | JSX.Element;
}

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const userData = localStorage.getItem('user');
    if (!userData) {
      return;
    }

    const { email } = JSON.parse(userData) as IUser;

    setEmail(email);

    setIsLoggedIn(true);
    setIsLoading(false);
  }, []);

  const handleLogin = (values: IUserForm) => {
    setIsLoading(true);
    const { rememberMe, email, password } = values;
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify({ email, password }));
    }

    setEmail(email);
    setIsLoggedIn(true);
    setIsLoading(false);
  };

  const handleLogOut = () => {
    if (!isLoggedIn) {
      return;
    }

    setIsLoggedIn(false);
    localStorage.removeItem('user');
    setEmail('');
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, isLoading, email, handleLogin, handleLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
