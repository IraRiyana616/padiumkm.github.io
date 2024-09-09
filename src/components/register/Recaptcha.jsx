import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RecaptchaComponent = ({ onChange }) => {
  const recaptchaRef = React.createRef();

  return (
    <div className="mt-6">
      <ReCAPTCHA
        sitekey="6LfyTDoqAAAAAPNvXkOHk5--0_PH613EdSZCdnja"
        onChange={onChange}
        ref={recaptchaRef}
      />
    </div>
  );
};
export default RecaptchaComponent;
