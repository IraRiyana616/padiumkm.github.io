import React from 'react';

const InputField = ({ label, value, onChange, placeholder, id }) => {
  return (
    <div className="mt-2">
      <label className="font-semibold text-custom-14 font-nunito" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          className="py-2.5 px-5 appearance-none border rounded-[15px] w-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
