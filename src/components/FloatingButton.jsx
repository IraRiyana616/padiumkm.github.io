import React from 'react';
import customerCareIcon from '/src/assets/icons/customer.svg';

const FloatingButton = () => {
  return (
    <div className="fixed bottom-3.5 right-8 flex items-center bg-secondary0 text-white rounded-xl shadow-lg p-3 cursor-pointer">
      <img
        className="w-10 h-10 mr-2 m-0"
        src={customerCareIcon}
        alt="Customer Care Icon"
      />
      <span className="font-bold text-primary60 m-0">Customer Care</span>
    </div>
  );
};

export default FloatingButton;
