"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Palette, Database, Cloud, CuboidIcon as Cube } from "lucide-react"
import { Particles } from "react-particles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

// Assuming you have a DarkModeContext, if not, you'll need to create one
import { useDarkMode } from "../context/DarkModeContext"

export default function AboutMe() {
  const { darkMode } = useDarkMode()
  const [activeSection, setActiveSection] = useState("education")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const skills = [
    {
      name: "Full Stack Developer",
      level: 95,
      icon: Code2,
      color: "#f7ff0a",
      gradient:
        "from-[#f7ff0a] via-[#a8f33f] via-[#59e063] via-[#00ca7f] via-[#00b091] via-[#009697] via-[#007b8f] to-[#0a607b]",
    },
    {
      name: "UI/UX Design",
      level: 95,
      icon: Palette,
      color: "#d3eef4",
      gradient: "from-[#D3EEF4] via-[#F1EEC8] to-[#F1EEC8]",
    },
    { name: "Data Science", level: 70, icon: Database, color: "#45B7D1", gradient: "from-[#45B7D1] to-[#65D7F1]" },
    { name: "DevOps", level: 60, icon: Cloud, color: "#96CEB4", gradient: "from-[#96CEB4] to-[#B6EED4]" },
    {
      name: "3D - Animation",
      level: 70,
      icon: Cube,
      color: "#d6ff7e",
      gradient:
        "from-[#d6ff7e] via-[#deee65] via-[#e5dc4f] via-[#edc93c] via-[#f3b52e] via-[#f9a027] via-[#fd8a29] to-[#ff722f]",
    },
  ]


  useEffect(() => {
    // Add any side effects here if needed
  }, [darkMode, particlesInit]);

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {darkMode && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-6xl font-bold relative">About Me</h1>
            <Link
              href="/AmanKhannaResume.pdf"
              className={`cursor-pointer flex justify-between px-3 py-2 rounded-full tracking-wider shadow-xl hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] ${
              darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 animate-bounce"
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
              </svg>
            </Link>
          </div>
          <p className="text-xl text-gray-500 dark:text-gray-400">
          I am a versatile technology professional specializing in DevOps, full-stack development, 3D technologies, UI/UX design, and graphic designing. With a strong focus on delivering seamless and innovative solutions, I integrate cutting-edge technologies to create impactful and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {["education", "skills", "Work Experience"].map((section, index) => (
            <motion.button
              key={section}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(section)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl transition-all transform hover:rotate-1 ${
                activeSection === section
                  ? darkMode
                    ? "bg-white/10 backdrop-blur-md text-white"
                    : "bg-gradient-to-br from-black via-gray-800 to-gray-700 text-white"
                  : darkMode
                    ? "bg-white/5 backdrop-blur-sm hover:bg-white/10"
                    : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <h2 className="text-2xl font-bold mb-2 capitalize">{section}</h2>
              <p className="text-sm opacity-70">
                {section === "education" && "Academic journey"}
                {section === "skills" && "Explore my expertise"}
                {section === "Work Experience" && "Internships and works"}
              </p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            {activeSection === "education" && (
              <div className="grid gap-8">
                {[
                  {
                    title: "B.Tech in Computer Science and Engineering",
                    institution: "Vellore Institute of Technology",
                    period: "2021 - 2025",
                    color: "blue",
                  },
                  {
                    title: "Senior Secondary School -12th",
                    institution: "Macro Vision Academy",
                    period: "2020 - 2021",
                    color: "green",
                  },
                  {
                    title: "Higher Secondary School -10th",
                    institution: "Macro Vision Academy",
                    period: "2018 - 2019",
                    color: "green",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-8 rounded-2xl relative overflow-hidden ${darkMode ? "bg-white/10 backdrop-blur-md" : "bg-gray-100"}`}
                  >
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2">{edu.title}</h3>
                      <p className="text-gray-500 dark:text-gray-600 mb-4">
                        {edu.institution}, {edu.period}
                      </p>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className={`h-1 bg-${edu.color}-500 rounded-full`}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent hover:via-white/10 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            )}

            {activeSection === "skills" && (
              <div className="grid gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className={`p-8 rounded-2xl relative overflow-hidden ${darkMode ? "bg-white/10 backdrop-blur-md" : "bg-gray-100"}`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <motion.div
                          animate={{
                            rotate: hoveredSkill === skill.name ? 360 : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <skill.icon className="w-8 h-8 mr-4" style={{ color: skill.color }} />
                        </motion.div>
                        <h3 className="text-2xl font-bold">{skill.name}</h3>
                      </div>
                      <div className="relative h-6 bg-gray-200 dark:bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="absolute h-full w-full bg-gradient-to-r from-transparent to-white/20 rounded-full"
                        />
                      </div>
                      <div className="mt-4 text-right">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          className="text-2xl font-bold"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent hover:via-white/10 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            )}

            {activeSection === "Work Experience" && (
              <div className="grid gap-8">
                {[
                  {
                    title: "kalibroida technology solutions",
                    company: "Internship",
                    period: "2023",
                    description: [
                      "Developed a ride-sharing application integrating AR and OCR technologies for intelligent cargo management, enhancing efficiency, optimizing space use and ensuring real-time accuracy.",
                    ],
                  },
                  {
                    title: "Design & Media Head",
                    company: "VIT Chennai",
                    period: "2022 — 2024",
                    description: [
                      "Led the design and media team, overseeing the creation of innovative visual content and ensuring cohesive brand representation across all platforms.",
                    ],
                  },
                ].map((internship, index) => (
                  <motion.div
                    key={internship.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-8 rounded-2xl relative overflow-hidden ${darkMode ? "bg-white/10 backdrop-blur-md" : "bg-gray-100"}`}
                  >
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2">{internship.title}</h3>
                        <p className="text-gray-500 dark:text-gray-600 mb-4">
                        {internship.company}, {internship.period}
                      </p>
                      <ul className="space-y-2">
                        {internship.description.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-500" />
                            <span className="text-gray-300 dark:text-gray-800">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent hover:via-white/10 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/"
            className={`
              inline-block px-8 py-4 rounded-full text-lg font-semibold
              transition-all duration-300 transform hover:scale-105
              relative overflow-hidden group
              ${darkMode ? "bg-white/20 backdrop-blur-md text-white" : "bg-black text-white"}
            `}
          >
            <span className="relative z-10">Back to Home</span>
            <motion.div
              className={`
                absolute inset-0 
                ${darkMode ? "bg-gray-200" : "bg-gray-800"}
              `}
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </div>
      </div>
    )
  }

