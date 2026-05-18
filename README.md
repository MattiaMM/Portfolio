# MDP Portfolio

Portfolio personale di Mattia De Pascalis — Developer & Computer Enthusiast.

## Tecnologie

- **HTML5 / CSS3** — Design system custom con temi chiaro/scuro
- **TypeScript** — Logica client-side (terminale interattivo, caroselli, lightbox)
- **Font Geist** — Tipografia moderna via Google Fonts

## Struttura

```
index.html      — Shell HTML semantica single-page
src/main.ts     — Logica TypeScript (terminal, progetti, skills, UI)
style.css       — Design system completo (893+ linee)
dist/main.js    — Output compilato (entry point browser)
Images/         — Screenshot e asset dei progetti
```

## Sviluppo locale

```bash
npm install typescript
npx tsc
python3 -m http.server 8080
```

Apri `http://localhost:8080`.

## Deploy

Static hosting (GitHub Pages, Vercel, qualsiasi CDN). Il sito è client-side rendering senza dipendenze runtime.
