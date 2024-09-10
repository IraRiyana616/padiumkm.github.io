import React, { useState } from 'react';
import { useFormHandlers } from '/src/components/register/buyer/formHandlers';
import '/src/App.css';
import RecaptchaComponent from '/src/components/register/buyer/Recaptcha';
import FloatingButton from '/src/components/FloatingButton';
import { useNavigate } from 'react-router-dom';

const RegisterBuyer = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register-role');
  };
  const {
    name,
    email,
    password,
    emailError,
    phone,
    phoneError,
    passwordError,

    isChecked,
    handleCheckboxChange,
    handleNameChange,
    handlePhoneChange,
    handleEmailChange,
    handlePasswordChange,
    isFormValid,
    handleCaptchaChange,
  } = useFormHandlers();

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
                <div className="font-nunito text-custom-12 text-tertiary80 mt-2">
                  Mulai perjalanan belanja produk UMKM terbaik dari seluruh
                  Indonesia
                </div>
                {/* Form Nama Lengkap */}
                <div className="mt-6">
                  <label
                    className="font-semibold text-custom-14 font-nunito"
                    htmlFor="name">
                    Nama Lengkap
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="py-2.5 px-5 appearance-none border rounded-[15px] w-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                {/* Form alamat email */}
                <div className="mt-2">
                  <label
                    className="font-semibold text-custom-14 font-nunito"
                    htmlFor="email">
                    Alamat Email
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="py-2.5 px-5 appearance-none border rounded-[15px] w-full focus:outline-none"
                    id="email"
                    type="text"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                    aria-describedby="emailError"
                  />
                  {emailError && (
                    <p id="emailError" className="text-red-500 text-sm mt-1">
                      {emailError}
                    </p>
                  )}
                </div>
                {/* Form nomor telepon  */}
                <div className="mt-2">
                  <label
                    className="font-semibold text-custom-14 font-nunito"
                    htmlFor="telephone">
                    Telepon
                  </label>
                </div>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500">+62</span>
                  </div>
                  <input
                    className="py-2.5 pl-12 pr-5 border rounded-[15px] w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    id="telephone"
                    type="text"
                    placeholder="123456789"
                    value={phone}
                    onChange={handlePhoneChange}
                    aria-describedby="phoneError"
                    maxLength={13}
                  />
                  {phoneError && (
                    <p id="phoneError" className="text-red-500 text-sm mt-1">
                      {phoneError}
                    </p>
                  )}
                </div>
                {/* Form kata sandi  */}
                <div className="mt-2">
                  <label
                    className="font-semibold text-custom-14 font-nunito"
                    htmlFor="password">
                    Kata Sandi
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="py-2.5 px-5 appearance-none border rounded-[15px] w-full focus:outline-none"
                    id="password"
                    type="password"
                    placeholder="Masukkan Kata Sandi"
                    value={password}
                    onChange={handlePasswordChange}
                    aria-describedby="passwordError"
                    maxLength={8}
                  />
                  {passwordError && (
                    <p id="passwordError" className="text-red-500 text-sm mt-1">
                      {passwordError}
                    </p>
                  )}
                </div>
                <div className="checkbox-container mt-4 ml-2">
                  <input
                    type="checkbox"
                    id="syarat"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="syarat" className="text-custom-12 ml-2">
                    Saya setuju dengan
                    <span
                      className={`ml-1 font-semibold ${
                        isChecked ? 'text-blue-600' : 'text-primary60'
                      }`}>
                      Syarat & Ketentuan
                    </span>
                    <span className="ml-0.5"> serta </span>
                    <span
                      className={`ml-0.5 font-semibold ${
                        isChecked ? 'text-blue-600' : 'text-primary60'
                      }`}>
                      Kebijakan Privasi
                    </span>
                  </label>
                </div>
                <RecaptchaComponent onChange={handleCaptchaChange} />
                {/* Button Kirim Email */}
                <div className="w-full mt-7">
                  <button
                    className={`text-custom-17 w-full py-2.5 ${
                      isFormValid ? 'bg-primary50' : 'bg-gray-300'
                    } text-white rounded-lg`}
                    type="button"
                    disabled={!isFormValid}>
                    Daftar
                  </button>
                </div>
                {/* Button Kembali  */}
                <div className="w-full mt-4">
                  <button
                    className="text-custom-14 w-full py-2.5  border-custom-17 rounded-md bg-blue-100 flex items-center justify-center transition-colors duration-300"
                    onClick={handleBack}>
                    <span className="font-semibold font-nunito text-primary50">
                      Kembali
                    </span>
                  </button>
                </div>

                {/* Opsi telah mengingat password  */}
                <div className="w-full mt-8 mb-10">
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
          <div className="relative h-custom-960 bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] w-full lg:flex flex-col justify-center items-center mr-20">
            <div className="flex flex-col items-center">
              <div className="font-nunito text-custom-30 text-white font-bold text-center ">
                Belanja Efisien Kemana Saja
              </div>
            </div>
            <div className="font-nunito text-custom-14 text-white  text-center p-6">
              Dengan berbagai kemudahan berbelanja di PaDi UMKM, proses
              transaksi pembelanjaan menjadi cepat dan efisien tanpa harus
              melewati proses yang merepotkan. Barang akan sampai kemana pun
              yang Anda inginkan dengan aman.
            </div>
            <img
              src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
              alt="background"
              className="h-custom-350 w-custom-350 mb-0"
            />
          </div>

          {/* Floating Button : Customer Care*/}
          <FloatingButton />
        </div>
      </div>
    </div>
  );
};
export default RegisterBuyer;
