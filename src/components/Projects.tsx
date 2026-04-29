"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { useImageError } from "../hooks/useImageError";
import { GITHUB_URL } from "@/constants";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "QA Automation Cypress",
    description: "Framework completo para testes E2E com Cypress, incluindo padrões Page Object e relatórios customizados.",
    tags: ["Cypress", "JavaScript", "Page Object", "E2E"],
    image: "/images/projects/project-cypress.svg",
    github: "https://github.com/rafarfelipe/qa-automation-cypress",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "API Tests Cypress",
    description: "Testes automatizados para APIs REST usando Cypress, com validações de schema e performance.",
    tags: ["Cypress", "REST API", "JavaScript", "API Testing"],
    image: "/images/projects/project-api.svg",
    github: "https://github.com/rafarfelipe/api-tests-cypress",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "Robot Framework API",
    description: "Testes de API com Robot Framework para validação de endpoints e integração contínua.",
    tags: ["Robot Framework", "API", "Python", "Automation"],
    image: "/images/projects/project-robot.svg",
    github: "https://github.com/rafarfelipe/robotcourses-api",
    live: "",
    featured: true,
  },
];

export default function Projects() {
  const { handleImageError, hasImageError } = useImageError();

  const visibleProjectsList = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 sm:py-32 bg-[hsl(var(--background))]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center mb-4"
        >
          <span className="text-gradient"> Projetos </span>
        </h2>

        <p className="text-center text-[hsl(var(--muted-foreground))] mb-16 max-w-2xl mx-auto">
          Uma seleção dos meus principais projetos em automação de testes e qualidade de software
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjectsList.map((project, index) => (
            <article
              key={project.id}
              className="project-card group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[hsl(var(--muted))]">
                {!hasImageError(index) ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[hsl(var(--muted-foreground))]">
                    <span className="text-4xl">💻</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-dark-900 text-xs font-semibold rounded-full">
                    Destaque
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-[hsl(var(--muted-foreground))] mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[hsl(var(--card))] rounded px-2 py-1"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[hsl(var(--card))] rounded px-2 py-1"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors pointer-events-none" />
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-medium rounded-xl hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]"
            aria-label="View more projects on GitHub"
          >
            <GithubIcon size={20} />
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
