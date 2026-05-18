// ===================================================
// PORTFOLIO — Mattia De Pascalis
// Main TypeScript — Terminal, Projects, Skills, Interactions
// ===================================================

// ---------- TYPES ----------

interface Project {
  title: string;
  description: string;
  category: 'main' | 'hobby' | 'wip';
  tech: string[];
  github?: string;
  live?: string;
  images?: string[];
  featured: boolean;
}

interface Skill {
  name: string;
  comment: string;
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

// ---------- DATA ----------

const projects: Project[] = [
  {
    title: "BrianzaTende",
    description: "Sito vetrina per un'azienda artigianale brianzola specializzata in tende da sole, zanzariere e pergolati su misura. Presenta il catalogo prodotti, le specifiche tecniche, la sezione EcoBonus 50% e i canali di contatto.",
    category: 'main',
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Turbopack"],
    live: "https://brianzatendelurago.it",
    images: ["Images/BT1.png", "Images/BT2.png", "Images/BT3.png"],
    featured: false
  },
  {
    title: "Gabriel Garofalo — Servizi Editoriali",
    description: "Sito professionale per un editor freelance e writing coach, con presentazione dei servizi (editing, consulenza, coaching) e sistema di prenotazione appuntamenti con pannello admin.",
    category: 'main',
    tech: ["Vue 3", "TypeScript", "Vite", "Vercel Serverless", "Upstash Redis", "Resend", "JWT"],
    live: "https://gabrielgarofalo.it",
    images: ["Images/GG1.png", "Images/GG2.png", "Images/GG3.png", "Images/GG4.png"],
    featured: false
  },
  {
    title: "IAR v2.0 — Lettura Contatori Multithread",
    description: "Applicazione desktop per il monitoraggio energetico industriale: legge contatori elettrici in parallelo via IEC 62056-21 su convertitori seriali-Ethernet, archivia misure giornaliere, produce riepiloghi mensili e invia report via email.",
    category: 'main',
    tech: ["Python", "Tkinter", "IEC 62056-21", "matplotlib", "cryptography", "pystray"],
    images: ["Images/IAR1.png", "Images/IAR2.png"],
    featured: false
  },
  {
    title: "G-Mod Python (GMOD LTE / DiCoR4G)",
    description: "Applicazione desktop per la configurazione, il testing e la messa in servizio della centralina GMOD LTE, un dispositivo IoT cellulare per il teledistacco e il monitoraggio remoto di utenze energetiche. Interfaccia CLI e GUI connesse via seriale per diagnostica, aggiornamento firmware e verifica funzionale.",
    category: 'main',
    tech: ["Python", "PySide6", "pyserial", "PyInstaller", "Telit AT", "Inno Setup"],
    images: ["Images/GMOD1.png", "Images/GMOD2.png", "Images/GMOD3.png"],
    featured: false
  },
  {
    title: "MailUploader",
    description: "Strumento di migrazione email che converte archivi .mbox in formato Maildir e li carica su server Dovecot interno, organizzando le mail per utente e anno con deduplicazione automatica via Message-ID e hash SHA-256.",
    category: 'main',
    tech: ["Python", "Paramiko", "SFTP", "PyInstaller", "Dovecot"],
    featured: false
  },
  {
    title: "RTS Game",
    description: "Un gioco di strategia in tempo reale sviluppato in Rust utilizzando il framework Bevy.",
    category: 'main',
    tech: ["Rust", "Bevy", "ECS"],
    featured: false
  },
  {
    title: "PlazaATP",
    description: "Web app per gestire giocatori, registrare partite 1v1 o 2v2 e tenere una classifica Elo dinamica — nata per smettere di usare fogli Excel tra amici e trasformare le partite in una competizione seria (più o meno).",
    category: 'hobby',
    tech: ["Vue.js 3", "TypeScript", "Pinia", "Vue Router", "Supabase", "PostgreSQL", "Vercel"],
    images: ["Images/PLAZAATP.png"],
    featured: false
  },
  {
    title: "AMM3",
    description: "Portale aziendale completo per la gestione interna: tiene traccia di abbonamenti, task board Kanban con drag-and-drop, knowledge base, inventario accessori, configurazioni e tool interni. Include notifiche via UI ed email, parser DMARC, alert su stock negativi e controllo accessi granulare.",
    category: 'main',
    tech: ["Vue 3", "FastAPI", "PostgreSQL", "SQLAlchemy", "asyncpg", "JWT", "Nginx"],
    images: ["Images/AMM1.png", "Images/amm2.png", "Images/amm3.png", "Images/amm4.png", "Images/amm5.png", "Images/amm6.png", "Images/amm7.png", "Images/amm8.png"],
    featured: true
  },
  {
    title: "AI Based IMS Knowledge Base",
    description: "Pipeline automatizzata che riversa documenti aziendali (manuali tecnici, procedure, email, normative) in un tree-index JSON per retrieval vettoriale-free. I contenuti grezzi vengono processati da AI tramite regole operative in AGENTS.md, indicizzati per sezioni e resi interrogabili via LLM con citazione puntuale della fonte. Ispirato a PageIndex e OpenKB di VectifyAI.",
    category: 'wip',
    tech: ["Markdown", "Git", "Python", "JSON", "OpenCode AI", "OpenChambers", "VectifyAI"],
    github: "https://github.com/VectifyAI",
    featured: false
  }
];

const skillCategories: SkillCategory[] = [
  {
    icon: '',
    title: 'Networking',
    skills: [
      { name: 'MikroTik', comment: 'RouterOS, routing dinamico, VLAN, firewall.' },
      { name: 'pfSense', comment: 'Firewalling avanzato, VPN, gestione traffico.' },
      { name: 'Protocolli', comment: 'TCP/IP, IEC 62056-21, seriale RS232/UART.' },
    ]
  },
  {
    icon: '',
    title: 'Infra & DevOps',
    skills: [
      { name: 'Proxmox', comment: 'Virtualizzazione server e container LXC.' },
      { name: 'Docker', comment: 'Containerizzazione e orchestrazione servizi.' },
      { name: 'Nginx', comment: 'Reverse proxy, static hosting, SSL termination.' },
      { name: 'Vercel / Supabase', comment: 'Deploy serverless e backend gestito.' },
    ]
  },
  {
    icon: '',
    title: 'Sistemi Operativi',
    skills: [
      { name: 'Linux', comment: 'Fedora, Debian, Ubuntu. Amministrazione quotidiana.' },
      { name: 'Windows', comment: 'Build, packaging e supporto utenti finali.' },
    ]
  },
  {
    icon: '',
    title: 'Backend & Scripting',
    skills: [
      { name: 'Python', comment: 'Automazione, GUI desktop (PySide6/Tkinter), backend (FastAPI).' },
      { name: 'TypeScript', comment: 'Full-stack web con React e Vue.js.' },
      { name: 'SQL / PostgreSQL', comment: 'Modellazione dati, RLS, stored procedure.' },
      { name: 'Rust', comment: 'Programmazione di sistema e game dev (Bevy, ECS).' },
    ]
  },
  {
    icon: '',
    title: 'Frontend',
    skills: [
      { name: 'Vue.js 3', comment: 'Composition API, Pinia, Vue Router, Vite.' },
      { name: 'React / Next.js', comment: 'App Router, SSG, Tailwind CSS, Turbopack.' },
      { name: 'Tailwind CSS', comment: 'Design system utility-first, responsive.' },
    ]
  },
  {
    icon: '',
    title: 'AI & LLM',
    skills: [
      { name: 'Claude Code / OpenCode', comment: 'Sviluppo assistito e automazione via agenti AI.' },
      { name: 'Codex / Antigravity', comment: 'Generazione e refactoring automatico di codice.' },
      { name: 'Gemini CLI', comment: 'CLI AI per analisi e generazione contestuale.' },
      { name: 'MCP / Orchestratori', comment: 'Protocolli di contesto modulari e coordinamento multi-agente.' },
      { name: 'LangChain / LlamaIndex', comment: 'Orchestrazione RAG e pipeline documentali.' },
      { name: 'RAG / Retrieval', comment: 'Indicizzazione documentale e retrieval vettoriale-free.' },
    ]
  },
];

// ---------- TERMINAL ANIMATION ----------

const neofetchOutput = `
█   █ ████  ████       Mattia@Portfolio
██ ██░█░░░█ █░░░█      -----------------
█░█ █░█░░░█░████░░     OS: Fedora Linux
█░░░█░█░░ █░█░░░░ ░    Kernel: 6.x.x-generic
█░░ █░████ ░█░░░░░     Shell: Kitty
 ░░  ░░░░░░ ░░░        Projects: Main, Hobby, WIP
   ░   ░ ░░░░  ░        Status: Developer
`;

interface TerminalLine {
  type: 'prompt' | 'output' | 'pre';
  text: string;
}

const terminalSequence: TerminalLine[] = [
  { type: 'prompt', text: '$ whoami' },
  { type: 'output', text: 'mattia-de-pascalis' },
  { type: 'prompt', text: '$ neofetch' },
  { type: 'pre', text: neofetchOutput },
  { type: 'prompt', text: '$ _' },
];

// ---------- INTERACTIVE TERMINAL ----------

const fortunes = [
  'Talk is cheap. Show me the code. — L. Torvalds',
  'Less is more. — UNIX philosophy',
  'A program is never less than 90% complete.',
  'If it compiles, ship it.',
  'It works on my machine.',
  'Debugging is twice as hard as writing the code.',
  'The best code is no code at all.',
  'First, solve the problem. Then, write the code. — J. Johnson',
];

const terminalCommands: Record<string, (args: string[]) => string | Promise<string>> = {
  help: () => {
    return [
      'Comandi disponibili:',
      '  help          Questo messaggio',
      '  skills        Competenze tecniche',
      '  projects      Progetti (filtro opzionale: main, hobby, wip)',
      '  contact       Contatti',
      '  neofetch      Info di sistema',
      '  whoami        Nome utente',
      '  clear         Reset del terminale',
      '  fortune       Citazione casuale',
      '  caffe         Pausa caffè',
      '  ping <host>   Test di raggiungibilita',
      '  ls            Elenca file',
      '  sl            Train',
    ].join('\n');
  },

  skills: () => {
    return skillCategories.map(cat =>
      `${cat.icon} ${cat.title}\n${cat.skills.map(s => `   ${s.name} — ${s.comment}`).join('\n')}`
    ).join('\n\n');
  },

  projects: (args: string[]) => {
    const filter = args[0] || 'all';
    const list = filter === 'all'
      ? projects
      : projects.filter(p => p.category === filter);
    if (list.length === 0) return `Nessun progetto nella categoria "${filter}".`;
    return list.map(p =>
      `▸ ${p.title} [${p.category}]\n  ${p.tech.join(' · ')}${p.live ? '\n  ' + p.live : ''}${p.github ? '\n  ' + p.github : ''}`
    ).join('\n\n');
  },

  contact: () => {
    return [
      '📧 Email: placeholder@email.com',
      '🐙 GitHub: github.com/mattia-de-pascalis',
      '💼 LinkedIn: linkedin.com/in/mattia-de-pascalis',
      '',
      'Scrivimi se hai un progetto interessante!',
    ].join('\n');
  },

  neofetch: () => neofetchOutput,

  whoami: () => 'mattia-de-pascalis',

  clear: () => '__RESET__',

  fortune: () => fortunes[Math.floor(Math.random() * fortunes.length)],

  caffe: () => '__CAFFE__',

  ping: (args: string[]) => {
    const host = args[0] || 'localhost';
    const lines = [
      `PING ${host} 56(84) bytes of data.`,
      `64 bytes from ${host}: icmp_seq=1 ttl=64 time=0.042 ms`,
      `64 bytes from ${host}: icmp_seq=2 ttl=64 time=0.038 ms`,
      `64 bytes from ${host}: icmp_seq=3 ttl=64 time=0.051 ms`,
      '',
      `--- ${host} ping statistics ---`,
      `3 packets transmitted, 3 received, 0% packet loss, time 2004ms`,
      `rtt min/avg/max/mdev = 0.038/0.044/0.051/0.005 ms`,
    ];
    return lines.join('\n');
  },

  ls: () => {
    return 'about.md  projects/  skills.json  contact.txt';
  },

  sl: () => {
    return '__SL__';
  },

  sudo: (args: string[]) => {
    if (args.length === 0) return 'sudo: missing operand.';
    const cmd = args.join(' ');
    return `sudo: ${cmd}: command not found`;
  },
};

function terminalAppend(body: HTMLElement, html: string): void {
  const line = document.createElement('div');
  line.className = 'terminal__line';
  line.innerHTML = html;
  body.appendChild(line);
  body.scrollTop = body.scrollHeight;
}

function terminalPrompt(body: HTMLElement, input: string): void {
  terminalAppend(body, `<span class="terminal__prompt">$ ${escapeHtml(input)}</span>`);
}

function terminalOutput(body: HTMLElement, text: string): void {
  terminalAppend(body, `<span class="terminal__output">${escapeHtml(text).replace(/\n/g, '<br>')}</span>`);
}

async function handleCommand(cmd: string, body: HTMLElement): Promise<void> {
  const parts = cmd.trim().split(/\s+/);
  const name = parts[0].toLowerCase();
  const args = parts.slice(1);

  const handler = terminalCommands[name];
  if (!handler) {
    terminalOutput(body, `bash: ${name}: command not found. Prova "help".`);
    return;
  }

  const result = await handler(args);
  if (result === '__RESET__') {
    body.innerHTML = '';
    terminalOutput(body, 'mattia-de-pascalis');
    terminalAppend(body, `<pre class="terminal__pre">${escapeHtml(neofetchOutput)}</pre>`);
    return;
  }
  if (result === '__SL__') {
    terminalOutput(body, '🚂 Ciuf ciuf! Volevi forse dire ls?');
    return;
  }
  if (result === '__CAFFE__') {
    await animateCaffe(body);
    return;
  }
  terminalOutput(body, result);
}

async function animateCaffe(body: HTMLElement): Promise<void> {
  terminalOutput(body, '☕ Erogazione caffè in corso...');
  const bar = document.createElement('div');
  bar.className = 'terminal__line terminal__output';
  bar.textContent = '[                    ] 0%';
  body.appendChild(bar);

  for (let i = 1; i <= 20; i++) {
    await new Promise(r => setTimeout(r, 80));
    const filled = '█'.repeat(i);
    const empty = '░'.repeat(20 - i);
    bar.textContent = `[${filled}${empty}] ${i * 5}%`;
    body.scrollTop = body.scrollHeight;
  }
  terminalOutput(body, '✅ Caffè pronto.');
}

function initInteractiveTerminal(body: HTMLElement): void {
  let input = '';
  let activePromptEl: HTMLDivElement | null = body.querySelector<HTMLDivElement>('.terminal__line:last-child');

  function updatePrompt(): void {
    if (activePromptEl) {
      activePromptEl.innerHTML = `<span class="terminal__prompt">$ ${escapeHtml(input)}</span><span class="terminal__cursor"></span>`;
    }
  }

  function submit(): void {
    if (!input.trim()) {
      input = '';
      updatePrompt();
      return;
    }
    // Remove cursor from prompt line
    if (activePromptEl) {
      activePromptEl.innerHTML = `<span class="terminal__prompt">$ ${escapeHtml(input)}</span>`;
    }
    const cmd = input;
    input = '';
    handleCommand(cmd, body).then(() => {
      // New prompt after output
      activePromptEl = document.createElement('div');
      activePromptEl.className = 'terminal__line';
      activePromptEl.innerHTML = `<span class="terminal__prompt">$ </span><span class="terminal__cursor"></span>`;
      body.appendChild(activePromptEl);
      body.scrollTop = body.scrollHeight;
    });
  }

  document.addEventListener('keydown', function handler(e: KeyboardEvent) {
    // Only handle when terminal animation has finished (prompt has cursor)
    if (!activePromptEl || !activePromptEl.querySelector('.terminal__cursor')) return;
    // Don't capture if user is typing in an input elsewhere
    if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'TEXTAREA') return;

    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      input = input.slice(0, -1);
      updatePrompt();
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      input += e.key;
      updatePrompt();
    }
  });
}

