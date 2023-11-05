import { lazy } from 'react';

const PolicyPage = lazy(() => import('@/pages/Policy/Policy'));

export const routes = [
  {
    path: '/policy',
    element: PolicyPage,
  },
  {
    path: '/uz/policy',
    element: PolicyPage,
  },
];
