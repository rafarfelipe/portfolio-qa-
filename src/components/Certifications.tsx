"use client";

const certifications = [
  {
    badge: "🏆",
    title: "Bootcamp QA Automation",
    school: "Qualiters Club",
    year: "2025",
  },
  {
    badge: "🏆",
    title: "Cypress UI e API",
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
    title: "Jira + Xray",
    school: "Udemy",
    year: "2025",
  },
  {
    badge: "🏆",
    title: "Selenium + Java",
    school: "Udemy",
    year: "2026",
  },
  {
    badge: "🏆",
    title: "SQL + Projetos Reais",
    school: "Udemy",
    year: "2026",
  },
  {
    badge: "🏆",
    title: "AWS Cloud Ops",
    school: "AWS Educate",
    year: "2025",
  },
  {
    badge: "🏆",
    title: "Back-end Java & QA",
    school: "Almaviva",
    year: "2026",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-32 bg-[hsl(var(--card))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center mb-16">
          <span className="text-gradient"> Certificações </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative p-6 bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-2xl transition-all duration-300" />

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
