import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '/src/pages/Login';
import Register from '/src/pages/register/Register';
import RegisterRole from '../pages/register/RegisterRole';
import RegisterBuyer from '../pages/register/role/RegisterBuyer';
import RegisterBusiness from '../pages/register/role/RegisterBusiness';
import FormEmail from '../pages/forget-password/ForgotEmail';

export default function AppRouter() {
  const isAuthenticated = true;

  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Login />
          </PrivateRoute>
        }
      />
      {/* Register  */}
      <Route path="/register" element={<Register />} />
      {/* Register Role */}
      <Route path="/register-role" element={<RegisterRole />} />
      {/* Register as Buyer */}
      <Route path="/register-buyer" element={<RegisterBuyer />} />
      {/* Register as Business */}
      <Route path="/register-business" element={<RegisterBusiness />} />
      {/* Lupa Password */}
      <Route path="/forgot-password" element={<FormEmail />} />
    </Routes>
  );
}
