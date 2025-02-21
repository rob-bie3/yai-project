import React from 'react';
import decor2 from '../../../assets/images/decor2.png.webp'
import machine from '../../../assets/images/machine.png'

const Showcase = () => {
  const products = [
    {
      name: "Oven",
      price: 215, // GHS 17.99 * 12 (approximate conversion)
      image: machine,
      description: "Fresh, juicy strawberries picked at peak ripeness. Perfect for desserts or healthy snacking.",
     
    },
    {
      name: " Oven",
      price: 119, // GHS 9.99 * 12 (approximate conversion)
      image: machine,
      description: "Freshly baked artisanal bread made with premium ingredients. Crusty outside, soft inside."
    },
    {
      name: "Oven",
      price: 719, // GHS 59.99 * 12 (approximate conversion)
      image: machine,
      description: "Premium quality beef cuts, perfectly marbled and aged for maximum flavor."
    },
    {
      name: "Oven",
      price: 239.00, // GHS 19.99 * 12 (approximate conversion)
      image: machine,
      description: "100% pure, natural honey. Harvested from local bee farms.",
     
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#75B343]">Our Product</span> Are Highest Quality
        </h2>

         <div className="flex justify-center items-center mb-6">
             <img src={decor2} alt="decor2" />
             </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
            {/* Product Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
             
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {product.originalPrice ? (
                    <>
                      <span className="text-gray-400 line-through">GHS {product.originalPrice.toFixed(2)}</span>
                      <span className="text-xl font-bold text-[#75B343]">GHS {product.price.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="text-xl font-bold text-[#75B343]">GHS {product.price.toFixed(2)}</span>
                  )}
                </div>
                
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;