import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";
import logo from "/compact_logo_light.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Work" },
    { href: "#testimonials", label: "Love" },
  ]

  return (
    <motion.nav 
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <motion.div 
            variants={fadeIn('right', 0.3)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img 
              src={logo} 
              alt="Jhon Ramirez Logo" 
              className="lg:h-14 h-12 w-auto object-contain"
            />
      </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          variants={fadeIn('left', 0.3)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div 
          variants={fadeIn('down', 0.3)}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link, index) => (
           <motion.a
              key={index}
              variants={fadeIn('down', 0.1 * (index + 1))}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`font-medium relative 
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                hover:after:w-full after:bg-green-600 after:transition-all
                ${activeLink === link.href 
                  ? 'bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent after:w-full' 
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {link.label}
        </motion.a>

          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a 
          href='#contact'
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden cursor-pointer md:inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-xl hover:shadow-green-500/30 transition-all"
        >
          Get in touch
        </motion.a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <motion.div 
    variants={fadeIn('down', 0.2)}
    initial="hidden"
    animate="show"
    className="md:hidden bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 py-6 shadow-lg"
  >
    <motion.div 
      variants={fadeIn('down', 0.3)}
      className="container mx-auto px-6 space-y-4"
    >
      {navLinks.map((link, index) => (
        <motion.a
          key={index}
          variants={fadeIn('right', 0.1 * (index + 1))}
          href={link.href}
          onClick={() => {
            setActiveLink(link.href);
            setIsMenuOpen(false);
          }}
          className={`block text-base font-medium tracking-wide py-3 transition-colors
            ${activeLink === link.href 
              ? 'bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent' 
              : 'text-gray-700 hover:text-gray-900'}
          `}
        >
          {link.label}
        </motion.a>
      ))}

      <motion.a 
        href="#contact"
        variants={fadeIn('up', 0.4)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="block cursor-pointer text-center w-full bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-md hover:shadow-lg hover:shadow-green-500/30 transition-all"
      >
        Get in touch
      </motion.a>
    </motion.div>
  </motion.div>
)}

    </motion.nav>
  )
}

export default Navbar