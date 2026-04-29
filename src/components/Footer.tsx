"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              Feito com{" "}
              <span className="text-accent">💙</span>
              {" "}e dedicação
            </p>
            <p className="text-muted-foreground text-sm">
              © 2026 - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/30 transition-all duration-300 z-50 ${
          showScrollTop
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="text-background" />
      </button>
    </>
  );
}
