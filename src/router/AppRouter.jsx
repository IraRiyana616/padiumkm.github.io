import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '/src/pages/Login';
import Register from '/src/pages/register/Register';
import RegisterRole from '../pages/register/RegisterRole';
import RegisterBuyer from '../pages/register/role/RegisterBuyer';
import RegisterBusiness from '../pages/register/role/RegisterBusiness';
import FormEmail from '../pages/forget-password/ForgotEmail';
import Information from '../pages/Information';
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import Form from '../pages/register/role/Form';

export default function AppRouter() {
  const isAuthenticated = true;

  return (
    <Routes>
      <Route path="/" element={<Information />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/login"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Login />
          </PrivateRoute>
        }
      />

      <Route path="/register" element={<Register />} />
      <Route path="/register-role" element={<RegisterRole />} />
      <Route path="/form" element={<Form />} />
      <Route path="/register-buyer" element={<RegisterBuyer />} />
      <Route path="/register-business" element={<RegisterBusiness />} />
      <Route path="/forgot-password" element={<FormEmail />} />
    </Routes>
  );
}
