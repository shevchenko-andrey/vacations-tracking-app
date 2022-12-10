import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from './require-auth';

const LoginPage = lazy(() => import('../screens/Login'));
const DashboardPage = lazy(() => import('../screens/Dashboard'));
const RequestPage = lazy(() => import('../screens/Request'));
const RequestEditPage = lazy(() => import('../screens/RequestEdit'));

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
          path="/vacation/request"
          element={
            <RequireAuth>
              <RequestPage />
            </RequireAuth>
          }
        />

        <Route
          path="/vacation/request/:requestId"
          element={
            <RequireAuth>
              <RequestEditPage />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
}

export default MainRouter;
