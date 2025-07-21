"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"

interface GlitchTextProps {
  children: ReactNode
  className?: string
}

const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className={`${isGlitching ? "animate-pulse" : ""}`}>{children}</div>
      {isGlitching && (
        <>
          <div className="absolute inset-0 text-red-400 opacity-70 translate-x-0.5">{children}</div>
          <div className="absolute inset-0 text-blue-400 opacity-70 -translate-x-0.5">{children}</div>
        </>
      )}
    </div>
  )
}

export default GlitchText
