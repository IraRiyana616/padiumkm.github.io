import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import googleLogo from '/src/assets/icons/google.png';

const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Ganti dengan ID klien Google Anda

const SignInWithGoogle = () => {
  const handleSuccess = (response) => {
    // Tangani respons dari Google setelah berhasil login
    console.log('Google login success:', response);
  };

  const handleError = (error) => {
    // Tangani error jika login gagal
    console.error('Google login error:', error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        buttonText="Masuk dengan Google"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="text-custom-14 w-full py-2.5 border-2 border-custom-17 rounded-md hover:bg-gray-300 hover:text-black flex items-center justify-center transition-colors duration-300">
            <img className="mr-3" src={googleLogo} alt="Google Logo" />
            <span className="font-semibold font-nunito">
              Masuk dengan Google
            </span>
          </button>
        )}
      />
    </GoogleOAuthProvider>
  );
};

export default SignInWithGoogle;
