"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useDarkMode } from "../context/DarkModeContext"
import { ChevronRight, ExternalLink } from "lucide-react"

interface Project {
  title: string
  slug: string
  category: string
  description: string
  timeline: string
  images: string[]
  video?: string
  technologies: string[]
  challenges: string
  outcomes: string
  liveUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "FOOD COURT MANAGER",
    slug: "foodcourt",
    category: "WEB APPLICATION",
    description:
      "A college food court management system with time slot selection, multiple food options, and money management. Built with React and TypeScript, deployed on Vercel.",
    timeline: "January 2023 - March 2023",
    images: ["/foodcourt/onef.png", "/placeholder.svg", "/placeholder.svg"],
    video: "https://example.com/poweroflife.mp4",
    technologies: ["React", "Next.js", "Three.js", "GSAP"],
    challenges: "Implementing complex 3D animations while maintaining optimal performance across various devices.",
    outcomes: "Increased user engagement by 40% and boosted awareness for partnered environmental organizations.",
    liveUrl: "https://college-food-court.vercel.app/",
    githubUrl: "https://github.com/example/poweroflife",
  },
  {
    title: "CALENDAR SYNC",
    slug: "calendar-sync",
    category: "WEB APPLICATION",
    description:
      "A calendar sync web app for managing tasks and events with Google SSO and real-time Google API integration. Deployed on Vercel for seamless cross-platform accessibility.  ",
    timeline: "JANUARY 2025 - FEBRUARY 2025",
    images: ["/calendar/two.png", "/placeholder.svg", "/placeholder.svg"],
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    challenges:
      "Integrating real-time data from smart meters and presenting complex information in an easily understandable format.",
    outcomes: "Helped users reduce electricity consumption by an average of 15% and lower their monthly bills.",
    liveUrl: "https://calendarsync-opal.vercel.app/",
    githubUrl: "https://github.com/example/handleyourelectricity",
  },
  {
    title: "METRO ROUTE WIZARD",
    slug: "metro",
    category: "WEB APPLICATION",
    description:
      "The Metro Route Planner calculates efficient routes using the shortest path algorithm, focusing on minimum interchanges and cost. It helps commuters save time and money.",
    timeline: "October 2023 - December 2023",
    images: ["/metro/mm.png", "/placeholder.svg", "/placeholder.svg"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    challenges:
      "Integrating with multiple social media APIs and providing a user-friendly interface for managing various accounts.",
    outcomes: "Increased efficiency in social media management by 30% and improved engagement metrics.",
    liveUrl: "https://metro-fawn.vercel.app/",
    githubUrl: "https://github.com/example/socialmediadashboard",
  },
  {
    title: "AI POEM GENERATOR",
    slug: "aipoem",
    category: "WEB APPLICATION",
    description: "A web-based AI poem generator that creates poems from user input and visualizes the emotion with animated emojis. Deployed for an interactive and creative experience.",
    timeline: "July 2023 - September 2023",
    images: ["/poem/th.png", "/placeholder.svg", "/placeholder.svg"],
    technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
    challenges: "Building a scalable and secure e-commerce platform that can handle a large number of transactions.",
    outcomes: "Improved conversion rates by 20% and increased customer satisfaction.",
    liveUrl: "https://poem-qk18.vercel.app/",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    title: "PORTFOLIO SHOWCASE",
    slug: "portfolio-showcase",
    category: "WEB APPLICATION",
    description:
      "An elegant and responsive portfolio website for showcasing creative works and professional achievements.",
    timeline: "January 2024 - February 2024",
    images: ["/portfolio/pp.png", "/placeholder.svg", "/placeholder.svg"],
    technologies: ["HTML", "CSS", "JavaScript", "Sass"],
    challenges:
      "Creating a visually appealing and user-friendly portfolio that effectively showcases my skills and experience.",
    outcomes: "Improved user experience and increased visibility of my work.",
    liveUrl: "https://aman-x-code.github.io/Portfolio/",
    githubUrl: "https://github.com/example/portfolio",
  },
  {
    title: "KANBAN BOARD",
    slug: "kanban",
    category: "WEB APPLICATION",
    description: "The Kanban Board app helps users organize tasks through customizable columns for efficient project management. Deployed on Vercel.",
    timeline: "March 2024 - April 2024",
    images: ["/kanban/ka.png", "/placeholder.svg", "/placeholder.svg"],
    technologies: ["PHP", "MySQL", "WordPress", "Yoast SEO"],
    challenges: "Developing a user-friendly CMS with robust SEO features.",
    outcomes: "Improved content management efficiency and enhanced SEO performance.",
    liveUrl: "https://kanban-board-pi-rust.vercel.app/",
    githubUrl: "https://github.com/example/blogcms",
  },
  {
    title: "Digital Twin System for Real-Time Telerehabilitation",
    slug: "digital-twin",
    category: "PATENT & PROTOTYPE",
    description: "The use of AI, digital twin technology, IoT, and wearable devices in telerehabilitation and personalized healthcare.",
    timeline: "May 2024 - August 2024",
    images: ["/imu/leg.jpg", "/placeholder.svg", "/placeholder.svg"],
    video: "https://example.com/innovativegadget.mp4",
    technologies: ["Arduino", "ESP32", "Raspberry Pi", "Python"],
    challenges: "Designing a reliable and user-friendly smart home device with low power consumption.",
    outcomes: "Created a prototype that significantly improves energy efficiency and user comfort.",
    liveUrl: "https://innovgadget.example.com",
    githubUrl: "https://github.com/example/innovgadget",
  },
  {
    title: "Smart Glove for Translating Sign Language into Text and Enabling Home Automation Control",
    slug: "smart-home-system",
    category: "PATENT & PROTOTYPE",
    description: "This device is developed to improve the lifestyle of a person who has speaking disability. This device converts the gesture to speech i.e., gives voice to a mute person. ",
    timeline: "September 2024 - December 2024",
    images: ["/hand/image.png", "/placeholder.svg", "/placeholder.svg"],
    technologies: ["Home Assistant", "Node-RED", "MQTT", "Zigbee"],
    challenges: "Integrating various smart home devices and creating a centralized control system.",
    outcomes: "Developed a robust and scalable smart home system that improves home automation and energy efficiency.",
    liveUrl: "https://smarthome.example.com",
    githubUrl: "https://github.com/example/smarthome",
  },
]

export default function FeaturedProject() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("websites")
  const { darkMode } = useDarkMode()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = projects.filter((project) =>
    activeCategory === "websites" ? project.category === "WEB APPLICATION" : project.category === "PATENT & PROTOTYPE",
  )

  return (
    <section
      id="projects"
      className={`py-16 md:py-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">FEATURED PROJECT</h2>
          <Link
            href="/projects"
            className={`group flex items-center space-x-2 ${darkMode ? "text-white" : "text-black"} hover:opacity-80 transition-opacity duration-300`}
          >
            <span>View All Projects</span>
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 mb-10">
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === "websites"
                ? darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveCategory("websites")}
          >
            WEBSITES
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === "patents"
                ? darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveCategory("patents")}
          >
            PATENTS & PROTOTYPES
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`border-2 ${darkMode ? "border-gray-800" : "border-gray-200"} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
            >
              <div className="relative h-48">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-3`}>{project.category}</p>
                <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-3 py-1 rounded text-sm ${darkMode ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 transition-opacity`}
                  >
                    Live Site <ExternalLink size={12} className="ml-1" />
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`flex items-center px-3 py-1 rounded text-sm ${darkMode ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 transition-opacity`}
                  >
                    View More <ChevronRight size={12} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
