"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useDarkMode } from "../context/DarkModeContext"
import { ChevronRight, ExternalLink, Home } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  title: string
  slug: string
  category: string
  description: string
  image: string
  liveUrl: string
}

const projects: Project[] = [
  {
    title: "FOOD COURT MANAGER",
    slug: "foodcourt",
    category: "WEB APPLICATION",
    description: "Solved real-time slot, UI, and transaction security challenges with optimized state management.",
    image: "/foodcourt/onef.png",
    liveUrl: "https://college-food-court.vercel.app/",
  },
  {
    title: "CALENDAR SYNC",
    slug: "calendar-sync",
    category: "WEB APPLICATION",
    description: "A calendar sync app with Google SSO and API integration for seamless task and event management, deployed on Vercel.",
    image: "/calendar/two.png",
    liveUrl: "https://calendarsync-opal.vercel.app/",
  },
  {
    title: "METRO ROUTE WIZARD",
    slug: "metro",
    category: "WEB APPLICATION",
    description:
      "The Metro Route Planner uses the shortest path algorithm to provide efficient routes with minimal interchanges and cost.",
    image: "/metro/mm.png",
    liveUrl: "https://metro-fawn.vercel.app/",
  },
  {
    title: "AI POEM GENERATOR",
    slug: "aipoem",
    category: "WEB APPLICATION",
    description: "An AI-powered poem generator that creates poems based on user input and displays an animated emoji reflecting the poem's emotion.",
    image: "/poem/th.png",
    liveUrl: "https://poem-qk18.vercel.app/",
  },
  {
    title: "PORTFOLIO SHOWCASE",
    slug: "portfolio-showcase",
    category: "WEB APPLICATION",
    description:
      "An elegant and responsive portfolio website for showcasing creative works and professional achievements.",
    image: "/portfolio/pp.png",
    liveUrl: "https://aman-x-code.github.io/Portfolio/",
  },
  {
    title: "KANBAN BOARD",
    slug: "kanban",
    category: "WEB APPLICATION",
    description: "The Kanban Board app helps users organize tasks with customizable columns and real-time collaboration for streamlined project management.",
    image: "/kanban/ka.png",
    liveUrl: "https://kanban-board-pi-rust.vercel.app/",
  },
  {
    title: "Digital Twin System for Real-Time Telerehabilitation",
    slug: "digital-twin",
    category: "PATENT & PROTOTYPE",
    description: "Remote monitoring, personalized treatment plans, real-time feedback, and immersive virtual environments.",
    image: "/imu/leg.jpg",
    liveUrl: "https://innovgadget.example.com",
  },
  {
    title: "Smart Glove for Translating Sign Language into Text and Enabling Home Automation Control",
    slug: "smart-home-system",
    category: "PATENT & PROTOTYPE",
    description: "This dual-purpose functionality enhances both communication and independence, empowering mute individuals to interact seamlessly with their surroundings.",
    image: "/hand/image.png",
    liveUrl: "https://smarthome.example.com",
  },
]

export default function ProjectsPage() {
  const { darkMode } = useDarkMode()

  useEffect(() => {
    // Add any side effects or cleanup code here if needed
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"} relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-y-12"></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12"
        >
          <h1 className="text-5xl font-bold">My Projects</h1>
          <Link
            href="/"
            className={`inline-flex items-center ${darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"} transition-colors`}
          >
            <Home className="mr-2" size={20} />
            Back to Home
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-opacity-10 backdrop-filter backdrop-blur-lg ${
                darkMode ? "bg-white/10" : "bg-white/70"
              } rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl border ${
                darkMode ? "border-white/10" : "border-gray-200"
              }`}
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-2xl mb-3 transition-colors duration-300 hover:text-blue-500">
                  {project.title}
                </h2>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-4 font-medium`}>
                  {project.category}
                </p>
                <p className="text-sm mb-6 line-clamp-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-full text-sm ${
                      darkMode ? "bg-white/20 hover:bg-white/30 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
                    } transition-colors duration-300`}
                  >
                    Live Site <ExternalLink size={14} className="ml-2" />
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`flex items-center px-4 py-2 rounded-full text-sm ${
                      darkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-200 hover:bg-gray-300"
                    } transition-colors duration-300`}
                  >
                    View More <ChevronRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
