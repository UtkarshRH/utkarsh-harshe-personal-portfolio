export type ProjectOwnership = "Company Work" | "Personal Project";

export type MockupVariant = "retail-pwa" | "dms" | "call-analytics" | "rate-limiter";

export interface ArchitectureNode {
  label: string;
  sublabel: string;
  layer: "client" | "gateway" | "service" | "data";
}

export interface EngineeringChallenge {
  challenge: string;
  solution: string;
}

export interface CaseStudyProject {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  ownership: ProjectOwnership;
  companyOrContext: string;
  timeframe: string;
  statusLabel: string;
  mockupVariant: MockupVariant;
  overview: string;
  problemAndContext: string;
  roleAndResponsibilities: string[];
  contributions: string[];
  technicalImplementation: string[];
  architectureSummary: string;
  architectureNodes: ArchitectureNode[];
  challenges: EngineeringChallenge[];
  verifiedOutcomes: string[];
  technologies: string[];
  githubUrl?: string;
  confidentialityNote?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  context?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  code: string;
  items: string[];
}
