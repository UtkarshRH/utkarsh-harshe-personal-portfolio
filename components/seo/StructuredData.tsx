const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Utkarsh Rajendra Harshe",
    jobTitle: "SDE 1",
    description: "Experienced SDE 1 specializing in React, Next.js, Node.js, and AI engineering.",
    url: "https://utkarshharshe.dev",
    sameAs: ["https://github.com/UtkarshRH", "https://linkedin.com/in/utkarsh-r-harshe"],
    worksFor: {
      "@type": "Organization",
      name: "Ola",
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
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "AI Development",
      "Web Development",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export default StructuredData
