import React from 'react';
import image from '/src/assets/images/fitur-jasa.png';
import arrow from '/src/assets/icons/arrow-blue.svg';

const ServiceCard = () => {
  return (
    <div className="flex flx-row space-x-9 mt-6">
      <div className="mt-8 bg-white shadow-lg rounded-lg w-80 h-full">
        <img src={image} className="w-full" />
        <h4 className="font-nunito font-bold text-custom-20 p-4 text-gray-600">
          Fitur Jasa
        </h4>
        <p className="ml-4 mr-4 text-custom-14 text-gray-600">
          Fitur Jasa merupakan pembaharuan di laman PaDi UMKM untuk produk yang
          dikategorikan sebagai Jasa. Dengan pembaruan fitur ini. Penjual dan
          Pembeli semakin mendapat kemudahan dalam bertransaksi produk Jasa.
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
          Fitur baru yang disediakan PaDi UMKM untuk memudahkan Pembeli dalam
          menemukan barang atau jasa yang diinginkan dengan harga terbaik dari
          Penjual terpercaya sesuai kebutuhan perusahaan Anda.
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
          PaDi UMKM menghadirkan solusi untuk pembiayaan usaha kepada Penjual
          dengan menggunakan invoice atau belum jatuh tempo sebagai jaminan guna
          memperlancar keuangan bisnis jangka pendek.
        </p>

        <div className=" py-4 px-4 mb-5">
          <button className="flex items-center text-primary60 border-primary50 border-2 rounded-lg w-full h-[45px] justify-center">
            <span className="mr-2">Pelajari Lebih Lanjut</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
