"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }} // Smooth exit with slight zoom-out
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative w-64 h-64">
            <motion.div
              className="absolute inset-0 border-4 border-blue-500 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-purple-500 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="absolute inset-4 border-4 border-green-500 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
            />

            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 border-4 border-white rounded-full"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.8, 0.5, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Progress Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-white text-2xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {progress}%
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
