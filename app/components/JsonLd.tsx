export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Felipe Goulart",
      jobTitle: "Fullstack Developer",
      url: "https://felipegoulart.dev",
      image: "https://felipegoulart.dev/profile-photo.jpeg",
      email: "ofelipegoulart@gmail.com",
      sameAs: [
        "https://linkedin.com/in/felipe-souza-goulart",
        "https://github.com/ofelipegoulart",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Florianópolis",
        addressRegion: "SC",
        addressCountry: "BR",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}