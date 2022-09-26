import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import { getAuthError } from 'redux/auth/auth-selectors';
import css from './Login.module.css';
import { LoginForm } from './LoginForm/LoginForm';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import useAuth from 'shared/hoocks/useAuth';

export const Login = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();

  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={css.Wrapper}>
      <LoginForm onSubmit={onLogin} />
      {status && toast.error(message)}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
