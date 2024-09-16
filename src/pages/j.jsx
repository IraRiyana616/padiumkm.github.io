import React from 'react';
import banner1 from '/src/assets/images/slide.svg';
import diskon from '/src/assets/icons/diskon.svg';
import electronic from '/src/assets/icons/eletronic.svg';
import souvernir from '/src/assets/icons/souvernir.svg';
import tools from '/src/assets/icons/alat-tulis.svg';
import book from '/src/assets/icons/buku.svg';
import carpentry from '/src/assets/icons/pertukangan.svg';
import healthy from '/src/assets/icons/kesehatan.svg';
import food from '/src/assets/icons/makanan.svg';
import product from '/src/assets/icons/semua.svg';

const LandingPage = () => {
  return (
    <div className="overflow-auto zoom-100">
      {/* Header */}
      <div>
        <div className="Toastify">
          <div className="bg-white">
            <div className="sticky top-0 z-40">
              <nav className="bg-gray-100 h-9 hidden md:flex">
                <div className="flex px-[22px] bg-inactive w-full">
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
                <div className="flex px-[22px] bg-inactive space-x-2">
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
                        src="/src/assets/icons/category.svg"
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
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="min-h-screen overflow-hidden">
        <div className="relative max-w-screen-2xl mx-auto mt-5">
          <div className="flex flex-col  w-full">
            <div className="relative w-full">
              <img src={banner1} alt="banner" className="mx-auto" />
              <button className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary70 text-white px-4 py-2 rounded-full w-56">
                Belanja Sekarang
              </button>
            </div>
            {/* Kategori */}
            <div className="flex flex-col container-layout p-10">
              <div className="flex items-center w-full justify-between lg:w-fit lg:justify-start">
                <div className="text-custom-24 font-bold font-nunito">
                  Kategori Produk
                </div>
              </div>
              {/* Promo */}
              <div className="mt-9 flex flex-wrap gap-16 space-x-3">
                {/* Diskon */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={diskon} alt="diskon" />
                  <span className="font-nunito text-custom-14">Diskon</span>
                </button>
                {/* Elektronik */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={electronic} alt="electronic" />
                  <span className="font-nunito text-custom-14">Elektronik</span>
                </button>
                {/* Souvernir */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={souvernir} alt="souvernir" />
                  <span className="font-nunito text-custom-14">Souvernir</span>
                </button>
                {/* Alat Tulis Kantor */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={tools} alt="alat tulis" />
                  <span className="font-nunito text-custom-14">
                    Alat Tulis Kantor
                  </span>
                </button>
                {/* Buku */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={book} alt="buku" />
                  <span className="font-nunito text-custom-14">Buku</span>
                </button>
                {/* Pertukangan */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={carpentry} alt="pertukangan" />
                  <span className="font-nunito text-custom-14">
                    Pertukangan
                  </span>
                </button>
                {/* Kesehatan */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={healthy} alt="kesehatan" />
                  <span className="font-nunito text-custom-14">Kesehatan</span>
                </button>
                {/* Makanan & Minuman */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={food} alt="makanan dan minuman" />
                  <span className="font-nunito text-custom-14">
                    Makanan & Minuman
                  </span>
                </button>
                {/* Semua */}
                <button className="flex flex-col items-center">
                  <img className="mb-2" src={product} alt="semua kategori" />
                  <span className="font-nunito text-custom-14">Semua</span>
                </button>
              </div>
            </div>
            {/* Container utama untuk menampung Flash Sale dan Rekomendasi */}
            <div className="flex flex-col items-start w-full px-10 space-y-8">
              {/* Test  */}
              <div className="Frame75 h-80 justify-start items-center gap-6 inline-flex">
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Stapler Besar BANTEX Warna White
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp141.900
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Post It Sign Here Posi - 3M 1 Box (Isi 12 Pcs)
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp285.000
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      BALLPOINT TRIFELO BP-316/317
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp6.700
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Corporate gift box set Tumbler & muq
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp250.000
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Payung Custom JM Tipe 245J
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp70.000
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
              </div>

              {/* Rekomendasi untuk anda */}
              <div className="flex items-center w-full justify-between mb-10">
                <div className="text-lg lg:text-custom-24 font-semibold font-nunito">
                  Rekomendasi Untuk Anda
                </div>
                <a href="#">
                  <div className="flex items-center space-x-1 lg:space-x-3 lg:ml-8 cursor-pointer">
                    <span className="text-sm lg:text-custom-16 font-bold font-nunito text-primary50">
                      Lihat Semua
                    </span>
                    <div className="text-md font-bold">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        className="text-primary50"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="Frame75 h-80 justify-start items-center gap-6 inline-flex">
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-52 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-2 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Souvenir Mug dan kotak Mug Gody bag design
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp65.000
                    </div>
                    <div className="Frame33 justify-start items-center gap-1 inline-flex">
                      <div className="MapPin w-5 h-5 relative" />
                      <div className="KotaBogor text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-normal">
                        Kota Bogor
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-52 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-2 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Lanyard Leather (two face laser)
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp200.000
                    </div>
                    <div className="Frame33 justify-start items-center gap-1 inline-flex">
                      <div className="MapPin w-5 h-5 relative" />
                      <div className="KotaBogor text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-normal">
                        Kota Bogor
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-52 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-2 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Paper bag ukuran besar tipe XL
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp14.000
                    </div>
                    <div className="Frame33 justify-start items-center gap-1 inline-flex">
                      <div className="MapPin w-5 h-5 relative" />
                      <div className="KotaBogor text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-normal">
                        Kota Bogor
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-52 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-2 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Clutch Zip pocket with Open
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp3.800.000
                    </div>
                    <div className="Frame33 justify-start items-center gap-1 inline-flex">
                      <div className="MapPin w-5 h-5 relative" />
                      <div className="KotaBogor text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-normal">
                        Kota Bogor
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-52 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-2 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Paket Backpack & Speaker
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp750.000
                    </div>
                    <div className="Frame33 justify-start items-center gap-1 inline-flex">
                      <div className="MapPin w-5 h-5 relative" />
                      <div className="KotaBogor text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-normal">
                        Kota Bogor
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
