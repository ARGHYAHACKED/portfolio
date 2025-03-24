"use client"

import { useState, useEffect } from "react"

const Home = () => {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ["Coder", "Problem Solver", "C++ Developer", "Full Stack Web Developer"]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setDisplayText(
        isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1),
      )

      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(75) // faster when deleting
      } else {
        setTypingSpeed(150) // normal speed when typing
      }

      // If completed typing the word
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500) // wait before starting to delete
      }
      // If deleted the word
      else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500) // pause before typing next word
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, roles, typingSpeed])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500/50"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          I'm a <span className="text-purple-500">{displayText}</span>
          <span className="text-purple-500 animate-pulse"></span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">Passionate about creating beautiful and functional web experiences</p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-purple-600 text-purple-400 px-6 py-3 rounded-full hover:bg-purple-600/10 transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home

