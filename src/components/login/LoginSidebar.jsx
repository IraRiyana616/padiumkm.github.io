import React from 'react';

const LoginSidebar = () => {
  return (
    <div className="relative h-custom-780 bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] w-custom-550 lg:flex flex-col justify-center items-center mr-20">
      <div className="flex flex-col items-center">
        <img
          src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
          alt="background"
          className="h-custom-250 w-custom-250 mb-0"
        />
        <div className="font-nunito text-custom-30 text-white font-bold text-center mt-0">
          Pasti untung di PaDi UMKM
        </div>
      </div>
      <div className="font-nunito text-custom-14 text-white text-center mt-4">
        Berbagai promo dan penawaran menarik setiap bulannya!
      </div>
    </div>
  );
};

export default LoginSidebar;
