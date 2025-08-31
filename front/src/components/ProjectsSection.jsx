import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import n8n from "../assets/n8n.png"

// Datos de proyectos (puedes extenderlos luego)
const projects = [
  {
    title: "AI Workflow Automation",
    description:
      "Automated complex business processes with n8n and Python, saving teams hours of manual work every week.",
    image: n8n,
    link: "#"
  },
  {
    title: "Modern Business Landing",
    description:
      "Built a sleek, responsive landing page with React + Tailwind, optimized for conversions.",
    image: n8n,
    link: "#"
  },
  {
    title: "E-commerce Redesign",
    description:
      "Redesigned an e-commerce store for better UX and higher sales, integrating Node.js APIs.",
    image: n8n,
    link: "#"
  }
]

const ProjectsSection = () => {
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
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  variants={fadeIn("up", 0.5)}
                  className="mt-4 inline-block text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
