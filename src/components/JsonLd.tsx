export const JsonLd = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Helmi Hassine",
    jobTitle: "Full Stack Developer",
    url: "https://hassinehelmi.github.io",
    sameAs: [
      "https://github.com/HassineHelmi",
      "https://linkedin.com/in/hassine-helmi"
    ],
    image: "https://hassinehelmi.github.io/profilepicture.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monastir",
      addressCountry: "Tunisia"
    },
    knowsAbout: ["Full Stack Development", "React", "Spring Boot", "Java", "JavaScript", "TypeScript"]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Helmi Hassine - Portfolio",
    url: "https://hassinehelmi.github.io",
    description: "Full Stack Developer from Monastir, Tunisia. Specialized in Java, JavaScript, React, Spring Boot, and modern web technologies.",
    author: {
      "@type": "Person",
      name: "Helmi Hassine"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
};
