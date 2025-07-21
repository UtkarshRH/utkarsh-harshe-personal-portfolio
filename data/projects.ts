export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  features: string[]
  liveUrl: string | null
  githubUrl: string
  isLive: boolean
  category: string
  gradient: string
  isGithubUrl: boolean,
}

export const projectsData: Project[] = [
  {
    id: "kruti-ai",
    title: "Kruti.ai",
    subtitle: "by Ola",
    description:
      "AI-powered content creation platform enabling users to generate high-quality marketing creatives using natural language prompts",
    technologies: ["Next.js", "Tailwind CSS", "Zustand", "REST APIs", "PWA"],
    features: [
      "AI-based image and video generation modules",
      "Prompt scheduling system for automated content generation",
      "PWA integration with Ola app ecosystem",
      "Real-time content generation and management",
    ],
    liveUrl: "https://kruti.ai",
    githubUrl: "",
    isLive: true,
    isGithubUrl: false, 
    category: "AI Platform",
    gradient: "from-gray-500 to-gray-600",
  },
  {
    id: "fluemen-iot",
    title: "Fluemen-Ita IoT",
    subtitle: "Industrial IoT Dashboard",
    description:
      "Real-time web application for monitoring and analyzing injection molding machine data, enhancing operational efficiency",
    technologies: ["React", "Node.js", "MongoDB", "Golain"],
    features: [
      "Real-time machine monitoring dashboards",
      "Interactive performance graphs and analytics",
      "Automated alert systems for maintenance",
      "Data visualization and trend analysis",
    ],
    liveUrl: "",
    githubUrl: "",
    isLive: false,
    isGithubUrl: false,
    category: "IoT Platform",
    gradient: "from-gray-400 to-gray-500",
  },
  {
    id: "videostream",
    title: "VideoStream Platform",
    subtitle: "Scalable Video Backend",
    description:
      "Engineered backend for a scalable video streaming platform with comprehensive user management and subscription system",
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    features: [
      "JWT authentication with refresh tokens",
      "Video upload, storage, and streaming",
      "Subscription and channel management",
      "Interactive comment system",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/UtkarshRH/videotube-complete-backend",
    isLive: false,
    isGithubUrl: true,
    category: "Backend API",
    gradient: "from-gray-600 to-gray-700",
  },
]
