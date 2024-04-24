import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
            className="text-3xl font-bold text-purple-400 hover:text-gray-200 transition duration-300 cursor-pointer font-poppins"
          >
            Studentpreneur
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <div key={index}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-semibold text-purple-400 transition duration-300 cursor-pointer font-poppins  hover:text-purple-400"
              >
                {link.label}
              </Link>
            </div>
          ))}
          {/* New Navigation Item for Products */}
          <div>
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg font-semibold text-purple-400 transition duration-300 cursor-pointer font-poppins  hover:text-purple-400"
            >
              Products
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} type="button" className="text-gray-200 hover:text-gray-300 focus:outline-none focus:text-gray-300" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden transition duration-300">
          {navLinks.map((link, index) => (
            <div key={index}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-4 py-2 text-lg font-semibold text-purple-400 hover:text-gray-200 transition duration-300 cursor-pointer font-poppins"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
          {/* New Navigation Item for Products */}
          <div>
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-4 py-2 text-lg font-semibold text-purple-400 hover:text-gray-200 transition duration-300 cursor-pointer font-poppins"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

export default Navbar;
