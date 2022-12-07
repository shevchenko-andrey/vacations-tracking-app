import { UserContextProvider } from '../../contexts/providers/UserContextProvider';
import MainRouter from '../../routing';

function App() {
  return (
    <UserContextProvider>
      <MainRouter />
    </UserContextProvider>
  );
}

export default App;
