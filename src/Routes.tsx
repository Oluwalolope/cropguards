import HomePage from './pages/Home';
import { createBrowserRouter } from 'react-router';
import NotFoundPage from './pages/NotFound';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import ForgotPasswordPage from './pages/ForgotPassword';
import { lazy, Suspense } from 'react';
import Loader from './components/Loading';

const FarmerDashBoard = lazy(() => import('./pages/FarmerDashboard'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/logout',
    loader: () => import('./pages/LogOut').then((module) => module.loader()),
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/register',
    element: <SignupPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/farmer-dashboard',
    element: 
    <Suspense fallback={<Loader />}>
      <FarmerDashBoard />
    </Suspense>,
    errorElement: <NotFoundPage />,
    loader: () => import('./pages/FarmerDashboard').then((module) => module.loader()),
  },
]);

export default router;