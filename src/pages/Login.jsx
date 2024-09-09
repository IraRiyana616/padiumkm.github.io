import React, { useState } from 'react';
import validator from 'validator';
import googleLogo from '/src/assets/icons/google.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Fungsi Pengecekan Email
  const isEmailValid = (email) => validator.isEmail(email);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (emailValue.trim() === '') {
      setEmailError('');
    } else if (!isEmailValid(emailValue)) {
      setEmailError('Email yang dimasukkan tidak sesuai dengan format');
    } else {
      setEmailError('');
    }
  };

  // Fungsi Pengecekan Password
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;

    if (passwordValue.length > 8) {
      setPassword(passwordValue.slice(0, 8));
      setPasswordError(
        'Password hanya boleh terdiri dari maksimal 8 karakter.'
      );
    } else {
      setPassword(passwordValue);
      setPasswordError('');
    }
  };

  const isFormValid =
    email.trim() !== '' &&
    password.trim() !== '' &&
    !emailError &&
    !passwordError;

  return (
    <div className="relative flex flex-row flex-wrap justify-between w-full bg-gray-200 ">
      <section className=" w-full md:relative md:overflow max-w-full mx-auto lg:py-10 ">
        <div className="flex justify-center items-center lg:h-screen bg-login-wrapper pt-16 ">
          <div className="max-w-screen-lg w-full bg-white rounded-lg lg:flex  ">
            <div className="flex flex-col justify-center items-center w-full h-screen lg:h-full p-10">
              <div className="w-full">
                <div className="flex justify-start items-center">
                  <div className="relative w-24 h-24">
                    <img
                      src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <h1 className="font-nunito font-bold text-custom-30 text-left">
                  Masuk ke Akun Anda
                </h1>
                <div className="font-nunito text-custom-12">
                  Selamat datang kembali! Akses ribuan produk UMKM dari seluruh
                  Indonesia
                </div>
                {/* Form Email */}
                <div className="mt-4">
                  <label
                    className="font-semibold text-custom-14 font-nunito"
                    htmlFor="email">
                    Email
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
                {/* Form Password */}
                <div className="mt-3.5">
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

                <div className="mt-4 font-semibold text-custom-14 text-primary60 text-right mr-2">
                  <a href="/">Lupa Password ?</a>
                </div>
                {/* Button Masuk */}
                <div className="w-full mt-4">
                  <button
                    className={`text-custom-17 w-full py-2.5 ${
                      isFormValid ? 'bg-primary50' : 'bg-gray-300'
                    } text-white rounded-lg`}
                    type="button"
                    disabled={!isFormValid}>
                    Masuk
                  </button>
                </div>
                {/* Text Berpindah Halaman  */}
                <div className="mt-6 text-center flex items-center justify-center">
                  <span className="text-custom-14">Belum punya akun ?</span>
                  <a
                    href="/daftar"
                    className="text-custom-14 font-bold text-primary60 ml-2">
                    Daftar Sekarang
                  </a>
                </div>
                <div className="flex items-center justify-center mt-5">
                  <hr className="border-gray-300 flex-grow" />
                  <span className="mx-4 text-custom-14 text-textColor">
                    Atau
                  </span>
                  <hr className="border-gray-300 flex-grow" />
                </div>
                {/* Opsi login menggunakan Google */}
              </div>
              <div className="w-full mb-6 mt-5">
                <button className="text-custom-14 w-full py-2.5 border-2 border-custom-17 rounded-md hover:bg-gray-300 hover:text-black flex items-center justify-center transition-colors duration-300">
                  <img className="mr-3" src={googleLogo} alt="Google Logo" />
                  <span className="font-semibold font-nunito">
                    Masuk dengan Google
                  </span>
                </button>
              </div>
            </div>
            {/* ROW 2 */}
            <div className="relative bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] lg:max-w-screen-sm w-full hidden lg:flex flex-col justify-center items-center space-y-7 p-10">
              <div className="flex justify-center items-center flex-1">
                <div className="relative w-[300px] h-[270px] mt-20">
                  <img
                    src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
                    alt="login"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 flex-1 min-h-[144px]">
                <div className="text-2xl text-white font-bold text-center">
                  Pasti Untung di PaDi UMKM!
                </div>
                <div className="text-white text-center font-normal">
                  Berbagai promo dan penawaran menarik setiap bulannya!
                </div>
                <div className="flex space-x-1 absolute bottom-22 left-1/2 transform -translate-x-1/2 mb-1">
                  <div className="rounded-full p-1 bg-white w-6"></div>
                  <div className="rounded-full p-1 bg-borderCard-textFieldBorder"></div>
                  <div className="rounded-full p-1 bg-borderCard-textFieldBorder"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
