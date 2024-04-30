// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-10">
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
        </div>
      </div>
      {isOpen && (
        {/* Mobile menu content */}
      )}
    </nav>
  );
};

export default Navbar;
