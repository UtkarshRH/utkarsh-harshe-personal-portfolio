import type { CaseStudyProject, ExperienceItem, SkillGroup } from "@/types/project";

export const SITE_CONFIG = {
  name: "Utkarsh Harshe",
  wordmark: "UTKARSH HARSHE",
  fullName: "Utkarsh Rajendra Harshe",
  role: "SDE I at Ola Electric",
  headline: "Engineering digital experiences that matter.",
  supportingIntro: "Software Engineer focused on frontend and full-stack product development.",
  location: "Bengaluru, India",
  email: "utkarshharshe06@gmail.com",
  github: "https://github.com/UtkarshRH",
  linkedin: "https://www.linkedin.com/in/utkarsh-r-harshe/",
  resumePath: "/Utkarsh_Harshe.pdf",
  siteUrl: "https://utkarshharshe-inky.vercel.app",
};

export const ABOUT_CONTENT = {
  eyebrow: "01 / ABOUT",
  title: "Building resilient software for real-world operational scale.",
  paragraphs: [
    "I am a Full Stack Software Engineer currently working as an SDE I at Ola Electric in Bengaluru, where I build and maintain production web applications across dealer operations, retail fulfilment, customer purchase journeys, and internal AI analytics platforms.",
    "My day-to-day engineering spans frontend architecture with React, Next.js, and TypeScript alongside backend service integration in Java, Node.js, and Python (FastAPI). I enjoy working close to the product—translating complex operational rules like VIN allocation, multi-store inventory transfers, payment reconciliation, and role-based workflows into clear, dependable interfaces.",
    "Beyond shipping features, I spend time investigating production edge cases, fixing root-cause data and pagination bottlenecks, improving release reliability, and automating repetitive engineering checks such as internal pull-request review workflows.",
  ],
  highlights: [
    {
      label: "Primary Focus",
      value: "Frontend Architecture & Full-Stack Product Engineering",
    },
    {
      label: "Core Domains",
      value: "Dealer Operations, Retail PWAs, Payments & AI Tooling",
    },
    {
      label: "Production Habits",
      value: "Root-Cause Debugging, Offline Resilience & Observability",
    },
  ],
};

