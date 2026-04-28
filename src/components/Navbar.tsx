"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { navLinks } from "../constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveLink(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[hsl(var(--background))]/95 backdrop-blur-lg shadow-lg border-b border-[hsl(var(--border))]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <a href="#home" className="text-xl sm:text-2xl font-bold font-mono text-gradient hover:opacity-80 transition-opacity">
              Rafael Felipe
            </a>

            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] rounded ${
                    activeLink === link.href
                      ? "text-primary"
                      : "text-[hsl(var(--muted-foreground))] hover:text-primary"
                  }`}
                  aria-current={activeLink === link.href ? "page" : undefined}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" aria-hidden="true" />
                  )}
                </a>
              ))}

              <div className="w-px h-6 bg-[hsl(var(--border))] mx-2" aria-hidden="true" />

              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-primary hover:border-primary hover:bg-[hsl(var(--muted))] transition-all cursor-pointer shadow-lg"
                aria-label="Toggle theme"
                type="button"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-primary"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <nav className="bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] rounded px-2 ${
                activeLink === link.href
                  ? "text-primary"
                  : "text-[hsl(var(--muted-foreground))] hover:text-primary"
              }`}
              aria-current={activeLink === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
