import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from '../layout';
import LoginPage from '../login/LoginPage';
import ErrorPage from './error-page/ErrorPage';
import DashboardPage from '../dashboard/Dashboard';
import RequestPage from '../request/RequestPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />

        <Route
          path="/request"
          element={
            <RequireAuth>
              <RequestPage />
            </RequireAuth>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = { user: null };
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
