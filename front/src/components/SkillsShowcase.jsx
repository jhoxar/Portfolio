import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"

import n8nLogo from '../assets/n8n.png'
import pythonLogo from '../assets/python.png'
import nodeLogo from '../assets/Nodejs.png'
import reactLogo from '../assets/react.png'
import figmaLogo from '../assets/Figma.png'

const SkillsShowcase = () => {
  const skills = [reactLogo, nodeLogo, pythonLogo, n8nLogo, figmaLogo]

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto flex flex-col sm:flex-row sm:items-center items-start overflow-hidden">
        
        {/* Title box */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-[300px] shrink-0 px-8 py-6 bg-white border-l-4 border-green-600 shadow-sm z-10 mb-8 sm:mb-0"
        >
          <motion.p 
            variants={textVariant(0.2)}
            className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-2"
          >
            Technologies I use
          </motion.p>
          <motion.h2 
            variants={textVariant(0.3)}
            className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-3"
          >
            Core Skills <br /> & Tools
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            className="text-gray-600 text-sm md:text-base"
          >
            From modern frontend frameworks to automation workflows, 
            these are the tools I use to craft digital solutions that scale.
          </motion.p>
        </motion.div>

        {/* Skills carousel */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex animate-marquee whitespace-nowrap"
        >
          {skills.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Skill Logo ${index + 1}`}
              whileHover={{ scale: 1.1 }}
              className="mx-10 h-12 w-24 sm:h-14 sm:w-32 md:h-20 md:w-40 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:drop-shadow-md transition-all duration-300"
            />
          ))}
          {/* Duplicate logos for seamless loop */}
          {skills.map((logo, index) => (
            <motion.img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Skill Logo ${index + 1}`}
              whileHover={{ scale: 1.1 }}
              className="mx-10 h-12 w-24 sm:h-14 sm:w-32 md:h-20 md:w-40 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:drop-shadow-md transition-all duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsShowcase
