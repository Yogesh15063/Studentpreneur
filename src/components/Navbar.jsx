import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-10 bg-gray-900">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <Link
            to="HeroSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-3xl font-bold text-purple-400 transition duration-300 cursor-pointer font-poppins hover:text-gray-200"
          >
            Studentpreneur
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <RouterLink // Use RouterLink for Home
            to="/" // Link to the home page
            className="text-lg font-semibold text-purple-400 transition duration-300 cursor-pointer font-poppins hover:text-gray-200"
          >
            Home
          </RouterLink>
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-lg font-semibold text-purple-400 transition duration-300 cursor-pointer font-poppins hover:text-gray-200"
          >
            Products
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-lg font-semibold text-purple-400 transition duration-300 cursor-pointer font-poppins hover:text-gray-200"
          >
            Contact
          </Link>
          {/* Add other navigation links */}
          <RouterLink
            to="/about"
            className="text-lg font-semibold text-purple-400 transition duration-300 cursor-pointer font-poppins hover:text-gray-200"
          >
            About
          </RouterLink>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button
            className="text-gray-200 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          {/* Mobile menu content */}
          <div className="px-2 py-3 space-y-1">
            <RouterLink
              to="/"
              className="block px-3 py-2 text-lg text-purple-400 font-semibold font-poppins hover:text-white hover:bg-gray-800"
            >
              Home
            </RouterLink>
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-lg text-purple-400 font-semibold font-poppins hover:text-white hover:bg-gray-800"
            >
              Products
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-lg text-purple-400 font-semibold font-poppins hover:text-white hover:bg-gray-800"
            >
              Contact
            </Link>
            {/* Add other navigation links */}
            <RouterLink
              to="/about"
              className="block px-3 py-2 text-lg text-purple-400 font-semibold font-poppins hover:text-white hover:bg-gray-800"
            >
              About
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
