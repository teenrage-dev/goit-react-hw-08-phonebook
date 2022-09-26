import css from './App.module.css';
import { Navbar } from './Navbar/Navbar';
import { UserRoutes } from './UserRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operation';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={css.Wrapper}>
      <Navbar />
      <UserRoutes />
    </div>
  );
};
