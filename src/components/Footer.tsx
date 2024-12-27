import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto flex flex-wrap space-y-8 md:space-y-0">
        {/* Main div with two inner sections */}
        <div className="w-full md:flex md:justify-between items-start">
          {/* Left Section: Heading */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl text-blue-700 font-bold">MORENT</h2>
            <p className="text-sm">
              Our vision is to provide convenience<br />
              and help increase your sales business
            </p>
          </div>

          {/* Right Section: About, Community, Social */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-between space-y-8 md:space-y-0">
            {/* About */}
            <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
              <h3 className="font-semibold text-lg">About</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-gray-400">How it works</a></li>
                <li><a href="#" className="text-gray-400">Featured</a></li>
                <li><a href="#" className="text-gray-400">Partnership</a></li>
                <li><a href="#" className="text-gray-400">Business Relation</a></li>
              </ul>
            </div>

            {/* Community */}
            <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
              <h3 className="font-semibold text-lg">Community</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-gray-400">Events</a></li>
                <li><a href="#" className="text-gray-400">Blog</a></li>
                <li><a href="#" className="text-gray-400">Podcast</a></li>
                <li><a href="#" className="text-gray-400">Invite a Friend</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
              <h3 className="font-semibold text-lg">Social</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-gray-400">Discord</a></li>
                <li><a href="#" className="text-gray-400">Twitter</a></li>
                <li><a href="#" className="text-gray-400">Instagram</a></li>
                <li><a href="#" className="text-gray-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="my-8 border-blue-400 hover:border-blue-800 border-b-4 transition-colors duration-300" />

      {/* Copyright & Links */}
      <div className="w-full flex flex-wrap justify-between items-center text-sm">
        {/* Left: Copyright */}
        <p className="w-full md:w-auto text-center md:text-left">
          &copy; 2022 MORENT. All rights reserved.
        </p>

        {/* Right: Privacy & Terms */}
        <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400">Privacy Policy</a>
          <a href="#" className="text-gray-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
