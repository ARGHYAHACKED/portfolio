"use client"

import { useState, useEffect } from "react"
import { Maximize, Minimize } from "lucide-react"

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  return (
    <button
      onClick={toggleFullscreen}
      className="fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors duration-200"
      aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
    >
      {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
    </button>
  )
}

export default FullscreenToggle