function initTerminal(): void {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  let lineIndex = 0;
  let charIndex = 0;
  let currentLineEl: HTMLDivElement | null = null;

  function typeNext(): void {
    if (lineIndex >= terminalSequence.length) return;

    const line = terminalSequence[lineIndex];

    if (charIndex === 0) {
      currentLineEl = document.createElement('div');
      currentLineEl.className = 'terminal__line';
      body!.appendChild(currentLineEl);
    }

    if (!currentLineEl) return;

    if (line.type === 'prompt') {
      if (charIndex < line.text.length) {
        const typed = line.text.substring(0, charIndex + 1);
        currentLineEl.innerHTML = `<span class="terminal__prompt">${escapeHtml(typed)}</span><span class="terminal__cursor"></span>`;
        charIndex++;
        body!.scrollTop = body!.scrollHeight;
        setTimeout(typeNext, 40 + Math.random() * 30);
      } else {
        currentLineEl.innerHTML = `<span class="terminal__prompt">${escapeHtml(line.text)}</span>`;

        if (lineIndex === terminalSequence.length - 1) {
          currentLineEl.innerHTML = `<span class="terminal__prompt">$ </span><span class="terminal__cursor"></span>`;
          body!.scrollTop = body!.scrollHeight;
          initInteractiveTerminal(body!);
          return;
        }

        charIndex = 0;
        lineIndex++;
        body!.scrollTop = body!.scrollHeight;
        setTimeout(typeNext, 300);
      }
    } else if (line.type === 'output') {
      currentLineEl.innerHTML = `<span class="terminal__output">${escapeHtml(line.text)}</span>`;
      charIndex = 0;
      lineIndex++;
      body!.scrollTop = body!.scrollHeight;
      setTimeout(typeNext, 500);
    } else if (line.type === 'pre') {
      currentLineEl.innerHTML = `<pre class="terminal__pre">${escapeHtml(line.text)}</pre>`;
      charIndex = 0;
      lineIndex++;
      body!.scrollTop = body!.scrollHeight;
      setTimeout(typeNext, 500);
    }
  }

  setTimeout(typeNext, 800);
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ---------- CAROUSEL ----------

function renderCarousel(images: string[], alt: string, className: string): string {
  if (images.length === 0) return '';
  const imagesAttr = JSON.stringify(images).replace(/"/g, '&quot;');
  const eyeBtn = `<button class="carousel__expand" aria-label="Ingrandisci" data-images="${imagesAttr}">👁</button>`;

  if (images.length === 1) {
    return `
      <div class="carousel carousel--single ${className}" data-images="${imagesAttr}">
        <img src="${images[0]}" alt="${escapeHtml(alt)}" class="carousel__slide" />
        ${eyeBtn}
      </div>
    `;
  }
  return `
    <div class="carousel ${className}" data-images="${imagesAttr}">
      <div class="carousel__track">
        ${images.map(img => `<img src="${img}" alt="${escapeHtml(alt)}" class="carousel__slide" />`).join('')}
      </div>
      <button class="carousel__btn carousel__btn--prev" aria-label="Previous">‹</button>
      <button class="carousel__btn carousel__btn--next" aria-label="Next">›</button>
      <div class="carousel__dots">
        ${images.map((_, i) => `<span class="carousel__dot${i === 0 ? ' active' : ''}"></span>`).join('')}
      </div>
      ${eyeBtn}
    </div>
  `;
}

function initCarousels(): void {
  document.querySelectorAll<HTMLElement>('.carousel').forEach(carousel => {
    if (carousel.dataset.carouselInit === '1') return;
    carousel.dataset.carouselInit = '1';

    const track = carousel.querySelector<HTMLElement>('.carousel__track');
    const slides = carousel.querySelectorAll<HTMLElement>('.carousel__slide');
    const prevBtn = carousel.querySelector<HTMLElement>('.carousel__btn--prev');
    const nextBtn = carousel.querySelector<HTMLElement>('.carousel__btn--next');
    const dots = carousel.querySelectorAll<HTMLElement>('.carousel__dot');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    function goTo(index: number): void {
      currentIndex = ((index % slides.length) + slides.length) % slides.length;
      track!.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); goTo(currentIndex - 1); });
    nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); goTo(currentIndex + 1); });
    dots.forEach((dot, i) => dot.addEventListener('click', (e) => { e.stopPropagation(); goTo(i); }));

    // Touch swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        goTo(currentIndex + (diff > 0 ? 1 : -1));
      }
    });
  });
}

