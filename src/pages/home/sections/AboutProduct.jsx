import React from 'react';
import { FaLeaf, FaRecycle, FaSeedling } from 'react-icons/fa';
import { motion } from 'framer-motion';
import decor2 from "../../../assets/images/decor2.png.webp"

const AboutProduct = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
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
    <section id="about-product" className="py-16 bg-[#eee1ca] text-gray-800 font-serif overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-[#D98D31] mb-2"
        >
          About the Product
        </motion.h2>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center mb-6"
        >
          <img src={decor2} alt="decor2" />
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl mb-12"
        >
          Our cost-effective agro-processing machines are crafted from recycled metal scraps, helping farmers extend the shelf life of their produce while promoting sustainability and food security.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaLeaf className="text-[#ffa435] text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Eco-Friendly Design</h3>
            <p>Built from recycled metal scraps to minimize environmental impact.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaRecycle className="text-[#ffa435] text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Sustainable Solution</h3>
            <p>Promotes circular economy by repurposing waste materials.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaSeedling className="text-[#ffa435] text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Enhanced Productivity</h3>
            <p>Boosts agricultural productivity and reduces post-harvest losses.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutProduct;
