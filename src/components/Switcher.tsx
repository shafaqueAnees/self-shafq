"use client";

import React from "react";
import { FiShuffle } from "react-icons/fi"; // Shuffle icon from react-icons

const Pick: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10 px-4 bg-gray-50">
      <div className="flex items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-4xl">
        {/* Pick-Up Section */}
        <div className="flex flex-col flex-1 px-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Pick-Up</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Location Input */}
            <div>
              <label className="block text-sm text-gray-600">Locations</label>
              <select
                className="w-full border rounded-md px-2 py-1 mt-1 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Select your city</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
            </div>
            {/* Date Input */}
            <div>
              <label className="block text-sm text-gray-600">Date</label>
              <input
                type="date"
                className="w-full border rounded-md px-2 py-1 mt-1 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Time Input */}
            <div>
              <label className="block text-sm text-gray-600">Time</label>
              <input
                type="time"
                className="w-full border rounded-md px-2 py-1 mt-1 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Shuffle Icon */}
        <div className="mx-6">
          <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition">
            <FiShuffle size={24} />
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="flex flex-col flex-1 px-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Drop-Off</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Location Input */}
            <div>
              <label className="block text-sm text-gray-600">Locations</label>
              <select
                className="w-full border rounded-md px-2 py-1 mt-1 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Select your city</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
            </div>
            {/* Date Input */}
            <div>
              <label className="block text-sm text-gray-600">Date</label>
              <input
                type="date"
                className="w-full border rounded-md px-2 py-1 mt-1 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Time Input */}
            <div>
              <label className="block text-sm text-gray-600">Time</label>
              <input
                type="time"
                className="w-full border rounded-md px-2 py-1 mt-1 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick