import React from 'react'
import { BsStack } from 'react-icons/bs'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BiNetworkChart } from 'react-icons/bi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const myServices = [
    {
      icon: <BsStack className="w-9 h-9 text-green-600" />,
      title: "Full-Stack Development",
      description: "Building modern, scalable apps with React, Node.js and clean architectures.",
      link: "#projects"
    },
    {
      icon: <HiOutlineLightningBolt className="w-9 h-9 text-yellow-500" />,
      title: "AI & Automation", 
      description: "From smart bots to n8n workflows, I help automate processes and save time.",
      link: "#projects"
    },
    {
      icon: <FiSettings className="w-9 h-9 text-red-500" />,
      title: "Backend & APIs",
      description: "Secure, scalable APIs with Python, FastAPI and Node.js for real-world needs.",
      link: "#projects"
    },
    {
      icon: <BiNetworkChart className="w-9 h-9 text-blue-500" />,
      title: "UX/UI & Design Systems",
      description: "Turning ideas into intuitive interfaces with Figma and UX-driven design.",
      link: "#projects"
    }
  ]

  return (
    <section id="services" className="py-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Header */}
        <motion.div 
          variants={fadeIn('right', 0.4)}
          className="md:w-1/3"
        >
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
          >
            Helping teams build smarter digital products
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.5)}
            className="text-gray-600 text-lg mb-4 md:w-4/5"
          >
            I turn code, automation, and design into real business impact.
          </motion.p>

          {/* bullet points */}
          <motion.div 
            variants={fadeIn('up', 0.6)}
            className="space-y-3"
          >
            <motion.div 
              variants={fadeIn('right', 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
              </div>
              <span className="text-gray-600">Scalable full-stack apps</span>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
              </div>
              <span className="text-gray-600">AI workflows & automation</span>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.button 
            variants={fadeIn('up', 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-green-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-green-700 transition-colors"
          >
            Let’s build something
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {myServices.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                variants={fadeIn('down', 0.4 * (index + 1))}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2"
              >
                {service.title}
              </motion.h3>
              <motion.p 
                variants={fadeIn('up', 0.5 * (index + 1))}
                className="text-gray-600 mb-4"
              >
                {service.description}
              </motion.p>
              <motion.a 
                variants={fadeIn('up', 0.6 * (index + 1))}
                href={service.link}
                className="text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesSection
