import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import decor2 from "../../../assets/images/decor2.png.webp"


const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-[#D98D31]" />,
      text: "+233 55 347 1801",
      href: "tel:+233553471801"
    },
    {
      icon: <FaEnvelope className="text-2xl text-[#D98D31]" />,
      text: "ktakyi801@gmail.com",
      href: "mailto:ktakyi801@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#D98D31]" />,
      text: "768/A, Green lane 790, Max town New York",
      href: "#"
    }
  ];

  return (
    <motion.div 
      id="contact" 
      className="p-6 min-h-screen flex flex-col items-center bg-[#eee1ca] font-serif"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1 
        className="text-4xl font-bold text-center mb-4"
        variants={itemVariants}
      >
        <span className="text-[#D98D31]">Contact</span> Me
      </motion.h1>

      <motion.div 
        className="flex justify-center items-center mb-6 w-full max-w-md"
        variants={itemVariants}
      >
        <img src={decor2} alt="decor2" className="flex justify-center items-center mb-6" />
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-6 w-full max-w-5xl">
        {/* Left Section - Contact Info */}
        <motion.div 
          className="flex-1 bg-white/50 p-8 rounded-lg backdrop-blur-sm"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#1B3C25] mb-8">
            Get in Touch
          </h2>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                whileHover={{ x: 10 }}
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-[#fff3e6] rounded-full flex items-center justify-center">
                  {info.icon}
                </div>
                <span className="text-[#1B3C25] text-lg">{info.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div 
          className="flex-1 bg-white p-8 rounded-lg shadow-lg w-full"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-6 text-[#1B3C25] text-center">
            Send Me a Message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#D98D31] transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
                variants={itemVariants}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#D98D31] transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
                variants={itemVariants}
              />
            </div>
            <motion.input
              type="text"
              placeholder="Your Subject"
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#D98D31] transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
              variants={itemVariants}
            />
            <motion.textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#D98D31] transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
              variants={itemVariants}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-[#D98D31] text-white py-3 rounded-md hover:bg-[#ffa435] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
