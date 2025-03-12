import React from 'react';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';
import pic6 from '../../../assets/images/pic6.jpeg';
import pic7 from '../../../assets/images/pic7.jpeg';
import pic8 from '../../../assets/images/pic8.jpeg';
import pic9 from '../../../assets/images/pic9.jpeg';

const Showcase = () => {
  const products = [
    {
      name: "Hybrid Oven",
      image: pic6,
      description: "High-capacity hybrid oven crafted from recycled metal scraps, perfect for commercial use.",
      features: ["Energy Efficient", "Durable Build", ],
    },
    {
      name: "Hybrid Oven",
      image: pic7,
      description: "Medium-sized hybrid oven designed for small businesses and community use.",
      features: ["Easy to Use", "Versatile"],
    },
    {
      name: "Hybrid Oven",
      image: pic8,
      description: "Advanced hybrid oven with enhanced features and superior performance.",
      features: [ "Enhanced Control", "Eco-Friendly"],
    },
    {
      name: "Hybrid Oven",
      image: pic9,
      description: "Space-saving hybrid oven perfect for small-scale operations.",
      features: ["Space Efficient", "Portable"],
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
    <section id="showcase" className="py-16 px-6 bg-[#f8f5f0] font-serif overflow-hidden">
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
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-[#D98D31]"></div>
          </motion.div>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Discover our range of innovative hybrid ovens. Designed for efficiency and sustainability, this cutting-edge hybrid oven is built to revolutionize baking and heat solutions. Crafted with precision, it offers durability versality and eco-friendly performance for both industrial and home use.
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
              <div className="relative h-64 overflow-hidden flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {/* Centered Fire Icon */}
                <div className="absolute z-10 flex pt-60 justify-center">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <FaFire className="text-[#D98D31] text-3xl" />
                  </div>
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
