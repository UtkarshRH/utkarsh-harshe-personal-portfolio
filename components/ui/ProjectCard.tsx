"use client"

import { motion } from "framer-motion"
import { Globe, Github, CircuitBoard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 backdrop-blur-sm overflow-hidden group hover:border-gray-400 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/10">
      {/* Project Preview */}
      <div
        className={`relative h-48 sm:h-64 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Project Visual */}
        <div className="text-center text-white z-10">
          <div className="text-4xl sm:text-6xl font-mono font-bold mb-4">{project.title}</div>
          <div className="text-lg sm:text-xl opacity-80 font-mono">{project.subtitle}</div>
          <div className="flex justify-center space-x-4 mt-4">
            {project.isLive && <Badge className="bg-gray-600 text-white font-mono">LIVE</Badge>}
            <Badge className="bg-gray-500 text-white font-mono">{project.category}</Badge>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <CardTitle className="text-xl sm:text-2xl text-gray-800 font-mono">{project.title}</CardTitle>
            <CardDescription className="text-gray-600 font-mono mt-2">{project.description}</CardDescription>
          </div>

          <div className="flex space-x-2">
            {project.liveUrl && (
              <Button
                onClick={() => {
                  if(project.liveUrl) {
                  window.open(project?.liveUrl, "_blank")}}}
                size="sm"
                className="bg-gray-600 hover:bg-gray-700 text-white font-mono"
              >
                <Globe className="w-4 h-4 mr-2" />
                LIVE
              </Button>
            )}
            {project.isGithubUrl && <Button
              onClick={() => window.open(project.githubUrl, "_blank")}
              size="sm"
              variant="outline"
              className="border-gray-400 text-gray-600 hover:bg-gray-100 font-mono"
            >
              <Github className="w-4 h-4 mr-2" />
              CODE
            </Button>}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {/* Technologies */}
          <div>
            <h4 className="text-gray-800 font-mono font-semibold mb-3">TECH_STACK:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-gray-200 text-gray-700 font-mono border border-gray-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-gray-800 font-mono font-semibold mb-3">KEY_FEATURES:</h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-700 font-mono text-sm">
                  <CircuitBoard className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
