export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rafael Felipe",
  jobTitle: "QA Engineer",
  description: "Analista de QA Júnior especializado em testes automatizados com Cypress e Selenium",
  url: "https://github.com/rafarfelipe",
  email: "mailto:rafarfelipe91@gmail.com",
  telephone: "+55-13-99117-5828",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Praia Grande",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [
    "https://linkedin.com/in/rafaelrfelipe/",
    "https://github.com/rafarfelipe",
  ],
  skills: ["Cypress", "Selenium", "API Testing", "BDD", "Postman", "Java", "JavaScript", "SQL"],
  hasOccupation: {
    "@type": "Occupation",
    name: "QA Engineer",
    occupationLocation: {
      "@type": "Country",
      name: "Brazil",
    },
  },
};