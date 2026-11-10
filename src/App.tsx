import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleCanvas from './components/ParticleCanvas'

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Projects />
        <Credentials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
