# Rafael Felipe | QA Engineer Portfolio

Portfólio pessoal desenvolvido para **Rafael Felipe** - Analista de QA Júnior especializado em testes automatizados.

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.4-38b2ac?logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.2.5-61dafb?logo=react)

## 🎯 Visão Geral

Este é um site de portfólio moderno e responsivo que apresenta:
- Seção Hero com efeito typewriter
- Sobre mim
- Habilidades técnicas
- Projetos em destaque
- Certificações
- Idiomas
- Contato
- Tema dark/light

## 🛠 Stack Tecnológica

| Categoria | Tecnologia | Versão |
|-----------|------------|--------|
| Framework | Next.js | 16.2.4 |
| Linguagem | TypeScript | 6.0.3 |
| UI Library | React | 19.2.5 |
| Estilização | Tailwind CSS | 4.2.4 |
| Ícones | Lucide React | 1.11.0 |
| Build Tool | Turbopack | (integrado) |

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/rafarfelipe/portifolio.git
cd portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🚀 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento com Turbopack
npm run build    # Build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa o linter
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css       # Estilos globais + Tailwind
│   ├── layout.tsx        # Root layout com SEO
│   └── page.tsx          # Página principal
├── components/
│   ├── About.tsx         # Seção Sobre
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Languages.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── OptimizedImage.tsx
│   ├── Projects.tsx
│   ├── ScrollReveal.tsx
│   ├── Skeleton.tsx
│   ├── Skills.tsx
│   └── Testimonials.tsx
└── hooks/
    └── useIntersectionObserver.ts
```

## 🎨 Personalização

### Cores do Tema

As cores são definidas no `globals.css` usando variáveis CSS:

```css
:root {
  --primary: 163 100% 43%;    /* Verde principal */
  --secondary: 259 100% 58%;  /* Roxo */
  --accent: 350 86% 61%;      /* Rosa */
}
```

### SEO e Metadata

Edite `src/app/layout.tsx` para personalizar:
- Título e descrição
- Keywords
- Open Graph images
- Redes sociais

## 📸 Otimização de Imagens

Para otimizar a imagem de perfil:

```bash
# Usando sharp (recomendado)
npm install -g sharp
sharp public/foto-perfil.png --resize 400 400 --format webp --quality 80 -o public/foto-perfil.webp
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Push para o GitHub
2. Importe o projeto na Vercel
3. Deploy automático

### Build Local

```bash
npm run build
npm run start
```

## 📄 Licença

Este projeto é um portfólio pessoal. Sinta-se livre para usar como inspiração.

## 👤 Autor

**Rafael Felipe**
- LinkedIn: [linkedin.com/in/rafaelrfelipe](https://linkedin.com/in/rafaelrfelipe/)
- GitHub: [github.com/rafarfelipe](https://github.com/rafarfelipe)
- Email: rafarfelipe91@gmail.com

---

Desenvolvido com 💚 por Rafael Felipe