export const SELECTED_PROJECTS: CaseStudyProject[] = [
  {
    slug: "ola-retail-app",
    index: "01",
    title: "Ola Retail App",
    subtitle: "Production Progressive Web App for Retail & Fulfilment Operations",
    category: "Progressive Web App",
    ownership: "Company Work",
    companyOrContext: "Ola Electric",
    timeframe: "Dec 2025 – Present",
    statusLabel: "Production Application",
    mockupVariant: "retail-pwa",
    overview:
      "A production Progressive Web App (PWA) supporting store and hub operations across vehicle fulfilment, logistics, registration, quality checks, dealer administration, and finance.",
    problemAndContext:
      "Retail and logistics teams operate across mobile devices and embedded Android WebViews in varied network environments. Operational tasks—from truck inwarding and VIN scanning to Registration Hub bulk uploads and quality inspection audits—needed a single installable, reliable web application with strict role access and zero lost draft work during inspections.",
    roleAndResponsibilities: [
      "Built and shipped operational workflows across vehicle fulfilment, logistics, registration, quality control, dealer administration, and finance.",
      "Implemented client-side persistence, PWA release management, role-based access integration, and production observability.",
      "Collaborated across backend Java services, Android WebView integrations, and product operations teams.",
    ],
    contributions: [
      "Built Ola Retail App as an installable Progressive Web App covering fulfilment, logistics, registration, quality checks, and dealer finance.",
      "Implemented a forced-update flow that detects new deployments and prompts users to update to the latest release.",
      "Built truck and VIN scanning, outwarding, delivery notes, document submission, and delivery OTP verification workflows.",
      "Developed Registration Hub modules for task search, document management, bulk uploads, and CSV exports.",
      "Implemented QC audit flows with Dexie-based IndexedDB draft autosave, Part Master features, and IQC correction tools.",
      "Built dealer finance workflows including e-voucher PDFs, virtual accounts, statements, ledger entries, and UTR-based sale-order lookup.",
      "Integrated Casbin role-based access control, Partner Mode authentication, AWS S3 media/collateral flows, Android WebView bridges, and CubeAPM monitoring.",
    ],
    technicalImplementation: [
      "Structured modular Next.js and React feature views with TypeScript, Zustand for UI/session state, and TanStack Query for server synchronization and caching.",
      "Used Dexie (IndexedDB wrapper) inside Quality Control audit screens to autosave multi-field inspection drafts locally and recover state seamlessly across refreshes or intermittent connectivity.",
      "Implemented a release-version check and forced-update gate at the PWA shell level so field operators do not submit stale form schemas against updated Java REST endpoints.",
      "Integrated signed AWS S3 upload/download flows for media, collateral, and registration documents inside both browser and Android WebView contexts.",
    ],
    architectureSummary:
      "The PWA client coordinates local IndexedDB persistence (Dexie), TanStack Query state, and Casbin permission guards over Java REST APIs, AWS S3 document storage, and CubeAPM telemetry.",
    architectureNodes: [
      {
        label: "PWA / Android WebView",
        sublabel: "Next.js, React, TypeScript, Forced Update Gate",
        layer: "client",
      },
      {
        label: "State & Offline Layer",
        sublabel: "Zustand, TanStack Query, Dexie (IndexedDB)",
        layer: "gateway",
      },
      {
        label: "Application Services",
        sublabel: "Java REST APIs, Casbin RBAC, Partner Auth",
        layer: "service",
      },
      {
        label: "Storage & Telemetry",
        sublabel: "AWS S3 Collateral & Docs, CubeAPM Monitoring",
        layer: "data",
      },
    ],
    challenges: [
      {
        challenge: "Operators losing long quality-control inspection inputs when switching apps or encountering unstable store networks.",
        solution:
          "Backed QC audit forms with Dexie-based IndexedDB draft autosave and Part Master / IQC correction tools so inspection state persists locally until final submission.",
      },
      {
        challenge: "Field devices continuing to run cached PWA bundles after breaking backend contract or workflow updates.",
        solution:
          "Built a forced-update flow that checks active release versions and prompts users to refresh before continuing operational workflows.",
      },
      {
        challenge: "Separating operational visibility across internal staff, store roles, and external dealer partners.",
        solution:
          "Integrated Casbin role-based access rules alongside Partner Mode authentication to enforce module- and action-level boundaries.",
      },
    ],
    verifiedOutcomes: [
      "Shipped end-to-end operational workflows across fulfilment, Registration Hub, QC audits, and dealer finance in production.",
      "Delivered reliable offline draft recovery for QC audits and controlled PWA release adoption via forced updates.",
      "Enabled unified operational monitoring and document/search workflows across browser and Android WebView environments.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PWA",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Java",
      "REST APIs",
      "Dexie",
      "AWS S3",
      "CubeAPM",
    ],
    confidentialityNote:
      "UI preview below is an anonymised reconstruction of the operational interface. Internal endpoints, partner data, and proprietary business metrics are omitted.",
  },
  {
    slug: "dealer-management-system",
    index: "02",
    title: "Dealer Management System",
    subtitle: "End-to-End Dealer Operations, Inventory & Finance Platform",
    category: "Enterprise Web Platform",
    ownership: "Company Work",
    companyOrContext: "Ola Electric",
    timeframe: "Dec 2025 – Present",
    statusLabel: "Production Application",
    mockupVariant: "dms",
    overview:
      "A comprehensive Dealer Management System (DMS) handling vehicle catalogues, customer orders, multi-store inventory, VIN allocation, payments, insurance, registration, delivery, and dealer finance.",
    problemAndContext:
      "Dealership teams manage high-value vehicle inventory and multi-step customer deliveries across stores. Workflows span onboarding, OTP verification, VIN reservation and inter-store transfers, truck inwarding, insurance/OCR verification, PayU UPI Intent, and Razorpay virtual accounts—requiring accurate frontend state synchronized with transactional Java services.",
    roleAndResponsibilities: [
      "Developed full-stack dealer workflows spanning frontend screens in Next.js/TypeScript and REST APIs in Java backed by MySQL and Redis.",
      "Investigated and resolved production data bugs in VIN matching, pagination, authentication, and dealer finance reconciliation.",
      "Built onboarding, multi-store inventory operations, payment integrations, and operational reporting endpoints.",
    ],
    contributions: [
      "Built dealer workflows covering vehicle catalogue, customer orders, inventory, VIN mapping, payments, insurance, registration, and delivery.",
      "Implemented dealer onboarding and OTP authentication including OTP recovery, duplicate-email validation, and customer-assisted ordering.",
      "Fixed a production VIN matching defect where matching only scanned the currently loaded inventory page by extending it to complete store inventory via a backend projection endpoint.",
      "Built multi-store inventory operations for VIN reservation, transfers, and allocation alongside truck inwarding and quality inspection.",
      "Integrated insurance, OCR, PayU UPI Intent, and registration verification; enhanced dealer finance with GST validation, invoice retrieval, ledger entries, and Razorpay virtual accounts.",
      "Developed Java REST APIs for dealer insights, inventory, VIN transfers, payment accounts, invoices, and operational reporting.",
    ],
    technicalImplementation: [
      "Designed a dedicated backend projection endpoint in Java returning lightweight VIN/store inventory records with pagination support so client matching covers the entire store instead of only the active table page.",
      "Implemented multi-step dealer onboarding with OTP verification, recovery flows, and pre-submission duplicate-email checks.",
      "Integrated PayU UPI Intent for order payments and Razorpay virtual account / ledger retrieval with GST validation on the finance dashboard.",
    ],
    architectureSummary:
      "A Next.js and TypeScript dealer portal communicating with Java REST services, MySQL transactional tables, Redis caching, and external payment/OCR integrations.",
    architectureNodes: [
      {
        label: "Dealer Web Portal",
        sublabel: "Next.js, React, TypeScript, Tailwind CSS",
        layer: "client",
      },
      {
        label: "Auth & Onboarding",
        sublabel: "OTP Auth, Recovery, Duplicate-Email Validation",
        layer: "gateway",
      },
      {
        label: "Java REST Services",
        sublabel: "VIN Projection API, Transfers, Invoices, Insights",
        layer: "service",
      },
      {
        label: "Persistence & Payments",
        sublabel: "MySQL, Redis, PayU UPI Intent, Razorpay, OCR",
        layer: "data",
      },
    ],
    challenges: [
      {
        challenge: "VIN matching only evaluated vehicles loaded on the current paginated UI page, causing false misses for valid store inventory.",
        solution:
          "Built a backend projection endpoint covering the complete store inventory with paginated record retrieval and wired the matching flow to query the full projection.",
      },
      {
        challenge: "Dealer finance workflows required consistent validation across GST checks, invoices, virtual accounts, and ledger entries.",
        solution:
          "Added structured GST validation, unified invoice retrieval, ledger tracking, and Razorpay virtual account integration across the finance UI and Java APIs.",
      },
    ],
    verifiedOutcomes: [
      "Resolved page-scoped VIN matching limitations across complete store inventories in production.",
      "Delivered multi-store VIN transfers, truck inwarding, PayU UPI Intent, and dealer finance modules end-to-end.",
      "Hardened dealer onboarding and customer-assisted ordering flows with OTP recovery and duplicate-email validation.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "MySQL",
      "Redis",
      "REST APIs",
      "Razorpay",
      "PayU",
    ],
    confidentialityNote:
      "Visual representation uses anonymised VIN codes and synthetic store entries. Internal dealer records and private API specifications are excluded.",
  },
  {
    slug: "ai-call-analytics-platform",
    index: "03",
    title: "AI Call Analytics Platform",
    subtitle: "Full-Stack Voice AI, Call Intelligence & Natural Language Analyst Platform",
    category: "Full-Stack AI Platform",
    ownership: "Company Work",
    companyOrContext: "Ola Electric",
    timeframe: "Dec 2025 – Present",
    statusLabel: "Internal Production Platform",
    mockupVariant: "call-analytics",
    overview:
      "An internal full-stack platform for sales and service call intelligence—combining call transcription, audio playback, campaign and voice-agent management, operational dashboards, and a Vertex AI-powered Data Analyst interface.",
    problemAndContext:
      "Sales and service operations teams needed a centralized system to search call recordings, inspect transcripts, monitor exception rates, manage outbound voice-agent campaigns, and query operational call data without writing database queries—while enforcing role-based access and audit logging.",
    roleAndResponsibilities: [
      "Built full-stack capabilities across the React frontend and Python (FastAPI + Pydantic) backend backed by MongoDB, Redis, AWS S3, and Google Vertex AI.",
      "Implemented voice-agent and campaign management, Data Analyst chat sessions, dashboard views, RBAC, and audit logging.",
    ],
    contributions: [
      "Developed analytics dashboards, hierarchical performance filters, and agent/campaign management workflows.",
      "Integrated call transcription, audio streaming and playback via signed AWS S3 URLs, plus Excel, funnel, and lead-journey exports.",
      "Built voice-agent and campaign workflows covering configuration, retries, failed-task recovery, call search, and purchase-intent APIs.",
      "Developed Data Analyst chat/session features alongside agent, prompt, model, and tool workflows using Google Vertex AI.",
      "Contributed to Lead Management migration, Exception Dashboard APIs and UI, sales dashboards, leaderboards, and weekly summaries.",
      "Implemented role-based access control, audit logging, authentication improvements, and reliability enhancements.",
    ],
    technicalImplementation: [
      "Built FastAPI endpoints with Pydantic schemas for call search, purchase-intent retrieval, campaign retries, failed-task recovery, and export generation.",
      "Streamed call audio securely using short-lived signed AWS S3 URLs without exposing raw bucket paths to the client.",
      "Implemented persistent Data Analyst chat sessions and Vertex AI tool/prompt workflows so business teams can explore call insights interactively.",
    ],
    architectureSummary:
      "A React client communicating with FastAPI services, orchestrating MongoDB call records, Redis state, signed S3 audio streams, and Google Vertex AI workflows.",
    architectureNodes: [
      {
        label: "Analytics & Analyst UI",
        sublabel: "React Dashboards, Audio Player, Chat Sessions",
        layer: "client",
      },
      {
        label: "Auth & Access Layer",
        sublabel: "Role-Based Access Control, Audit Logging",
        layer: "gateway",
      },
      {
        label: "FastAPI Backend",
        sublabel: "Python, Pydantic, Campaign Engine, Exports",
        layer: "service",
      },
      {
        label: "AI & Storage Layer",
        sublabel: "Google Vertex AI, MongoDB, Redis, Signed S3 URLs",
        layer: "data",
      },
    ],
    challenges: [
      {
        challenge: "Long-running voice campaigns and AI workflows are vulnerable to transient upstream failures and incomplete task states.",
        solution:
          "Implemented structured retry mechanisms, failed-task recovery workflows, and reliability improvements across campaign orchestration APIs.",
      },
      {
        challenge: "Providing secure playback of sensitive customer call audio alongside granular organizational access.",
        solution:
          "Served call audio strictly through signed AWS S3 URLs gated by role-based access checks and recorded privileged actions via audit logging.",
      },
    ],
    verifiedOutcomes: [
      "Unified call search, transcription review, Exception & Sales dashboards, and Lead Management in one full-stack application.",
      "Delivered Vertex AI Data Analyst chat sessions and self-service Excel, funnel, and lead-journey exports.",
      "Strengthened platform governance with RBAC, audit logging, and authentication hardening.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Pydantic",
      "React",
      "MongoDB",
      "Redis",
      "AWS S3",
      "Google Vertex AI",
    ],
    confidentialityNote:
      "Interface preview depicts anonymised placeholder analytics and synthetic call categories to protect internal company data.",
  },
  {
    slug: "rate-limiter-service",
    index: "04",
    title: "Rate Limiter Service",
    subtitle: "Distributed API Throttling Middleware with Token Bucket & Leaky Bucket",
    category: "Backend Infrastructure",
    ownership: "Personal Project",
    companyOrContext: "Independent Systems Engineering",
    timeframe: "2026",
    statusLabel: "Architecture Case Study",
    mockupVariant: "rate-limiter",
    overview:
      "A TypeScript and Fastify rate-limiting service backed by Redis that protects API endpoints using configurable Token Bucket and Leaky Bucket algorithms.",
    problemAndContext:
      "In multi-instance Node.js services, in-memory rate limiters fail to coordinate across horizontally scaled workers, and naive read-modify-write Redis counters suffer from race conditions under concurrent bursts. Different endpoints also require different traffic shapes—some tolerate short controlled bursts while others require steady pacing.",
    roleAndResponsibilities: [
      "Designed and implemented the service architecture, algorithm abstractions, Fastify plugin integration, and Redis atomic state transitions.",
      "Modeled both Token Bucket and Leaky Bucket policies behind a shared TypeScript interface.",
    ],
    contributions: [
      "Implemented a Token Bucket engine supporting configurable bucket capacity and steady token refill rates for burst-tolerant routes.",
      "Implemented a Leaky Bucket engine enforcing constant-rate outflow smoothing for downstream-sensitive endpoints.",
      "Encapsulated Redis state reads, timestamp deltas, and quota updates in atomic Lua scripts to prevent concurrent race conditions.",
      "Integrated the limiter into Fastify's `onRequest` hook lifecycle with per-route policy resolution and standard `X-RateLimit-*` and `Retry-After` headers.",
    ],
    technicalImplementation: [
      "Built a unified `RateLimiterStrategy` contract in TypeScript so routes can switch between Token Bucket and Leaky Bucket without changing middleware consumers.",
      "Executed Redis `EVALSHA` Lua scripts keyed by route + client identifier (API key, user ID, or IP) to compute elapsed time, refill or leak state, and return remaining quota in a single round-trip.",
      "Structured fail-open vs fail-closed fallback options and clean error responses (`429 Too Many Requests`) so Redis connectivity blips are handled predictably.",
    ],
    architectureSummary:
      "Fastify `onRequest` middleware resolves route policies and executes atomic Redis Lua scripts implementing Token Bucket or Leaky Bucket state before forwarding to handlers.",
    architectureNodes: [
      {
        label: "Incoming API Traffic",
        sublabel: "Client IP, API Key, or Authenticated User ID",
        layer: "client",
      },
      {
        label: "Fastify onRequest Hook",
        sublabel: "Policy Resolver & Header Injector (429 / Retry-After)",
        layer: "gateway",
      },
      {
        label: "Algorithm Strategy",
        sublabel: "TypeScript Token Bucket & Leaky Bucket Engines",
        layer: "service",
      },
      {
        label: "Redis Atomic Store",
        sublabel: "Lua Script State Evaluation & TTL Cleanup",
        layer: "data",
      },
    ],
    challenges: [
      {
        challenge: "Concurrent requests hitting the same key can read stale token counts if `GET` and `SET` are issued as separate Redis commands.",
        solution:
          "Consolidated timestamp evaluation, token/water-level calculation, and TTL updates inside atomic Redis Lua scripts executed in one round-trip.",
      },
      {
        challenge: "Burst-friendly user endpoints and strict downstream webhook/API routes need fundamentally different throttling behavior.",
        solution:
          "Supported both Token Bucket (burst capacity with sustained refill) and Leaky Bucket (constant-rate drain) under a single Fastify policy configuration.",
      },
    ],
    verifiedOutcomes: [
      "Clean, strongly typed Fastify middleware supporting per-route Token Bucket and Leaky Bucket rate policies.",
      "Race-condition-free distributed quota accounting across multiple Fastify instances via atomic Redis Lua scripts.",
      "Standardized HTTP 429 responses with `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, and `Retry-After` headers.",
    ],
    technologies: [
      "TypeScript",
      "Fastify",
      "Redis",
      "Token Bucket",
      "Leaky Bucket",
      "Lua Scripting",
      "Node.js",
    ],
    githubUrl: "https://github.com/UtkarshRH",
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    company: "Ola Electric",
    role: "SDE I",
    period: "December 2025 – Present",
    location: "Bengaluru, India",
    context: "Full-time • Dealer Operations, Retail PWA, Purchase Journeys & AI Platforms",
    responsibilities: [
      "Develop production features across the Dealer Management System (DMS), Ola Retail App (PWA), and customer purchase workflows using React, Next.js, and TypeScript.",
      "Build and integrate Java REST APIs for inventory, VIN transfers, dealer insights, invoices, payment accounts, and operational reporting.",
      "Contribute to dealer workflows spanning vehicle fulfilment, registration, payments, inventory, and dealer finance; investigate production issues and implement root-cause fixes.",
      "Built an internal Pull Request Review Bot that checks PRs every 30 minutes, summarizes changes, flags issues, posts comments, emails owners, and supports approval when no blockers are found.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Java",
      "Node.js",
      "FastAPI",
      "MySQL",
      "Redis",
      "PostgreSQL",
      "AWS S3",
      "Razorpay",
      "PayU",
    ],
  },
  {
    company: "TBP CODOT LLP",
    role: "Full Stack Developer",
    period: "March 2025 – November 2025",
    location: "Bengaluru, India",
    context: "Vendor at Ola Krutrim",
    responsibilities: [
      "Developed React, JavaScript, and TypeScript features, reusable UI components, and responsive application workflows.",
      "Integrated REST APIs, managed frontend state, and resolved application issues in collaboration with backend and product teams.",
    ],
    technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "REST APIs"],
  },
  {
    company: "SmartLeaven Technology",
    role: "Software Developer",
    period: "February 2024 – March 2025",
    location: "Pune, India",
    context: "Full-time • Web Applications",
    responsibilities: [
      "Built web application components using JavaScript and React, including responsive interfaces and form validations.",
      "Integrated REST APIs, debugged application issues, and delivered feature enhancements with the development team.",
    ],
    technologies: ["JavaScript", "React.js", "HTML5", "CSS3", "Java", "SQL", "REST APIs"],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    code: "01",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Redux", "Zustand", "Tailwind CSS"],
  },
  {
    category: "Backend",
    code: "02",
    items: ["Node.js", "Express", "Java", "Python", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    code: "03",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & Integrations",
    code: "04",
    items: ["AWS S3", "Razorpay", "PayU", "Vertex AI"],
  },
  {
    category: "Tools",
    code: "05",
    items: ["Git", "GitHub", "Docker", "GitHub Actions", "Postman"],
  },
];

export const EDUCATION_RECORD = {
  degree: "Bachelor of Engineering",
  field: "Computer Science and Engineering",
  institution: "KDK College of Engineering",
  graduationYear: "2023",
  period: "2019 – 2023",
  location: "Nagpur, India",
  training: {
    title: "Java Development Diploma",
    provider: "VibrantMinds Technologies Pvt. Ltd.",
    topics: "Core Java, OOPs, JDBC, Hibernate, Spring, REST APIs, and MySQL",
  },
};

export function getProjectBySlug(slug: string): CaseStudyProject | undefined {
  return SELECTED_PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: CaseStudyProject | null;
  next: CaseStudyProject | null;
} {
  const index = SELECTED_PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? SELECTED_PROJECTS[index - 1] : null,
    next: index < SELECTED_PROJECTS.length - 1 ? SELECTED_PROJECTS[index + 1] : null,
  };
}
