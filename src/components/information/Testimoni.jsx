import React from 'react';
import image2 from '/src/assets/images/seller.png';
import image3 from '/src/assets/images/seller2.png';
import image4 from '/src/assets/images/seller3.png';
import arrow from '/src/assets/icons/arrow-blue.svg';

const TestimoniCard = ({ image, title, description, description2 }) => (
  <div className="mt-8 bg-white shadow-lg rounded-lg w-80 h-full">
    <img
      src={image}
      alt={title}
      className="w-full h-52 object-cover rounded-t-lg"
    />
    <h4 className="font-nunito font-bold text-custom-20 p-4 text-gray-600">
      {title}
    </h4>
    <p className="ml-4 mr-4 mb-3 text-custom-14 text-gray-600">{description}</p>
    <p className="ml-4 mr-4 mb-10 text-custom-14 text-gray-600">
      {description2}
    </p>
  </div>
);

const TestimoniListCard = () => {
  return (
    <div className="flex flex-row space-x-9 mt-6">
      <TestimoniCard
        image={image2}
        title="CV Esa Medco Technology"
        description="Total Pendapatan Rp 123.262.000"
        description2="Jelas kita mendapatkan pasar baru (sektor BUMN) yang juga meningkatkan omset UMKM. Kita memiliki jaringan yang lebih luas lagi dengan BUMN karena mereka pembeli yang berkelanjutan tiap bulannya."
      />
      <TestimoniCard
        image={image3}
        title="Rifa - Rifastik Batik Solo"
        description="Total Pendapatan Rp 124.262.000"
        description2="PaDi UMKM menjadi pilihan tempat penjualan dari saya karena merasa eksklusuf dengan adanya pendampingan untuk Seller dan pembeli BUMN yang telah disiapkan. Batik tulisku banyak yang laku."
      />
      <TestimoniCard
        image={image4}
        title="CV Mitra Jaya Computindo"
        description="Total Pendapatan Rp 13.1 M"
        description2="Setelah lama menjalankan pekerjaan di PaDi UMKM ternyata mempermudah untuk memantau status transaksi dan juga dengan adanya PaDi UMKM akhirnya menambah pasar customer BUMN baru."
      />
    </div>
  );
};

export default TestimoniListCard;
