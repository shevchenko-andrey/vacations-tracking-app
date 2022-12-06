import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import DashboardPage from '../dashboard/Dashboard';
import RequestPage from '../request/RequestPage';
import RequireAuth from './require-auth';

function MainRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dushboard"
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      />

      <Route
        path="/vacation"
        element={
          <RequireAuth>
            <RequestPage />
          </RequireAuth>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default MainRouter;
