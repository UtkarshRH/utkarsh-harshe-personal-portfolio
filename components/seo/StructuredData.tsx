const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Utkarsh Rajendra Harshe",
    jobTitle: "Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer experienced in building production applications across dealer management, retail operations, purchase journeys, and AI platforms.",
    url: "https://utkarshharshe.dev",
    sameAs: ["https://github.com/UtkarshRH", "https://linkedin.com/in/utkarsh-r-harshe"],
    worksFor: {
      "@type": "Organization",
      name: "Ola Electric",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "India",
    },
    email: "utkarshharshe06@gmail.com",
    telephone: "+91-9022791408",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Java",
      "Node.js",
      "Python",
      "FastAPI",
      "Full Stack Development",
      "AI Platforms",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export default StructuredData
