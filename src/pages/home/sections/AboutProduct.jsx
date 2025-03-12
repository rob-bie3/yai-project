"use client"
import { motion } from "framer-motion"
import { FaLeaf, FaRecycle } from "react-icons/fa"
import man from "../../../assets/images/man.jpg"

const AboutProduct = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about-product" className="relative bg-[#f8f5f0] text-gray-800 font-serif py-20">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={man}
            alt="man"
            className="opacity-80 rounded-lg w-full h-screen object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 min-h-screen flex items-center">
          <motion.div
            className="py-16 px-8 lg:px-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="uppercase text-sm tracking-wider text-[#D98D31]">WHAT WE DO</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
              <span className="text-[#D98D31]">Our Product</span> Is Mainstay For Us
            </motion.h2>

            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div className="h-1 w-20 bg-[#D98D31]"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg mb-12 text-gray-700">
              Our cost-effective  hybrid ovens are designed to maximize efficiency and durability. This technology is set to tansform the way small industries and households experience heating solutions. Experience the future of fabrication today!
            </motion.p>

            <div className="space-y-12">
              <motion.div className="flex items-start gap-6" variants={cardVariants}>
                <div className="bg-[#6B8E23]/10 p-4 rounded-full">
                  <FaLeaf className="text-[#D98D31] text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Eco-Friendly Design</h3>
                  <p className="text-gray-600">
                    Built with high quality materials like metal plates, metal square pipes, rivets and iron rods. Designed to bake a variety of products efficiently
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-6" variants={cardVariants}>
                <div className="bg-[#6B8E23]/10 p-4 rounded-full">
                  <FaRecycle className="text-[#D98D31] text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Sustainable Solution</h3>
                  <p className="text-gray-600">
                    Optimized for long-term energy efficiency. Durable, and reduces environmental impact with a  smart heating mechanism.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutProduct
