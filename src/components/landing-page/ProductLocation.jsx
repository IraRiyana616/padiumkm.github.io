import React from 'react';

const ProductLocation = ({ imgSrc, productName, price, sold }) => {
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
            alt={`Image of ${productName}`}
          />
          <div className="p-4 bg-white flex flex-col justify-between h-full">
            <div className="flex-grow">
              <div className="text-black text-custom-15 font-semibold mb-1">
                {productName}
              </div>
              <div className="text-primary60 text-custom-15 font-bold mb-1">
                Rp{formatPrice(price)}
              </div>

              <div className="flex items-center mb-2 mt-4">
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

const LocationList = () => {
  const products = [
    {
      imgSrc: '/src/assets/images/image.png',
      productName: 'Philips Wireless by Frequency Headphone',
      price: 2849000,
      discountPercent: 50,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (1).png',
      productName: 'Sony FE 35mm f/1.8 FE35mm Mirroless',
      price: 12143000,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (2).png',
      productName: 'Sony ICF-306 Radio Portabel ICF306',
      price: 12143000,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (3).png',
      productName: 'Yoyo Id Card/Yoyo bening polos',
      price: 1689,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (4).png',
      productName: 'Pulpen sarasa clip 0.5 hitam/biru',
      price: 210000,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (9).png',
      productName: 'CORPORATE GIFT CUSTOM',
      price: 441500,
      discountPercent: 50,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (5).png',
      productName: 'Paket Backpack & Speaker JBL',
      price: 750000,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (6).png',
      productName: 'Memory Sodim V-Gen DDR3 PC3-12800 8GB',
      price: 315000,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (8).png',
      productName: 'Sony PS5 Slim Console Digital Edition',
      price: 11158800,
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/image (7).png',
      productName: 'Panasonic TH-32LS600G LED FHD',
      price: 4153200,
      sold: '789',
    },
  ];

  return (
    <div className="flex justify-start items-start gap-6 flex-wrap">
      {products.map((product, index) => (
        <ProductLocation
          key={index}
          imgSrc={product.imgSrc}
          productName={product.productName}
          price={product.price}
          sold={product.sold}
        />
      ))}
    </div>
  );
};

export default LocationList;
