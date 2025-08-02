"use client"

import { useState } from "react"
import { useDarkMode } from "../context/DarkModeContext"
import { Send, Phone, Mail, MapPin, ArrowLeft } from "lucide-react"
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ContactPage() {
  const { darkMode } = useDarkMode()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    { icon: Phone, text: "+91 9039242458", delay: 0.1 },
    { icon: Mail, text: "aamankhanna1112@gmail.com", delay: 0.2 },
    { icon: MapPin, text: "M.P, INDIA", delay: 0.3 },
  ];
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/aman-X-code", delay: 0.4, target: "_blank" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/aman-khanna-82715b200/", delay: 0.5, target: "_blank" },
    { icon: SiInstagram, href: "https://www.instagram.com/amank.rar/", delay: 0.6, target: "_blank" },
  ]
  

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Create Something Amazing Together
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
              >
                <item.icon className="w-8 h-8 text-blue-500" />
                <span className="text-lg">{item.text}</span>
              </motion.div>
            ))}
            <motion.div
              className={`p-6 rounded-lg ${darkMode ? "bg-white/10 backdrop-blur-md" : "bg-white"} shadow-lg`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
              <p className="mb-6 text-lg">
                Let&apos;s connect and explore how we can bring your ideas to life. I&apos;m excited to hear about your project
                and discuss how we can collaborate to create something extraordinary.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`p-3 rounded-full ${
                      darkMode ? "bg-white/20 hover:bg-white/30" : "bg-gray-200 hover:bg-gray-300"
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: link.delay }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className={`p-8 rounded-lg ${darkMode ? "bg-white/10 backdrop-blur-md" : "bg-white"} shadow-lg`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-md text-lg ${
                  darkMode
                    ? "bg-white/5 border-gray-600 focus:border-blue-500 text-white"
                    : "bg-gray-50 border-gray-300 focus:border-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-md text-lg ${
                  darkMode
                    ? "bg-white/5 border-gray-600 focus:border-blue-500 text-white"
                    : "bg-gray-50 border-gray-300 focus:border-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 border rounded-md text-lg ${
                  darkMode
                    ? "bg-white/5 border-gray-600 focus:border-blue-500 text-white"
                    : "bg-gray-50 border-gray-300 focus:border-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className={`w-full flex items-center justify-center px-6 py-4 rounded-full text-lg font-semibold ${
                darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitted ? "Message Sent!" : "Send Message"}
              <Send className="w-6 h-6 ml-2" />
            </motion.button>
          </motion.form>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold ${
              darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
            } transition-colors duration-300`}
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

