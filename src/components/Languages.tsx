"use client";

const languages = [
  {
    abbr: "ING",
    name: "Inglês",
    level: "Intermediário",
    percent: 60,
    detail: "Leitura técnica e documentação",
  },
  {
    abbr: "ESP",
    name: "Espanhol",
    level: "Avançado",
    percent: 85,
    detail: "Comunicação oral e escrita",
  },
];

export default function Languages() {
  return (
    <section
      id="languages"
      className="py-20 sm:py-32 bg-[hsl(var(--card))]"
      aria-labelledby="languages-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="languages-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center mb-16"
        >
          <span className="text-gradient"> Idiomas </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-4xl font-bold font-mono text-primary">{lang.abbr}</span>

              <div className="flex-1 w-full">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">{lang.name}</h3>
                  <span className="text-primary font-mono">{lang.level}</span>
                </div>

                <div className="h-3 bg-[hsl(var(--muted))] rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>

                <p className="text-[hsl(var(--muted-foreground))] text-sm">{lang.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
