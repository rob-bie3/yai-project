import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center text-white flex flex-col justify-center"
      style={{ backgroundImage: "url('path/to/background-image.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Empowering Farmers with Sustainable Solutions
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-center max-w-3xl">
          Cost-effective agro-processing machines made from recycled metal scraps to extend produce shelf life and reduce waste.
        </p>
        <div className="flex space-x-4">
          <a href="#products" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md">Explore Products</a>
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
