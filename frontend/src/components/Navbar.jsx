import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">Tender Site</h1>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleDropdown}
          className="block md:hidden text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tender" className="text-white hover:text-gray-400">
              Tenders
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="text-white hover:text-gray-400">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="bg-gray-800 text-white space-y-2 py-2">
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleDropdown}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tender" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleDropdown}>
                Tenders
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleDropdown}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleDropdown}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleDropdown}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
