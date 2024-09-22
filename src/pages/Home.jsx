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
import Header from '/src/components/landing-page/header/after-login/Header';
import ProductCard from '/src/components/landing-page/ProductCard';
import ProductGreenEconomy from '/src/components/landing-page/ProductGreen';
import ProductLocation from '/src/components/landing-page/ProductLocation';
import diskonBanner from '/src/assets/images/diskon-banner.svg';
import BannerSection from '../components/landing-page/BannerSection';
import FloatingButton from '../components/FloatingButton';
import Footer from '/src/components/Footer';

const Home = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
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
                  Flash Sale Hari Ini!
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
            {/* Recommended For You */}
            <div className="flex flex-col items-start w-full px-10 space-y-8 mt-7">
              <div className="flex items-center w-full justify-between">
                <div className="text-lg lg:text-custom-24 font-semibold font-nunito">
                  Rekomendasi Untuk Anda
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
              <div className="absolute top-52 left-8   w-full h-full">
                <ProductGreenEconomy />
              </div>
            </div>
            <div className="mt-16">
              <BannerSection />
            </div>
            <div className="mt-5 px-10 space-y-8">
              <div className="text-lg lg:text-custom-24 font-semibold font-nunito">
                Produk Populer
              </div>
              <ProductLocation />
            </div>
          </div>
          <div className="flex justify-center items-center w-full mt-8 mb-8">
            <button
              type="button"
              aria-label="Muat Lebih Banyak"
              className="w-[450px] h-[45px] bg-primary50 text-white font-bold font-nunito rounded-full">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </div>

      <FloatingButton />
      <Footer />
    </div>
  );
};

export default Home;
