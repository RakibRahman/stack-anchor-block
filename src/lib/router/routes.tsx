import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import SignUp from '../pages/singup';
import Users from '../pages/users';

const Home = React.lazy(() => import('@/lib/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/sales',
    element: <div>sales</div>,
  },
];
