import React, { useState } from 'react';
import googleLogo from '/src/assets/icons/google.png';
import customerCareIcon from '/src/assets/icons/customer.svg';
import { useNavigate } from 'react-router-dom';

const RegisterRole = () => {
  const navigate = useNavigate();

  // State untuk menentukan halaman yang akan dinavigasi
  const [selectedRoute, setSelectedRoute] = useState('');

  const handleRegister = () => {
    navigate('/register');
  };

  const [isBusinessActive, setIsBusinessActive] = useState(false);
  const [isIndividualActive, setIsIndividualActive] = useState(false);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleBusinessClick = () => {
    setIsBusinessActive(true);
    setIsIndividualActive(false);
    setIsCardSelected(true);
    setSelectedRoute('/register-business');
  };

  const handleIndividualClick = () => {
    setIsBusinessActive(false);
    setIsIndividualActive(true);
    setIsCardSelected(true);
    setSelectedRoute('/register-buyer');
  };

  // Fungsi untuk menavigasi berdasarkan rute yang dipilih
  const handleButtonClick = () => {
    if (selectedRoute) {
      navigate(selectedRoute);
    }
  };
  const handleEmailClick = () => {
    window.location.href =
      'mailto:someone@example.com?subject=Hello&body=Hi there!';
  };
  return (
    <div>
      <div className="relative w-full bg-gray-200">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:min-h-screen ">
          {/* Row 1 : Formulir Pengisian Data*/}
          <div className="max-w-screen-lg w-full bg-white lg:flex mt-10 mb-10 ml-20  h-custom-960">
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
                  Daftar sebagai pembeli
                </div>
                <div className="font-nunito text-custom-14 mt-2">
                  Mulai perjalanan belanja produk UMKM terbaik dari seluruh
                  Indonesia
                </div>
                <div className="w-full mb-6 mt-10">
                  <button
                    onClick={handleEmailClick}
                    className="text-custom-14 w-full py-2.5 border-2 border-custom-17 rounded-md hover:bg-gray-300 hover:text-black flex items-center justify-center transition-colors duration-300">
                    <img className="mr-3" src={googleLogo} alt="Google Logo" />
                    <span className="font-semibold font-nunito">
                      Daftar dengan Google
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-center mt-7">
                  <hr className="border-gray-300 flex-grow" />
                  <span className="mx-4 text-custom-14 text-textColor">
                    Atau
                  </span>
                  <hr className="border-gray-300 flex-grow" />
                </div>
                <div className="font-nunito text-custom-14 mt-7 mb-5 text-textColor">
                  Pilih kategori yang paling sesuai dengan Anda:
                </div>
                {/* Card Kebutuhan Bisnis */}
                <div className="p-3.5 ">
                  <div className="flex flex-col sm:flex-row sm:space-x-5">
                    <div
                      onClick={handleBusinessClick}
                      className={`flex flex-col border-2 w-full sm:w-1/2 rounded-lg py-3 px-5 cursor-pointer group transition-all duration-300 ${
                        isBusinessActive
                          ? 'border-primary50 bg-blue-100'
                          : 'border-gray-300 hover:border-primary50 hover:bg-blue-100'
                      }`}>
                      <div className="flex justify-center items-center">
                        <div className="relative w-10 h-10 mt-3">
                          <img
                            src="/src/assets/icons/package.svg"
                            alt="shop"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center space-y-1 mt-7">
                        <div
                          className={`font-bold font-nunito text-custom-16 text-center transition-colors duration-300 ${
                            isBusinessActive
                              ? 'text-primary50'
                              : 'group-hover:text-primary50'
                          }`}>
                          Kebutuhan Bisnis
                        </div>
                        <div
                          className={`text-custom-14 font-nunito text-center transition-colors duration-300 ${
                            isBusinessActive
                              ? 'text-tertiary80'
                              : 'group-hover:text-tertiary80'
                          }`}>
                          Pembelian dalam jumlah besar untuk kebutuhan
                          perusahaan
                        </div>
                      </div>
                    </div>

                    {/* Card Kebutuhan Individu */}
                    <div
                      onClick={handleIndividualClick}
                      className={`flex flex-col border-2 w-full sm:w-1/2 rounded-lg py-3 px-5 cursor-pointer group transition-all duration-300 ${
                        isIndividualActive
                          ? 'border-primary50 bg-blue-100'
                          : 'border-gray-300 hover:border-primary50 hover:bg-blue-100'
                      }`}>
                      <div className="flex justify-center items-center">
                        <div className="relative w-10 h-10 mt-3">
                          <img
                            src="/src/assets/icons/shopping-bag.svg"
                            alt="shop"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center space-y-1 mt-7">
                        <div
                          className={`font-bold font-nunito text-custom-16 text-center transition-colors duration-300 ${
                            isIndividualActive
                              ? 'text-primary50'
                              : 'group-hover:text-primary50'
                          }`}>
                          Kebutuhan Individu
                        </div>
                        <div
                          className={`text-custom-14 font-nunito text-center transition-colors duration-300 ${
                            isIndividualActive
                              ? 'text-tertiary80'
                              : 'group-hover:text-tertiary80'
                          }`}>
                          Pembelian dalam jumlah kecil atau penggunaan pribadi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Button Selanjutnya */}
                <div className="w-full mb-4 mt-5">
                  <button
                    className={`text-custom-14 w-full py-2.5 ${
                      isCardSelected ? 'bg-primary50' : 'bg-gray-300'
                    } text-white rounded-lg flex items-center justify-center`}
                    type="button"
                    disabled={!isCardSelected}
                    onClick={handleButtonClick}>
                    <span className="font-semibold font-nunito text-white">
                      Selanjutnya
                    </span>
                  </button>
                </div>
                {/* Button Kembali  */}
                <div className="w-full">
                  <button
                    className="text-custom-14 w-full py-2.5  border-custom-17 rounded-md bg-blue-100 flex items-center justify-center transition-colors duration-300"
                    onClick={handleRegister}>
                    <span className="font-semibold font-nunito text-primary50">
                      Kembali
                    </span>
                  </button>
                </div>
                {/* Opsi telah memiliki akun  */}
                <div className="w-full mt-10 mb-10">
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
          {/* Row 2 */}
          <div className="relative  h-custom-960 bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] w-full hidden lg:flex flex-col justify-center items-center mr-20 p-10">
            <div className=" justify-center items-center">
              <div className="relative  mt-20">
                <img
                  src="https://padiumkm.id/_next/static/media/register-as.cf421d13.svg"
                  alt="background"
                  className="w-full h-full"
                />
              </div>
              <div className=" font-nunito text-custom-30 text-white font-bold text-center ">
                Bersama PaDi UMKM
              </div>
            </div>
            <div className="text-white text-center font-nunito mt-3 mb-32 ml-3 mr-3">
              Mari tingkatkan pertumbuhan ekonomi UMKM untuk indonesia yang
              lebih maju
            </div>
          </div>
          {/* Floating Button : Customer Care*/}
          <div className="fixed  bottom-3.5 right-8 flex items-center bg-secondary0 text-white rounded-xl shadow-lg p-3 cursor-pointer">
            <img
              className="w-10 h-10 mr-2 m-0"
              src={customerCareIcon}
              alt="Customer Care Icon"
            />
            <span className="font-bold text-primary60 m-0">Customer Care</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterRole;
