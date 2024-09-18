import { useState } from 'react';
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
import Header from '/src/components/landing-page/Header';
import ProductCard from '/src/components/landing-page/ProductCard';
import diskonBanner from '/src/assets/images/diskon-banner.svg';
import BannerSection from '../components/landing-page/BannerSection';
import Banner from '../components/landing-page/Banner';
import FloatingButton from '../components/FloatingButton';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
  // State untuk mengontrol apakah teks ditampilkan
  const [showText, setShowText] = useState(false);

  // Fungsi untuk mengubah state saat SVG diklik
  const handleClick = () => {
    setShowText(!showText); // Mengubah nilai state setiap kali diklik
  };
  return (
    <div className="overflow-auto zoom-100">
      <Header />
      <div className="min-h-screen overflow-hidden">
        <div className="relative max-w-screen-2xl mx-auto mt-5">
          <div className="flex flex-col w-full">
            {/* Banner section */}
            <div className="relative w-full">
              <img src={banner1} alt="banner" className="mx-auto" />
              <button className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary70 text-white px-4 py-2 rounded-full w-56">
                Belanja Sekarang
              </button>
            </div>

            {/* Kategori Produk */}
            <div className="flex flex-col container-layout p-10">
              <div className="flex items-center w-full justify-between lg:w-fit lg:justify-start">
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
                  alt="alat tulis"
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
                <CategoryButton
                  src={product}
                  alt="semua kategori"
                  text="Semua"
                />
              </div>
            </div>

            {/* Flash Sale Section */}
            <div className="flex flex-col items-start w-full px-10 space-y-8">
              <div className="flex items-center w-full justify-between">
                <div className="text-lg lg:text-custom-24 font-semibold font-nunito">
                  Flash Sale Hari Ini
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
              <ProductCard />
            </div>
            <div className="relative w-full">
              <div className="flex justify-between items-center space-x-4 p-4 w-full mb-56">
                <img
                  src={diskonBanner}
                  alt="diskon banner"
                  className="ml-4 w-98px h-55px"
                />
              </div>
              <div className="absolute top-52 left-8  w-full h-full">
                <ProductCard />
              </div>
            </div>
            <BannerSection />
            <div className="mt-10 px-10 space-y-8">
              <ProductCard />
              <ProductCard />
            </div>
            <Banner />
            <div className="text-center text-custom-24 font-nunito font-bold mt-10">
              Frequently Asked Question
            </div>
            <div className="container-layout py-4 px-10 mt-8">
              <div className="border-[1px] rounded-2xl divide-y-[1px]">
                <div className="p-6 space-y-6 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold cursor-pointer">
                      Pengadaan Barang dan Jasa Pemerintah di Marketplace PaDi
                      UMKM
                    </h2>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleClick}>
                      <path
                        d={
                          showText
                            ? 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                            : 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                        }></path>
                    </svg>
                  </div>
                  {!showText && (
                    <div className="text-custom-14 text-tertiary60">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-6 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold cursor-pointer">
                      Pengadaan Barang dan Jasa Pemerintah di Marketplace PaDi
                      UMKM
                    </h2>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleClick}>
                      <path
                        d={
                          showText
                            ? 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                            : 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                        }></path>
                    </svg>
                  </div>

                  {!showText && (
                    <div className="text-custom-14 text-tertiary60">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-6 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold cursor-pointer">
                      Pengadaan Barang dan Jasa Pemerintah di Marketplace PaDi
                      UMKM
                    </h2>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleClick}>
                      <path
                        d={
                          showText
                            ? 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                            : 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                        }></path>
                    </svg>
                  </div>

                  {!showText && (
                    <div className="text-custom-14 text-tertiary60">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-6 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold cursor-pointer">
                      Pengadaan Barang dan Jasa Pemerintah di Marketplace PaDi
                      UMKM
                    </h2>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleClick}>
                      <path
                        d={
                          showText
                            ? 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' // Arrow up
                            : 'M207.029 130.524L12.686 324.868c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901.04L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901-.04l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z' // Arrow down
                        }></path>
                    </svg>
                  </div>

                  {!showText && (
                    <div className="text-custom-14 text-tertiary60">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <FloatingButton /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
