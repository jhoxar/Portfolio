import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/me_pict.png";
import cvFile from "../assets/files/CVFS.pdf";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Jhon-Ramirez-CV.pdf";
    link.click();
    window.open(cvFile, "_blank");
  };

  const handleContact = () => {
    const message = encodeURIComponent(
      "👋 Hi Jhon! I’d love to know more about your services. Can you tell me how you can help my business grow? 🚀"
    );
    const phone = "573508094082";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="flex bg-gradient-to-br from-[#389A52] to-[#212121] flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pb-10 container mx-auto"
    >
      {/* Contenedor con perspectiva solo en desktop */}
      <div
        className="relative flex flex-col md:flex-row items-center justify-between w-full"
        style={!isMobile ? { perspective: "1200px" } : {}}
      >
        {/* Columna izquierda - Texto */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 space-y-8 mt-20 lg:mt-20"
          style={
            !isMobile
              ? {
                  transform: "translateZ(-60px) rotateY(-3deg)",
                  transformStyle: "preserve-3d",
                }
              : {}
          }
        >
          <motion.h1
            variants={textVariant(0.3)}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 leading-snug"
          >
            Hey, I’m Jhon Ramirez <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              an AI-powered Full-Stack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-gray-300 font-light text-lg md:text-xl max-w-xl"
          >
            I help startups and teams turn bold ideas into scalable digital
            solutions. From smart automation to sleek user interfaces, I deliver
            products that are not only functional but unforgettable.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex gap-3 max-w-md flex-col lg:flex-row"
          >
            <button
              onClick={handleDownloadCV}
              className="bg-white text-[#212121] px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/30 active:scale-95 cursor-pointer"
            >
              Download CV
            </button>
            <button
              onClick={handleContact}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all active:scale-95 cursor-pointer"
            >
              Contact
            </button>
          </motion.div>
        </motion.div>

        {/* Columna derecha - Imagen */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 mt-0 pl-0 md:pl-12 flex justify-center"
          style={
            !isMobile
              ? {
                  transform: "translateZ(80px) rotateY(5deg)",
                  transformStyle: "preserve-3d",
                }
              : {}
          }
        >
          <img
            src={heroImage}
            alt="Jhon Ramirez"
            className={`rounded-lg relative z-10 w-3/4 transition-transform duration-700 ${
              isMobile ? "hover:scale-105" : "hover:scale-[1.08]"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
