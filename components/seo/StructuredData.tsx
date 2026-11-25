import React from "react";
import { SITE_CONFIG } from "@/data/portfolio";

const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.fullName,
    alternateName: SITE_CONFIG.name,
    jobTitle: "SDE I",
    description: SITE_CONFIG.supportingIntro,
    url: SITE_CONFIG.siteUrl,
    sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "Ola Electric",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "KDK College of Engineering",
    },
    email: `mailto:${SITE_CONFIG.email}`,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Java",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
