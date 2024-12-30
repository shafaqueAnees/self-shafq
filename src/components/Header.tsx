"use client";

import Image from "next/image";
import React from "react";
import filter from "@/images/filter.png";
import profile from "@/images/Profil.png";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  const handleSearch = () => {
    alert("Search functionality triggered!");
  };

  const handleFilter = () => {
    alert("Filter functionality triggered!");
  };

  const handleFavorites = () => {
    alert("Navigating to Favorites!");
  };

  const handleNotifications = () => {
    alert("Navigating to Notifications!");
  };

  const handleSettings = () => {
    alert("Navigating to Settings!");
  };

  return (
    <header className="bg-white w-full flex flex-wrap justify-between items-center p-4 sm:p-6">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8">
        {/* Logo */}
        <h1 className="text-blue-600 text-3xl font-bold self-start md:self-center">
          MORENT
        </h1>

        {/* Search Bar */}
        <div className="flex w-full md:w-auto items-center border rounded-full px-2 py-1">
          <CiSearch
            size={20}
            className="text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search something here..."
            className="flex-1 px-2 py-1 outline-none text-sm"
          />
          <Image
            src={filter}
            alt="Filter Icon"
            width={20}
            className="cursor-pointer"
            onClick={handleFilter}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        {/* Icons */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Favorites */}
          <div
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white shadow-md border cursor-pointer"
            onClick={handleFavorites}
          >
            <FaHeart size={20} className="text-gray-600" />
          </div>

          {/* Notifications */}
          <div
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white shadow-md border cursor-pointer relative"
            onClick={handleNotifications}
          >
            <IoIosNotifications size={20} className="text-gray-600" />
            <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
          </div>

          {/* Settings */}
          <div
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white shadow-md border cursor-pointer"
            onClick={handleSettings}
          >
            <IoSettingsSharp size={20} className="text-gray-600" />
          </div>
        </div>

        {/* Profile Image */}
        <a href="/Dashboard" className="w-10 h-10 sm:w-12 sm:h-12">
          <Image
            src={profile}
            alt="Profile Icon"
            className="rounded-full object-cover"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
