import React from 'react';

const PasswordInput = ({
  id,
  label,
  value,
  onChange,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className="mt-4">
      <label className="font-semibold text-custom-14 font-nunito" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          className="py-2.5 px-5 appearance-none border rounded-[15px] w-full focus:outline-none"
          id={id}
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={8}
        />
        {errorMessage && (
          <p id={`${id}Error`} className="text-red-500 text-sm mt-1">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
