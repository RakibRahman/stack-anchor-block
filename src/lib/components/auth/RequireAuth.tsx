import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/store/hooks';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

const RequireAuth = ({
  children,
  redirectTo = '/login',
}: PrivateRouteProps) => {
  const user = useAppSelector((state) => state.user);

  const isAuthenticated = !!user.token;

  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default RequireAuth;
