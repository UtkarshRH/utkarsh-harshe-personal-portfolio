"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Heart } from "lucide-react"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeader from "@/components/ui/SectionHeader"

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Karmaveer Dadasaheb Kannamwar College of Engineering",
      period: "2019 – 2023",
      location: "Nagpur, Maharashtra",
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Math and Science",
      institution: "Nandalal Patil Kapgate Junior College",
      period: "2017 – 2019",
      location: "Nagpur, Maharashtra",
    },
  ]

  const certifications = [
    "Java Development – Core Java, OOPs, JDBC, Hibernate",
    "UI Designer",
    "React-Js, HTML/CSS/Bootstrap – Frontend fundamentals and responsive design",
  ]

  const hobbies = ["Swimming", "Cricket", "Reading"]
  const languages = ["English", "Hindi", "Marathi"]

  return (
    <section id="education" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-100 relative dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader title="EDUCATION_LOG" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-mono font-bold text-gray-800 mb-6 flex items-center dark:text-gray-100">
              <GraduationCap className="w-8 h-8 text-gray-600 mr-3 dark:text-gray-400" />
              ACADEMIC_RECORDS
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 backdrop-blur-sm p-6 hover:border-gray-400 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md dark:from-gray-800 dark:to-gray-700 dark:border-gray-700 dark:hover:border-gray-600"
                >
                  <CardTitle className="text-xl font-mono font-bold text-gray-800 mb-2 dark:text-gray-100">{edu.degree}</CardTitle>
                  <CardDescription className="text-gray-600 font-mono font-semibold mb-3 dark:text-gray-300">{edu.field}</CardDescription>
                  <p className="text-gray-700 font-mono mb-2 dark:text-gray-300">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 font-mono dark:text-gray-400">
                    <span>{edu.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Extras */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-mono font-bold text-gray-800 mb-6 flex items-center dark:text-gray-100">
              <Award className="w-8 h-8 text-gray-600 mr-3 dark:text-gray-400" />
              CERTIFICATIONS
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 backdrop-blur-sm p-4 hover:border-gray-400 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md dark:from-gray-700 dark:to-gray-800 dark:border-gray-700 dark:hover:border-gray-600"
                >
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-gray-600 flex-shrink-0 dark:text-gray-400" />
                    <span className="text-gray-700 font-mono text-sm dark:text-gray-300">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 backdrop-blur-sm p-6 hover:border-gray-400 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md dark:from-gray-800 dark:to-gray-700 dark:border-gray-700 dark:hover:border-gray-600"
            >
              <CardTitle className="text-xl font-mono font-bold text-gray-800 flex items-center mb-4 dark:text-gray-100">
                <Heart className="w-6 h-6 text-gray-600 mr-2 dark:text-gray-400" />
                PERSONAL_DATA
              </CardTitle>

              <div className="space-y-4">
                <div>
                  <h5 className="text-gray-600 font-mono font-semibold mb-2 dark:text-gray-400">HOBBIES:</h5>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map((hobby) => (
                      <Badge key={hobby} className="bg-gray-200 text-gray-700 font-mono border border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-gray-600 font-mono font-semibold mb-2 dark:text-gray-400">LANGUAGES:</h5>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Badge key={lang} className="bg-gray-100 text-gray-600 font-mono border border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
