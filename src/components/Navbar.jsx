import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/images/logo.jpg'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Add smooth scrolling behavior to HTML
    document.documentElement.style.scrollBehavior = 'smooth';

    // Function to determine active section based on scroll position
    const handleScroll = () => {
      const sections = ['home', 'about-product', 'about-innovator', 'showcase', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setNavOpen(false); // Close mobile menu when link is clicked
  };

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-[#F7F7F7] shadow-md fixed w-full z-10 top-0 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20 h-16  " />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              onClick={() => handleLinkClick('home')}
              className={`${activeSection === 'home' ? 'text-[#D98D31]' : 'text-gray-800'} hover:text-[#D98D31]`}
            >
              Home
            </a>
            <a 
              href="#about-product" 
              onClick={() => handleLinkClick('about-product')}
              className={`${activeSection === 'about-product' ? 'text-[#D98D31]' : 'text-gray-800'} hover:text-[#D98D31]`}
            >
              About Product
            </a>
            <a 
              href="#about-innovator" 
              onClick={() => handleLinkClick('about-innovator')}
              className={`${activeSection === 'about-innovator' ? 'text-[#D98D31]' : 'text-gray-800'} hover:text-[#D98D31]`}
            >
              About Me
            </a>
            <a 
              href="#showcase" 
              onClick={() => handleLinkClick('showcase')}
              className={`${activeSection === 'showcase' ? 'text-[#D98D31]' : 'text-gray-800'} hover:text-[#D98D31]`}
            >
              Product
            </a>
            <a 
              href="#contact" 
              onClick={() => handleLinkClick('contact')}
              className="bg-[#D98D31] text-white px-4 py-2 rounded-md hover:bg-[#ffa435]"
            >
              Get in Touch
            </a>
          </div>

          <div className="md:hidden flex items-center text-[#D98D31]">
            <button onClick={toggleNav}>
              {navOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a 
            href="#home" 
            onClick={() => handleLinkClick('home')}
            className={`block px-4 py-2 ${activeSection === 'home' ? 'text-[#D98D31]' : 'text-gray-800'} hover:text-[#D98D31]`}
          >
            Home
          </a>
          <a 
            href="#about-product" 
            onClick={() => handleLinkClick('about-product')}
            className={`block px-4 py-2 ${activeSection === 'about-product' ? 'text-[#D98D31]' : 'text-gray-800'} hover:text-[#D98D31]`}
          >
            About Product
          </a>
          <a 
            href="#about-innovator" 
            onClick={() => handleLinkClick('about-innovator')}
            className={`block px-4 py-2 ${activeSection === 'about-innovator' ? 'text-[#D98D31]' : 'text-gray-800'} hover:text-[#D98D31]`}
          >
            About Me
          </a>
          <a 
            href="#showcase" 
            onClick={() => handleLinkClick('showcase')}
            className={`block px-4 py-2 ${activeSection === 'about-innovator' ? 'text-[#D98D31]' : 'text-gray-800'} hover:text-[#D98D31]`}
          >
            Product
          </a>
          <a 
            href="#contact" 
            onClick={() => handleLinkClick('contact')}
            className="block bg-[#D98D31] px-4 py-2 rounded-lg text-white hover:bg-[#ffa435]"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
