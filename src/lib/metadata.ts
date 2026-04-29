import type { Metadata } from "next";

import { SITE_URL, GITHUB_URL } from "@/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rafael Felipe | QA Engineer",
    template: "%s | Rafael Felipe",
  },
  description: "Portfólio de Rafael Felipe - Analista de QA Júnior especializado em testes automatizados com Cypress, Selenium e API testing. Qualidade de software e bug hunting.",
  keywords: ["QA", "Quality Assurance", "Cypress", "Selenium", "Testes", "Automação", "QA Engineer", "Test Automation", "API Testing"],
  authors: [{ name: "Rafael Felipe", url: GITHUB_URL }],
  creator: "Rafael Felipe",
  publisher: "Rafael Felipe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rafael Felipe | QA Engineer",
    description: "Analista de QA Júnior - Especialista em testes automatizados com Cypress e Selenium. Transformo bugs em features.",
    url: SITE_URL,
    siteName: "Rafael Felipe Portfolio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rafael Felipe - QA Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Felipe | QA Engineer",
    description: "Analista de QA Júnior - Especialista em testes automatizados",
    creator: "@rafarfelipe",
    images: ["/og-image.png"],
  },
  icons: {
    icon: {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
    shortcut: "/favicon-16x16.svg",
    apple: "/icon-192.svg",
  },
  manifest: "/manifest.json",
};