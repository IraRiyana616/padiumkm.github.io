import React from 'react';

const ProductCard = ({
  imgSrc,
  productName,
  price,
  discountPrice,
  discountPercent,
  sold,
}) => {
  return (
    <div className="mb-10 ml-2 shadow-lg rounded-b-xl ">
      <a href="#">
        <div className="Card w-56 rounded-xl shadow flex-col justify-start items-start inline-flex">
          <img
            className="self-stretch h-36 rounded-tl-xl rounded-tr-xl border-b-2 "
            src={imgSrc}
            alt={productName}
          />
          <div className="self-stretch h-48 p-4 bg-white rounded-bl-xl rounded-br-xl flex-col justify-center items-start gap-1 flex">
            <div className="self-stretch text-black text-custom-15 font-semibold font-nunito leading-7">
              {productName}
            </div>
            <div className="self-stretch text-primary60 text-custom-15 font-bold font-nunito leading-7">
              Rp{price}
            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="text-tertiary60 text-custom-12 font-semibold font-nunito line-through leading-tight">
                Rp{discountPrice}
              </div>
              <div className="text-primary50 text-custom-12 font-normal leading-none">
                {discountPercent}%
              </div>
            </div>
            <div className="flex flex-row w-28 h-4 justify-start items-center gap-px inline-flex mt-2 mb-2">
              <img src="/src/assets/icons/star.svg" />
              <img src="/src/assets/icons/star.svg" />
              <img src="/src/assets/icons/star.svg" />
              <img src="/src/assets/icons/star.svg" />
              <img src="/src/assets/icons/star-empty.svg" />
            </div>
            <div className="self-stretch text-tertiary60 text-custom-13 font-semibold font-nunito leading-tight">
              Terjual {sold}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      imgSrc: '/src/assets/images/staples.png',
      productName: 'Stapler Besar BANTEX Warna White',
      price: '141.900',
      discountPrice: '30.000',
      discountPercent: '-50',
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/post-it.png',
      productName: 'Post It Sign Here Posi - 3M 1 Box (Isi 12 pcs)',
      price: '285.000',
      discountPrice: '30.000',
      discountPercent: '-50',
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/ballpoint.png',
      productName: 'BALLPOINT TRIFELO BP-316/317',
      price: '6.700',
      discountPrice: '30.000',
      discountPercent: '-50',
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/muq.png',
      productName: 'Corporate gift box set Tumbler & muq',
      price: '250.000',
      discountPrice: '30.000',
      discountPercent: '-50',
      sold: '789',
    },
    {
      imgSrc: '/src/assets/images/payung.png',
      productName: 'Payung Custom JM Tipe 245J',
      price: '70.000',
      discountPrice: '30.000',
      discountPercent: '-50',
      sold: '789',
    },
  ];

  return (
    <div className="flex justify-start items-center gap-6 flex-wrap">
      {products.map((product, index) => (
        <ProductCard
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

export default ProductList;
