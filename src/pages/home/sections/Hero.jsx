import React, { useState, useEffect } from 'react';
import hero1 from "../../../assets/images/hero1.png"
import hero2 from "../../../assets/images/hero2.png"


const Hero = () => {

const images = [hero1, hero2 ];
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);

  
}, [images.length]);


  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center text-white flex flex-col justify-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})`, }}
    >
      <div className="bg-black bg-opacity-10 h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Empowering Farmers with Sustainable Solutions
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-center max-w-3xl">
          Cost-effective agro-processing machines made from recycled metal scraps to extend produce shelf life and reduce waste.
        </p>
        <div className="flex space-x-4">
          <a href="#products" className="bg-[#D98D31] hover:bg-[#b97725] px-12 py-3 rounded-md">Explore Products</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
