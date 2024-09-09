import React from 'react';
import { useFormHandlers } from '/src/components/register/formHandlers';
import '/src/App.css';
import customerCareIcon from '/src/assets/icons/customer.svg';
import RecaptchaComponent from '/src/components/register/Recaptcha';

const RegisterForm = () => {
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
      <section className="flex flex-col lg:flex-row justify-center bg-gray-200 items-center lg:h-screen mt-16 ">
        <div className="flex flex-col lg:flex-row max-w-screen-lg w-full pt-48 bg-white rounded-lg lg:m-6 overflow-hidden">
          <div className="flex flex-col justify-center items-center h-full w-full p-10">
            <div className="w-full mb-8">
              <div className="relative w-24 h-24">
                <img
                  src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
              <div className="text-custom-24 font-bold font-nunito">
                Daftar sebagai pembeli
              </div>
              <div className="font-nunito text-custom-14 mt-2">
                Mulai perjalanan belanja produk UMKM terbaik dari seluruh dunia
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
              {/* Form Alamat Email*/}
              <div className="mt-3">
                <label
                  className="font-semibold text-custom-14 font-nunito"
                  htmlFor="email">
                  Alamat Email
                </label>
              </div>

              <div className="mt-2">
                <input
                  className="py-2.5 px-5 appearance-none border rounded-[15px] w-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
              {/* Form Telepon */}
              <div className="mt-3">
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

              {/* Form Password */}
              <div className="mt-3">
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
              {/* Button Masuk */}
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
              <div className=" font-nunito text-custom-30 text-white font-bold text-center mb-4">
                Belanja Efisien Kemana Saja
              </div>
            </div>
            <div className="text-white text-center font-nunito">
              Dengan berbagai kemudahan berbelanja di PaDi UMKM, proses
              transaksi pembelajaan menjadi cepat dan efisien tanpa harus
              melewati proses yang merepotkan. Barang akan sampai kemana pun
              yang Anda inginkan dengan aman.
            </div>
            <div className="relative w-[400px] h-[400px]">
              <img
                src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
                alt="background"
                className="w-full h-full"
              />
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

export default RegisterForm;
