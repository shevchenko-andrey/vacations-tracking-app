import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from './require-auth';

const LoginPage = lazy(() => import('../screens/login'));
const DashboardPage = lazy(() => import('../screens/dashboard'));
const RequestPage = lazy(() => import('../screens/request'));

function MainRouter() {
  return (
    <Suspense fallback="">
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
    </Suspense>
  );
}

export default MainRouter;
