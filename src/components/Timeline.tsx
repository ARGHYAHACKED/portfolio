"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"

const RotatingSphere = ({ mousePosition }) => {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mousePosition.y * 0.5
      meshRef.current.rotation.y = mousePosition.x * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#6b21a8" metalness={0.4} roughness={0.7} wireframe />
    </mesh>
  )
}

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const timelineRefs = useRef<HTMLDivElement[]>([])
  const canvasRef = useRef()

  const events = [
    {
      time: "2020 - 2022",
      title: "12th Passout",
      description: "Completed my 12th from Arambagh High School.",
    },
    {
      time: "2022 - 2026",
      title: "Bachelor of Technology in Computer Science",
      description: "Pursuing B.Tech in Computer Science from Techno India University.",
    },
    // {
    //   time: "2",
    //   title: "Internship at SDLC Corp",
    //   description: "Worked as a Social Media Manager and improved marketing strategies.",
    // },
    // {
    //   time: "2023",
    //   title: "Full-stack Developer Project",
    //   description: "Developed a job portal for the SIH hackathon project.",
    // },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp")
          }
        })
      },
      { threshold: 0.3 },
    )

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    const handleMouseMove = (event) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
          y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      observer.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      id="timeline"
      className="min-h-screen bg-gray-900 text-gray-300 pt-20 relative flex items-center justify-center overflow-hidden"
    >
      {/* Background 3D Animation */}
      <div ref={canvasRef} className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Stars radius={300} depth={60} count={1000} factor={7} fade />
          <RotatingSphere mousePosition={mousePosition} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Timeline Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col gap-12">
        <div className="relative w-full">
          {/* Vertical timeline line */}
          {/* <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-600"></div> */}

          {/* Timeline events */}
          {events.map((event, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el!)}
              className={`flex items-center gap-8 mb-16 opacity-0 transition-all duration-300 ${
                activeIndex === index
                  ? "opacity-100 scale-105"
                  : activeIndex === null
                    ? "opacity-100"
                    : "opacity-50 scale-95"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Time section */}
              <div className="w-1/3 text-right pr-8">
                <p className="text-lg font-semibold text-purple-400">{event.time}</p>
              </div>

              {/* Middle point */}
              <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-gray-900 relative z-10"></div>

              {/* Content section */}
              <div className="w-2/3">
                <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

