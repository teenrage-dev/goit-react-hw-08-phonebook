import { Navbar } from './Navbar/Navbar';
import { UserRoutes } from './UserRoutes';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.Wrapper}>
      <Navbar />
      <UserRoutes />
    </div>
  );
};
