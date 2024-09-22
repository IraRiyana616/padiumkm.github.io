import React from 'react';

const ProductGreenEconomy = ({
  imgSrc,
  productName,
  price,
  discountPrice,
  discountPercent,
  sold,
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  return (
    <div className="mb-12 ml-2 shadow-lg rounded-lg overflow-hidden w-56">
      <a href="#">
        <div className="card rounded-lg flex flex-col justify-start items-start">
          <img
            className="h-36 w-full object-cover rounded-t-lg"
            src={imgSrc}
            alt={productName}
          />
          <div className="p-4 bg-white flex flex-col justify-between h-full">
            <div className="flex-grow">
              <div className="text-black text-custom-15 font-semibold mb-1">
                {productName}
              </div>
              <div className="text-primary60 text-custom-15 font-bold mb-1">
                Rp{formatPrice(price)}
              </div>
              <div className="flex items-center mb-2">
                <div className="text-tertiary60 text-custom-13 font-semibold line-through mr-2">
                  Rp{formatPrice(discountPrice)}
                </div>
                <div className="text-primary50 text-custom-13 font-normal">
                  -{discountPercent}%
                </div>
              </div>
              <div className="flex justify-start mb-2">
                <img
                  src="/src/assets/icons/green-good.svg"
                  alt="Deskripsi icon"
                  className="w-20 h-8"
                />
              </div>
              <div className="flex items-center mb-2">
                <img
                  src="/src/assets/icons/map-pin.svg"
                  alt="Location pin"
                  className="mr-1.5 w-3.5 h-3.5"
                />
                <div className="text-custom-13 font-nunito font-semibold text-tertiary60">
                  Kota Bogor
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/src/assets/icons/star.svg"
                    alt="star"
                    className="w-4 h-4 mr-1"
                  />
                ))}
              </div>
              <div className="text-tertiary60 text-custom-13 font-semibold">
                Terjual {sold}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const GreenEconomyList = () => {
  const products = [
    {
      imgSrc: '/src/assets/images/frame.svg',
      productName: 'Eco-friendly Flip-Flops cork',
      price: 80900,
      discountPrice: 30000,
      discountPercent: 50,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/puzzle.svg',
      productName: 'Dompet Coin Kain Souvenir Goni Natural',
      price: 124000,
      discountPrice: 30000,
      discountPercent: 50,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/water.svg',
      productName: 'Cleo Eco Green 750ml (1pcs)',
      price: 5700,
      discountPrice: 300,
      discountPercent: 50,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/wallet.svg',
      productName: 'Memo Puzzle 3D Puddle (1 Box)',
      price: 69000,
      discountPrice: 30000,
      discountPercent: 50,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/sandal.svg',
      productName: 'Bamboo Weaving with Frame',
      price: 267000,
      discountPrice: 30000,
      discountPercent: 50,
      sold: '789',
    },
  ];

  return (
    <div className="flex justify-start items-start gap-6 flex-wrap">
      {products.map((product, index) => (
        <ProductGreenEconomy
          key={index}
          imgSrc={product.imgSrc}
          productName={product.productName}
          price={product.price}
          discountPrice={product.discountPrice}
          discountPercent={product.discountPercent}
          sold={product.sold}
        />
      ))}
    </div>
  );
};

export default GreenEconomyList;
