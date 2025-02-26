import React from 'react';
import { FaUserTie, FaLightbulb, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import pic3 from '../../../assets/images/pic3.jpeg';
import decor2 from '../../../assets/images/decor2.png.webp'

const AboutInnovator = () => {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const keyPoints = [
        {
            icon: <FaUserTie className="text-[#D98D31] text-2xl" />,
            title: "Local Innovator",
            description: "Based in Cape Coast, Central Region, bringing innovation to local communities"
        },
        {
            icon: <FaLightbulb className="text-[#D98D31] text-2xl" />,
            title: "Problem Solver",
            description: "Dedicated to solving post-harvest losses through innovative solutions"
        },
        // {
        //     icon: <FaHandsHelping className="text-[#D98D31] text-2xl" />,
        //     title: "Sustainable Design",
        //     description: "Creates eco-friendly agro-processing machines from recycled materials"
        // },
        {
            icon: <FaCheckCircle className="text-[#D98D31] text-2xl" />,
            title: "Community Impact",
            description: "Empowers farming communities with accessible technology"
        }
    ];

    return (
        <section id="about-innovator" className="py-16 bg-[#eee1ca] text-gray-900 font-serif overflow-hidden">
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
                    About Francis
                </motion.h2>
                
                <motion.div 
                    variants={itemVariants}
                    className="flex justify-center items-center mb-6"
                >
                    <img src={decor2} alt="decor2" />
                </motion.div>

                <div className="flex flex-col md:flex-row items-start justify-center gap-10 mb-12">
                    <motion.div 
                        className="w-full md:w-1/2 text-left space-y-6"
                        variants={containerVariants}
                    >
                        {keyPoints.map((point, index) => (
                            <motion.div 
                                key={index}
                                className="transform transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-[#fff3e6] rounded-lg">
                                            {point.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-[#D98D31] mb-2">
                                                {point.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="w-full md:w-1/2 relative group"
                        variants={imageVariants}
                    >
                        <motion.div
                            className="relative overflow-hidden rounded-lg shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img 
                                src={pic3} 
                                alt="Francis" 
                                className="w-full h-auto object-cover rounded-lg transition-transform duration-700 hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div 
                    className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 mt-12 md:space-x-12"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="text-center p-6 bg-white/70 rounded-xl hover:bg-white transition-colors"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                    >
                        <FaLightbulb className="text-[#ffa435] text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Innovative Thinker</h3>
                        <p>Francis creates cost-effective machines using recycled materials.</p>
                    </motion.div>

                    <motion.div 
                        className="text-center p-6 bg-white/70 rounded-xl hover:bg-white transition-colors"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                    >
                        <FaHandsHelping className="text-[#ffa435] text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Community Advocate</h3>
                        <p>He is committed to empowering local farmers for better livelihoods.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutInnovator;
