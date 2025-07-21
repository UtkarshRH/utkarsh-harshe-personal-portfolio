"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  value: string
  label: string
  icon: LucideIcon
  color: string
  delay?: number
}

const StatCard = ({ value, label, icon: Icon, color, delay = 0 }: StatCardProps) => {
  const colorClasses = {
    blue: "from-blue-500/10 to-blue-600/10 border-blue-400/30 text-blue-400",
    indigo: "from-indigo-500/10 to-indigo-600/10 border-indigo-400/30 text-indigo-400",
    emerald: "from-emerald-500/10 to-emerald-600/10 border-emerald-400/30 text-emerald-400",
    purple: "from-purple-500/10 to-purple-600/10 border-purple-400/30 text-purple-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} backdrop-blur-sm p-4 sm:p-6 text-center hover:border-blue-400/60 transition-all duration-300`}
    >
      <Icon className={`w-8 h-8 ${colorClasses[color as keyof typeof colorClasses].split(" ")[2]} mx-auto mb-2`} />
      <div
        className={`text-2xl sm:text-3xl font-bold ${colorClasses[color as keyof typeof colorClasses].split(" ")[2]} mb-2 font-mono`}
      >
        {value}
      </div>
      <div className="text-slate-400 text-sm font-mono">{label}</div>
    </motion.div>
  )
}

export default StatCard
