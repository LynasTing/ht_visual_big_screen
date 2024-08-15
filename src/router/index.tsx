import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));
const Test = lazy(() => import('@/views/Test'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/test',
    element: <Test />
  }
];

export default routes;
