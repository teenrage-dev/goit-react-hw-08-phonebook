import css from './User.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { VscAccount } from 'react-icons/vsc';
import { logout } from 'redux/auth/auth-operation';

export const User = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.Wrapper}>
      <p className={css.Text}>
        <span className={css.Icon}>
          <VscAccount />
        </span>{' '}
        {name}
      </p>
      <button className={css.Btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
