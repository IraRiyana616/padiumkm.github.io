import React from 'react';
import smallBanner1 from '/src/assets/images/small-banner.svg';
import smallBanner2 from '/src/assets/images/small-banner(1).svg';
import smallBanner3 from '/src/assets/images/small-banner(2).svg';

const BannerSection = () => {
  return (
    <div className="flex justify-between items-center px-10 mb-7 w-full">
      <div className="relative inline-block">
        <img
          src={smallBanner1}
          alt="small banner 1"
          className="border-1 rounded-lg shadow-md"
        />
        <div className="absolute bottom-12 left-7 h-9 px-5 bg-zinc-800 rounded-full flex justify-center items-center gap-1">
          <button className="text-white text-custom-12 font-semibold font-nunito leading-none">
            Ajukan Sekarang!
          </button>
        </div>
      </div>
      <div className="relative inline-block">
        <img
          src={smallBanner2}
          alt="small banner 2"
          className="border-1 rounded-lg shadow-md"
        />
        <div className="absolute bottom-11 left-48 h-9 px-5 bg-zinc-800 rounded-full flex justify-center items-center gap-1">
          <button className="text-white text-custom-12 font-semibold font-nunito leading-none">
            Ajukan Sekarang!
          </button>
        </div>
      </div>
      <div className="relative inline-block">
        <img
          src={smallBanner3}
          alt="small banner 3"
          className="border-1 rounded-lg shadow-md"
        />
        <div className="absolute bottom-11 left-8 h-9 px-5 bg-zinc-800 rounded-full flex justify-center items-center gap-1">
          <button className="text-white text-custom-12 font-semibold font-nunito leading-none">
            Ajukan Sekarang!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
