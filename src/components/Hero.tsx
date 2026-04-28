"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { typewriterTexts } from "../constants";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const displayedText = useTypewriter(typewriterTexts);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      <h1 id="hero-heading" className="sr-only">Rafael Felipe - QA Engineer Portfolio</h1>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 220, 130, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 220, 130, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {["🐛", "✓", "🧪", "🔌", "⚡"].map((icon, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20 animate-float"
              style={{
                top: `${10 + (i * 15)}%`,
                left: `${5 + (i * 15)}%`,
                animationDelay: `${i * 0.5}s`,
              }}
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Status Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--card))] backdrop-blur border border-[hsl(var(--border))] rounded-full mb-6 animate-fade-in"
          role="status"
          aria-label="Currently available for work opportunities"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
          <span className="text-sm text-[hsl(var(--muted-foreground))]">Open to work</span>
        </div>

        {/* Title */}
        <div className="mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="block text-lg sm:text-xl text-[hsl(var(--muted-foreground))] mb-2">Olá, eu sou</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="text-gradient">Rafael Felipe</span>
          </span>
        </div>

        {/* Typewriter */}
        <div className="h-12 flex items-center justify-center mb-6" role="status" aria-live="polite" aria-atomic="true">
          <span className="font-mono text-xl sm:text-2xl text-primary">
            {displayedText}
            <span className="animate-cursor bg-primary inline-block w-0.5 h-6 ml-0.5 align-middle" aria-hidden="true" />
          </span>
          <span className="sr-only">{displayedText}</span>
        </div>

        {/* Description */}
        <p className="text-[hsl(var(--muted-foreground))] text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Transformo bugs em features através de testes automatizados.
          Especialista em garantir qualidade com Cypress e Selenium
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-dark-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            Vamos conversar
            <ArrowRight size={20} />
          </a>
          <a
            href="https://github.com/rafarfelipe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-semibold rounded-xl hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            <GithubIcon size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rafaelrfelipe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-semibold rounded-xl hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient">25%</div>
            <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mt-1">Redução de bugs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient">10+</div>
            <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mt-1">Certificações</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground))] animate-bounce"
      >
        <span className="text-xs">Scroll down</span>
        <div className="w-6 h-10 border-2 border-[hsl(var(--border))] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[hsl(var(--muted-foreground))] rounded-full mt-2 animate-pulse" />
        </div>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
