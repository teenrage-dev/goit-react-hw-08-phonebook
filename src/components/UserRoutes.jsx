import { Phonebook } from '../pages/Phonebook/Phonebook';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Route, Routes } from 'react-router-dom';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<Phonebook />} />
    </Routes>
  );
};
