import React, { useState } from "react";
import decor2 from "../../../assets/images/decor2.png.webp"


const Contact = () => {
  return (
    <div id="contact" className="p-6 my-16 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4">
        <span className="text-[#D98D31]">Contact</span> Me
      </h1>
      <div className="flex justify-center items-center mb-6 w-full max-w-md">
        <img src={decor2} alt="decor2" className="flex justify-center items-center mb-6" />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-6 w-full max-w-5xl">
        {/* Left Section - Contact Info */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-[#1B3C25] mb-6">
            You can get in touch with me;
          </h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[#1B3C25]">+233 55 347 1801</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#1B3C25]">ktakyi801@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#1B3C25]">768/A, Green lane 790, Max town New York</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg w-full">
          <h3 className="text-2xl font-bold mb-4 text-[#1B3C25] text-center">
            Send Me a Message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-md w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject"
              className="p-3 border rounded-md w-full"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 border rounded-md w-full"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#75B343] text-white py-3 rounded-md hover:bg-[#5a8a33]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
