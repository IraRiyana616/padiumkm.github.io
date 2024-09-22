import React from 'react';
import logo from '/src/assets/icons/logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/landing-page');
  };
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0">
      <nav className="py-10 lg:px-14 px-4 bg-white">
        <div className="flex justify-between items-center text-base gap-8">
          <img src={logo} alt="Logo" />

          <ul className="md:flex space-x-16 hidden">
            <li className="max-lg:py-2 relative cursor-pointer">
              <a
                className="hover:text-[#009EA9] text-[18px] text-[#212427] flex items-center"
                style={{ lineHeight: '40px' }}>
                Beranda
              </a>
            </li>
            <li className="max-lg:py-2 relative cursor-pointer">
              <a
                className="hover:text-[#009EA9] text-[18px] text-[#212427] flex items-center"
                style={{ lineHeight: '40px' }}>
                Tentang Kami
              </a>
            </li>
            <li className="max-lg:py-2 relative cursor-pointer">
              <span
                className="hover:text-[#009EA9] text-[18px] text-[#212427] flex items-center"
                style={{ lineHeight: '40px' }}>
                Gabung
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  className="ml-1 inline-block text-gray-500"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 1 1 1.42-1.42L12 13.58l5.29-5.29a1 1 0 1 1 1.42 1.42l-6 6a1 1 0 0 1-.71.29z"
                    data-name="ChevronDown"></path>
                </svg>
              </span>
            </li>
            <li className="max-lg:py-2 relative cursor-pointer">
              <a
                className="hover:text-[#009EA9] text-[18px] text-[#212427] flex items-center"
                style={{ lineHeight: '40px' }}>
                Bantuan
              </a>
            </li>
            <li className="max-lg:py-2 relative cursor-pointer">
              <a
                className="hover:text-[#009EA9] text-[18px] text-[#212427] flex items-center"
                style={{ lineHeight: '40px' }}>
                Media
              </a>
            </li>
            <li className="max-lg:py-2 relative cursor-pointer">
              <a
                className="hover:text-[#009EA9] text-[18px] text-[#212427] flex items-center"
                style={{ lineHeight: '40px' }}>
                Kontak
              </a>
            </li>
            <button
              onClick={handleButtonClick}
              className="bg-primary50 rounded-lg text-white font-bold font-nunito"
              style={{ height: 40, width: 250 }}>
              Kunjungi Marketplace
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
