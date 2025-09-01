import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import elenaPicture from "../assets/ElenaR.jpeg"
import diegoPicture from "../assets/diegoR.jpeg"
import suryaPicture from "../assets/SuryaR.jpeg"
import enriquePicture from "../assets/enriqueR.jpeg"
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Elena Barón", 
    role: "Sr. Talent Acquisition",
    image: elenaPicture,
    text: "Jhon is a proactive professional who takes full ownership of projects. He excels in web development, UX/UI, and AI, and is always a strong team player.",
  },
  {
    id: 2,
    name: "Diego Muñoz",
    role: "Data & AI Specialist",
    image: diegoPicture, 
    text: "Jhon is highly disciplined and always delivers projects on time. Whatever he starts, he finishes with quality and precision.",
  },
  {
    id: 3,
    name: "Surya Sanchez",
    role: "CEO of Deepidealab",
    image: suryaPicture,
    text: "Jhon consistently delivers high-quality results on time. He is collaborative, creative, and truly passionate about working with teams.",
  },
  {
    id: 4,
    name: "Enrique Olivares",
    role: "Technology Lead",
    image: enriquePicture,
    text: "Jhon is an outstanding individual with a true passion for artificial intelligence and software development. I’ve never seen anyone complete a Python course in just one day and immediately build a project from it.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        >
          What clients say about me
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 text-lg"
        >
          Real feedback from founders, teams, and partners I’ve worked with.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-full md:py-12 py-4">
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Decorative Icon */}
                <div className="flex justify-center mb-3 text-green-500">
                  <FaQuoteLeft className="w-6 h-6" />
                </div>

                <h3 className="font-semibold text-lg text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-green-600 text-sm font-medium mb-3">
                  {testimonial.role}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  {testimonial.text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
