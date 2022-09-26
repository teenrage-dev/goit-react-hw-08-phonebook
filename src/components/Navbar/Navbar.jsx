import css from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { UserAuth } from './UserAuth/UserAuth';
import { UserMenu } from './UserMenu/UserMenu';
import logo from '../../images/logo.png';
import useAuth from 'shared/hoocks/useAuth';
import { User } from './User/User';

export const Navbar = () => {
  const isLogin = useAuth();

  return (
    <div className={css.Wrapper}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          width="180"
          height="80"
          className={css.Logo}
        />
      </Link>
      {isLogin && <UserMenu />}
      {isLogin ? <User /> : <UserAuth />}
    </div>
  );
};
