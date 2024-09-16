import React from 'react';
import banner1 from '/src/assets/images/slide.svg';
import diskon from '/src/assets/icons/diskon.svg';
import electronic from '/src/assets/icons/eletronic.svg';
import souvernir from '/src/assets/icons/souvernir.svg';
import tools from '/src/assets/icons/alat-tulis.svg';
import book from '/src/assets/icons/buku.svg';
import carpentry from '/src/assets/icons/pertukangan.svg';
import healthy from '/src/assets/icons/kesehatan.svg';
import food from '/src/assets/icons/makanan.svg';
import product from '/src/assets/icons/semua.svg';
import CategoryButton from '/src/components/landing-page/CategoryButton';
import Header from '../components/landing-page/Header';

const LandingPage = () => {
  return (
    <div className="overflow-auto zoom-100">
      <Header />
      <div className="min-h-screen overflow-hidden">
        <div className="relative max-w-screen-2xl mx-auto mt-5">
          <div className="flex flex-col  w-full">
            <div className="relative w-full">
              <img src={banner1} alt="banner" className="mx-auto" />
              <button className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary70 text-white px-4 py-2 rounded-full w-56">
                Belanja Sekarang
              </button>
            </div>

            <div className="flex flex-col container-layout p-10 ">
              <div className="flex items-center w-full justify-between lg:w-fit lg:justify-start ">
                <div className="text-custom-24 font-bold font-nunito">
                  Kategori Produk
                </div>
              </div>
              <div className="mt-9 flex flex-wrap gap-16 space-x-7">
                <CategoryButton src={diskon} alt="diskon" text="Diskon" />
                <CategoryButton
                  src={electronic}
                  alt="elektronik"
                  text="Elektronik"
                />
                <CategoryButton
                  src={souvernir}
                  alt="souvenir"
                  text="Souvenir"
                />
                <CategoryButton
                  src={tools}
                  alt="alat-tulis"
                  text="Alat Tulis"
                />
                <CategoryButton src={book} alt="buku" text="Buku" />
                <CategoryButton
                  src={carpentry}
                  alt="pertukangan"
                  text="Pertukangan"
                />
                <CategoryButton
                  src={healthy}
                  alt="kesehatan"
                  text="Kesehatan"
                />
                <CategoryButton src={food} alt="makanan" text="Makanan" />
                <CategoryButton src={product} alt="semua" text="Semua" />
              </div>
            </div>
            <div className="flex flex-col items-start w-full px-10 space-y-8">
              <div className="flex items-center w-full justify-between">
                <div className="text-lg lg:text-custom-24 font-semibold font-nunito">
                  Flash sale hari ini
                </div>
                <a href="#">
                  <div className="flex items-center space-x-1 lg:space-x-3 lg:ml-8 cursor-pointer">
                    <span className="text-sm lg:text-custom-16 font-bold font-nunito text-primary50">
                      Lihat Semua
                    </span>
                    <div className="text-md font-bold">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        className="text-primary50"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="h-80 justify-start items-center gap-6 inline-flex">
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Stapler Besar BANTEX Warna White
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp141.900
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Post It Sign Here Posi - 3M 1 Box (Isi 12 Pcs)
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp285.000
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      BALLPOINT TRIFELO BP-316/317
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp6.700
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Corporate gift box set Tumbler & muq
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp250.000
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
                <div className="Card w-60 rounded-xl shadow flex-col justify-start items-start inline-flex">
                  <img
                    className="Image self-stretch h-36 rounded-tl-xl rounded-tr-xl"
                    src="https://via.placeholder.com/234x140"
                  />
                  <div className="Frame73 self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
                    <div className="NamaProdukMinimal2Line self-stretch text-black text-lg font-semibold font-['Nunito Sans'] leading-7">
                      Payung Custom JM Tipe 245J
                    </div>
                    <div className="Rp30000 self-stretch text-cyan-700 text-lg font-bold font-['Nunito Sans'] leading-7">
                      Rp70.000
                    </div>
                    <div className="Frame25 self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="Rp30000 text-neutral-400 text-sm font-semibold font-['Nunito Sans'] line-through leading-tight">
                        Rp 30.000
                      </div>
                      <div className="50 text-cyan-600 text-xs font-normal font-['Nunito Sans'] leading-none">
                        -50%
                      </div>
                    </div>
                    <div className="Frame18 w-28 h-4 justify-start items-center gap-px inline-flex">
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                      <div className="Star w-5 h-5 px-0.5 py-0.5 justify-center items-center flex" />
                    </div>
                    <div className="Terjual789 self-stretch text-neutral-400 text-sm font-semibold font-['Nunito Sans'] leading-tight">
                      Terjual 789
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
