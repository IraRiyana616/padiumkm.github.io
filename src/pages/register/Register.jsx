import React from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingButton from '../../components/FloatingButton';

const Register = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/register-role');
  };
  return (
    <div>
      <div className="relative w-full bg-gray-200" id="/register">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:min-h-screen ">
          {/* Row 1 : Formulir Pengisian Data*/}
          <div className="max-w-screen-lg w-full bg-white lg:flex mt-10 mb-10 ml-20  h-custom-600">
            <div className=" justify-center items-center w-full lg:min-h-screen lg:h-full">
              <div className="w-full p-12">
                <div className="flex justify-start items-center ">
                  <div className="relative w-24 h-24">
                    <img
                      src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
                      alt="Logo PaDi UMKM"
                    />
                  </div>
                </div>
                <div className="text-2xl font-bold font-nunito">
                  Daftar sebagai
                </div>
                <div className="flex flex-col w-full  mt-10">
                  <div className="flex flex-col border-2 sm:flex-row space-y-4 sm:space-y-0 w-full rounded-lg py-3 px-5 sm:space-x-5 cursor-pointer hover:border-primary50 hover:bg-blue-100 mb-4">
                    <div className="flex justify-center items-center">
                      <div className="relative w-7 h-7 ml-5">
                        <img
                          src="/src/assets/icons/bag.svg"
                          alt="bag"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-center space-y-1"
                      onClick={handleRedirect}>
                      <div className="font-bold font-nunito text-custom-16 text-start sm:text-left">
                        Pembeli
                      </div>
                      <div className="text-custom-14 font-nunito text-center sm:text-left">
                        Dapatkan diskon dan promo menarik setiap hari
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col border-2 sm:flex-row space-y-4 sm:space-y-0 w-full rounded-lg py-3 px-5 sm:space-x-5 cursor-pointer hover:border-primary50 hover:bg-blue-100  mb-4">
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
                      <a href="/login">
                        <span className="text-custom-14 font-bold text-primary60 ml-2 cursor-pointer">
                          Masuk
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="relative h-custom-600 bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] w-full lg:flex flex-col justify-center items-center mr-20">
            <div className="flex flex-col items-center">
              <img
                src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
                alt="background"
                className="h-custom-350 w-custom-350 mb-0"
              />
              <div className="font-nunito text-custom-30 text-white font-bold text-center mt-0">
                Pasti untung di PaDi UMKM
              </div>
            </div>
            <div className="font-nunito text-custom-14 text-white  text-center mt-4">
              Berbagai promo dan penawaran menarik setiap bulannya!
            </div>
          </div>

          {/* Floating Button : Customer Care*/}
          <FloatingButton />
        </div>
      </div>
    </div>
  );
};

export default Register;
