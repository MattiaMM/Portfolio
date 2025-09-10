# Mattia De Pascalis — Portfolio (Vue + TypeScript)

A hyper‑modern portfolio built with Vue 3, TypeScript and Vite. Includes a particle background and a CSS solar system hero, About and Projects pages, and SPA routing ready for Vercel.

## Tech Stack
- Vue 3 + TypeScript + Vite
- Vue Router
- tsParticles for background particles
- Clean, dark neon UI with custom CSS

## Local Development

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

- Create a new Vercel project and connect this repository.
- Framework preset: Vite (or Other). Build command: `npm run build`. Output directory: `dist`.
- `vercel.json` contains a SPA rewrite so client‑side routes work in production.

## Content

- Edit personal info and contact in `src/components/SiteHeader.vue` and `src/components/SiteFooter.vue`.
- Update projects in `src/data/projects.ts`.
- Customize styles in `src/assets/styles/base.css`.

## License

MIT
