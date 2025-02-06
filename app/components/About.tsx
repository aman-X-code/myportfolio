"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import CountUp from "react-countup"
import { useDarkMode } from "../context/DarkModeContext"
import { ArrowRight } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { darkMode } = useDarkMode()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">ABOUT</h2>
          <Link
            href="/about-me"
            className={`group flex items-center space-x-2 ${darkMode ? "text-white" : "text-black"} hover:opacity-80 transition-opacity duration-300`}
          >
            <span>View More</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <p className="mb-10 text-lg md:text-xl max-w-3xl">
          &quot;I specialize in DevOps, full-stack development, 3D technologies, UI/UX design and graphic design, creating innovative and scalable solutions to drive business success.&quot;
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className={`border-2 ${darkMode ? "border-gray-800" : "border-gray-200"} p-6 rounded-lg`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {isVisible && <CountUp end={10} duration={3} suffix="+" />}
            </h3>
            <p className="text-sm md:text-base">SUCCESS PROJECTS</p>
          </div>
          <div className={`border-2 ${darkMode ? "border-gray-800" : "border-gray-200"} p-6 rounded-lg`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {isVisible && <CountUp end={7} duration={3} suffix="+" />}
            </h3>
            <p className="text-sm md:text-base">WEBSITES DEPLOYED</p>
          </div>
          <div className={`border-2 ${darkMode ? "border-gray-800" : "border-gray-200"} p-6 rounded-lg`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {isVisible && <CountUp end={3} duration={3} suffix="+" />}
            </h3>
            <p className="text-sm md:text-base">YEARS EXPERIENCE</p>
          </div>
        </div>
      </div>
    </section>
  )
}

