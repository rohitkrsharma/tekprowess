import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path ? 'text-primary' : 'text-gray-600';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-custom">
      <div className="flex justify-between items-center px-4 md:px-8">
        {/* Brand Logo */}
        <div>
          <Link to="/" className="text-primary" onClick={handleLinkClick}>
            <img src="./Images/TekProwess.jpg" alt="Tekprowess Logo" className="w-28 h-16 md:w-52 md:h-24" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navbar Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'
            }`}
        >
          <li className="border-b md:border-none">
            <Link
              to="/"
              className={`block px-4 py-2 text-base hover:text-primary text-center md:text-left ${isActive('/')}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/about"
              className={`block px-4 py-2 text-base hover:text-primary text-center md:text-left ${isActive('/about')}`}
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>

          {/* Services Section */}
          <li className="relative border-b md:border-none group">
            <button className="flex items-center justify-center w-full md:w-auto gap-1 py-2 text-base text-gray-600 hover:text-primary">
              Services
              <svg className="w-5 h-5 inline-block transform transition-transform md:rotate-0 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className="md:absolute md:left-0 md:top-full hidden group-hover:block w-full md:w-56 bg-white shadow-md z-10">
              <li>
                <Link
                  to="/services/Odoo-Services"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive('/services/Odoo-Services')}`}
                  onClick={handleLinkClick}
                >
                  Odoo Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Software-Development"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive('/services/Software-Development')}`}
                  onClick={handleLinkClick}
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Mobile-Application"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive('/services/Mobile-Application')}`}
                  onClick={handleLinkClick}
                >
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Quality-Assurance"
                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive('/services/Quality-Assurance')}`}
                  onClick={handleLinkClick}
                >
                  Quality Assurance
                </Link>
              </li>
            </ul>
          </li>

          <li className="border-b md:border-none">
            <Link
              to="/industry"
              className={`block px-4 py-2 text-base hover:text-primary text-center md:text-left ${isActive('/industry')}`}
              onClick={handleLinkClick}
            >
              Industry
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/contact"
              className={`block px-4 py-2 text-base hover:text-primary text-center md:text-left ${isActive('/contact')}`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
