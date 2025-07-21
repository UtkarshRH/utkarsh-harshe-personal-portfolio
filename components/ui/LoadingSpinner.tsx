"use client"

import { motion } from "framer-motion"

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

export default LoadingSpinner
