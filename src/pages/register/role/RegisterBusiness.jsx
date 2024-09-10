import React from 'react';
import BusinessForm from '/src/components/register/business/BusinessForm';
import FloatingButton from '/src/components/FloatingButton';

const RegisterBusiness = () => {
  const entityOptions = [
    'Mikro (<=2 miliar)',
    'Kecil (2-15 miliar)',
    'Menengah (15-50 miliar)',
    'Enterprise (>50 miliar)',
  ];
  const segmentOptions = [
    'Mikro (<=2 miliar)',
    'Kecil (2-15 miliar)',
    'Menengah (15-50 miliar)',
    'Enterprise (>50 miliar)',
  ];
  const typeOptions = [
    'Principle/Pabrik',
    'Distributor',
    'Retail/Toko',
    'Reseller',
    'Sub-distributor',
  ];

  return (
    <div>
      <div className="relative w-full bg-gray-200">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:min-h-screen">
          <div className="max-w-screen-lg w-full bg-white lg:flex mt-10 mb-10 ml-20 h-custom-960">
            <BusinessForm
              entityOptions={entityOptions}
              segmentOptions={segmentOptions}
              typeOptions={typeOptions}
            />
          </div>
          <div className="relative h-custom-960 bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] w-full lg:flex flex-col justify-center items-center mr-20">
            <div className="flex flex-col items-center">
              <div className="font-nunito text-custom-30 text-white font-bold text-center">
                Belanja Efisien Kemana Saja
              </div>
            </div>
            <div className="font-nunito text-custom-14 text-white text-center p-6">
              Dengan berbagai kemudahan berbelanja di PaDi UMKM, proses
              transaksi pembelanjaan menjadi cepat dan efisien tanpa harus
              melewati proses yang merepotkan. Barang akan sampai kemana pun
              yang Anda inginkan dengan aman.
            </div>
            <img
              src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
              alt="background"
              className="h-custom-350 w-custom-350 mb-0"
            />
          </div>
          <FloatingButton />
        </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;
