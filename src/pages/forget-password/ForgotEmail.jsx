import React, { useState } from 'react';
import validator from 'validator';
import FloatingButton from '../../components/FloatingButton';

const FormEmail = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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

  const isFormValid = email.trim() !== '';

  return (
    <div>
      <div className="relative w-full bg-gray-200">
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
                  Lupa Password
                </div>
                <div className="font-nunito text-custom-12 text-tertiary80 mt-2">
                  Kirimkan email yang terhubung dengan akun Anda.
                  <span>
                    Kami akan mengirimkan tautan untuk mengatur ulang kata sandi
                    Anda
                  </span>
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
                {/* Button Kirim Email */}
                <div className="w-full  mt-5">
                  <button
                    className={`text-custom-17 w-full py-2.5 ${
                      isFormValid ? 'bg-primary50' : 'bg-gray-300'
                    } text-white rounded-lg`}
                    type="button"
                    disabled={!isFormValid}>
                    <span className="font-semibold font-nunito text-white">
                      Kirim email
                    </span>
                  </button>
                </div>

                {/* Opsi telah mengingat password  */}
                <div className="w-full mt-8 mb-10">
                  <p className="text-center text-custom-14">
                    Ingat password?
                    <a href="/login">
                      <span className="text-custom-14 font-bold text-primary60 ml-2 cursor-pointer">
                        Masuk Sekarang
                      </span>
                    </a>
                  </p>
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
export default FormEmail;
