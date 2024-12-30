import Image from 'next/image';
import React from 'react';
import car1 from '@/images/Car (1).png';
import car2 from '@/images/Car (2).png';

const Car = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full px-4 sm:px-8 lg:px-16 py-8">
        {/* First Card */}
        <div className="bg-[#54A6FF] rounded-md text-white p-6 flex flex-col justify-between w-full max-w-md md:max-w-lg lg:w-[600px]">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              <button className="bg-blue-400 px-4 py-2 rounded-sm hover:bg-blue-500">
                <a href="/Car-Detail" className="hover:underline">
                  The Best Platform for Car Rental
                </a>
              </button>
            </h1>
            <p className="text-sm sm:text-base">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-blue-600 px-4 py-2 rounded-sm hover:bg-blue-700">
              <a href="/Payment" className="hover:underline">Rent Now</a>
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <Image src={car1} alt="Car 1" className="w-full h-auto max-w-[200px] sm:max-w-[300px]" />
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-blue-600 rounded-md text-white p-6 flex flex-col justify-between w-full max-w-md md:max-w-lg lg:w-[600px]">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              <button className="bg-blue-600 px-4 py-2 rounded-sm hover:bg-blue-700">
                <a href="/Car-Detail" className="hover:underline">
                  Easy way to rent a car at a low price
                </a>
              </button>
            </h1>
            <p className="text-sm sm:text-base">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#34acd1]">
              <a href="/Payment" className="hover:underline">Rent Now</a>
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <Image src={car2} alt="Car 2" className="w-full h-auto max-w-[200px] sm:max-w-[300px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Car;
