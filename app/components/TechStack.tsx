"use client"

import { useState, useEffect, useRef } from "react"
import { useDarkMode } from "../context/DarkModeContext"
import Image from "next/image"
import KineticText from "./KineticText"

const technologies = [
  {
    name: "React",
    icon: "/icons/react.svg",
    customClass: "",
  },
  { name: "Next.js", icon: "/icons/next.svg", customClass: "" },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    customClass: "bg-black",
  },
  {
    name: "JavaScript",
    icon: "/icons/js.svg",
    customClass: "bg-black",
  },
  {
    name: "Framer Motion",
    icon: "/icons/framer.svg",
    customClass: "bg-black",
  },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg", customClass: "" },
  { name: "Shadcn UI", icon: "/icons/shadcn.svg", customClass: "" },
  { name: "Vercel", icon: "/vercel.svg", customClass: "" },
  { name: "Figma", icon: "/icons/figma.svg", customClass: "" },
  { name: "Node.js", icon: "/icons/node.svg", customClass: "" },
]

export default function TechStack() {
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

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-8 md:py-12 transition-all duration-1000 font-sans ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <KineticText>MODERN</KineticText>
          <KineticText>TECH STACK</KineticText>
          <p className="text-sm font-bold uppercase tracking-widest mt-4">
            PROFESSIONAL AT
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <div
              key={index}
              className={`aspect-square rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                tech.customClass
              } ${
                darkMode
                  ? "bg-white/5 backdrop-blur-md shadow-lg border-white/10"
                  : "bg-white/20 backdrop-blur-md shadow-lg border-white/30"
              }`}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={96}
                height={96}
                className={`object-contain transition-all duration-300 ${
                  darkMode ? "invert" : ""
                } ${tech.name === "Vercel" ? "dark:invert-0 invert" : ""}`}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {technologies.slice(4).map((tech, index) => (
            <div
              key={index}
              className={`aspect-square rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                tech.customClass
              } ${
                darkMode
                  ? "bg-white/5 backdrop-blur-md shadow-lg border-white/10"
                  : "bg-white/20 backdrop-blur-md shadow-lg border-white/30"
              }`}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={64}
                height={64}
                className={`object-contain transition-all duration-300 ${
                  darkMode ? "invert" : ""
                } ${tech.name === "Vercel" ? "dark:invert-0 invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
