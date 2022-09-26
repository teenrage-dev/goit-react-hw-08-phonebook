import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.Link} ${css.Active}` : css.Link;
  return className;
};

export const UserMenu = () => {
  return (
    <div className={css.Wrapper}>
      <NavLink to="/contacts" className={getClassName}>
        Contacts
      </NavLink>
    </div>
  );
};
