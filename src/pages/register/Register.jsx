import React from 'react';
import customerCareIcon from '/src/assets/icons/customer.svg';

const Register = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center items-center lg:h-screen bg-gray-200 ">
        <div className="flex flex-col lg:flex-row max-w-screen-lg w-full bg-white rounded-lg lg:m-6 overflow-hidden">
          <div className=" flex flex-col justify-center items-center h-screen lg:h-full w-full p-10">
            <div className="w-full mb-8">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold font-nunito">
                  Daftar sebagai
                </div>
                <a href="#">
                  <div className="relative w-24 h-24">
                    <img
                      src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
                      alt="logo"
                      className="w-full h-full"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col border-2 sm:flex-row space-y-4 sm:space-y-0 w-full rounded-lg py-3 px-5 sm:space-x-5 cursor-pointer hover:bg-gray-200 mb-4">
                <div className="flex justify-center items-center">
                  <div className="relative w-7 h-7 ml-5">
                    <img
                      src="/src/assets/icons/bag.svg"
                      alt="bag"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-1">
                  <div className="font-bold font-nunito ext-custom-16 text-start sm:text-left">
                    Pembeli
                  </div>
                  <div className="text-custom-14 font-nunito text-center sm:text-left">
                    Dapatkan diskon dan promo menarik setiap hari
                  </div>
                </div>
              </div>
              <div className="flex flex-col border-2 sm:flex-row space-y-4 sm:space-y-0 w-full rounded-lg py-3 px-5 sm:space-x-5 cursor-pointer hover:bg-gray-200 mb-4">
                <div className="flex justify-center items-center">
                  <div className="relative w-7 h-7 ml-5">
                    <img
                      src="/src/assets/icons/shop.svg"
                      alt="shop"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-1 mt-7">
                  <div className="font-bold font-nunito text-custom-16 text-start sm:text-left">
                    Penjual
                  </div>
                  <div className="text-custom-14 font-nunito text-center sm:text-left">
                    Jual produk secara efisien ke BUMN maupun retail
                  </div>
                </div>
              </div>

              <div className="w-full mt-8">
                <p className="text-center text-custom-14">
                  Sudah punya akun PaDi UMKM?
                  <a href="#">
                    <span className="text-custom-14 font-bold text-primary60 ml-2 cursor-pointer">
                      Masuk
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="relative bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] w-full hidden lg:flex flex-col justify-center items-center p-10">
            <div className="flex justify-center items-center">
              <div className="relative w-[400px] h-[400px]">
                <img
                  src="https://padiumkm.id/_next/static/media/register-as.cf421d13.svg"
                  alt="background"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="text-custom-30 text-white font-bold text-center mb-4">
              Bersama PaDi UMKM
            </div>
            <div className="text-white text-center">
              Mari tingkatkan pertumbuhan ekonomi UMKM untuk Indonesia yang
              lebih maju
            </div>
          </div>
        </div>
      </section>
      {/* Floating Button */}
      <div className="fixed border-2 bottom-12 right-8 flex items-center bg-secondary0 text-white rounded-lg shadow-lg p-3 cursor-pointer">
        <img
          className="w-10 h-10 mr-2 m-0"
          src={customerCareIcon}
          alt="Customer Care Icon"
        />
        <span className="font-bold text-primary60 m-0">Customer Care</span>
      </div>
    </div>
  );
};

export default Register;
