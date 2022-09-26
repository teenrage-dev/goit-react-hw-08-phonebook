import css from './Register.module.css';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { signup } from '../../redux/auth/auth-operation';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export const Register = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

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
