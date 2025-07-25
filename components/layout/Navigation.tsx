"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlitchText from "@/components/ui/GlitchText"
import { useTheme } from "next-themes"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === "dark") {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme("light")}
          className="text-yellow-400 hover:bg-yellow-100"
          aria-label="Switch to light mode"
          title="Switch to light mode"
        >
          <Sun className="w-5 h-5" />
        </Button>
      )
    } else {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme("dark")}
          className="text-gray-700 hover:bg-gray-200"
          aria-label="Switch to dark mode"
          title="Switch to dark mode"
        >
          <Moon className="w-5 h-5" />
        </Button>
      )
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Terminal className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <GlitchText className="text-xl sm:text-2xl font-mono font-bold text-gray-600 dark:text-gray-300">UTKARSH.DEV</GlitchText>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-4 py-2 text-sm font-mono transition-all duration-300 border border-transparent hover:border-gray-400/50 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800 dark:hover:border-gray-600 ${
                  activeSection === item.toLowerCase()
                    ? "text-gray-600 bg-gray-100 border-gray-400/50 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600"
                    : "text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {`<${item.toLowerCase()}/>`}
              </motion.button>
            ))}
            {renderThemeChanger()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
              title="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            {renderThemeChanger()}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 text-left font-mono transition-colors rounded-lg ${
                    activeSection === item.toLowerCase()
                      ? "text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-800"
                      : "text-gray-600 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                  }`}
                >
                  {`<${item.toLowerCase()}/>`}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
