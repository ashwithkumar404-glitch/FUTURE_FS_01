import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Achievements from "./sections/Achievements"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import ProjectDetails from "./pages/ProjectDetails"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/project/:id"
          element={
            <>
              <Navbar />
              <ProjectDetails />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App