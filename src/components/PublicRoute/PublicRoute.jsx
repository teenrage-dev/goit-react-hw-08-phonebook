import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'shared/hoocks/useAuth';
const PublicRoute = () => {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
