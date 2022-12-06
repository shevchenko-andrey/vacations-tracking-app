import { IUserData } from './../interfaces/user.interfaces';
import { createContext, useContext } from 'react';

export const UserContext = createContext<IUserData>({
  email: '',
  isLoading: false,
  isLoggedIn: false,
  handleLogin() {},
  handleLogOut() {},
});

export const useUserContext = () => useContext(UserContext);
