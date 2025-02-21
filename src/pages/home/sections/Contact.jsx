import React, { useState } from "react";
import decor2 from "../../../assets/images/decor2.png.webp"

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 h-[60vh] my-16">
      <h1 className="text-4xl font-bold text-center text-[#527a1a] mb-2">Contact</h1>
     <div className="flex justify-center items-center mb-6">
     <img src={decor2} alt="decor2" />
     </div>

      <div className="container mx-auto flex gap-8 px-10">
        {/* Left Section - Contact Info */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-[#1B3C25] mb-6">You can get in touch with me;</h2>
          {/* <p className="text-gray-600 mb-8">
            The information is also part of the MF Rural, where you can find
            news, quotes, technological information and others, in addition.
          </p> */}
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[#1B3C25]">(10) 892-293 2678</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#1B3C25]">contact@agrico.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#1B3C25]">768/A, Green lane 790, Max town New York</span>
            </div>
          </div>

          <button 
            onClick={() => setShowModal(true)}
            className="px-6 py-3 border-2 border-[#1B3C25] text-[#1B3C25] hover:bg-[#1B3C25] hover:text-white transition-colors"
          >
            Drop Your Message
          </button>
        </div>

        {/* Right Section - Map */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654248110935!2d-87.9!3d41.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzAwLjAiTiA4N8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Get In Touch With Me</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
      )}
    </div>
  );
};

export default Contact;
