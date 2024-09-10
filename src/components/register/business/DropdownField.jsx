import React from 'react';

const DropdownField = ({ label, options, value, onChange, id, error }) => {
  return (
    <div className="mt-2">
      <label className="font-semibold text-custom-14 font-nunito" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <div className="relative">
          <select
            className="py-2.5 px-5 appearance-none border rounded-[15px] w-full focus:outline-none"
            id={id}
            value={value}
            onChange={onChange}
            aria-describedby={`${id}Error`}>
            <option value="" disabled>
              Pilih {label}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <svg
            className="w-5 h-5 absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {error && (
          <p id={`${id}Error`} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default DropdownField;
