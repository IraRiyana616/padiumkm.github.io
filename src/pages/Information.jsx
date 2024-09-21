import React from 'react';
import Header from '/src/components/information/Header';
import Footer from '/src/components/Footer';
import banner from '/src/assets/images/banner-info.svg';
import shape from '/src/assets/shape/contour-bottom.svg';
import shape2 from '/src/assets/shape/contour-top.svg';
import GreenEconomy from '../components/information/GreenEconomy';
import Card from '../components/information/Card';
import ShortInformation from '../components/information/ShortInformation';
import background from '../assets/images/background.svg';
import image from '../assets/images/fitur-jasa.png';
import arrow from '/src/assets/icons/arrow-blue.svg';

const Information = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full mt-32">
        <img src={banner} alt="Banner Information" />
        <button className="absolute top-72 left-48 transform -translate-x-1/2 -translate-y-1/2 bg-primary60 text-white px-4 py-2 rounded-lg w-56">
          Daftar Sekarang
        </button>
      </div>
      <div className="absolute mt-92">
        <img src={shape} alt="Contour Bottom Shape" />
      </div>

      <GreenEconomy />
      <div className="text-center mt-32 mb-12">
        <h2 className="text-custom-24 font-bold">
          Sebuah <span className="text-primary50">Marketplace B2B</span>
          <span> Pendukung Green Economy Terpercaya di Indonesia</span>
        </h2>
      </div>
      <Card />
      <ShortInformation />
      <div className="relative w-full">
        <div className="absolute right-0 w-1/2 flex justify-end">
          <img src={shape2} alt="Shape 2" />
        </div>
      </div>
      <div className="w-full mt-44 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="relative z-10 flex flex-col items-center p-6 rounded-lg">
          <h3 className="font-nunito font-bold text-custom-30 mt-16">
            Layanan Kami
          </h3>
          <p className="mt-4 text-custom-16 text-center font-semibold mt-7">
            PaDi UMKM menyediakan berbagai fitur dan bantuan informasi yang
            dapat membantu kelancaran Penjual dan Pembeli dalam berinteraksi.
          </p>

          {/* Card Section */}
          <div className="flex flx-row space-x-9 mt-6">
            <div className="mt-8 bg-white shadow-lg rounded-lg w-80 h-full">
              <img src={image} className="w-full" />
              <h4 className="font-nunito font-bold text-custom-20 p-4 text-gray-600">
                Fitur Jasa
              </h4>
              <p className="ml-4 mr-4 text-custom-14 text-gray-600">
                Fitur Jasa merupakan pembaharuan di laman PaDi UMKM untuk produk
                yang dikategorikan sebagai Jasa. Dengan pembaruan fitur ini.
                Penjual dan Pembeli semakin mendapat kemudahan dalam
                bertransaksi produk Jasa.
              </p>

              <div className="flex flex-row space-x-4 py-4 px-4 mb-5">
                <div className="flex w-1/2">
                  <button className="flex items-center text-primary60 border-primary50 border-2 rounded-lg w-full h-[45px] justify-center">
                    <span className="mr-2">Laman Seller</span>
                    <img src={arrow} alt="Arrow" />
                  </button>
                </div>
                <div className="flex w-1/2">
                  <button className="flex items-center text-primary60 border-primary50 border-2 rounded-lg w-full h-[45px] justify-center">
                    <span className="mr-2">Laman Buyer</span>
                    <img src={arrow} alt="Arrow" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white shadow-lg rounded-lg w-80 h-full">
              <img src={image} className="w-full" />
              <h4 className="font-nunito font-bold text-custom-20 p-4 text-gray-600">
                Request For Quotation
              </h4>
              <p className="ml-4 mr-4 text-custom-14 text-gray-600">
                Fitur baru yang disediakan PaDi UMKM untuk memudahkan Pembeli
                dalam menemukan barang atau jasa yang diinginkan dengan harga
                terbaik dari Penjual terpercaya sesuai kebutuhan perusahaan
                Anda.
              </p>

              <div className=" py-4 px-4 mb-5">
                <button className="flex items-center text-primary60 border-primary50 border-2 rounded-lg w-full h-[45px] justify-center">
                  <span className="mr-2">Pelajari Lebih Lanjut</span>
                  <img src={arrow} alt="Arrow" />
                </button>
              </div>
            </div>
            <div className="mt-8 bg-white shadow-lg rounded-lg w-80 h-full">
              <img src={image} className="w-full" />
              <h4 className="font-nunito font-bold text-custom-20 p-4 text-gray-600">
                Financing
              </h4>
              <p className="ml-4 mr-4 text-custom-14 text-gray-600 ">
                PaDi UMKM menghadirkan solusi untuk pembiayaan usaha kepada
                Penjual dengan menggunakan invoice atau belum jatuh tempo
                sebagai jaminan guna memperlancar keuangan bisnis jangka pendek.
              </p>

              <div className=" py-4 px-4 mb-5">
                <button className="flex items-center text-primary60 border-primary50 border-2 rounded-lg w-full h-[45px] justify-center">
                  <span className="mr-2">Pelajari Lebih Lanjut</span>
                  <img src={arrow} alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Information;
