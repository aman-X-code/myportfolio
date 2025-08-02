"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useDarkMode } from "../context/DarkModeContext"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const { darkMode } = useDarkMode()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  return (
    <footer
      className={`py-16 md:py-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10">LET&apos;S TALK</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          <div className="space-y-4">
            <Link
              href="https://www.instagram.com/amank.rar/"
              target="_blank"
              rel="noopener noreferrer"
              className={`block hover:${darkMode ? "text-gray-300" : "text-gray-600"} transition-colors duration-300`}
            >
              INSTAGRAM
            </Link>
            <Link
              href="https://github.com/aman-X-code"
              target="_blank"
              rel="noopener noreferrer"
              className={`block hover:${darkMode ? "text-gray-300" : "text-gray-600"} transition-colors duration-300`}
            >
              GITHUB
            </Link>
            <Link
              href="https://www.linkedin.com/in/aman-khanna-82715b200/"
              target="_blank"
              rel="noopener noreferrer"
              className={`block hover:${darkMode ? "text-gray-300" : "text-gray-600"} transition-colors duration-300`}
            >
              LINKEDIN
            </Link>
          </div>
          <Link
            href="/contact"
            className={`${darkMode ? "bg-white text-black" : "bg-black text-white"} px-6 py-3 rounded-full hover:opacity-80 transition-opacity duration-300`}
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </footer>
  )
}
