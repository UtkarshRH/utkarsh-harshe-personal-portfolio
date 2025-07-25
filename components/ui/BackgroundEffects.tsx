"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"
import { useState } from "react"

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()".split("")
    const fontSize = 10
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const draw = () => {
      const currentTheme = theme === "system" ? systemTheme : theme

      if (currentTheme === "dark") {
        ctx.fillStyle = "rgba(15, 23, 42, 0.8)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#60a5fa" // lighter blue for dark mode
      } else {
        ctx.fillStyle = "rgba(15, 23, 42, 0.04)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#3b82f6" // original blue for light mode
      }

      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [mounted, theme, systemTheme])

  return <canvas ref={canvasRef} className="fixed inset-0 opacity-5 pointer-events-none z-0" />
}

export default BackgroundEffects
