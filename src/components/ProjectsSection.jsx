import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import { useState } from "react"
import { FaPlay, FaGithub } from "react-icons/fa"
import movieMarketImg from "../assets/movieMarket.png"
import loopStudiosImg from "../assets/loopStudios.png"
import koreanFoodImg from "../assets/koreanFood.png"

const projects = [
  {
    title: "Movie Market",
    description:
      "A web app that connects to REST APIs to deliver real-time movie updates. Users can easily search, explore, and save their favorite films through a clean, intuitive interface.",
    image: movieMarketImg,
    live: "https://movie-market-chi.vercel.app/",
    code: "https://github.com/jhoxar/Movie-Market"
  },
  {
    title: "Loop Studios Landing Page",
    description:
      "A responsive site showcasing immersive VR experiences with clean design and smooth animations, built using HTML, Tailwind CSS, and JavaScript.",
    image: loopStudiosImg,
    live: "https://loopstudios-rosy-omega.vercel.app/",
    code: "https://github.com/jhoxar/loopstudios"
  },
  {
    title: "Korean Food",
    description:
      "Responsive site highlighting VR experiences with clean design and smooth animations, built with HTML, Tailwind CSS, and JavaScript.",
    image: koreanFoodImg,
    live: "https://korean-food-nine.vercel.app/",
    code: "https://github.com/jhoxar/koreanFood"
  }
]

const ProjectsSection = () => {
  // Un array de booleanos para trackear cuáles están volteadas
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false))

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev]
      newFlipped[index] = !newFlipped[index] // solo cambia esa card
      return newFlipped
    })
  }

  const handleAction = (index, url) => {
    window.open(url, "_blank")
    // Opcional: volver la card a su estado original luego de 2s
    setTimeout(() => {
      setFlipped((prev) => {
        const newFlipped = [...prev]
        newFlipped[index] = false
        return newFlipped
      })
    }, 2000)
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            variants={textVariant(0.2)}
            className="text-green-600 font-semibold uppercase tracking-wide text-sm mb-2"
          >
            Selected Work
          </motion.p>
          <motion.h2
            variants={textVariant(0.3)}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Projects & Case Studies
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A glimpse of the digital experiences I’ve built — blending design,
            code, and automation to solve real business challenges.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="relative w-full h-[420px]">
              <div className="perspective h-full">
                <div
                  className={`relative h-full w-full preserve-3d transition-transform duration-700 ${
                    flipped[index] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden bg-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-center">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">
                        {project.description}
                      </p>
                      <button
                        onClick={() => handleFlip(index)}
                        className="mt-4 mx-auto bg-gradient-to-r from-green-600 to-black text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all"
                      >
                        View Project
                      </button>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl p-6 shadow-xl flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-green-800 to-black text-white">
                    <h3 className="text-lg font-bold mb-6">
                      Explore this project
                    </h3>
                    <div className="flex flex-col gap-4 w-full">
                      <button
                        onClick={() => handleAction(index, project.live)}
                        className="flex items-center gap-3 bg-white text-green-800 px-5 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition"
                      >
                        <FaPlay className="text-green-600" />
                        Live Demo
                      </button>
                      <button
                        onClick={() => handleAction(index, project.code)}
                        className="flex items-center gap-3 bg-green-900 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition"
                      >
                        <FaGithub className="text-gray-200" />
                        View Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
