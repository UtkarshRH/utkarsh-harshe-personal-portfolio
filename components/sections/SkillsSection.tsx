"use client"

import { motion } from "framer-motion"
import {
  Code,
  Wrench,
  Database,
  Atom,
  ArrowRightCircle,
  Paintbrush,
  Server,
  GitBranch,
  MessageSquare,
  ClipboardList,
  Palette,
  Braces,
} from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "LANGUAGES",
      icon: Code,
      skills: [
        { name: "HTML", icon: Code },
        { name: "CSS", icon: Palette },
        { name: "JavaScript", icon: Braces },
        { name: "Java", icon: Code }, // Using generic Code for Java
      ],
      iconColor: "text-gray-600",
    },
    {
      title: "FRAMEWORKS",
      icon: Wrench,
      skills: [
        { name: "React.js", icon: Atom },
        { name: "Next.js", icon: ArrowRightCircle },
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Server },
        { name: "Tailwind CSS", icon: Paintbrush },
      ],
      iconColor: "text-gray-600",
    },
    {
      title: "DATABASES & TOOLS",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "SQL", icon: Database },
        { name: "Git", icon: GitBranch },
        { name: "VS Code", icon: Code }, // Using generic Code for VS Code
        { name: "Postman", icon: MessageSquare },
        { name: "Jira", icon: ClipboardList },
      ],
      iconColor: "text-gray-600",
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader title="TECH_ARSENAL" />

        <div className="max-w-4xl mx-auto space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg">
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-mono font-bold text-gray-800">{category.title}</h3>
                  <div className="w-16 h-0.5 bg-gray-600 mt-1"></div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon // Assign the icon component to a variable
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative p-4 bg-white border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 rounded-lg text-center">
                        {/* Skill Icon */}
                        <SkillIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />

                        {/* Skill Name */}
                        <div className="text-gray-700 font-mono text-sm font-medium mb-2">{skill.name}</div>

                        {/* Progress Indicator */}
                        <div className="flex justify-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                        </div>

                        {/* Hover Effect Line */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full transition-all duration-300"></div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
