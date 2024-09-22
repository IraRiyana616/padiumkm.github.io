import React from 'react';
import Header from '/src/components/information/Header';
import Footer from '/src/components/Footer';
import banner from '/src/assets/images/banner-info.svg';
import banner4 from '/src/assets/images/banner-buyer.svg';
import banner5 from '/src/assets/images/banner-seller.svg';
import shape from '/src/assets/shape/contour-bottom.svg';
import shape2 from '/src/assets/shape/contour-top.svg';
import shape3 from '/src/assets/shape/contour-left.svg';
import GreenEconomy from '../components/information/GreenEconomy';
import ShortInformation from '../components/information/ShortInformation';
import background from '../assets/images/background.svg';
import Card from '../components/information/Card';
import ServiceCard from '../components/information/ServiceCard';
import TestimoniListCard from '../components/information/Testimoni';
import InformationCard from '../components/information/CardInformation';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/register');
  };
  return (
    <div>
      <Header />
      <div className="relative w-full mt-32">
        <img src={banner} alt="Banner Information" />
        <button
          onClick={handleButtonClick}
          className="absolute top-72 left-48 transform -translate-x-1/2 -translate-y-1/2 bg-primary60 text-white px-4 py-2 rounded-lg w-56">
          Daftar Sekarang
        </button>
      </div>

      <div className="flex justify-start">
        <img src={shape} />
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
          <img src={shape2} alt="Deskripsi Gambar" />
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
          <ServiceCard />
        </div>
      </div>
      <div className="bg-primary40">
        <div className="flex flex-col ">
          <div className="mt-20 text-center text-white font-nunito text-custom-30 font-bold">
            Kenapa Gabung Menjadi Pembeli di PaDi UMKM?
            <div className="flex flex-row mt-16 px-52 mb-16">
              <img src={banner4} className="mr-24" alt="People" />
              <div className="flex flex-col mt-16 ">
                <div className="text-custom-24 text-left font-bold">
                  Metode Pembayaran Tempo
                </div>
                <div className="mt-4 mr-24 text-custom-16 text-left font-normal font-nunito">
                  Anda dapat membayar pesanan menggunakan metode pembayaran
                  tempo dengan jangk waktu 14, 30 dan 60 hari.
                </div>
                <div className="mt-6 mr-80">
                  <button
                    onClick={handleButtonClick}
                    className="bg-primary10 rounded-lg w-72 h-11 text-custom-16 text-primary70">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary60">
        <div className="flex flex-col ">
          <div className="mt-20 text-center text-white font-nunito text-custom-30 font-bold">
            Kenapa Gabung Menjadi Penjual di PaDi UMKM?
            <div className="flex flex-row mt-16 px-40 mb-16">
              <div className="flex flex-col mt-20 ">
                <div className="text-custom-24 text-left font-bold">
                  Ulasan & Penilaian Produk
                </div>
                <div className="mt-4 mr-20 text-custom-16 text-left font-normal font-nunito">
                  Pembeli dapat secara terbuka menilai produk Anda sehingga
                  penilaian yang bagus akan membawa arus pelanggan pada usaha
                  Anda.
                </div>
                <div className="mt-6 mr-80">
                  <button className="bg-primary10 rounded-lg w-72 h-11 text-custom-16 text-primary70">
                    Daftar Usaha Sekarang
                  </button>
                </div>
              </div>
              <img src={banner5} className="mr-80" alt="People" />
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col">
          <div className="text-center text-white text-custom-30 font-nunito font-bold">
            Testimoni
            <span className="text-primary20"> Penjual</span>
            <span className="text-white"> PaDi UMKM</span>
          </div>
          <div className="mt-5 text-white text-center text-custom-18 ">
            Inilai kisah nyata para penjual yang berhasil mengubah bisnis mereka
            menjadi cerita sukses bersama PaDi UMKM.
          </div>
          <div className="mb-20 mt-3.5 flex justify-center items-center">
            <TestimoniListCard />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={shape3} />
      </div>
      <div className="font-bold font-nunito text-custom-30 text-center ">
        Ruang Informasi
      </div>
      <div className=" items-center justify-center flex mb-20">
        <InformationCard />
      </div>
      <Footer />
    </div>
  );
};

export default Information;
