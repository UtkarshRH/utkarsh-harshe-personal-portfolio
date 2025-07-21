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
}
