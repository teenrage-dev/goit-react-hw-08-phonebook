import { NavLink } from 'react-router-dom';
import css from './UserAuth.module.css';

export const UserAuth = () => {
  return (
    <div className={css.Wrapper}>
      <NavLink to="/register" className={css.Link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.Link}>
        Login
      </NavLink>
    </div>
  );
};
