import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: 'Home', href: '#hero' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Tools', href: '#' },
    ],
    support: [
      { name: 'FAQs', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
    ],
  }

  return (
    <motion.footer 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-900 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Grid */}
        <motion.div 
          variants={fadeIn('up', 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12"
        >
          {/* Brand */}
          <motion.div 
            variants={fadeIn('right', 0.4)}
            className="lg:col-span-4"
          >
            <motion.div 
              variants={fadeIn('down', 0.5)}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-white">JhoxarDev</h2>
              <p className="text-green-400 font-medium text-sm">
                Built to Grow Your Business
              </p>
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.6)}
              className="text-gray-400 mb-6 max-w-sm text-sm"
            >
              I create modern web solutions powered by automation and AI — helping businesses move faster, smarter, and stronger.
            </motion.p>
            {/* Socials */}
            <motion.div 
              variants={fadeIn('up', 0.7)}
              className="flex gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/jhon-ramirez-ba7102139/" 
                target='_blank'
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://github.com/jhoxar" 
                target='_blank'
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div 
                  key={category}
                  variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
                >
                  <motion.h3 
                    variants={textVariant(0.2)}
                    className="text-white text-lg font-semibold mb-4"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.h3>
                  <motion.ul 
                    variants={fadeIn('up', 0.4)}
                    className="space-y-3"
                  >
                    {links.map((link, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeIn('up', 0.1 * (index + 1))}
                      >
                        <motion.a 
                          whileHover={{ x: 5 }}
                          href={link.href} 
                          className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <motion.div 
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p 
              variants={fadeIn('right', 1.0)}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} JhoxarDev. All rights reserved.
            </motion.p>
            <motion.p 
              variants={fadeIn('left', 1.0)}
              className="text-gray-500 text-sm"
            >
              Crafted with 💻 & ⚡ by Jhon Ramirez
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
