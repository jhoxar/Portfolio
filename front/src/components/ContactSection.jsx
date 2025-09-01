import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiX } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let newErrors = {};

    if (!formData.get("user_name")) newErrors.user_name = "Name is required";
    if (!formData.get("user_email")) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("user_email"))) {
      newErrors.user_email = "Invalid email format";
    }
    if (!formData.get("message")) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    emailjs
      .sendForm(
        "service_nxmn558", // tu serviceID
        "template_rly8l6l", // tu templateID
        e.target,
        "kN1gOfsicf5C617e_" // tu publicKey
      )
      .then(
        () => {
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

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
          <form
            onSubmit={handleSendMessage}
            className="bg-gray-900/60 backdrop-blur rounded-2xl p-8 shadow-lg border border-gray-800"
          >
            <div className="grid gap-6">
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition"
                />
                {errors.user_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.user_name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition"
                />
                {errors.user_email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.user_email}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
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
                <span>jhoxardev@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiPhone className="w-5 h-5 text-green-500" />
                <span>+57 350 809 4082</span>
              </div>
            </div>
            <div className="flex gap-5 pt-4">
              <a
                href="https://www.linkedin.com/in/jhon-ramirez-ba7102139/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/jhoxar"
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

      {/* Modal Popup */}
      <AnimatePresence>
        {isSent && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            {/* Popup */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center border border-green-700 relative">
  {/* Close button */}
  <button
    onClick={() => setIsSent(false)}
    className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
  >
    <FiX size={24} />
  </button>

  <h2 className="text-2xl font-bold text-green-400 mb-4">
    🎉 Message Sent!
  </h2>
  <p className="text-gray-300 mb-6">
    Thanks for reaching out!  
    I’ve also sent you a confirmation email.  
    <br />
    Let’s take the next step together 🚀
  </p>

  <a
    href="https://calendly.com/jhoxardev/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-green-500/30"
  >
    📅 Schedule a 30-min Call
  </a>
</div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
