import css from './Register.module.css';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { signup } from '../../redux/auth/auth-operation';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/auth-selectors';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import useAuth from 'shared/hoocks/useAuth';

export const Register = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();

  const onRegister = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={css.Wrapper}>
      <RegisterForm onSubmit={onRegister} />
      {status && toast.error(message)}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
