"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext"
import { Loader } from "./components/Loader"
import { useInitialLoader } from "./hooks/useInitialLoader"
import Header from "./components/Header"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { showLoader, showContent } = useInitialLoader()
  const { darkMode } = useDarkMode()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-black" : "bg-white"}`}>
      {showLoader && <Loader />}
      <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Header />
        <main className="pt-20">{children}</main>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <DarkModeProvider>
        <body className={`${inter.className} h-full`}>
          <RootLayoutContent>{children}</RootLayoutContent>
        </body>
      </DarkModeProvider>
    </html>
  )
}

