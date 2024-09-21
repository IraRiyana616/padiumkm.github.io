import React from 'react';
import money from '/src/assets/icons/fi-rr-money.svg';
import user from '/src/assets/icons/fi-rr-user.svg';
import building from '/src/assets/icons/fi-rr-building.svg';
import shopping from '/src/assets/icons/fi-rr-shopping-bag.svg';

const ShortInformation = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-center">
        <div className="font-nunito font-bold text-custom-24">
          Selama perjalannya
        </div>
        <div className="font-nunito font-bold text-custom-18 mt-2.5">
          PaDi UMKM telah berhasil mencapai skala yang
          <span className="text-primary50"> mengesankan</span>
        </div>
        <div className="md:shadow-lg p-8 bg-white rounded-lg mt-14 border-2">
          <div className="flex flex-row justify-between space-x-60 p-3.5 ">
            {/* Transaksi */}
            <div className="flex flex-col items-center">
              <img src={money} className="w-10 h-10" />
              <div className="font-nunito font-semibold text-gray-500 text-center mt-2">
                250.000++
              </div>
              <div className="text-center text-gray-500">Transaksi</div>
            </div>

            {/* UMKM */}
            <div className="flex flex-col items-center">
              <img src={user} className="w-10 h-10" />
              <div className="font-nunito font-semibold text-gray-500 text-center mt-2">
                80.000++
              </div>
              <div className="text-center text-gray-500">UMKM</div>
            </div>

            {/* Mitra */}
            <div className="flex flex-col items-center">
              <img src={building} className="w-10 h-10" />
              <div className="font-nunito font-semibold text-gray-500 text-center mt-2">
                116++
              </div>
              <div className="text-center text-gray-500">Mitra</div>
            </div>

            {/* Pembeli */}
            <div className="flex flex-col items-center ">
              <img src={shopping} className="w-10 h-10" />
              <div className="font-nunito font-semibold text-gray-500 text-center mt-2">
                36.000++
              </div>
              <div className="text-center text-gray-500">Pembeli</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShortInformation;
