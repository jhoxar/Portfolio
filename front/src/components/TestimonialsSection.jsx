import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe", 
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Working with Jhon was seamless. He turned complex ideas into clean, functional solutions and made the whole process enjoyable.",
  },
  {
    id: 2,
    name: "John De Marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg", 
    text: "His automation workflows saved us hours every week. Beyond the tech, he genuinely cares about impact.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The attention to detail and UI/UX improvements elevated our product. Jhon is a rare blend of dev and designer.",
  },
  {
    id: 4,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "From APIs to React apps, everything was delivered with quality and speed. Highly recommend!",
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
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <span 
                      key={starIndex} 
                      className="text-green-500"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  {testimonial.name}
                </h3>
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
