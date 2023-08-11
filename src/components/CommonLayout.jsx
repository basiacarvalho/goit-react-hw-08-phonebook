import { Outlet } from 'react-router-dom';
import { AppBar } from './appbar/AppBar';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';

export const CommonLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
