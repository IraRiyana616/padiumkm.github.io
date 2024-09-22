import { useState } from 'react';
import validator from 'validator';

export const useFormHandlers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setPhone(phoneValue);

    const isNumeric = Number(phoneValue).toString() === phoneValue;

    if (!isNumeric || !isValidLength) {
      setPhoneError('Nomor telepon harus berupa angka dan minimal 11 digit.');
    } else {
      setPhoneError('');
    }
  };

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
    setPassword(passwordValue);

    if (passwordValue.length > 8) {
      setPasswordError(
        'Password hanya boleh terdiri dari maksimal 8 karakter.'
      );
    } else {
      setPasswordError('');
    }
  };

  const isFormValid =
    name.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    phone.trim() !== '' &&
    !emailError &&
    !passwordError &&
    !phoneError &&
    isChecked;

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    console.log('Captcha Value:', captchaValue);
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    phone,
    setPhone,
    phoneError,
    setPhoneError,
    passwordError,
    setPasswordError,
    captchaValue,
    setCaptchaValue,
    isChecked,
    setIsChecked,
    handleCheckboxChange,
    handleNameChange,
    handlePhoneChange,
    handleEmailChange,
    handlePasswordChange,
    isFormValid,
    handleCaptchaChange,
    handleSubmit,
  };
};
