"use client"
import { motion } from "framer-motion"
import decor2 from "../../../assets/images/decor2.png.webp"
import { FaLeaf, FaRecycle, FaSeedling } from "react-icons/fa"
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
    <section id="about-product" className="relative bg-[#f8f5f0] text-gray-800 font-serif py-16 ">
      {/* Sticky image container */}
      <div className="sticky top-0 left-0 w-full lg:w-1/2 h-screen">
        <div className="absolute inset-0 z-10"></div>
        <img
          src={man}
          alt="man"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container that will scroll over the image */}
      <div className=" lg:absolute top-0 right-0 w-full lg:w-1/2 min-h-screen ">
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
            {/* <img src={decor2 || "/placeholder.svg"} alt="decor" className="h-6 mx-2" />
            <div className="h-0.5 w-16 bg-[#D98D31]"></div> */}
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg mb-12 text-gray-700">
            Our cost-effective agro-processing machines are crafted from recycled metal scraps, helping farmers extend
            the shelf life of their produce while promoting sustainability and food security. We believe in creating
            solutions that benefit both farmers and the environment.
          </motion.p>

          <div className="space-y-12">
            <motion.div className="flex items-start gap-6" variants={cardVariants}>
              <div className="bg-[#6B8E23]/10 p-4 rounded-full">
                <FaLeaf className="text-[#D98D31] text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Eco-Friendly Design</h3>
                <p className="text-gray-600">
                  Built from recycled metal scraps to minimize environmental impact. Our designs prioritize
                  sustainability without compromising on performance or durability.
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
                  Promotes circular economy by repurposing waste materials. We transform what would be discarded into
                  valuable tools that enhance agricultural productivity.
                </p>
              </div>
            </motion.div>

           
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutProduct

