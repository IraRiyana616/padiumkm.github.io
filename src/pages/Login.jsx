import React from 'react';
import LoginForm from '/src/components/login/LoginForm';
import LoginSidebar from '/src/components//login/LoginSidebar';
import FloatingButton from '../components/FloatingButton';

const Login = () => {
  return (
    <div>
      <div className="relative w-full bg-gray-200">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:min-h-screen">
          <LoginForm />
          <LoginSidebar />
        </div>
      </div>
      <FloatingButton />
    </div>
  );
};

export default Login;