// ---------- LIGHTBOX ----------

interface LightboxState {
  images: string[];
  index: number;
}

let lightboxState: LightboxState | null = null;

function initLightbox(): void {
  if (document.getElementById('lightbox')) return;

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox__close" aria-label="Chiudi">✕</button>
    <button class="lightbox__prev" aria-label="Precedente">‹</button>
    <button class="lightbox__next" aria-label="Successiva">›</button>
    <img class="lightbox__image" src="" alt="" />
  `;
  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  lightbox.querySelector('.lightbox__close')?.addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox__prev')?.addEventListener('click', () => navigateLightbox(-1));
  lightbox.querySelector('.lightbox__next')?.addEventListener('click', () => navigateLightbox(1));

  document.addEventListener('keydown', (e) => {
    if (!lightboxState) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Delegated click for eye button
  document.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('.carousel__expand');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    const imagesData = btn.getAttribute('data-images');
    if (!imagesData) return;
    const images: string[] = JSON.parse(imagesData);

    const carousel = btn.closest<HTMLElement>('.carousel');
    let idx = 0;
    if (carousel) {
      const activeDot = carousel.querySelector<HTMLElement>('.carousel__dot.active');
      if (activeDot) {
        const dots = Array.from(carousel.querySelectorAll<HTMLElement>('.carousel__dot'));
        idx = dots.indexOf(activeDot);
      }
    }
    openLightbox(images, Math.max(0, idx));
  });
}

function openLightbox(images: string[], index: number): void {
  lightboxState = { images, index };
  const img = document.querySelector<HTMLImageElement>('.lightbox__image');
  if (img) img.src = images[index];
  document.getElementById('lightbox')?.classList.add('lightbox--open');
}

function closeLightbox(): void {
  document.getElementById('lightbox')?.classList.remove('lightbox--open');
  lightboxState = null;
}

function navigateLightbox(direction: number): void {
  if (!lightboxState) return;
  lightboxState.index = ((lightboxState.index + direction) % lightboxState.images.length + lightboxState.images.length) % lightboxState.images.length;
  const img = document.querySelector<HTMLImageElement>('.lightbox__image');
  if (img) img.src = lightboxState.images[lightboxState.index];
}

// ---------- PROJECTS RENDERING ----------

function renderFeaturedProject(): void {
  const container = document.getElementById('project-featured');
  if (!container) return;

  const featured = projects.find(p => p.featured);

  if (!featured) {
  container.innerHTML = `
    <div class="project-featured__card reveal">
      <div style="flex: 1">
        <div class="project-featured__badge">⭐ Featured</div>
        <h3 class="project-featured__title">Coming Soon</h3>
        <p class="project-featured__desc">Il progetto in evidenza verrà aggiunto qui.</p>
      </div>
      <div class="project-featured__image project-featured__image--placeholder">// screenshot</div>
    </div>
  `;
    return;
  }

  container.innerHTML = `
    <div class="project-featured__card reveal">
      <div style="flex: 1">
        <div class="project-featured__badge">⭐ Featured</div>
        <h3 class="project-featured__title">${escapeHtml(featured.title)}</h3>
        <p class="project-featured__desc">${escapeHtml(featured.description)}</p>
        <div class="project-featured__tech">
          ${featured.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="project-card__links">
          ${featured.github ? `<a href="${featured.github}" class="project-card__link" target="_blank" rel="noopener">GitHub →</a>` : ''}
          ${featured.live ? `<a href="${featured.live}" class="project-card__link" target="_blank" rel="noopener">Live →</a>` : ''}
        </div>
      </div>
      ${featured.images && featured.images.length > 0
        ? renderCarousel(featured.images, featured.title, 'project-featured__image')
        : `<div class="project-featured__image project-featured__image--placeholder">// screenshot</div>`
      }
    </div>
  `;
  initCarousels();
}

function renderProjectGrid(filter: string = 'all'): void {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? projects.filter(p => !p.featured)
    : projects.filter(p => p.category === filter && !p.featured);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="project-empty reveal">
        <p>// Progetti in arrivo — stay tuned!</p>
      </div>
    `;
    initScrollReveal();
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="project-card reveal" data-category="${p.category}">
      ${p.images && p.images.length > 0 ? renderCarousel(p.images, p.title, 'project-card__image') : ''}
      <span class="project-card__category">${categoryLabel(p.category)}</span>
      <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
      <p class="project-card__desc">${escapeHtml(p.description)}</p>
      <div class="project-card__tech">
        ${p.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}
      </div>
      <div class="project-card__links">
        ${p.github ? `<a href="${p.github}" class="project-card__link" target="_blank" rel="noopener">GitHub →</a>` : ''}
        ${p.live ? `<a href="${p.live}" class="project-card__link" target="_blank" rel="noopener">Live →</a>` : ''}
      </div>
    </div>
  `).join('');

  initScrollReveal();
  initCarousels();
}

function categoryLabel(cat: string): string {
  switch (cat) {
    case 'main': return '● Professionale';
    case 'hobby': return '◐ Hobby';
    case 'wip': return '◌ In sviluppo';
    default: return cat;
  }
}

// ---------- PROJECT FILTERS ----------

function initFilters(): void {
  const chips = document.querySelectorAll<HTMLButtonElement>('.filter-chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter || 'all';
      renderProjectGrid(filter);
    });
  });
}

// ---------- SKILLS RENDERING ----------

function renderSkills(): void {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = skillCategories.map(cat => `
    <div class="skill-card reveal">
      <div class="skill-card__header">
        ${cat.icon ? `<span class="skill-card__icon">${cat.icon}</span>` : ''}
        <h3 class="skill-card__title">${escapeHtml(cat.title)}</h3>
      </div>
      ${cat.skills.length > 0 ? `
        <ul class="skill-card__list">
          ${cat.skills.map(s => `
            <li class="skill-item">
              <span class="skill-item__name">${escapeHtml(s.name)}</span>
              ${s.comment ? `<span class="skill-item__comment">${escapeHtml(s.comment)}</span>` : ''}
            </li>
          `).join('')}
        </ul>
      ` : `
        <p style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.8rem;">// da completare</p>
      `}
    </div>
  `).join('');
}

// ---------- THEME TOGGLE ----------

function initThemeToggle(): void {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  // Load saved theme
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ---------- SCROLL REVEAL ----------

function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('.reveal:not(.visible)');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ---------- SCROLL SPY ----------

function initScrollSpy(): void {
  const sections = document.querySelectorAll<HTMLElement>('.section');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-height')} 0px -30% 0px`
  });

  sections.forEach(section => observer.observe(section));
}

// ---------- HAMBURGER ----------

function initHamburger(): void {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav__links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close on link click
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
}

// ---------- SCROLL TO TOP ----------

function initScrollTop(): void {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('scroll-top--visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- INIT ----------

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initTerminal();
  initLightbox();
  renderFeaturedProject();
  renderProjectGrid();
  renderSkills();
  initFilters();
  initScrollReveal();
  initScrollSpy();
  initHamburger();
  initScrollTop();

  // Add reveal classes to static sections
  document.querySelectorAll('.about__content, .contact__text, .contact__links').forEach(el => {
    el.classList.add('reveal');
  });
  initScrollReveal();
});
