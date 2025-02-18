import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-600">AgroMech</h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-gray-800 hover:text-green-600">Home</a>
            <a href="#about-product" className="text-gray-800 hover:text-green-600">About Product</a>
            <a href="#about-innovator" className="text-gray-800 hover:text-green-600">About Innovator</a>
            <a href="#products" className="text-gray-800 hover:text-green-600">Products</a>
            <a href="#contact" className="text-gray-800 hover:text-green-600">Contact</a>
            <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Get in Touch</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleNav}>
              {navOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#home" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
          <a href="#about-product" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Product</a>
          <a href="#about-innovator" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Innovator</a>
          <a href="#products" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Products</a>
          <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
