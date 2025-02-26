import React from 'react';
import { FaUserTie, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import pic3 from '../../../assets/images/pic3.jpeg';
import decor2 from '../../../assets/images/decor2.png.webp'

const AboutInnovator = () => {
    return (
        <section id="about-innovator" className="py-16 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-[#D98D31] mb-2">About Francis</h2>
                <div className="flex justify-center items-center mb-6">
                     <img src={decor2} alt="decor2" />
                     </div>
                <div className="flex flex-col md:flex-row items-center justify-center space-x-10">
                    <div className="w-full md:w-1/2">
                        <p className="text-2xl ">
                            Meet Francis, an innovator from Cape Coast, Central Region, is dedicated to tackling post-harvest losses faced by farmers. With a vision for sustainable agriculture, he designs cost-effective agro-processing machines using metal scraps, making food preservation more accessible and affordable. Despite living with an amputated left arm, his determination drives him to create impactful solutions that reduce food waste and empower farming communities.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2">
                        <img src={pic3} alt="Francis" className="w-full h-auto object-cover rounded-lg shadow-md" />
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 mt-12 md:space-x-12">
                    {/* <div className="text-center">
                        <FaUserTie className="text-green-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Passionate Leader</h3>
                        <p>
                            Driven by a mission to improve food security and sustainability.
                        </p>
                    </div> */}

                    <div className="text-center">
                        <FaLightbulb className="text-[#ffa435] text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Innovative Thinker</h3>
                        <p>
                            Francis creates cost-effective machines using recycled materials.
                        </p>
                    </div>

                    <div className="text-center">
                        <FaHandsHelping className="text-[#ffa435] text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Community Advocate</h3>
                        <p>
                            He is committed to empowering local farmers for better livelihoods.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInnovator;
