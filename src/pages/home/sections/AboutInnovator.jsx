import React from 'react';
import { FaUserTie, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import img from '../../../assets/images/image 3.jpg';

const AboutInnovator = () => {
    return (
        <section id="about-innovator" className="py-16 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-green-600 mb-8">About the Innovator</h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
                    <div className="w-full md:w-1/2">
                        <p className="text-lg mb-12">
                            Meet Francis, an innovator with a vision to transform agriculture through cost-effective, sustainable solutions that empower farming communities.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2">
                        <img src={img} alt="Francis" className="w-full h-auto object-cover rounded-lg shadow-md" />
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                    <div className="text-center">
                        <FaUserTie className="text-green-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Passionate Leader</h3>
                        <p>
                            Driven by a mission to improve food security and sustainability.
                        </p>
                    </div>

                    <div className="text-center">
                        <FaLightbulb className="text-green-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Innovative Thinker</h3>
                        <p>
                            Creates cost-effective machines using recycled materials.
                        </p>
                    </div>

                    <div className="text-center">
                        <FaHandsHelping className="text-green-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Community Advocate</h3>
                        <p>
                            Committed to empowering local farmers for better livelihoods.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInnovator;
