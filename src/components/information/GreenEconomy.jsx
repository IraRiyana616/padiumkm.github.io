import React from 'react';
import people from '/src/assets/images/people.svg';
import box from '/src/assets/icons/box.svg';
import recycle from '/src/assets/icons/fi-br-recycle.svg';
import leaf from '/src/assets/icons/fi-bs-leaf.svg';
import arrow from '/src/assets/icons/arrow-blue.svg';

const GreenEconomy = () => {
  return (
    <div className="flex flex-row items-center mt-48 px-24">
      <img src={people} className="mr-24" alt="People" />
      <div className="flex flex-col ">
        <div className="text-custom-30 font-bold">
          Mengapa <span className="text-primary50">Green Economy</span>
          <span> Penting?</span>
        </div>
        <div className="mt-4 font-nunito">
          Dengan mempertemukan UMKM ramah lingkungan dengan perusahaan BUMN dan
          Swasta, kami menciptakan peluang transaksi yang berfokus pada
          produk-produk berkualitas dan ramah lingkungan. Dukungan ini membantu:
        </div>

        <div className="flex flex-row mt-5">
          <img src={leaf} alt="Icon Leaf" className="mr-5 w-5 h-5" />
          <div className="font-nunito">Mengurangi dampak lingkungan.</div>
        </div>
        <div className="flex flex-row mt-5">
          <img src={recycle} alt="Icon Leaf" className="mr-5 w-5 h-5" />
          <div className="font-nunito">
            Mendorong inovasi produk ramah lingkungan.
          </div>
        </div>
        <div className="flex flex-row mt-5">
          <img src={box} alt="Icon Leaf" className="mr-5 w-5 h-5" />
          <div className="font-nunito">
            Menciptakan ekonomi sirkular dan penggunaan sumber daya yang bijak.
          </div>
        </div>
        <div className="flex items-center justify-center mt-16">
          <button className="flex items-center text-primary60 border-primary50 border-2 rounded-lg w-[300px] h-[45px] justify-center">
            <span className="mr-2">Pelajari selengkapnya</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default GreenEconomy;
