import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-wrap space-y-8 md:space-y-0">
        <div className="w-full md:flex md:justify-between items-start">
          {/* Left Section: Heading */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl text-blue-700 font-bold">MORENT</h2>
            <p className="text-sm mt-2">
              Our vision is to provide convenience<br />
              and help increase your sales business.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-between space-y-8 md:space-y-0">
            {/* About */}
            <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
              <h3 className="font-semibold text-lg">About</h3>
              <ul className="list-none space-y-2 mt-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-600">How it works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Featured</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Partnership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Business Relation</a></li>
              </ul>
            </div>

            {/* Community */}
            <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
              <h3 className="font-semibold text-lg">Community</h3>
              <ul className="list-none space-y-2 mt-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Podcast</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Invite a Friend</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
              <h3 className="font-semibold text-lg">Social</h3>
              <ul className="list-none space-y-2 mt-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-blue-400 hover:border-blue-800 border-b-4 transition-colors duration-300" />

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-wrap justify-between items-center text-sm">
        {/* Left: Copyright */}
        <p className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          &copy; 2022 MORENT. All rights reserved.
        </p>

        {/* Right: Privacy & Terms */}
        <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-blue-600">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
