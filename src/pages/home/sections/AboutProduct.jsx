import React from 'react';
import { FaLeaf, FaRecycle, FaSeedling } from 'react-icons/fa';

const AboutProduct = () => {
  return (
    <section id="about-product" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-8">About the Product</h2>
        <p className="text-lg mb-12">
          Our cost-effective agro-processing machines are crafted from recycled metal scraps, helping farmers extend the shelf life of their produce while promoting sustainability and food security.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <FaLeaf className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Eco-Friendly Design</h3>
            <p>
              Built from recycled metal scraps to minimize environmental impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <FaRecycle className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Sustainable Solution</h3>
            <p>
              Promotes circular economy by repurposing waste materials.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <FaSeedling className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Enhanced Productivity</h3>
            <p>
              Boosts agricultural productivity and reduces post-harvest losses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
