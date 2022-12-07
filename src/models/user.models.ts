export interface IUser {
  email: string;
  password: string;
}

export interface IUserForm extends IUser {
  rememberMe: boolean;
}

export interface IUserData {
  email: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  handleLogin: (values: IUserForm) => void;
  handleLogOut: () => void;
}
