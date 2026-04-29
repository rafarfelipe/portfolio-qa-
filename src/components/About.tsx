"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-card"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center mb-16"
        >
          <span className="text-gradient"> Sobre Mim </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Foto */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl"
                aria-hidden="true"
              />
              <img
                src="/foto-perfil-github.png"
                alt="Foto de Rafael Felipe, QA Engineer"
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/20 object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Olá! Sou <span className="text-primary font-semibold">Rafael Felipe</span>, um
              <span className="text-primary font-semibold"> QA Engineer</span> apaixonado por garantir
              a excelência de softwares. Acredito que cada bug encontrado é uma oportunidade de aprendizado
              e cada teste automatizado é um passo em direção à entrega de valor real.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Atualmente estou graduando em <span className="text-primary font-semibold">Engenharia de Software</span> e
              me especializando em <span className="text-primary font-semibold">automação de testes</span> com
              Cypress, Selenium e API testing. Meu foco é ajudar equipes a entregarem produtos confiáveis
              e de alta qualidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quando não estou testando, você pode me encontrar explorando novas tecnologias,
              contribuindo para a comunidade QA ou compartilhando conhecimento com outros profissionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
