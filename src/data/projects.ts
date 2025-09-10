import type { Project } from '@/types/project'

const projects: Project[] = [
  {
    slug: 'cli-automation-toolkit',
    title: 'CLI Automation Toolkit',
    excerpt: 'A Python toolkit to speed up routine tasks (renaming, backups, scaffolding) with a single command.',
    description:
      'A modular Python CLI built with Typer that orchestrates daily tasks: file renaming rules, project scaffolding, backups, and API-driven operations.\n' +
      'The focus was on ergonomics, helpful error messages and traceable logs. Includes configuration profiles and plugin support.',
    tech: ['Python', 'Typer', 'Rich', 'Pydantic'],
    links: { repo: 'https://github.com/youruser/cli-automation-toolkit' },
    lessons: ['Designing clean CLI UX', 'Type-safe config with Pydantic', 'Packaging and distribution'],
    year: 2024,
    featured: true,
  },
  {
    slug: 'vue-fastapi-dashboard',
    title: 'Real‑Time Dashboard (Vue + FastAPI)',
    excerpt: 'A metrics dashboard with live updates, authentication and role-based access.',
    description:
      'Frontend in Vue 3 + TypeScript with composables and reusable charts, backed by a FastAPI service and WebSockets for live updates.\n' +
      'Implemented JWT auth, role-based permissions, and a resilient reconnect strategy.',
    tech: ['Vue 3', 'TypeScript', 'FastAPI', 'WebSockets'],
    links: { repo: 'https://github.com/youruser/vue-fastapi-dashboard' },
    lessons: ['State management with composables', 'WebSocket reconnection patterns', 'Auth flows'],
    year: 2024,
    featured: true,
  },
  {
    slug: 'scraping-pipeline',
    title: 'Scraping & ETL Pipeline',
    excerpt: 'Distributed scraping with rate limiting and a clean ETL flow into a data store.',
    description:
      'A robust scraping system with rotating proxies, polite rate limiting and deduplication.\n' +
      'Data is normalized and stored; monitoring includes retry metrics and job dashboards.',
    tech: ['Python', 'httpx', 'Playwright', 'SQLite'],
    links: { repo: 'https://github.com/youruser/scraping-pipeline' },
    lessons: ['Backoff strategies', 'Idempotent ETL design', 'Observability basics'],
    year: 2023,
  },
  {
    slug: 'realtime-chat',
    title: 'Realtime Chat Service',
    excerpt: 'WebSocket chat with rooms, presence, and typed contracts.',
    description:
      'A lightweight Node.js service with Fastify and a typed protocol.\n' +
      'Frontend client in Vue showcases room management and optimistic UI.',
    tech: ['Node.js', 'Fastify', 'WS', 'Vue 3'],
    links: { repo: 'https://github.com/youruser/realtime-chat' },
    lessons: ['Typed events', 'Optimistic updates', 'Scalable room fanout'],
    year: 2023,
  },
  {
    slug: 'portfolio-site',
    title: 'This Portfolio',
    excerpt: 'A hyper‑modern portfolio with particles and a CSS solar system.',
    description:
      'Built with Vue 3 + TypeScript + Vite.\n' +
      'Features a hero with particles and a CSS-only animated solar system, projects pages and SPA routing.',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'tsParticles'],
    links: { repo: 'https://github.com/youruser/portfolio' },
    lessons: ['Accessible animations', 'SEO basics for SPAs', 'Vercel deploy'],
    year: 2025,
    featured: true,
  },
]

export default projects
