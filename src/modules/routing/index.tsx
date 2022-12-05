import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout';
import LoginPage from '../login/LoginPage';
import DashboardPage from '../dashboard/Dashboard';
import RequestPage from '../request/RequestPage';
// import RequireAuth from './require-auth';

function MainRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          path="/"
          element={
            // <RequireAuth>
            <DashboardPage />
            // </RequireAuth>
          }
        />

        <Route path="login" element={<LoginPage />} />

        <Route
          path="request"
          element={
            // <RequireAuth>
            <RequestPage />
            // </RequireAuth>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default MainRouter;
