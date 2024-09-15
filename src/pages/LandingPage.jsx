import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ overflow: 'auto', zoom: '100%' }}>
      <div>
        <div className="Toastify">
          <div className="bg-white">
            <div className="sticky top-0 z-40">
              <nav className="justify-between bg-gray-100 z-40 h-9 hidden md:flex">
                <div className="flex px-[22px] z-40 bg-inactive w-full">
                  <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                    Mitra PaDi UMKM
                  </div>
                  <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                    Menjadi Penjual
                  </div>
                  <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                    Info
                  </div>
                  <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                    Pusat Bantuan
                  </div>
                </div>
                <div className="flex px-[22px] z-20 bg-inactive space-x-2">
                  <div className="flex items-center relative my-2">
                    <img
                      alt="Logo Bangga Buatan Indonesia"
                      width={35}
                      height={35}
                      src="/src/assets/icons/bangga-indonesia.svg"
                    />
                  </div>
                  <div className="flex items-center relative my-2">
                    <img
                      alt="Logo BUMN"
                      width={55}
                      height={55}
                      src="/src/assets/icons/bumn.svg"
                    />
                  </div>
                </div>
              </nav>

              {/* Bagian K-2 */}
              <div className="w-full z-40 bg-white border-b-2">
                <div className="w-full flex md:hidden items-start justify-start transition duration-500 ease-in-out -translate-x-full bg-white flex-col absolute inset-0 md:py-0 z-[1000] h-screen">
                  <div className="text-sm self-center text-[#6b7280] cursor-pointer">
                    Tutup
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 w-full">
                  {/* Logo  */}
                  <a href="#">
                    <span className="flex items-center justify-center cursor-pointer w-full h-full">
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
                        src="/src/assets/icons/category.svg"
                        alt="category"
                        className="w-[16px] h-[16px] mr-2"
                      />
                      <p className="text-sm font-medium text-[#444B55] py-2 cursor-pointer">
                        Kategori
                      </p>
                    </div>
                  </nav>

                  {/* Tombol Masuk dan Daftar */}

                  <div className="flex space-x-4">
                    <a href="#">
                      <button className="py-2 px-4 rounded-lg border-2 border-[#0092ac] text-[#0092ac] text-lg font-semibold">
                        Masuk
                      </button>
                    </a>
                    <a href="#">
                      <button className="py-2 px-4 rounded-lg border-2 border-[#0092ac] text-white bg-[#0092ac] text-lg font-semibold">
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
                {/* <nav className="hidden md:flex items-center justify-center h-full">
                  <div className="flex items-center justify-start h-full lg:mr-3">
                    <img
                      src="/src/assets/icons/category.svg"
                      alt="category"
                      className="w-[16px] h-[16px] items-center flex mr-2">
                      <p className="flex items-center text-sm font-medium text-[#444B55] py-2 cursor-pointer">
                        Kategori
                      </p>
                    </img>
                  </div>
                </nav> */}
              </div>

              {/* Bagian Ke-2 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
