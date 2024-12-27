"use client";

import React, { useState } from "react";

const CategorySection: React.FC<{ title: string; items: any[] }> = ({ title, items }) => {
  const [visibleItems, setVisibleItems] = useState(8);

  const handleShowMore = () => {
    setVisibleItems(items.length);
  };

  return (
    <div className="py-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
          >
            {/* Item Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Item Details */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2"><button className="bg-blue-100 px-4 py-2 rounded-sm hover:bg-blue-300">
              <a href="/Car-Detail" className="hover:underline">{item.name}</a></button></h3>
              {item.model && <p className="text-sm text-gray-500 mb-1">{item.model}</p>}
              <p className="text-sm text-blue-500 mb-4">${item.price}/Day</p>
            </div>

            {/* Rent Button */}
            <button className="mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            <a href="/Payment">Rent Now</a>
            </button>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleItems < items.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

const RecomendedCar: React.FC = () => {
  const recommendedCars = [
    { id: 1, name: "Kia Sportage", model: "SUV", image: "https://i.ytimg.com/vi/sgVuvfnaKm4/maxresdefault.jpg", price: 50 },
    { id: 2, name: "Toyota Corolla", model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFiO-DYh22R8YJMYjPNHLYdHugBdZwQB5hQ&s", price: 40 },
    { id: 3, name: "Honda Civic", model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLA8f48J0FjB2kfz0TrqJGTjisPtV6v2Z9kw&s", price: 45 },
    { id: 4, name: "Ford Mustang" , model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95k6TZ9Ojo2g95tJEnDGYnzTCmOJ6bWjJTQ&s", price: 70 },
    { id: 5, name: "Chevrolet Malibu", model: "SUV", image: "https://i.ytimg.com/vi/sgVuvfnaKm4/maxresdefault.jpg", price: 55 },
    { id: 6, name: "Tesla Model 3", model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLA8f48J0FjB2kfz0TrqJGTjisPtV6v2Z9kw&s", price: 80 },
    { id: 7, name: "BMW X5", model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95k6TZ9Ojo2g95tJEnDGYnzTCmOJ6bWjJTQ&s", price: 90 },
    { id: 8, name: "Audi Q7", model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFiO-DYh22R8YJMYjPNHLYdHugBdZwQB5hQ&s", price: 85 },
    { id: 9, name: "Mercedes-Benz C-Class" , model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95k6TZ9Ojo2g95tJEnDGYnzTCmOJ6bWjJTQ&s", price: 100 },
    { id: 10, name: "Hyundai Sonata", model: "SUV", image: "https://i.ytimg.com/vi/sgVuvfnaKm4/maxresdefault.jpg", price: 60 },
    { id: 11, name: "Volkswagen Passat" , model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95k6TZ9Ojo2g95tJEnDGYnzTCmOJ6bWjJTQ&s", price: 65 },
    { id: 12, name: "Porsche Cayenne", model: "SUV", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLA8f48J0FjB2kfz0TrqJGTjisPtV6v2Z9kw&s", price: 120 },
  ];


  return (
    
      <CategorySection title="Recommended Cars" items={recommendedCars} />

  );
};

export default RecomendedCar;
