"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useImageError } from "@/hooks/useImageError";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Ana Silva",
    role: "Tech Lead",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "O Rafael tem um olhar excepcional para detalhes. Sua capacidade de identificar bugs sutis e comunicar problemas de forma clara fez toda diferença na qualidade do nosso produto.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Engineering Manager",
    company: "StartupXYZ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Trabalhar com o Rafael foi um privilégio. Sua automação de testes reduziu significativamente nosso tempo de release e aumentou a confiança nas entregas.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Product Owner",
    company: "FinanceApp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Ele vai além do esperado. O Rafael não apenas encontra bugs, mas entende o impacto no negócio e prioriza o que realmente importa para o usuário.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    role: "Senior Developer",
    company: "DevHouse",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Como desenvolvedor, ter um QA como o Rafael no time é invaluable. Seus testes automatizados me ajudaram a escrever código mais robusto desde o início.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { handleImageError, hasImageError } = useImageError();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [isPaused]);
  const { elementRef } = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={elementRef}
      className="py-20 sm:py-32 bg-[hsl(var(--card))]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center mb-4"
        >
          <span className="text-primary">&lt;</span>
          <span className="text-gradient"> Depoimentos </span>
          <span className="text-primary">/&gt;</span>
        </h2>

        <p className="text-center text-[hsl(var(--muted-foreground))] mb-16 max-w-2xl mx-auto">
          O que colegas e parceiros de trabalho dizem sobre minha atuação
        </p>

        {/* Main Testimonial Card */}
        <div
          className="relative bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-2xl p-8 sm:p-12 hover:border-primary/30 transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Featured testimonial"
          aria-live="polite"
        >
          {/* Quote Icon */}
          <Quote
            className="absolute top-6 left-6 w-12 h-12 text-primary/20"
            aria-hidden="true"
          />

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-4 left-4 sm:left-auto sm:right-16 p-2 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-primary hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-4 right-4 sm:right-4 p-2 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-primary hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-primary" />
          </button>

          {/* Content */}
          <div className="mt-8 text-center">
            {/* Rating */}
            <div
              className="flex justify-center gap-1 mb-6"
              role="img"
              aria-label={`${currentTestimonial.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < currentTestimonial.rating
                      ? "fill-primary text-primary"
                      : "fill-[hsl(var(--muted))] text-[hsl(var(--muted))]"
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg sm:text-xl text-[hsl(var(--foreground))] leading-relaxed mb-8 italic">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              {hasImageError(currentIndex) ? (
                <div className="w-14 h-14 rounded-full bg-[hsl(var(--muted))] flex items-center justify-center border-2 border-primary/30">
                  <span className="text-xl font-bold text-[hsl(var(--muted-foreground))]">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
              ) : (
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  loading="eager"
                  onError={() => handleImageError(currentIndex)}
                />
              )}
              <div className="text-left">
                <div className="font-semibold text-[hsl(var(--foreground))]">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm text-[hsl(var(--muted-foreground))]">
                  {currentTestimonial.role} @ {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))] ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-[hsl(var(--muted))] hover:bg-primary/50"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (Desktop) */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {hasImageError(index) ? (
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--muted))] flex items-center justify-center">
                    <span className="text-lg font-bold text-[hsl(var(--muted-foreground))]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                ) : (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    onError={() => handleImageError(index)}
                  />
                )}
                <div>
                  <div className="font-medium text-[hsl(var(--foreground))]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-[hsl(var(--muted-foreground))] text-sm line-clamp-3">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
