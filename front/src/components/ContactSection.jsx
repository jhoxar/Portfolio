import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-green-900 via-black to-black text-white overflow-hidden"
    >
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')]"></div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        className="relative max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Extraordinary
          </span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.4)}
          className="text-gray-300 max-w-2xl mx-auto text-lg mb-12"
        >
          Whether you’re a startup with a bold vision or a team scaling fast,
          I’m here to turn your ideas into powerful digital experiences. Let’s
          create, innovate, and grow together.
        </motion.p>

        {/* Contact Form + Info */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Form */}
          <form className="bg-gray-900/60 backdrop-blur rounded-2xl p-8 shadow-lg border border-gray-800">
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all hover:shadow-lg hover:shadow-green-500/30 active:scale-95"
              >
                🚀 Send Message
              </motion.button>
            </div>
          </form>

          {/* Info + Socials */}
          <div className="flex flex-col justify-center items-start text-left space-y-6">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="text-gray-300">
              I’m always open to discuss new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FiMail className="w-5 h-5 text-green-500" />
                <span>jhon.ramirez@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiPhone className="w-5 h-5 text-green-500" />
                <span>+57 300 123 4567</span>
              </div>
            </div>
            <div className="flex gap-5 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
