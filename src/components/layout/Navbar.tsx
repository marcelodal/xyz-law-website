import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-playfair font-bold text-[#0A2342]">XYZ Law</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-[#006D77] px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#006D77] px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-[#006D77] px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link to="/practice-areas" className="text-gray-700 hover:text-[#006D77] px-3 py-2 text-sm font-medium">
              Practice Areas
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#006D77] px-3 py-2 text-sm font-medium">
              Insights
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-[#006D77] px-3 py-2 text-sm font-medium">
              Resources
            </Link>
            <Link to="/contact" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#006D77] hover:bg-[#005a63] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006D77]">
              Contact Us
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#006D77] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#006D77]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50">
              About
            </Link>
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50">
              Services
            </Link>
            <Link to="/practice-areas" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50">
              Practice Areas
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50">
              Insights
            </Link>
            <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50">
              Resources
            </Link>
            <Link to="/contact" className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#006D77] hover:bg-[#005a63] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006D77]">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
