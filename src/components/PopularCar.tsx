import React from 'react';
import Image from 'next/image';
import car5 from '@/images/Car (5).png';
import car6 from '@/images/Car (6).png';
import car7 from '@/images/Car (7).png';
import car8 from '@/images/Car (8).png';

const Popular = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">Popular Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <Image src={car5} alt="Car" width={300} height={300} className="mb-4" />
          <h3 className="text-lg font-bold">
            <button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
              <a href="/Car-Detail" className="hover:underline">
                Tesla
              </a>
            </button>
          </h3>
          <p className="text-gray-500">Sport</p>
          <p className="text-red-500 font-bold">$99.00/day</p>
          <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#36d0ff] mt-2">
            <a href="/Payment" className="hover:underline">
              Rent Now
            </a>
          </button>
        </div>

        {/* Card 2 */}
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <Image src={car6} alt="Car" width={300} height={300} className="mb-4" />
          <h3 className="text-lg font-bold">
            <button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
              <a href="/Car-Detail" className="hover:underline">
                Lamborghini
              </a>
            </button>
          </h3>
          <p className="text-gray-500">Sport</p>
          <p className="text-red-500 font-bold">$99.00/day</p>
          <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#36d0ff] mt-2">
            <a href="/Payment" className="hover:underline">
              Rent Now
            </a>
          </button>
        </div>

        {/* Card 3 */}
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <Image src={car7} alt="Car" width={300} height={300} className="mb-4" />
          <h3 className="text-lg font-bold">
            <button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
              <a href="/Car-Detail" className="hover:underline">
                BMW
              </a>
            </button>
          </h3>
          <p className="text-gray-500">Sport</p>
          <p className="text-red-500 font-bold">$99.00/day</p>
          <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#36d0ff] mt-2">
            <a href="/Payment" className="hover:underline">
              Rent Now
            </a>
          </button>
        </div>

        {/* Card 4 */}
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <Image src={car8} alt="Car" width={300} height={300} className="mb-4" />
          <h3 className="text-lg font-bold">
            <button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
              <a href="/Car-Detail" className="hover:underline">
                Audi
              </a>
            </button>
          </h3>
          <p className="text-gray-500">Sport</p>
          <p className="text-red-500 font-bold">$99.00/day</p>
          <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#36d0ff] mt-2">
            <a href="/Payment" className="hover:underline">
              Rent Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
