import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/logo.jpg';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', url: '#' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#' },
    { icon: <FaInstagram />, name: 'Instagram', url: '#' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="bg-[#e69129] text-gray-800 py-12 font-serif"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-20 mb-4 mx-auto md:mx-0 rounded-lg"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Innovative agro-processing machines crafted from recycled materials, 
              empowering farmers and promoting sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-[#D98D31] font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-600 hover:text-[#D98D31] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-product" className="text-gray-600 hover:text-[#D98D31] transition-colors duration-300">
                  About Product
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-gray-600 hover:text-[#D98D31] transition-colors duration-300">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#D98D31] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-[#D98D31] font-bold text-xl mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="inline-flex items-center space-x-3 text-gray-600 hover:text-[#D98D31] transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-[#fff3e6] transition-colors duration-300">
                    <span className="text-xl text-[#D98D31]">{social.icon}</span>
                  </div>
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Francis Hybrid Oven. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
