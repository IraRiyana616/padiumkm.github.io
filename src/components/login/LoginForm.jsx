import React, { useState } from 'react';
import validator from 'validator';
import googleLogo from '/src/assets/icons/google.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  //Authentikasi Login
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
  const handleEmailClick = () => {
    window.location.href =
      'mailto:someone@example.com?subject=Hello&body=Hi there!';
  };

  return (
    <div className="max-w-screen-lg w-custom-550 bg-white lg:flex mt-10 mb-10 ml-20 h-custom-780">
      <div className="justify-center items-center w-full lg:min-h-screen lg:h-full">
        <div className="w-full p-12">
          <div className="flex justify-start items-center">
            <div className="relative w-24 h-24">
              <img
                src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
                alt="Logo PaDi UMKM"
              />
            </div>
          </div>
          <div className="text-2xl font-bold font-nunito">
            Masuk ke Akun Anda
          </div>
          <div className="font-nunito text-custom-12 text-tertiary80 mt-2">
            Selamat datang kembali! Akses ribuan produk UMKM dari seluruh
            Indonesia
          </div>
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
            <a href="/forgot-password">Lupa Password ?</a>
          </div>
          <div className="w-full mt-5">
            <button
              className={`text-custom-17 w-full py-2.5 ${
                isFormValid ? 'bg-primary50' : 'bg-gray-300'
              } text-white rounded-lg`}
              type="button"
              onClick={handleLogin}
              disabled={!isFormValid}>
              <span className="font-semibold font-nunito text-white">
                Masuk
              </span>
            </button>
          </div>
          <div className="w-full mt-8 mb-10">
            <p className="text-center text-custom-14">
              Belum punya akun ?
              <a href="/register">
                <span className="text-custom-14 font-bold text-primary60 ml-2 cursor-pointer">
                  Daftar Sekarang
                </span>
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center mt-5">
            <hr className="border-gray-300 flex-grow" />
            <span className="mx-4 text-custom-14 text-textColor">Atau</span>
            <hr className="border-gray-300 flex-grow" />
          </div>
          <div className="w-full mb-6 mt-5">
            <button
              onClick={handleEmailClick}
              className="text-custom-14 w-full py-2.5 border-2 border-custom-17 rounded-md hover:bg-gray-300 hover:text-black flex items-center justify-center transition-colors duration-300">
              <img className="mr-3" src={googleLogo} alt="Google Logo" />
              <span className="font-semibold font-nunito">
                Masuk dengan Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
