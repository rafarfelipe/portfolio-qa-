"use client";

const certifications = [
  {
    badge: "🏆",
    title: "Bootcamp QA Automation – QAZANDO",
    school: "QAZANDO",
    year: "2025",
  },
  {
    badge: "🏆",
    title: "Automação de Testes - Cypress UI e API",
    school: "Udemy",
    year: "2026",
  },
  {
    badge: "🏆",
    title: "Claude Code in Action",
    school: "Anthropic",
    year: "2026",
  },
  {
    badge: "🏆",
    title: "Jira + Xray - Criar e Gerir Plano de Testes",
    school: "Udemy",
    year: "2025",
  },
  {
    badge: "🏆",
    title: "Guia em Testes de Software: Teoria e Prática",
    school: "Qualiters Club",
    year: "2025",
  },
  {
    badge: "🏆",
    title: "Testes Automatizados - Curso Completo com Selenium e Java",
    school: "Udemy",
    year: "2026",
  },
  {
    badge: "🏆",
    title: "Testes Automatizados e IA Generativa",
    school: "Udemy",
    year: "2025",
  },
  {
    badge: "🏆",
    title: "Banco de Dados SQL do Zero ao Avançado + Projetos Reais",
    school: "Udemy",
    year: "2026",
  },
  {
    badge: "🏆",
    title: "AWS Educate Getting Started with Cloud Ops",
    school: "AWS Educate",
    year: "2025",
  },
  {
    badge: "🏆",
    title: "Lógica de Programação em Java",
    school: "Javanauta",
    year: "2026",
  },
  {
    badge: "🏆",
    title: "Back-end com Java & QA",
    school: "Almaviva Solutions",
    year: "2026",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-32 bg-[hsl(var(--card))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="certifications-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center mb-16">
          <span className="text-gradient"> Certificações </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative p-6 bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {cert.badge}
                </div>
                <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2 line-clamp-2 min-h-[3.5rem]">
                  {cert.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-3">{cert.school}</p>
                <span className="inline-block px-3 py-1 bg-[hsl(var(--muted))] text-primary text-xs font-mono rounded-full">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
