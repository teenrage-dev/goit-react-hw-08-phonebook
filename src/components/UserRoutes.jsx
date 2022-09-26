import { Phonebook } from '../pages/Phonebook/Phonebook';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/contacts" element={<Phonebook />} />
      </Route>
    </Routes>
  );
};
