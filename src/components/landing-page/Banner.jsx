import React from 'react';
import smallBanner4 from '/src/assets/images/small-banner(3).svg';
import smallBanner5 from '/src/assets/images/small-banner(4).svg';

const Banner = () => {
  return (
    <div className="flex justify-between items-center px-10 mb-7 w-full">
      <div className="relative inline-block">
        <img
          src={smallBanner4}
          alt="small banner 4"
          className="border-1 rounded-lg shadow-md"
        />
        <div className="absolute bottom-7 left-7 h-9 px-9 bg-zinc-800 rounded-full flex justify-center items-center gap-1">
          <button className="text-white text-custom-12 font-semibold font-nunito leading-none">
            Bayar Sekarang!
          </button>
        </div>
      </div>
      <div className="relative inline-block">
        <img
          src={smallBanner5}
          alt="small banner 5"
          className="border-1 rounded-lg shadow-md"
        />
        <div className="absolute bottom-7 left-7 h-9 px-9 bg-zinc-800 rounded-full flex justify-center items-center gap-1">
          <button className="text-white text-custom-12 font-semibold font-nunito leading-none">
            Daftar Jadi Seller Hari Ini!
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
