import React from 'react';
import { motion } from 'framer-motion';
import { FaSearchPlus } from 'react-icons/fa';
import decor2 from '../../../assets/images/decor2.png.webp'
import pic6 from '../../../assets/images/pic6.jpeg'
import pic7 from '../../../assets/images/pic7.jpeg'
import pic8 from '../../../assets/images/pic8.jpeg'
import pic9 from '../../../assets/images/pic9.jpeg'

const Showcase = () => {
  const products = [
    {
      name: "Industrial Hybrid Oven",
      image: pic6,
      description: "High-capacity hybrid oven crafted from recycled metal scraps, perfect for commercial use.",
      features: ["Energy Efficient", "Durable Build", "Large Capacity"]
    },
    {
      name: "Standard Hybrid Oven",
      image: pic7,
      description: "Medium-sized hybrid oven designed for small businesses and community use.",
      features: ["Cost Effective", "Easy to Use", "Versatile"]
    },
    {
      name: "Premium Hybrid Oven",
      image: pic8,
      description: "Advanced hybrid oven with enhanced features and superior performance.",
      features: ["Premium Quality", "Enhanced Control", "Eco-Friendly"]
    },
    {
      name: "Compact Hybrid Oven",
      image: pic9,
      description: "Space-saving hybrid oven perfect for small-scale operations.",
      features: ["Space Efficient", "Portable", "User Friendly"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="showcase" className="py-16 px-6 bg-[#eee1ca] font-serif overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#D98D31]">Introducing</span> My Hybrid Oven
          </h2>
          <div className="flex justify-center items-center mb-6">
            <img src={decor2} alt="decor2" className="w-32" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Discover our range of innovative hybrid ovens, crafted with care using recycled materials
            to bring sustainable solutions to your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative group h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaSearchPlus className="text-white text-3xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#D98D31] mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="inline-block mr-2 mb-2 px-3 py-1 bg-[#fff3e6] text-[#D98D31] rounded-full text-sm"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Showcase;