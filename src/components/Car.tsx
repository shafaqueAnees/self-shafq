import Image from 'next/image';
import React from 'react';
import car1 from '@/images/Car (1).png';
import car2 from '@/images/Car (2).png';

const Car = () => {
  return (
    <>
      <section className="flex justify-center space-x-6 w-full">
        <div className="bg-[#54A6FF] rounded-md text-white p-6 w-[600px]">
          <div className="w-72 space-y-4 text-left">
            <h1 className="text-3xl font-semibold text-left">
              <button className="bg-blue-400 px-4 py-2 rounded-sm hover:bg-blue-400">
                <a href="/Car-Detail" className="hover:underline">
                  The Best Platform for Car Rental
                </a>
              </button>
            </h1>
            <p className="text-sm">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-blue-600 px-4 py-2 rounded-sm hover:bg-blue-700">
              <a href="/Payment" className="hover:underline">Rent Now</a>
            </button>
          </div>
          <div className="flex justify-center">
            <Image src={car1} alt="Car 1" />
          </div>
        </div>

        <div className="bg-blue-600 rounded-md text-white p-6 w-[600px] hidden lg:block">
          <div className="w-72 space-y-4 text-left">
            <h1 className="text-3xl font-semibold text-left"> <button className="bg-blue-600 px-4 py-2 rounded-sm hover:bg-blue-600">
                <a href="/Car-Detail" className="hover:underline">
                Easy way to rent a car at a low price
                </a>
              </button>
            </h1>
            <p className="text-sm">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#34acd1]">
              <a href="/Payment" className="hover:underline">Rent Now</a>
            </button>
          </div>
          <div className="flex justify-center">
            <Image src={car2} alt="Car 2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Car;
