"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects"
import { Contact } from "./components/Contact"
import TechStack from "./components/TechStack"
import CustomCursor from "./components/CustomCursor"
import { Scene } from "./components/3D/Scene"
import ThemeToggle from "./components/ThemeToggle"
import { ThemeProvider } from "./context/ThemeContext"
import Blog from "./pages/Blog"
import Loader from "./components/CoustomLoader"
import Timeline from "./components/Timeline"
import FullscreenToggle from "./components/FullscreenToggle"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Scene />
            <CustomCursor />
            <ThemeToggle />
            <FullscreenToggle />
            <Navbar />
            <main className="relative z-10">
              <Home />
              <TechStack />
              <WorkExperience />
              <Timeline />
              <Projects />
              <Blog />
              <div id="contact"> {/* Add this div to enable scrolling to contact */}
                <Contact />
              </div>
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
