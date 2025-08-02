"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useDarkMode } from "../context/DarkModeContext"
import { motion } from "framer-motion"

function FloatingPaths({ position, darkMode }: { position: number, darkMode: boolean }) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.05 + i * 0.01})`,
    width: 0.5 + i * 0.02,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={darkMode ? "currentColor" : "rgba(0,0,0,0.5)"}
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { darkMode } = useDarkMode()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const words = ["AMAN", "KHANNA"]

  const textColor = darkMode ? "text-white" : "text-black"

  return (
    <section
      className={`py-12 relative ${darkMode ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-300`}
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} darkMode={darkMode} />
        <FloatingPaths position={-1} darkMode={darkMode} />
      </div>
      <div
        className={`container mx-auto px-4 py-8 md:py-16 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="text-center mb-12 -mt-12"> {/* Adjusted margin-top */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter ${textColor}`}>
              {words.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: wordIndex * 0.2 }}
                  className="inline-block mr-4 last:mr-0"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 150, opacity: 0, scale: 0.5 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                      }}
                      className={`inline-block ${textColor}`}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="md:col-start-1 relative z-40">
            <p className="mb-8 text-lg relative z-40 md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] break-words">
              I AM PASSIONATE ABOUT CREATING WEBSITES THAT STAND OUT FROM THE CROWD.
            </p>
          </div>
          <div className="md:col-start-2">
            <div className="space-y-2 text-lg text-right">
              <p className="text-sm">UI/UX</p>
              <p className="text-base">WEB DESIGN</p>
              <p className="text-lg">LANDING PAGE</p>
              <p className="text-xl">UI DESIGN FIGMA</p>
              <p className="text-2xl">EXPERT WEBFLOW</p>
            </div>
          </div>
          <div className="relative w-full max-w-xs aspect-square mx-auto md:absolute md:top-[60%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-30 mt-10">
            <Image
              src="/profile.png"
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl floating" // Added floating class
              style={{ zIndex: 10 }} // Ensure the image is in front
            />
            <div
              className={`absolute inset-0 ${darkMode ? "bg-gray-800/20" : "bg-white/20"} rounded-full floating backdrop-blur-sm`}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          25% { transform: translateY(-5px); }
          75% { transform: translateY(5px); }
        }
        .floating {
          animation: float 3s ease-in-out infinite; // Adjusted animation for floating effect
        }
      `}</style>
    </section>
  )
}
