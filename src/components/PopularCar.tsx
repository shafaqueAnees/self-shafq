import React from 'react';
import Image from 'next/image';
import car5  from "@/images/Car (5).png"
import car6 from "@/images/Car (6).png"
import car7 from "@/images/Car (7).png"
import car8 from "@/images/Car (8).png"
const Popular = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Popular Car</h2>
      <div className="grid grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="border p-4 rounded shadow-sm">
          <Image src={car5} alt="Car" width={300} height={300} className="mb-4" />
          <h3 className="text-lg font-bold"><button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
          <a href="/Car-Detail" className="hover:underline">Tesla</a></button></h3>
          <p className="text-gray-500">Sport</p>
          <p className="text-red-500 font-bold">$99.00/day</p>
          <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#36d0ff]">
              <a href="/Payment" className="hover:underline">Rent Now</a>
            </button>
        </div>
        {/* Repeat other cards */}
        <div className="border p-4 rounded shadow-sm">
        <Image src={car6} alt="Car" width={300} height={300}className="mb-4" />
          <h3 className="text-lg font-bold"><button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
          <a href="/Car-Detail" className="hover:underline">Lamborghini</a></button></h3>
          <p className="text-gray-500">Sport</p>
          <p className="text-red-500 font-bold">$99.00/day</p>
          <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#36d0ff]">
              <a href="/Payment" className="hover:underline">Rent Now</a>
            </button>
        </div>
        <div className="border p-4 rounded shadow-sm">
         <Image src={car7} alt="Car" width={300} height={300} className="mb-4" />
          <h3 className="text-lg font-bold"><button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
          <a href="/Car-Detail" className="hover:underline">BMW</a></button></h3>
          <p className="text-gray-500">Sport</p>
          <p className="text-red-500 font-bold">$99.00/day</p>
          <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#36d0ff]">
              <a href="/Payment" className="hover:underline">Rent Now</a>
            </button>
        </div>
        <div className="border p-4 rounded shadow-sm">
        <Image src={car5} alt="Car" width={300} height={300}  className="mb-4" />
          <h3 className="text-lg font-bold"><button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
          <a href="/Car-Detail" className="hover:underline">Audi</a></button></h3>
          <p className="text-gray-500">Sport</p>
          <p className="text-red-500 font-bold">$99.00/day</p>
          <button className="bg-[#54A6FF] px-4 py-2 rounded-sm hover:bg-[#36d0ff]">
              <a href="/Payment" className="hover:underline">Rent Now</a>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;