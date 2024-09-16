import React from 'react';

const CategoryButton = ({ src, alt, text }) => (
  <button className="flex flex-col items-center">
    <img className="mb-2" src={src} alt={alt} />
    <span className="font-nunito text-custom-14">{text}</span>
  </button>
);

export default CategoryButton;
