import { UserContextProvider } from '../../contexts/providers/UserContextProvider';
import MainRouter from '../../routing';

const App = () => {
  return (
    <UserContextProvider>
      <MainRouter />
    </UserContextProvider>
  );
};
export default App;
