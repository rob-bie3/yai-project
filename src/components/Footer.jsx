import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Francis's Innovation</h3>
          <p>
            Developing cost-effective agro-processing machines using metal scraps to help farmers extend the shelf life of their produce, promoting sustainability and food security.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about-product" className="hover:text-white">About Product</a></li>
            <li><a href="#about-innovator" className="hover:text-white">About Innovator</a></li>
            <li><a href="#products-showcase" className="hover:text-white">Products Showcase</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Contact Info</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/share/1BSnC9heY5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-white" />
            </a>
            <a href="https://www.tiktok.com/@ktakyi.enterprise?_t=ZM-8uC2YsQFuIJ&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl hover:text-white" />
            </a>
            <a href="https://www.instagram.com/ktakyienterprise?igsh=M2l5dzBhamI3dWtn&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-white" />
            </a>
          </div>
          <p>Email: <a href="ktakyi801@gmail.com" className="hover:text-white">info@innovator.com</a></p>
          <p>Phone: <a href="+233 55 347 1801" className="hover:text-white">+233123456789</a></p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        <p>All rights reserved. &copy; 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
