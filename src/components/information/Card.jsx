import React from 'react';
import mitra from '/src/assets/images/mitra.svg';
import trafic from '/src/assets/images/trafic.svg';
import business from '/src/assets/images/business-growth.svg';
import comitment from '/src/assets/images/comitment.svg';

const Card = ({ imgSrc, title, description }) => (
  <div className="flex flex-col">
    <img src={imgSrc} alt={title} />
    <div className="text-center mt-5 font-bold text-custom-18 text-tertiary60 font-nunito">
      {title}
    </div>
    <div className="font-nunito text-custom-14 text-center mt-4 text-gray-400">
      {description}
    </div>
  </div>
);

const CardSection = () => {
  const items = [
    {
      imgSrc: mitra,
      title: 'Merangkul',
      description:
        'Mengayomi para pelaku usaha dalam memberi arahan dan dukungan terhadap peningkatan ekonomi.',
    },
    {
      imgSrc: trafic,
      title: 'Memberi Modal',
      description:
        'Salah satu dukungan dari kami kepada pelaku usaha untuk terus berinovasi dan berkembang.',
    },
    {
      imgSrc: business,
      title: 'Bertumbuh',
      description:
        'Bersama sama berkembang demi meningkatkan kualitas dan performa bisnis yang ditarget.',
    },
    {
      imgSrc: comitment,
      title: 'Menginspirasi',
      description:
        'Gagasan, ambisi, dan hasil kami menjadi dorongan para pelaku usaha dalam berbisnis di PaDi UMKM.',
    },
  ];

  return (
    <div className="flex flex-row gap-x-24 ml-14 mr-14 py-8">
      {items.map((item, index) => (
        <Card
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardSection;
