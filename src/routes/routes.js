import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/HomePage'));
const PolicyPage = lazy(() => import('@/pages/Policy/Policy'));

export const routes = [
  {
    path: '/:lang?/home',
    element: Home,
  },
  {
    path: '/:lang?/policy',
    element: PolicyPage,
  },
];
