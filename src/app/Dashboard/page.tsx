"use client"; // This marks the component as a Client Component

import React, { useState } from "react";

// Car interface definition
interface Car {
  id: number;
  name: string;
  type: string;
  price: string;
  availability: boolean;
}

const Page: React.FC = () => {
  // Simulating user role. Set this to `true` for admin, `false` for user.
  const isAdmin = true; // Change to `false` to simulate user access

  const [cars, setCars] = useState<Car[]>([
    { id: 1, name: "Koenigsegg", type: "Sport", price: "$99.00/day", availability: true },
    { id: 2, name: "Nissan GT-R", type: "Sport", price: "$80.00/day", availability: false },
    { id: 3, name: "Toyota Prius", type: "Hybrid", price: "$50.00/day", availability: true },
  ]);

  const toggleAvailability = (id: number) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, availability: !car.availability } : car
      )
    );
  };

  // Admin view with full functionality
  if (isAdmin) {
    return (
      <div className="max-w-screen-lg mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Car Dashboard (Admin)</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Availability</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{car.id}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{car.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{car.type}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{car.price}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  {car.availability ? (
                    <span className="text-green-600 font-semibold">Available</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Unavailable</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  <button
                    onClick={() => toggleAvailability(car.id)}
                    className={`px-4 py-2 rounded-md text-white ${
                      car.availability ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {car.availability ? "Mark Unavailable" : "Mark Available"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Go to Home Button */}
        <div className="text-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            <a href="/">Go to Home</a>
          </button>
        </div>
      </div>
    );
  }

  // User view with read-only access (no actions)
  return (
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Car Dashboard (User)</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Availability</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{car.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{car.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{car.type}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{car.price}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                {car.availability ? (
                  <span className="text-green-600 font-semibold">Available</span>
                ) : (
                  <span className="text-red-600 font-semibold">Unavailable</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Go to Home Button */}
      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          <a href="/">Go to Home</a>
        </button>
      </div>
    </div>
  );
};

export default Page;
