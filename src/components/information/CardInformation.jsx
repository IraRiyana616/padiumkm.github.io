import React from 'react';
import image from '/src/assets/images/information-room.svg';
import arrow from '/src/assets/icons/arrow-blue.svg';

const Card = ({ title, description, description2 }) => (
  <div className="mt-8 bg-white shadow-lg rounded-lg w-72 h-full">
    <img src={image} alt={title} className="w-full" />
    <h4 className="font-nunito font-bold text-custom-20 p-4">{title}</h4>
    <p className="mx-4 text-custom-14 text-gray-600">{description}</p>
    <p className="mx-4 mt-2.5 text-custom-16 text-gray-600">{description2}</p>
    <div className="py-4 px-4 mb-5">
      <button className="flex items-center text-primary60 border-primary50 border-2 rounded-lg w-full h-[45px] justify-center">
        <span className="mr-2">Pelajari Lebih Lanjut</span>
        <img src={arrow} alt="Arrow" />
      </button>
    </div>
  </div>
);

const InformationCard = () => {
  const cards = [
    {
      title: 'Memikat Hari Pembeli: Dari Produk Hingga Layanan Pelanggan',
      description: `Membangun bisnis yang sukses tidak hanya tentang menawarkan produk yang hebat ...`,
      description2: '4 Semptember 2024',
    },
    {
      title: 'Memikat Hari Pembeli: Dari Produk Hingga Layanan Pelanggan',
      description: `Membangun bisnis yang sukses tidak hanya tentang menawarkan produk yang hebat ...`,
      description2: '4 Semptember 2024',
    },
    {
      title: 'Memikat Hari Pembeli: Dari Produk Hingga Layanan Pelanggan',
      description: `Membangun bisnis yang sukses tidak hanya tentang menawarkan produk yang hebat ...`,
      description2: '4 Semptember 2024',
    },
    {
      title: 'Memikat Hari Pembeli: Dari Produk Hingga Layanan Pelanggan',
      description: `Membangun bisnis yang sukses tidak hanya tentang menawarkan produk yang hebat ...`,
      description2: '4 Semptember 2024',
    },
  ];

  return (
    <div className="flex flex-row space-x-9 mt-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          description2={card.description2}
        />
      ))}
    </div>
  );
};

export default InformationCard;
