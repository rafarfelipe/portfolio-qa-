"use client";

import { useState, useEffect } from "react";
import { Coffee, FileCode, Database, GitBranch, Clipboard, Settings, GitMerge, BarChart3, FlaskConical, Plug, CheckCircle, Repeat, Search, User, Link, PlayCircle } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const skillCategories = [
  {
    icon: FlaskConical,
    title: "Test Automation",
    skills: [
      { name: "Cypress", level: 90 },
      { name: "Selenium", level: 85 },
      { name: "BDD / Gherkin", level: 80 },
    ],
  },
  {
    icon: Plug,
    title: "API Testing",
    skills: [
      { name: "Postman", level: 85 },
      { name: "REST API", level: 75 },
    ],
  },
];

const tools = [
  { icon: Coffee, name: "Java" },
  { icon: FileCode, name: "JavaScript" },
  { icon: Database, name: "SQL" },
  { icon: GitBranch, name: "Git" },
  { icon: Clipboard, name: "Jira" },
  { icon: Settings, name: "Jenkins" },
  { icon: GitMerge, name: "GitHub Actions" },
  { icon: BarChart3, name: "Scrum/Kanban" },
];

const testTypes = [
  { icon: CheckCircle, name: "Funcionais" },
  { icon: Repeat, name: "Regressão" },
  { icon: Search, name: "Exploratórios" },
  { icon: User, name: "Usabilidade" },
  { icon: Link, name: "Integração" },
  { icon: PlayCircle, name: "E2E" },
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const { elementRef: sectionRef, isIntersecting } = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
  });

  useEffect(() => {
    if (isIntersecting) {
      setVisibleSkills(new Set(["automation", "api", "tools", "types"]));
    }
  }, [isIntersecting]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-card"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center mb-16"
        >
          <span className="text-gradient"> Skills & Tools </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Skill Categories */}
          <div className="space-y-6">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <category.icon className="text-primary" size={20} />
                  {category.title}
                </h3>
                <div className="space-y-4" role="list" aria-label={`${category.title} skill levels`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground" role="listitem">{skill.name}</span>
                        <span className="text-primary font-mono" aria-label={`${skill.name} proficiency: ${skill.level} percent`}>{skill.level}%</span>
                      </div>
                      <div
                        className="h-2 bg-muted rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency level`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${(catIndex * 3 + skillIndex) * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <tool.icon className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Test Types */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">Tipos de Teste</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {testTypes.map((type, index) => (
              <div
                key={type.name}
                className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <type.icon className="text-primary w-4 h-4" />
                <span className="text-foreground font-medium">{type.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
