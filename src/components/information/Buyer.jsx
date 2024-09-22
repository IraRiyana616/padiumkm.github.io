import React from 'react';
import { Carousel } from 'flowbite-react';

const Buyer = () => {
  return (
    <div className="bg-gray-200 mt-20">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-creen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/src/assets/images/banner-buter.svg" />
            </div>
          </div>
          <div className="flex h-full items-center justify-center">Slide 2</div>
        </Carousel>
      </div>
    </div>
  );
};
export default Buyer;
