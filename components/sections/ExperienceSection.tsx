"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Zap, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "@/components/ui/SectionHeader"

interface SubRole {
  title: string
  period: string
  achievements: string[]
}

interface Experience {
  title: string
  company: string
  period: string
  location: string
  achievements?: string[]
  roles?: SubRole[]
  gradient: string
  borderColor: string
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Software Development Engineer I",
      company: "Ola Electric",
      period: "Dec 2025 – Present",
      location: "Bangalore, India",
      achievements: [
        "Develop production features across DMS, Ola Retail App and customer purchase workflows using React, Next.js and TypeScript.",
        "Build and integrate Java REST APIs for inventory, VIN transfers, dealer insights, invoices, payment accounts and operational reporting.",
        "Contribute to dealer workflows spanning vehicle fulfilment, registration, payments, inventory and dealer finance; investigate production issues and implement root-cause fixes.",
        "Built an internal Pull Request Review Bot that checks PRs every 30 minutes, summarizes changes, flags issues, posts comments, emails owners and supports approval when no blockers are found."
      ],
      gradient: "from-white to-gray-50",
      borderColor: "gray-200",
    },
    {
      title: "Full Stack Developer (Vendor at Ola Krutrim)",
      company: "TBP CODOT LLP",
      period: "Mar 2025 – Nov 2025",
      location: "Bangalore, India",
      achievements: [
        "Developed React, JavaScript and TypeScript features, reusable UI components and responsive application workflows.",
        "Integrated REST APIs, managed frontend state and resolved application issues in collaboration with backend and product teams."
      ],
      gradient: "from-gray-50 to-white",
      borderColor: "gray-200",
    },
    {
      title: "Software Developer",
      company: "SmartLeaven Technology",
      period: "Feb 2024 – Mar 2025",
      location: "Pune, India",
      achievements: [
        "Built web application components using JavaScript and React, including responsive interfaces and form validations.",
        "Integrated REST APIs, debugged application issues and delivered feature enhancements with the development team."
      ],
      gradient: "from-white to-gray-100",
      borderColor: "gray-200",
    }
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
              whileHover={{ scale: 1.01 }}
            >
              <Card
                className={`bg-gradient-to-r ${job.gradient} border border-${job.borderColor} backdrop-blur-sm hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md dark:from-gray-800 dark:to-gray-700 dark:border-gray-700 dark:hover:border-gray-600`}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <div className="mb-4 lg:mb-0">
                      <CardTitle className="text-xl sm:text-2xl font-mono font-bold text-gray-800 mb-2 dark:text-gray-100 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
                  {job.roles ? (
                    <div className="space-y-6 mt-2 pl-2 border-l-2 border-gray-200 dark:border-gray-700 ml-2">
                      {job.roles.map((role, roleIdx) => (
                        <div key={roleIdx} className="space-y-3 relative">
                          <div className="absolute -left-[15px] top-1.5 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="text-md sm:text-lg font-mono font-bold text-gray-700 dark:text-gray-200">
                              {role.title}
                            </h4>
                            <span className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {role.period}
                            </span>
                          </div>
                          <ul className="space-y-2.5">
                            {role.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start space-x-3 text-gray-700 font-mono dark:text-gray-300">
                                <Zap className="w-4.5 h-4.5 text-gray-500 mt-0.5 flex-shrink-0 dark:text-gray-400" />
                                <span className="text-sm sm:text-base">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {job.achievements?.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3 text-gray-700 font-mono dark:text-gray-300">
                          <Zap className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0 dark:text-gray-400" />
                          <span className="text-sm sm:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
