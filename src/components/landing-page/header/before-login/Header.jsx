import React from 'react';
import banggaIndonesia from '/src/assets/icons/bangga-indonesia.svg';
import bumn from '/src/assets/icons/bumn.svg';
import categoryIcon from '/src/assets/icons/category.svg';

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="bg-gray-100 h-9 hidden md:flex">
        <div className="flex px-[22px] bg-inactive w-full">
          <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
            Mitra PaDi UMKM
          </div>
          <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
            Menjadi Penjual
          </div>
          <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
            <a href="/"> Info</a>
          </div>
          <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
            Pusat Bantuan
          </div>
        </div>
        <div className="flex px-[22px] bg-inactive space-x-2">
          <div className="flex items-center relative my-2">
            <img
              alt="Logo Bangga Buatan Indonesia"
              width={35}
              height={35}
              src={banggaIndonesia}
            />
          </div>
          <div className="flex items-center relative my-2">
            <img alt="Logo BUMN" width={55} height={55} src={bumn} />
          </div>
        </div>
      </nav>
      <div className="w-full bg-white border-b-2">
        <div className="w-full flex md:hidden items-start justify-start transition duration-500 ease-in-out bg-white flex-col absolute inset-0 md:py-0 z-[1000] h-screen">
          <div className="text-sm self-center text-[#6b7280] cursor-pointer">
            Tutup
          </div>
        </div>
        <div className="flex justify-between items-center space-x-4 p-4 w-full">
          <a href="#">
            <span className="flex items-center justify-center w-full h-full">
              <img
                src="/src/assets/icons/logo.svg"
                alt="padiUMKM"
                className="w-[98px] h-[55px]"
              />
            </span>
          </a>
          <nav className="hidden md:flex items-center justify-center h-full">
            <div className="flex items-center justify-start h-full lg:mr-3">
              <img
                src={categoryIcon}
                alt="category"
                className="w-[16px] h-[16px] mr-2"
              />
              <p className="text-sm font-medium text-[#444B55] py-2 cursor-pointer">
                Kategori
              </p>
            </div>
          </nav>
          <div className="relative items-center w-full h-10 px-3 leading-tight hidden sm:flex border-2 rounded-[8px]">
            <div className="relative w-full h-full">
              <input
                className="w-full h-full pl-3 pr-10 focus:outline-none placeholder:text-gray-400 text-sm"
                placeholder="Cari Produk, jasa, atau vendor"
              />
            </div>
            <div className="absolute right-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 512 512"
                stroke="currentColor"
                strokeWidth="0"
                style={{ color: 'rgb(128, 140, 146)' }}>
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#">
              <button className="py-1 px-4 rounded-lg border-2 border-[#0092ac] text-[#0092ac] text-lg font-semibold">
                Masuk
              </button>
            </a>
            <a href="#">
              <button className="py-1 px-4 rounded-lg border-2 border-[#0092ac] text-white bg-[#0092ac] text-lg font-semibold">
                Daftar
              </button>
            </a>
          </div>
        </div>
        <div className="relative block md:hidden mr-3">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            color="#444B55"
            className="cursor-pointer"
            height={28}
            width={28}
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'rgb(68,75,85)' }}>
            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
