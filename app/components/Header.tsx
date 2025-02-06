"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useDarkMode } from "../context/DarkModeContext"
import DarkModeSwitch from "./DarkModeSwitch"
import { usePathname } from "next/navigation"
import { Github, Instagram, Linkedin, Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/about-me" },
  { name: "PROJECTS", href: "/projects" },
]

export default function Header() {
  const { darkMode } = useDarkMode()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`sticky top-4 z-50 mx-auto max-w-5xl w-[95%] transition-all duration-300 ${
        scrolled ? "py-1" : "py-2"
      }`}
    >
      <nav
        className={`
          ${darkMode ? "bg-black/30 text-white" : "bg-white/30 text-black"}
          backdrop-blur-md rounded-lg shadow-lg py-2 px-4 md:py-3 md:px-6 transition-colors duration-300
        `}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            PORTFOLIO.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full border-2 transition-all duration-300 font-medium transform hover:scale-105 ${
                  isActive(item.href)
                    ? darkMode
                      ? "bg-white text-black border-white"
                      : "bg-black text-white border-black"
                    : darkMode
                      ? "border-gray-600 hover:bg-white hover:text-black"
                      : "border-gray-300 hover:bg-black hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-2">
                {[
                { icon: Github, href: "https://github.com/aman-X-code", name: "GitHub" },
                { icon: Instagram, href: "https://www.instagram.com/amank.rar/", name: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/aman-khanna-82715b200/", name: "LinkedIn" },
                ].map(({ icon: Icon, href, name }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  darkMode ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${darkMode ? "text-white" : "text-black"}`} />
                </Link>
                ))}
            </div>
            <DarkModeSwitch />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${darkMode ? "text-white" : "text-black"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? darkMode
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : darkMode
                      ? "text-white hover:bg-white/10"
                      : "text-black hover:bg-black/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center space-x-4 mt-4">
              {[
                { icon: Github, href: "#", name: "GitHub" },
                { icon: Instagram, href: "#", name: "Instagram" },
                { icon: Linkedin, href: "#", name: "LinkedIn" },
              ].map(({ icon: Icon, href, name }) => (
                <Link
                  key={name}
                  href={href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    darkMode ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${darkMode ? "text-white" : "text-black"}`} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
