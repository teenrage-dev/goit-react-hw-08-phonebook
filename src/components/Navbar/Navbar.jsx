// import css from './Navbar.module.css';
import { Link } from 'react-router-dom';
import css from './NavBar.module.css';
import { UserAuth } from './UserAuth/UserAuth';
import { UserMenu } from './UserMenu/UserMenu';

export const Navbar = () => {
  return (
    <div className={css.Wrapper}>
      <Link to="/">Logo</Link>
      <UserMenu />
      <UserAuth />
    </div>
  );
};
