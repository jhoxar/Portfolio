import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from '../assets/me_pict.png'

const Hero = () => {
  return (
    <section id="home" className="flex bg-gradient-to-br from-[#389A52] to-[#212121] flex-col md:flex-row justify-between items-center px-4 sm:px-6  lg:px-8 pb-10 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8 mt-20 lg:mt-20">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          {/* Star badge */}
          {/* <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-blue-600 group-hover:scale-110 transition-transform">★</span>
            <span className="text-sm font-medium">Full-Stack Developer | AI & UX</span>
          </div> */}
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 leading-snug"
        >
          Hey, I’m Jhon Ramirez{' '}
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            an AI-powered Full-Stack Developer
            <span className="absolute bottom-0 left-0 w-full h-0.5"></span>
          </span>{' '}
          
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-300 font-light text-lg md:text-xl max-w-xl"
        >
          I help startups and teams turn bold ideas into scalable digital solutions. From smart automation to sleek user interfaces, I deliver products that are not only functional but unforgettable.
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md flex-col lg:flex-row"
        >
          {/* Email Form */}
          {/* <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
          /> */}
          <button className="bg-white text-[#212121] px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/30 active:scale-95 cursor-pointer">
            Download CV
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all active:scale-95 cursor-pointer">
            Contact
          </button>
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-0 pl-0 md:pl-12"
      >
        <div className="relative flex w-ful justify-center">
          <img
            src={heroImage}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] w-3/4 transition-transform duration-300 "
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero