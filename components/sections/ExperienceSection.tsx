"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "@/components/ui/SectionHeader"

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "TBP CODOT LLP",
      period: "March 2025 – Current",
      location: "Bangalore, KA",
      achievements: [
        "Contributing to Ola's Kruti.ai — AI-powered platform for branded marketing content generation",
        "Frontend development using Next.js for AI-based image and video generation interfaces",
        "Implemented user prompt scheduling system for automated content generation",
        "Achieved 30% improvement in load performance through optimization",
      ],
      gradient: "from-white to-gray-50",
      borderColor: "gray-200",
    },
    {
      title: "Software Developer",
      company: "SmartLeaven Technology",
      period: "Feb 2024 – March 2025",
      location: "Pune, Maharashtra",
      achievements: [
        "Developed dynamic front-end solutions using React.js, enhancing user engagement",
        "Built responsive web applications with JavaScript, HTML, CSS, and Bootstrap",
        "Designed and optimized RESTful APIs using Node.js",
        "Gained expertise in MERN stack development",
      ],
      gradient: "from-gray-50 to-white",
      borderColor: "gray-200",
    },
    {
      title: "UI Designer (Intern)",
      company: "AnkHub Technology",
      period: "Dec 2022 – Jan 2023",
      location: "Nagpur, Maharashtra",
      achievements: [
        "Worked on multiple web projects using HTML, CSS, Bootstrap, and JavaScript",
        "Enhanced user experience and interface aesthetics",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
      gradient: "from-white to-gray-100",
      borderColor: "gray-200",
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader title="WORK_HISTORY" />

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`bg-gradient-to-r ${job.gradient} border border-${job.borderColor} backdrop-blur-sm hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md dark:from-gray-800 dark:to-gray-700 dark:border-gray-700 dark:hover:border-gray-600`}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <CardTitle className="text-xl sm:text-2xl font-mono font-bold text-gray-800 mb-2 dark:text-gray-100">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-lg font-mono font-semibold dark:text-gray-300">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-500 font-mono text-sm dark:text-gray-400">
                      <div className="flex items-center space-x-1 mb-2 sm:mb-0">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-700 font-mono dark:text-gray-300">
                        <Zap className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0 dark:text-gray-400" />
                        <span className="text-sm sm:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
