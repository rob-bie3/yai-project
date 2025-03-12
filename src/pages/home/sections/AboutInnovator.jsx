import React from 'react';
import { FaUserTie, FaLightbulb, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import pic3 from '../../../assets/images/pic3.jpeg';
import decor2 from '../../../assets/images/decor2.png.webp';

const AboutInnovator = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="about-innovator" className="py-20 bg-[#f8f5f0] text-gray-900 font-serif">
            <motion.div 
                className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Left Side: Text Content */}
                <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariants}>
                    <h2 className="text-4xl font-bold">
                        <span className="text-[#D98D31]">About </span>Francis
                    </h2>
                    <motion.div variants={itemVariants} className="flex items-center mb-6">
            <div className="h-1 w-20 bg-[#D98D31]"></div>
            
          </motion.div>
                    <p className="text-gray-700 leading-relaxed">
                        Francis is a passionate local innovator based in Cape Coast, Central Region, dedicated to crafting practical and sustainable solutions. Despite facing the challenges of being an amputee, his determination and ingenuity drive him to push boundaries in metal fabrication.  Motivated by his family, Francis continues to develop cost-effective, eco-friendly technologies, including his latest project- the Hybrid Oven- designed to enhance efficiency and sustainability. 
                    </p>
                    
                    {/* Key Points */}
                    <div className="space-y-4">
                        {[{ icon: <FaUserTie />, title: "Local Innovator", desc: "Combines creativity and skill to develop solutions tailored to local needs." },
                        { icon: <FaLightbulb />, title: "Problem Solver", desc: "Transforms challenges into opportunities." },
                        { icon: <FaCheckCircle />, title: "Community Impact", desc: "Inspire others to embrace creativity and resilience in problem-solving." }].map((point, index) => (
                            <motion.div key={index} className="flex items-center space-x-4" variants={itemVariants}>
                                <div className="p-3 bg-[#6B8E23]/10 rounded-lg text-[#D98D31] text-2xl">
                                    {point.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#D98D31]">{point.title}</h3>
                                    <p className="text-gray-700">{point.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                
                {/* Right Side: Image */}
                <motion.div className="w-full md:w-1/2 relative" variants={itemVariants}>
    <div className="relative overflow-hidden rounded-lg shadow-xl">
        <img 
            src={pic3} 
            alt="Francis" 
            className="w-full h-auto object-cover rounded-lg transition-transform duration-700 hover:scale-110"
        />
        
        <div className="absolute bottom-0 right-0 bg-[#D98D31] text-white p-4 md:p-6 rounded-tl-lg shadow-lg opacity-0 transition-opacity duration-700 hover:opacity-100">
            <p className="text-sm md:text-base italic">
                "Innovation is not just about creating something new; it's about solving real problems. My journey has taught me that challenges are just stepping stones to greater possibilities."
            </p>
            <p className="text-sm font-semibold mt-2">- Francis, Innovator</p>
        </div>
    </div>
</motion.div>

            </motion.div>
        </section>
    );
};

export default AboutInnovator;
