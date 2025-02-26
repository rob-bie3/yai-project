import React from 'react';
import decor2 from '../../../assets/images/decor2.png.webp'
import pic6 from '../../../assets/images/pic6.jpeg'
import pic7 from '../../../assets/images/pic7.jpeg'
import pic8 from '../../../assets/images/pic8.jpeg'
import pic9 from '../../../assets/images/pic9.jpeg'

const Showcase = () => {
  const products = [
    {
      name: "Oven",
      price: 215, 
      image: pic6,
      description: "Handmade from the scratch oven with metal scraps.",
     
    },
    {
      name: " Oven",
      price: 119, 
      image: pic7,
      description: "Handmade from the scratch oven with metal scraps."
    },
    {
      name: "Oven",
      price: 719, 
      image: pic8,
      description: "Handmade from the scratch oven with metal scraps."
    },
    {
      name: "Oven",
      price: 239.00, 
      image: pic9,
      description: "Handmade from the scratch oven with metal scraps.",
     
    }
  ];

  return (
    <div id="products" className="py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#D98D31]">Introducing</span> My Hybrid Oven
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
              
              {/* <div className="flex items-center justify-between">
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
                
              
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;