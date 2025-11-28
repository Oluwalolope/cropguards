import HomePage from './pages/Home';
import { createBrowserRouter } from 'react-router';
import NotFoundPage from './pages/NotFound';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import ForgotPasswordPage from './pages/ForgotPassword';
import SearchPage from './pages/Search';
import { lazy, Suspense } from 'react';
import Loader from './components/Loading';

const BuyerDashBoard = lazy(() => import('./pages/BuyerDashBoard'));
const SellerDashBoard = lazy(() => import('./pages/SellerDashboard'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
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
    path: '/seller-dashboard',
    element: 
    <Suspense fallback={<Loader />}>
      <SellerDashBoard />
    </Suspense>,
    errorElement: <NotFoundPage />,
    loader: () => import('./pages/SellerDashboard').then((module) => module.loader()),
  },
  {
    path: '/buyer-dashboard',
    element:
    <Suspense fallback={<Loader />}>
      <BuyerDashBoard />
    </Suspense>,
    errorElement: <NotFoundPage />,
    loader: () => import('./pages/BuyerDashBoard').then((module) => module.loader()),
  },
]);

export default router;