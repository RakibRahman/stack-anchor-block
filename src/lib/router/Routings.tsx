/**
 * @note
 * for hook alternative of route element composition:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#use-useroutes-instead-of-react-router-config
 * - https://reactrouter.com/docs/en/v6/examples/route-objects
 *
 * might need to take notes on:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
 */

import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar } from '../components/common/Sidebar';
import { TopBar } from '../components/common/Topbar';
import RequireAuth from '@/lib/components/auth/RequireAuth';
import Page404 from '@/lib/pages/404';

import { privateRoutes, routes } from './routes';

const Routings = () => {
  return (
    <Suspense>
      <div className="flex min-h-[60vh] gap-4 ">
        <Sidebar />
        <div className="flex-1 px-4 mt-4">
          <TopBar />
          <div>
            <Routes>
              {routes.map((routeProps) => (
                <Route {...routeProps} key={routeProps.path as string} />
              ))}
              <>
                {privateRoutes.map(({ element, ...privateRouteProps }) => (
                  <Route
                    element={
                      <RequireAuth
                        redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
                      >
                        {element}
                      </RequireAuth>
                    }
                    {...privateRouteProps}
                    key={`privateRoute-${privateRouteProps.path}`}
                  />
                ))}
                <Route path="*" element={<Page404 />} />
              </>
            </Routes>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Routings;
