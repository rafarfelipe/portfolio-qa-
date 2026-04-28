import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";

export const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#certifications", label: "Certificações" },
  { href: "#contact", label: "Contato" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rafarfelipe91@gmail.com",
    href: "mailto:rafarfelipe91@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (13) 99117-5828",
    href: "tel:+5513991175828",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/rafaelrfelipe",
    href: "https://linkedin.com/in/rafaelrfelipe/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/rafarfelipe",
    href: "https://github.com/rafarfelipe",
  },
];

export const typewriterTexts = [
  "QA Engineer",
  "Testes Automatizados",
  "Bug Hunter 🐛",
  "Cypress | Selenium",
  "API Testing",
  "E2E Testing",
  "Java & JavaScript",
  "Agile Tester",
  "Quality Assurance",
  "🧪 Testes E2E",
  "🔍 Exploratory Testing",
  "📊 Test Reporting",
  "🚀 CI/CD Testing",
];