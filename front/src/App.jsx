import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsShowcase from './components/SkillsShowcase'
import Chatbot from './components/chatbot/Chatbot'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <ServicesSection />
        <SkillsShowcase />
        <ProjectsSection/>
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Chatbot flotante */}
      <Chatbot />
    </main>
  )
}

export default App
