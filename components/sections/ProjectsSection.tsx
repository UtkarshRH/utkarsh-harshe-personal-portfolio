"use client"

import { motion } from "framer-motion"
import SectionHeader from "@/components/ui/SectionHeader"
import ProjectCard from "@/components/ui/ProjectCard"
import { projectsData } from "@/data/projects"

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader title="FEATURED_PROJECTS" />

        <div className="grid gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm dark:shadow-lg">
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
