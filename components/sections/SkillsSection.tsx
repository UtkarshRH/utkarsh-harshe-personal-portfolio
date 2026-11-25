"use client";

import { motion } from "framer-motion";
import {
  Code,
  Wrench,
  Database,
  Atom,
  ArrowRightCircle,
  Paintbrush,
  Server,
  GitBranch,
  Palette,
  Braces,
  Workflow,
  Box,
  Terminal,
  DatabaseZap,
  PawPrint,
  Brain,
  Cloud,
  CreditCard,
  Lock,
  ShieldCheck,
  Layers,
  Activity,
  Bot,
  Sparkles,
  Smartphone,
  FileCode,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "LANGUAGES",
      icon: Code,
      skills: [
        { name: "JavaScript", icon: Braces },
        { name: "TypeScript", icon: Braces },
        { name: "Java", icon: Code },
        { name: "Python", icon: Terminal },
        { name: "SQL", icon: Database },
      ],
      iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
      title: "FRONTEND",
      icon: Atom,
      skills: [
        { name: "React.js", icon: Atom },
        { name: "Next.js", icon: ArrowRightCircle },
        { name: "Redux Toolkit", icon: Workflow },
        { name: "Zustand", icon: PawPrint },
        { name: "TanStack Query", icon: DatabaseZap },
        { name: "React Hook Form", icon: FileCode },
        { name: "PWA", icon: Smartphone },
        { name: "HTML5", icon: Code },
        { name: "CSS3", icon: Palette },
        { name: "Tailwind CSS", icon: Paintbrush },
        { name: "Sass", icon: Palette },
        { name: "Radix UI", icon: Layers },
      ],
      iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
      title: "BACKEND",
      icon: Server,
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Server },
        { name: "Java", icon: Code },
        { name: "FastAPI", icon: Server },
        { name: "REST APIs", icon: Workflow },
        { name: "JWT", icon: Lock },
        { name: "Authentication", icon: ShieldCheck },
        { name: "RBAC", icon: ShieldCheck },
      ],
      iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
      title: "DATABASES",
      icon: Database,
      skills: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Redis", icon: DatabaseZap },
      ],
      iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
      title: "CLOUD & INTEGRATIONS",
      icon: Cloud,
      skills: [
        { name: "AWS S3", icon: Cloud },
        { name: "Vertex AI", icon: Brain },
        { name: "Razorpay", icon: CreditCard },
        { name: "PayU", icon: CreditCard },
        { name: "UPI", icon: Smartphone },
      ],
      iconColor: "text-gray-600 dark:text-gray-400",
    },
    {
      title: "DEVELOPER & AI TOOLS",
      icon: Wrench,
      skills: [
        { name: "Cursor", icon: Sparkles },
        { name: "OpenAI Codex", icon: Bot },
        { name: "Grok", icon: Brain },
        { name: "OpenRouter", icon: Workflow },
        { name: "DeepSeek", icon: Brain },
        { name: "VS Code", icon: FileCode },
        { name: "Harness", icon: Workflow },
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: GitBranch },
        { name: "Docker", icon: Box },
        { name: "GitHub Actions", icon: Workflow },
        { name: "Postman", icon: Wrench },
        { name: "Jira", icon: Layers },
        { name: "Flyway", icon: DatabaseZap },
        { name: "OpenAPI", icon: FileCode },
        { name: "CubeAPM", icon: Activity },
      ],
      iconColor: "text-gray-600 dark:text-gray-400",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative dark:from-gray-900 dark:to-gray-800"
    >
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
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600">
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-mono font-bold text-gray-800 dark:text-gray-100">
                    {category.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gray-600 mt-1 dark:bg-gray-400"></div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon; // Assign the icon component to a variable
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative p-4 bg-white border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 rounded-lg text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:shadow-lg">
                        {/* Skill Icon */}
                        <SkillIcon className="w-8 h-8 text-gray-600 mx-auto mb-2 dark:text-gray-400" />

                        {/* Skill Name */}
                        <div className="text-gray-700 font-mono text-sm font-medium mb-2 dark:text-gray-300">
                          {skill.name}
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex justify-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full dark:bg-gray-400"></div>
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full dark:bg-gray-400"></div>
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full dark:bg-gray-400"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full dark:bg-gray-600"></div>
                          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                        </div>

                        {/* Hover Effect Line */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full transition-all duration-300 dark:bg-gray-400"></div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
