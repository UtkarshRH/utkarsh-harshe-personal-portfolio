"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal, Rocket, Mail, Github, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlitchText from "@/components/ui/GlitchText"
import FloatingParticles from "@/components/ui/FloatingParticles"
import Image from "next/image"

const HeroSection = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer & AI Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks = [
    { icon: Mail, href: "mailto:utkarshharshe06@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/UtkarshRH", label: "GitHub" },
    { icon: Phone, href: "tel:+919022791408", label: "Phone" },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20 sm:pt-24"
    >
      <FloatingParticles />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(107, 114, 128, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107, 114, 128, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 mb-8"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-300 to-gray-400 p-1 shadow-xl shadow-gray-300/25">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/utkarsh-harshe.jpg"
                  alt="Utkarsh Harshe Profile Picture"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 to-transparent" />
              </div>
            </div>
            <motion.div
              className="absolute -inset-4 border border-gray-200/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <GlitchText className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold">
              <span className="text-gray-900">UTKARSH</span>
              <br />
              <span className="text-gray-700">HARSHE</span>
            </GlitchText>
          </motion.div>

          {/* Typed Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-2 text-base sm:text-xl font-mono">
              <Terminal className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">$</span>
              <span className="text-gray-800 text-sm sm:text-xl md:text-2xl lg:text-xl">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-gray-600"
              >
                |
              </motion.span>
            </div>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-mono">
              {">"} Building next-generation web applications with React, Next.js, and AI technologies
              <br />
              {">"} Currently contributing to Ola's Kruti.ai platform
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-700 text-white font-mono px-6 sm:px-8 py-3 border-2 border-amber-500 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 rounded-lg hover:border-amber-600"
            >
              <Rocket className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-gray-600 text-gray-700 hover:bg-gray-50 font-mono px-6 sm:px-8 py-3 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 rounded-lg"
            >
              <Terminal className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 mt-8 mt-10"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-3 border border-gray-300 hover:border-gray-500 transition-all duration-300 hover:bg-gray-50 rounded-lg shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6 text-gray-600 group-hover:text-gray-700 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
