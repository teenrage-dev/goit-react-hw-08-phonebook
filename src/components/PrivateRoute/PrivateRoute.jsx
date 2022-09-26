import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'shared/hoocks/useAuth';

const PrivateRoute = () => {
  const isLogin = useAuth();

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
