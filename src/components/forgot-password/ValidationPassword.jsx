import React, { useState } from 'react';
import PasswordInput from '/src/components/forgot-password/PasswordInput';

const ValidationPassword = ({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleNewPasswordChange = (e) => {
    const passwordValue = e.target.value;
    if (passwordValue.length > 8) {
      setNewPassword(passwordValue.slice(0, 8));
      setPasswordError(
        'Password hanya boleh terdiri dari maksimal 8 karakter.'
      );
    } else {
      setNewPassword(passwordValue);
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    if (confirmPasswordValue.length > 8) {
      setConfirmPassword(confirmPasswordValue.slice(0, 8));
      setConfirmPasswordError(
        'Password hanya boleh terdiri dari maksimal 8 karakter.'
      );
    } else {
      setConfirmPassword(confirmPasswordValue);
      setConfirmPasswordError('');
    }

    if (confirmPasswordValue !== newPassword) {
      setConfirmPasswordError('Kata sandi tidak cocok.');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <div>
      <PasswordInput
        id="newPassword"
        label="Kata Sandi Baru"
        value={newPassword}
        onChange={handleNewPasswordChange}
        errorMessage={passwordError}
        placeholder="Masukkan Kata Sandi Baru"
      />
      <PasswordInput
        id="confirmPassword"
        label="Konfirmasi Kata Sandi"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        errorMessage={confirmPasswordError}
        placeholder="Masukkan Konfirmasi Kata Sandi"
      />
    </div>
  );
};

export default ValidationPassword;
