# Portfolio — Trần Văn Cường

Source code for my personal portfolio website, deployed at [vancuong-official.id.vn](https://www.vancuong-official.id.vn).

Built with React 19, TypeScript, Tailwind CSS v4, and Vite.

---

## About The Project

This is my personal developer portfolio, built to showcase my projects, technical skills, and background as a Full-Stack Developer.

Core design & engineering priorities:
- **Clean aesthetic**: Minimalist monochrome styling with smooth micro-interactions.
- **Performance**: Lightweight client-side architecture with smooth 60fps scrolling on both mobile and desktop.
- **Maintainability**: Centralized data configuration in TypeScript for easy updates.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React & custom SVG tech badges
- **Analytics**: Vercel Web Analytics (privacy-friendly, no cookies)
- **Deployment**: Vercel with custom domain (`.id.vn`)

## Features

- **Dark & Light Theme**: Automatically detects system preference with manual toggle, persisted in `localStorage`.
- **Interactive Terminal Card**: 3D perspective hero card displaying developer configuration and status.
- **Project Showcase**: Filter projects by domain (Full-Stack, Mobile, Frontend, Backend) with detailed architecture modals.
- **Performance Optimizations**:
  - Scroll and spotlight listeners throttled with `requestAnimationFrame` to prevent mobile jank.
  - Image assets protected against accidental dragging or right-click callouts.
- **Contact Form**: Direct messaging integration via Web3Forms with one-click copy for email and phone number.
- **SEO & Social Share**: Configured OpenGraph meta tags and Schema.org JSON-LD structured data.

## Project Structure

```
src/
├── components/          # Reusable UI sections (Navbar, Hero, About, Projects, etc.)
├── context/             # ThemeContext (Dark / Light mode state)
├── data/                # portfolioData.ts (projects, skills, timeline data)
├── types/               # TypeScript interfaces and type definitions
├── App.tsx              # Root component with Vercel Analytics integration
├── main.tsx             # Application entry point
└── index.css            # Tailwind CSS v4 directives and custom utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/vancuong2k4/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Contact

- **Trần Văn Cường** (vancuong2k4)
- **Website**: [vancuong-official.id.vn](https://www.vancuong-official.id.vn)
- **Email**: [cuongtran190404@gmail.com](mailto:cuongtran190404@gmail.com)
- **Phone**: 0326 570 425
- **GitHub**: [@vancuong2k4](https://github.com/vancuong2k4)
