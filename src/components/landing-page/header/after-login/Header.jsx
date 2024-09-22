import React, { useState } from 'react';
import banggaIndonesia from '/src/assets/icons/bangga-indonesia.svg';
import bumn from '/src/assets/icons/bumn.svg';
import categoryIcon from '/src/assets/icons/category.svg';
import userImage from '/src/assets/images/photo.jpg';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white">
      {/* <nav className="bg-gray-100 h-9 hidden md:flex">
        <div className="flex px-[22px] bg-inactive w-full">
          {['Mitra PaDi UMKM', 'Menjadi Penjual', 'Info', 'Pusat Bantuan'].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                {item}
              </div>
            )
          )}
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
      </nav> */}
      <div className="w-full bg-white border-b-2">
        <div className="flex justify-between items-center space-x-4 p-4 w-full">
          <a href="#">
            <img
              src="/src/assets/icons/logo.svg"
              alt="padiUMKM"
              className="w-[98px] h-[55px]"
            />
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
            <input
              className="w-full h-full pl-3 pr-10 focus:outline-none placeholder:text-gray-400 text-sm"
              placeholder="Cari Produk, jasa, atau vendor"
            />
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
              <img
                src="/src/assets/icons/notification.svg"
                alt="Notification"
              />
            </a>
            <a href="#">
              <img src="/src/assets/icons/message.svg" alt="Message" />
            </a>
            <a href="#">
              <img src="/src/assets/icons/shooping-cart.svg" alt="Cart" />
            </a>
          </div>
          <div className="relative flex flex-row">
            <img src={userImage} alt="User" className="w-8 h-8 rounded-full" />
            <svg
              onClick={toggleDropdown}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-3 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </a>
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </a>
              </div>
            )}
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
