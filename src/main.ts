// ===================================================
// PORTFOLIO — Mattia De Pascalis
// AI Software Engineer & Systems Developer
// Terminal, case study, matrice competenze, interazioni
// ===================================================

const GITHUB_URL = 'https://github.com/MattiaMM';

// ---------- TYPES ----------

interface CaseStudy {
  title: string;
  tech: string[];
  problem: string;
  architecture: string[];
  outcome: string;
  live?: string;
  images?: string[];
}

interface Project {
  title: string;
  description: string;
  category: 'main' | 'hobby' | 'wip';
  tech: string[];
  github?: string;
  live?: string;
  images?: string[];
}

interface MethodologyStep {
  title: string;
  /** Etichetta compatta usata nel diagramma della pipeline (`workflow`). */
  pipelineLabel: string;
  summary: string;
  detail: string;
}

interface ModelRow {
  name: string;
  role: string;
  rationale: string;
}

interface AgenticPillar {
  title: string;
  items: string[];
}

interface SkillItem {
  name: string;
  note?: string;
}

interface SkillArea {
  area: string;
  summary: string;
  items: SkillItem[];
}

// ---------- CASE STUDY (flagship, ordine = densità ingegneristica) ----------

const caseStudies: CaseStudy[] = [
  {
    title: 'Agentic AI Workflow & Developer Tooling Environment',
    tech: ['Claude Code', 'Hermes', 'Sub-Agents', 'Context Engineering', 'MCP', 'Python', 'SQLite'],
    problem:
      'Lo sviluppo assistito da LLM degrada sulle codebase complesse: la finestra di contesto si satura, le istruzioni si contraddicono tra sessioni e le regressioni sfuggono alla revisione manuale. Serviva un ambiente in cui l\'agente operasse con contesto delimitato, memoria durevole e verifiche automatiche.',
    architecture: [
      'Orchestrazione a sub-agenti con contesto isolato: ogni task riceve solo l\'interfaccia necessaria, eliminando la propagazione del context rot alla sessione esecutiva.',
      'Memoria a lungo termine su <code>state.db</code> (SQLite) separata dalla working memory volatile: sliding window orientata agli ultimi mesi di attività, hard cap a 4.000 token con headroom estendibile a 8.000 e compattazione asincrona delle decisioni superate.',
      'Continuous alignment loop: cron job in background che analizza log di esecuzione ed errori di generazione per distillare nuove guardrail e aggiornare il system prompt.',
      'Tooling esteso via Model Context Protocol (ispezione schemi PostgreSQL/SQLite, documentazione tecnica, processi host) e skill deterministiche per le operazioni che devono restare riproducibili.',
      'Guardrail di minimo privilegio: autonomia read-only completa e side-effect gate con autorizzazione umana esplicita su <code>rm</code>, modifiche di rete e overwrite di file non tracciati da Git.',
    ],
    outcome:
      'Ogni step del ciclo di sviluppo produce un artefatto verificabile — vincolo, specifica, test — e la sessione resta riprendibile anche a distanza di mesi. Trade-off accettato: l\'orchestrazione a sub-agenti costa più token per task e richiede disciplina nel versionare le spec, che è esattamente il prezzo dell\'assenza di context rot.',
  },
  {
    title: 'Enterprise AI Ticketing & Operations Dashboard',
    tech: ['PostgreSQL', 'Redis', 'Gemini API', 'FastAPI', 'Next.js', 'System Design'],
    problem:
      'Il triage manuale su casella condivisa non regge il volume: classificazione incoerente tra operatori, assegnazioni concorrenti che si sovrascrivono a vicenda e ricerca lenta sullo storico. Il gestionale aziendale non copre ticket, anagrafiche, resi e abbonamenti non supportati.',
    architecture: [
      'Ingestion headless con pattern <em>Mailbox-as-a-Queue</em>: casella dedicata (<code>ticket@</code>) letta da worker con semantica at-least-once, verifica dello stato del messaggio e rollback sui timeout.',
      'Estrazione e classificazione semantica via LLM con validazione su Structured JSON Schema e retry a backoff esponenziale: nessun dato non conforme entra nel database.',
      'Storage relazionale su PostgreSQL: schemi normalizzati, indici B-Tree sulle foreign key e indici parziali sui ticket aperti.',
      'Optimistic locking (<code>WHERE id = :id AND updated_at = :last_read</code>) per eliminare le race condition sulle assegnazioni concorrenti tra operatori.',
      'Ricerca globale Ctrl+K sub-millisecondo alimentata da un caching layer in-memory su Redis, disaccoppiato dal database primario.',
    ],
    outcome:
      'Triage automatico, zero assegnazioni perse in concorrenza e ricerca percepita come istantanea. Trade-off: la cache Redis introduce una finestra di staleness che va governata con invalidazione esplicita sui write, e la classificazione LLM richiede schemi versionati per non degradare quando il modello cambia.',
  },
  {
    title: 'Industrial Tele-Disconnect Controller & Diagnostic Suite',
    tech: ['MicroPython', 'Quectel Cellular', 'RS232/RS485', 'SHA-256', 'Hardware Reliability'],
    problem:
      'Gli apparati di teledistacco su utenze industriali stanno in siti non presidiati: un aggiornamento interrotto da un blackout durante la scrittura rende il dispositivo non più raggiungibile e obbliga a un intervento in campo.',
    architecture: [
      'Logica di controllo e diagnostica in MicroPython su moduli cellulari Quectel, isolata su I/O digitali dedicati per separare monitoraggio e attuazione.',
      'Protocollo custom di deployment e aggiornamento via seriale (RS232/RS485) con scrittura atomica staged su <code>.py.new</code>: la rotazione a caldo avviene solo a validazione completata.',
      'Verifica di integrità del payload tramite hashing crittografico SHA-256 e pacchettizzazione deterministica con handshake ACK/NACK.',
      'Suite desktop di collaudo con gestione dell\'I/O seriale non bloccante per la diagnostica avanzata dell\'apparato.',
    ],
    outcome:
      'Aggiornamenti remoti senza finestre di fermo macchina e senza rischio di bricking da interruzione di alimentazione. Trade-off esplicito: un protocollo custom e il throughput limitato del link seriale, accettabili perché gli update sono rari e privilegiano l\'atomicità sulla velocità.',
  },
  {
    title: 'High-Performance Edge Web Deployments & Jamstack Solutions',
    tech: ['Astro', 'Next.js (SSG)', 'React', 'TypeScript', 'Vercel Edge CDN', 'Web Vitals'],
    problem:
      'Realtà artigianali e professionisti con siti lenti, hosting server da mantenere e form di contatto bersagliati da spam: il costo di infrastruttura non è giustificato da un contenuto che cambia poche volte l\'anno.',
    architecture: [
      'Static Site Generation (Astro, Next.js) distribuita su Edge CDN globale: TTFB sotto i 30 ms, costo di elaborazione server azzerato e superficie di attacco ridotta al solo strato statico.',
      'Asset pipeline orientata ai Core Web Vitals: conversione in WebP/AVIF, caricamento lazy/eager differenziato e CLS a zero tramite <code>aspect-ratio</code> espliciti su ogni frame.',
      'Protezione antispam dei form con honeypot invisibile isolato a livello CSS/DOM, validazione temporale anti-bot e rate limiting all\'edge.',
    ],
    outcome:
      'Piattaforme in produzione (Brianza Tende, questo portfolio) con LCP sotto 1,2 s e hosting a costo zero. Trade-off: il rendering avviene a build time, quindi ogni contenuto dinamico va delegato a servizi esterni o a isole client esplicite.',
    live: 'https://brianzatendelurago.it',
    images: ['Images/BT1.png', 'Images/BT2.png', 'Images/BT3.png'],
  },
];

// ---------- ADDITIONAL SYSTEMS & TOOLING (ordinati per densità) ----------

const projects: Project[] = [
  {
    title: 'IAR v2.0 — Monitoraggio Energetico Industriale',
    description:
      'Applicazione desktop per il monitoraggio energetico industriale: legge in parallelo i contatori elettrici via IEC 62056-21 su convertitori seriale-Ethernet, archivia le misure giornaliere, produce riepiloghi mensili e invia i report via email. Concorrenza su N contatori, UI Tkinter con grafici e icona di sistema persistente.',
    category: 'main',
    tech: ['Python', 'Tkinter', 'IEC 62056-21', 'matplotlib', 'cryptography', 'pystray'],
    images: ['Images/IAR1.png', 'Images/IAR2.png'],
  },
  {
    title: 'AMM3 — Portale Operativo Interno',
    description:
      'Portale aziendale per la gestione interna: abbonamenti, task board Kanban con drag-and-drop, knowledge base, inventario accessori, configurazioni e tool interni. Include notifiche in-app ed email, parser DMARC, alert su stock negativi e controllo accessi granulare. Backend FastAPI su PostgreSQL, frontend Vue 3, deploy dietro reverse proxy Nginx.',
    category: 'main',
    tech: ['Vue 3', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'asyncpg', 'JWT', 'Nginx'],
    images: ['Images/AMM1.png', 'Images/amm2.png', 'Images/amm3.png', 'Images/amm4.png', 'Images/amm5.png', 'Images/amm6.png', 'Images/amm7.png', 'Images/amm8.png'],
  },
  {
    title: 'Gabriel Garofalo — Piattaforma Servizi Editoriali',
    description:
      'Piattaforma per un editor freelance e writing coach: presentazione dei servizi (editing, consulenza, coaching) e sistema di prenotazione appuntamenti con pannello di amministrazione. Frontend Vue 3 con TypeScript, funzioni serverless su Vercel, caching in-memory su Upstash Redis, invio transazionale via Resend e sessioni JWT.',
    category: 'main',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'Vercel Serverless', 'Upstash Redis', 'Resend', 'JWT'],
    live: 'https://gabrielgarofalo.it',
    images: ['Images/GG1.png', 'Images/GG2.png', 'Images/GG3.png', 'Images/GG4.png'],
  },
  {
    title: 'MailUploader — Migrazione Archivi Email',
    description:
      'Strumento di migrazione che converte archivi .mbox in formato Maildir e li carica su server Dovecot interno via SFTP, organizzando i messaggi per utente e anno con deduplicazione basata su Message-ID e hash SHA-256. Distribuito come binario PyInstaller senza dipendenze runtime.',
    category: 'main',
    tech: ['Python', 'Paramiko', 'SFTP', 'PyInstaller', 'Dovecot'],
  },
  {
    title: 'PlazaATP — Classifica Elo per Tornei',
    description:
      'Web app per gestire giocatori, registrare partite 1v1 e 2v2 e mantenere una classifica Elo dinamica: sostituisce i fogli di calcolo condivisi con un sistema a punteggio verificabile e storico delle partite.',
    category: 'hobby',
    tech: ['Vue.js 3', 'TypeScript', 'Pinia', 'Vue Router', 'Supabase', 'PostgreSQL', 'Vercel'],
    images: ['Images/PLAZAATP.png'],
  },
  {
    title: 'AI IMS Knowledge Base — Retrieval senza vettori',
    description:
      'Pipeline che riversa la documentazione aziendale (manuali tecnici, procedure, normative) in un tree-index JSON interrogabile via LLM con citazione puntuale della fonte, senza infrastruttura vettoriale. Le regole operative vivono in AGENTS.md e il contenuto grezzo viene normalizzato e indicizzato per sezione.',
    category: 'wip',
    tech: ['Markdown', 'Git', 'Python', 'JSON', 'OpenCode AI'],
  },
  {
    title: 'RTS Game — Simulazione su Bevy',
    description:
      'Gioco di strategia in tempo reale in Rust sul framework Bevy: entity-component-system, pathfinding su griglia e simulazione di unità come banco di prova per pattern di programmazione di sistema.',
    category: 'hobby',
    tech: ['Rust', 'Bevy', 'ECS'],
  },
];

// ---------- METODOLOGIA AGENTICA ----------

const methodologySteps: MethodologyStep[] = [
  {
    title: 'Inception & Grounding',
    pipelineLabel: 'CLAUDE.md Anchor',
    summary:
      'Un file <code>CLAUDE.md</code> alla radice del repository ancora l\'agente a regole deterministiche: convenzioni di codice, comandi di linting e test, vincoli di sistema e criteri di accettazione.',
    detail:
      'Il contratto precede il codice: nessuna sessione esecutiva parte se i comandi di verifica non sono espliciti e versionati.',
  },
  {
    title: 'Context-Isolated Brainstorming',
    pipelineLabel: 'Clean Discovery',
    summary:
      'L\'analisi dei requisiti avviene su sub-agenti a contesto pulito: mappatura dei vincoli, identificazione degli edge case e prime ipotesi di architettura, spesso su runtime locale.',
    detail:
      'Ogni agente vede solo il perimetro del proprio problema, così la degradazione dell\'attenzione (context rot) non contamina la sessione di implementazione.',
  },
  {
    title: 'Spec-First Architecture Artifact',
    pipelineLabel: 'architecture.md',
    summary:
      'Le decisioni non restano nella memoria volatile della conversazione: vengono scritte su disco in una specifica architetturale che funge da single source of truth.',
    detail:
      'È l\'artefatto che rende il lavoro riprendibile, revisionabile e verificabile anche a distanza di mesi, da una persona come da un altro agente.',
  },
  {
    title: 'Sub-Agent Driver Execution',
    pipelineLabel: 'Sub-Agent Drivers',
    summary:
      'Ogni task della specifica viene assegnato a un sub-agente a contesto fresco che riceve l\'interfaccia necessaria e nient\'altro.',
    detail:
      'Il driver scrive i test che prevengono le regressioni, implementa, esegue la suite e chiude la sessione al completamento del task: i task indipendenti procedono in parallelo, la verifica resta per-task.',
  },
];

const modelMatrix: ModelRow[] = [
  {
    name: 'Hermes — open-weight, self-hosted',
    role: 'System discovery, machine audit & brainstorming',
    rationale:
      'Tool calling nativo e reasoning aperto: ispezione dell\'ambiente host, scandaglio del filesystem, gestione di state.db e prime bozze di architettura senza rate limiting né latenza di rete.',
  },
  {
    name: 'Claude Code / Pi — modelli di frontiera',
    role: 'Deep execution & complex refactoring',
    rationale:
      'Riservati all\'implementazione ad alta densità sintattica, dove servono attention window ampia e sintesi multi-file su refactoring critici e algoritmi complessi.',
  },
];

const agenticPillars: AgenticPillar[] = [
  {
    title: 'Tooling esteso: MCP & custom skills',
    items: [
      'Model Context Protocol per collegare gli agenti a risorse esterne: ispezione di schemi PostgreSQL/SQLite, lettura di documentazione tecnica, orchestrazione di processi host.',
      'Skill e tool deterministici — estrazione metadati DB, calcolo di hash crittografici, scaffolding di boilerplate — per non delegare al calcolo probabilistico operazioni che devono restare riproducibili.',
    ],
  },
  {
    title: 'Memoria & continuous alignment',
    items: [
      'Separazione netta tra working memory volatile e memoria a lungo termine persistita su SQLite (<code>state.db</code>).',
      'Sliding window orientata agli ultimi mesi di attività e compattazione asincrona delle decisioni superate: contesto rigidamente entro l\'hard cap di 4.000 token, con headroom a 8.000 solo per task complessi.',
      'Eval loop con cron job in background: analisi dei log di esecuzione e degli errori di generazione per distillare nuove regole e guardrail nel system prompt.',
    ],
  },
  {
    title: 'Sicurezza operativa: least privilege & HITL',
    items: [
      'Autonomia read-only completa: ispezione file, analisi statica, cat, ls, ricerca.',
      'Side-effect gate: autorizzazione umana esplicita e preventiva per ogni mutazione distruttiva — <code>rm</code>, modifiche di rete, overwrite di file non tracciati da Git, script con privilegi di root.',
    ],
  },
];

// ---------- MATRICE COMPETENZE ----------

const skillAreas: SkillArea[] = [
  {
    area: 'AI Systems & Agents',
    summary: 'Governo del ciclo di sviluppo assistito, non uso passivo degli strumenti.',
    items: [
      { name: 'Claude Code', note: 'deep execution e refactoring multi-file' },
      { name: 'Hermes', note: 'open-weight, self-hosted, tool calling nativo' },
      { name: 'Sub-Agent Drivers', note: 'contesto isolato per task' },
      { name: 'Context Engineering', note: 'spec versionate, grounding, anti context rot' },
      { name: 'Model Context Protocol (MCP)', note: 'integrazione di risorse esterne' },
      { name: 'LLM APIs', note: 'Gemini, Claude: structured output e retry policy' },
      { name: 'Continuous Eval Loops', note: 'analisi log, prompt drift mitigation' },
      { name: 'Long-Term Memory Design', note: 'state.db, 4k hard cap, compattazione' },
    ],
  },
  {
    area: 'Backend & Data Storage',
    summary: 'Modellazione, concorrenza e caching su dati che non possono divergere.',
    items: [
      { name: 'PostgreSQL', note: 'modellazione relazionale, indici B-Tree, indici parziali, optimistic locking' },
      { name: 'Redis', note: 'caching in-memory disaccoppiato dallo storage primario' },
      { name: 'REST APIs', note: 'contratti espliciti e validazione su schema' },
      { name: 'Pattern asincroni', note: 'Mailbox-as-a-Queue, worker at-least-once, code e retry con backoff' },
    ],
  },
  {
    area: 'Frontend & Web Architecture',
    summary: 'Distribuzione statica all\'edge e metriche misurate, non percepite.',
    items: [
      { name: 'Astro', note: 'isole client esplicite, HTML minimo' },
      { name: 'Next.js (SSG)', note: 'App Router, build-time rendering' },
      { name: 'React / Vue 3', note: 'componenti e state management (Pinia)' },
      { name: 'TypeScript / JavaScript', note: 'tipizzazione stretta end-to-end' },
      { name: 'Edge CDN Distribution', note: 'Vercel: TTFB < 30 ms, costo server nullo' },
      { name: 'Core Web Vitals', note: 'LCP, CLS, INP: ottimizzazione e misura' },
    ],
  },
  {
    area: 'Systems & Embedded',
    summary: 'Sistemi che devono sopravvivere a un blackout, non solo a un test.',
    items: [
      { name: 'MicroPython', note: 'runtime su hardware a risorse limitate' },
      { name: 'Quectel Cellular Modules', note: 'connettività LTE industriale' },
      { name: 'RS232 / RS485', note: 'protocolli seriali custom, staged update, ACK/NACK' },
      { name: 'Integrità del payload', note: 'SHA-256, pacchettizzazione deterministica' },
      { name: 'Linux CLI / Bash', note: 'amministrazione quotidiana e automazione' },
      { name: 'Git / GitHub', note: 'workflow di branch, review e versioning' },
    ],
  },
  {
    area: 'Infrastructure & Networking Lab',
    summary: 'Ambiente di laboratorio dove i sistemi vengono costruiti e messi sotto stress.',
    items: [
      { name: 'MikroTik RouterOS', note: 'routing, VLAN, firewall' },
      { name: 'pfSense', note: 'firewalling avanzato e VPN' },
      { name: 'Proxmox', note: 'virtualizzazione e container LXC' },
      { name: 'Docker', note: 'containerizzazione dei servizi' },
      { name: 'Nginx', note: 'reverse proxy e TLS termination' },
      { name: 'IEC 62056-21', note: 'lettura contatori energetici' },
    ],
  },
];

// ---------- TERMINAL: NEOFETCH ----------

// Monogramma "MDP" (ANSI Shadow, 29 colonne x 6 righe).
const neofetchArt = [
  '███╗   ███╗ ██████╗  ██████╗ ',
  '████╗ ████║ ██╔══██╗ ██╔══██╗',
  '██╔████╔██║ ██║  ██║ ██████╔╝',
  '██║╚██╔╝██║ ██║  ██║ ██╔═══╝ ',
  '██║ ╚═╝ ██║ ██████╔╝ ██║     ',
  '╚═╝     ╚═╝ ╚═════╝  ╚═╝     ',
].join('\n');

const neofetchInfo = [
  'Mattia@Portfolio',
  '----------------',
  'OS: Fedora Linux 43',
  'Shell: kitty',
  'Stack: Python, TypeScript, Rust',
  'Data: PostgreSQL, Redis, SQLite',
  'Edge: Astro, Next.js @ Vercel',
  'Agents: Claude Code, Hermes, MCP',
  'Status: open to work',
].join('\n');

function renderNeofetch(): string {
  // Nessun whitespace tra i tag: il contenitore è pre-wrap e gli spazi
  // verrebbero resi come righe vuote, forzando lo scroll del terminale.
  return `<div class="neofetch"><pre class="neofetch__art">${escapeHtml(neofetchArt)}</pre><pre class="neofetch__info">${escapeHtml(neofetchInfo)}</pre></div>`;
}

// ---------- TERMINAL: SEQUENZA DI APERTURA ----------

interface TerminalLine {
  type: 'prompt' | 'output' | 'pre' | 'neofetch';
  text: string;
}

const terminalSequence: TerminalLine[] = [
  { type: 'prompt', text: '$ whoami' },
  { type: 'output', text: 'mattia-de-pascalis' },
  { type: 'prompt', text: '$ neofetch' },
  { type: 'neofetch', text: '' },
];

// ---------- TERMINAL: COMANDI ----------

const pipelineChain = methodologySteps.map(step => step.pipelineLabel);

const workflowReport = [
  '$ mattia --show-workflow',
  '',
  `[PIPELINE]   ${pipelineChain.slice(0, 2).join(' -> ')}`,
  `             -> ${pipelineChain.slice(2).join(' -> ')}`,
  '[MODELS]     Hermes (Local / Tool-Calling / Audit)',
  '             + Claude Code / Pi (Deep Implementation)',
  '[MEMORY]     state.db persistent memory',
  '             (4k hard-cap, sliding window, auto-compaction)',
  '[EVAL]       Automated cron-based prompt drift mitigation & log analysis',
  '[SAFETY]     Read-only autonomy + Human-in-the-loop',
  '             on side-effect / destructive commands',
].join('\n');

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

function skillsReport(): string {
  return skillAreas.map(area =>
    `${area.area.toUpperCase()}\n${area.items.map(item => `   ${item.name}${item.note ? ` — ${item.note}` : ''}`).join('\n')}`
  ).join('\n\n');
}

function projectsReport(filter: string): string {
  if (filter === 'all' || filter === 'flagship') {
    const flagships = caseStudies.map((study, index) =>
      `  ▸ ${String(index + 1).padStart(2, '0')} ${study.title}\n     ${study.tech.join(' · ')}${study.live ? `\n     ${study.live}` : ''}`
    ).join('\n\n');
    if (filter === 'flagship') {
      return `FLAGSHIP CASE STUDIES\n\n${flagships}`;
    }
    const additional = projects.map(project =>
      `  ▸ ${project.title} [${project.category}]\n     ${project.tech.join(' · ')}${project.github ? `\n     ${project.github}` : ''}${project.live ? `\n     ${project.live}` : ''}`
    ).join('\n\n');
    return `FLAGSHIP CASE STUDIES\n\n${flagships}\n\nADDITIONAL SYSTEMS & TOOLING\n\n${additional}`;
  }

  const filtered = projects.filter(project => project.category === filter);
  if (filtered.length === 0) {
    return `Nessun progetto nella categoria "${filter}". Categorie: all, flagship, main, hobby, wip.`;
  }
  return filtered.map(project =>
    `  ▸ ${project.title}\n     ${project.tech.join(' · ')}${project.live ? `\n     ${project.live}` : ''}`
  ).join('\n\n');
}

const terminalCommands: Record<string, (args: string[]) => string | Promise<string>> = {
  help: () => [
    'Comandi disponibili:',
    '  help                    Questo messaggio',
    '  workflow                Pipeline agentica (alias: methodology)',
    '  cat methodology.md      Specifica del flusso a sub-agenti',
    '  skills                  Matrice delle competenze',
    '  projects [filtro]       Case study e progetti (flagship, main, hobby, wip)',
    '  contact                 Canali di contatto',
    '  neofetch                Info di sistema',
    '  whoami                  Nome utente',
    '  ls                      Elenca file',
    '  clear                   Reset del terminale',
    '  fortune                 Citazione casuale',
    '  caffe                   Pausa caffè',
    '  ping <host>             Test di raggiungibilità',
    '  sl                      Train',
    '',
    'Le scorciatoie cliccabili sotto il terminale eseguono gli stessi comandi.',
  ].join('\n'),

  skills: () => skillsReport(),

  projects: (args: string[]) => projectsReport(args[0] || 'all'),

  workflow: () => '__WORKFLOW__',

  methodology: () => '__WORKFLOW__',

  cat: (args: string[]) => {
    const file = (args[0] || '').toLowerCase();
    if (file === 'methodology.md' || file === 'claude.md' || file === 'architecture.md') {
      return '__WORKFLOW__';
    }
    return `cat: ${args[0] || ''}: No such file or directory`;
  },

  contact: () => [
    `GitHub: ${GITHUB_URL}`,
    '',
    'Disponibile per ruoli e collaborazioni su sistemi agentici,',
    'backend distribuiti e firmware industriale.',
  ].join('\n'),

  neofetch: () => '__NEOFETCH__',

  whoami: () => 'mattia-de-pascalis — AI Software Engineer & Systems Developer',

  ls: () => 'CLAUDE.md  architecture.md  methodology.md  projects/  skills.json  state.db',

  clear: () => '__RESET__',

  fortune: () => fortunes[Math.floor(Math.random() * fortunes.length)],

  caffe: () => '__CAFFE__',

  ping: (args: string[]) => {
    const host = args[0] || 'localhost';
    return [
      `PING ${host} 56(84) bytes of data.`,
      `64 bytes from ${host}: icmp_seq=1 ttl=64 time=0.042 ms`,
      `64 bytes from ${host}: icmp_seq=2 ttl=64 time=0.038 ms`,
      `64 bytes from ${host}: icmp_seq=3 ttl=64 time=0.051 ms`,
      '',
      `--- ${host} ping statistics ---`,
      '3 packets transmitted, 3 received, 0% packet loss, time 2004ms',
      'rtt min/avg/max/mdev = 0.038/0.044/0.051/0.005 ms',
    ].join('\n');
  },

  sl: () => '__SL__',

  sudo: (args: string[]) => {
    if (args.length === 0) return 'sudo: missing operand.';
    return `sudo: ${args.join(' ')}: command not found`;
  },
};

// ---------- TERMINAL: HELPERS ----------

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function terminalAppend(body: HTMLElement, html: string): void {
  const line = document.createElement('div');
  line.className = 'terminal__line';
  line.innerHTML = html;
  body.appendChild(line);
  body.scrollTop = body.scrollHeight;
}

function terminalOutput(body: HTMLElement, text: string): void {
  terminalAppend(body, `<span class="terminal__output">${escapeHtml(text).replace(/\n/g, '<br>')}</span>`);
}

async function handleCommand(command: string, body: HTMLElement): Promise<void> {
  const parts = command.trim().split(/\s+/);
  const name = (parts[0] || '').toLowerCase();
  const args = parts.slice(1);

  const handler = terminalCommands[name];
  if (!handler) {
    terminalOutput(body, `bash: ${name}: command not found. Prova "help".`);
    return;
  }

  const result = await handler(args);

  if (result === '__RESET__') {
    body.innerHTML = '';
    const line = document.createElement('div');
    line.className = 'terminal__line';
    line.innerHTML = renderNeofetch();
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
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

  if (result === '__NEOFETCH__') {
    const line = document.createElement('div');
    line.className = 'terminal__line';
    line.innerHTML = renderNeofetch();
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
    return;
  }

  if (result === '__WORKFLOW__') {
    terminalAppend(body, `<pre class="terminal__pre">${escapeHtml(workflowReport)}</pre>`);
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
    const { promise, resolve } = Promise.withResolvers<void>();
    setTimeout(resolve, 80);
    await promise;
    bar.textContent = `[${'█'.repeat(i)}${'░'.repeat(20 - i)}] ${i * 5}%`;
    body.scrollTop = body.scrollHeight;
  }
  terminalOutput(body, '✅ Caffè pronto.');
}

// ---------- TERMINAL: INPUT INTERATTIVO ----------

let terminalRunner: ((command: string) => void) | null = null;
const pendingCommands: string[] = [];

function initInteractiveTerminal(body: HTMLElement): void {
  let activeInput: HTMLInputElement | null = null;

  function createPromptLine(): HTMLInputElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'terminal__line terminal__line--input';

    const prompt = document.createElement('span');
    prompt.className = 'terminal__prompt';
    prompt.textContent = '$ ';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'terminal__input-inline';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('inputmode', 'text');
    input.setAttribute('aria-label', 'Comando terminale');

    input.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      submit(input);
    });

    wrapper.appendChild(prompt);
    wrapper.appendChild(input);
    body.appendChild(wrapper);
    body.scrollTop = body.scrollHeight;

    requestAnimationFrame(() => {
      input.style.width = `calc(100% - ${prompt.getBoundingClientRect().width + 2}px)`;
    });

    return input;
  }

  function freeze(input: HTMLInputElement, command: string): void {
    const wrapper = input.parentElement;
    if (!wrapper) return;
    wrapper.classList.remove('terminal__line--input');
    wrapper.innerHTML = `<span class="terminal__prompt">$ ${escapeHtml(command)}</span>`;
  }

  function submit(input: HTMLInputElement): void {
    const command = input.value.trim();
    if (command === '') return;
    freeze(input, command);
    activeInput = null;
    void handleCommand(command, body).then(focusNew);
  }

  function focusNew(): void {
    activeInput = createPromptLine();
    activeInput.focus();

    const queued = pendingCommands.shift();
    if (queued === undefined || !activeInput) return;
    activeInput.value = queued;
    submit(activeInput);
  }

  if (body.dataset.terminalBound !== '1') {
    body.dataset.terminalBound = '1';
    body.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.closest('a, button')) return;
      activeInput?.focus();
    });
  }

  terminalRunner = (command: string) => {
    if (!activeInput) {
      pendingCommands.push(command);
      return;
    }
    activeInput.value = command;
    submit(activeInput);
  };

  focusNew();
}

function initTerminal(): void {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  let lineIndex = 0;
  let charIndex = 0;
  let currentLineEl: HTMLDivElement | null = null;

  function typeNext(): void {
    if (lineIndex >= terminalSequence.length) {
      initInteractiveTerminal(body!);
      return;
    }

    const line = terminalSequence[lineIndex];

    if (charIndex === 0) {
      currentLineEl = document.createElement('div');
      currentLineEl.className = 'terminal__line';
      body!.appendChild(currentLineEl);
    }
    if (!currentLineEl) return;

    if (line.type === 'prompt') {
      if (charIndex < line.text.length) {
        const typed = line.text.slice(0, charIndex + 1);
        currentLineEl.innerHTML = `<span class="terminal__prompt">${escapeHtml(typed)}</span><span class="terminal__cursor"></span>`;
        charIndex++;
        body!.scrollTop = body!.scrollHeight;
        setTimeout(typeNext, 25 + Math.random() * 20);
        return;
      }
      currentLineEl.innerHTML = `<span class="terminal__prompt">${escapeHtml(line.text)}</span>`;
    } else if (line.type === 'output') {
      currentLineEl.innerHTML = `<span class="terminal__output">${escapeHtml(line.text)}</span>`;
    } else if (line.type === 'pre') {
      currentLineEl.innerHTML = `<pre class="terminal__pre">${escapeHtml(line.text)}</pre>`;
    } else {
      currentLineEl.innerHTML = renderNeofetch();
    }

    charIndex = 0;
    lineIndex++;
    body!.scrollTop = body!.scrollHeight;
    setTimeout(typeNext, 320);
  }

  setTimeout(typeNext, 500);
}

// ---------- TERMINAL: SCORCIATOIE ----------

const terminalShortcuts: { command: string; label: string; hint: string }[] = [
  { command: 'help', label: 'help', hint: 'Comandi' },
  { command: 'projects', label: 'projects', hint: 'Case study' },
  { command: 'skills', label: 'skills', hint: 'Competenze' },
  { command: 'workflow', label: 'workflow', hint: 'Pipeline' },
  { command: 'contact', label: 'contact', hint: 'GitHub' },
];

function initTerminalShortcuts(): void {
  const container = document.getElementById('terminal-shortcuts');
  if (!container) return;

  container.innerHTML = terminalShortcuts.map(shortcut => `
    <button class="terminal__shortcut" type="button" data-command="${escapeHtml(shortcut.command)}">
      <span class="terminal__shortcut-cmd">$ ${escapeHtml(shortcut.label)}</span>
      <span class="terminal__shortcut-hint">${escapeHtml(shortcut.hint)}</span>
    </button>
  `).join('');

  container.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('.terminal__shortcut');
    const command = button?.dataset.command;
    if (!command) return;
    if (terminalRunner) {
      terminalRunner(command);
    } else {
      pendingCommands.push(command);
    }
  });
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
  const total = lightboxState.images.length;
  lightboxState.index = ((lightboxState.index + direction) % total + total) % total;
  const img = document.querySelector<HTMLImageElement>('.lightbox__image');
  if (img) img.src = lightboxState.images[lightboxState.index];
}

// ---------- RENDER: CASE STUDY ----------

function renderCaseStudy(study: CaseStudy, index: number, hero: boolean): string {
  const links = [
    study.live ? `<a href="${study.live}" class="project-card__link" target="_blank" rel="noopener">Live →</a>` : '',
  ].filter(Boolean).join('');

  return `
    <article class="project-case reveal${hero ? ' project-case--hero' : ''}">
      <header class="project-case__header">
        <span class="project-case__index">${String(index + 1).padStart(2, '0')} / Flagship</span>
        <h3 class="project-case__title">${escapeHtml(study.title)}</h3>
        <div class="project-case__tech">
          ${study.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}
        </div>
      </header>
      <div class="project-case__body">
        <section class="project-case__block">
          <h4 class="project-case__label">Problema di business</h4>
          <p class="project-case__text">${escapeHtml(study.problem)}</p>
        </section>
        <section class="project-case__block">
          <h4 class="project-case__label">Architettura tecnica</h4>
          <ul class="project-case__list">
            ${study.architecture.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </section>
        <section class="project-case__block">
          <h4 class="project-case__label">Risultato &amp; trade-off</h4>
          <p class="project-case__text">${escapeHtml(study.outcome)}</p>
          ${links ? `<div class="project-card__links">${links}</div>` : ''}
        </section>
      </div>
      ${study.images && study.images.length > 0
        ? `<div class="project-case__media">${renderCarousel(study.images, study.title, 'project-card__image')}</div>`
        : ''}
    </article>
  `;
}

function renderFlagshipCases(): void {
  const heroContainer = document.getElementById('project-featured');
  const gridContainer = document.getElementById('flagship-grid');

  if (heroContainer && caseStudies[0]) {
    heroContainer.innerHTML = renderCaseStudy(caseStudies[0], 0, true);
  }
  if (gridContainer) {
    gridContainer.innerHTML = caseStudies
      .slice(1)
      .map((study, index) => renderCaseStudy(study, index + 1, false))
      .join('');
  }
  initCarousels();
}

// ---------- RENDER: GRIGLIA PROGETTI ----------

function renderProjectGrid(filter: string = 'all'): void {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="project-empty reveal">
        <p>// Nessun progetto in questa categoria.</p>
      </div>
    `;
    initScrollReveal();
    return;
  }

  grid.innerHTML = filtered.map(project => `
    <div class="project-card reveal" data-category="${project.category}">
      ${project.images && project.images.length > 0 ? renderCarousel(project.images, project.title, 'project-card__image') : ''}
      <span class="project-card__category">${categoryLabel(project.category)}</span>
      <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
      <p class="project-card__desc">${escapeHtml(project.description)}</p>
      <div class="project-card__tech">
        ${project.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}
      </div>
      <div class="project-card__links">
        ${project.github ? `<a href="${project.github}" class="project-card__link" target="_blank" rel="noopener">GitHub →</a>` : ''}
        ${project.live ? `<a href="${project.live}" class="project-card__link" target="_blank" rel="noopener">Live →</a>` : ''}
      </div>
    </div>
  `).join('');

  initScrollReveal();
  initCarousels();
}

function categoryLabel(category: string): string {
  switch (category) {
    case 'main': return '● Professionale';
    case 'hobby': return '◐ Hobby';
    case 'wip': return '◌ In sviluppo';
    default: return category;
  }
}

function initFilters(): void {
  const chips = document.querySelectorAll<HTMLButtonElement>('.filter-chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderProjectGrid(chip.dataset.filter || 'all');
    });
  });
}

// ---------- RENDER: METODOLOGIA ----------

function renderMethodology(): void {
  const stepsContainer = document.getElementById('methodology-steps');
  const pillarsContainer = document.getElementById('methodology-pillars');

  if (stepsContainer) {
    stepsContainer.innerHTML = methodologySteps.map((step, index) => `
      <li class="methodology__step reveal">
        <span class="methodology__num">${String(index + 1).padStart(2, '0')}</span>
        <div class="methodology__content">
          <h3 class="methodology__title">${escapeHtml(step.title)}</h3>
          <p class="methodology__summary">${step.summary}</p>
          <p class="methodology__detail">${step.detail}</p>
          <span class="methodology__artifact">→ ${escapeHtml(step.pipelineLabel)}</span>
        </div>
      </li>
    `).join('');
  }

  if (pillarsContainer) {
    pillarsContainer.innerHTML = `
      <div class="methodology__pillar methodology__pillar--models reveal">
        <h3 class="methodology__pillar-title">Matrice modelli &amp; runtime</h3>
        ${modelMatrix.map(model => `
          <div class="methodology__model">
            <span class="methodology__model-name">${escapeHtml(model.name)}</span>
            <span class="methodology__model-role">${escapeHtml(model.role)}</span>
            <p class="methodology__model-rationale">${escapeHtml(model.rationale)}</p>
          </div>
        `).join('')}
      </div>
      ${agenticPillars.map(pillar => `
        <div class="methodology__pillar reveal">
          <h3 class="methodology__pillar-title">${escapeHtml(pillar.title)}</h3>
          <ul class="methodology__list">
            ${pillar.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    `;
  }
}

// ---------- RENDER: MATRICE COMPETENZE ----------

function renderSkills(): void {
  const container = document.getElementById('skills-matrix');
  if (!container) return;

  container.innerHTML = skillAreas.map(area => `
    <div class="skills-matrix__row reveal">
      <div class="skills-matrix__head">
        <h3 class="skills-matrix__area">${escapeHtml(area.area)}</h3>
        <p class="skills-matrix__summary">${escapeHtml(area.summary)}</p>
      </div>
      <ul class="skills-matrix__list">
        ${area.items.map(item => `
          <li class="skills-matrix__item">
            <span class="skills-matrix__tech">${escapeHtml(item.name)}</span>
            ${item.note ? `<span class="skills-matrix__note">${escapeHtml(item.note)}</span>` : ''}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// ---------- THEME TOGGLE ----------

function initThemeToggle(): void {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

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
  const sections = Array.from(document.querySelectorAll<HTMLElement>('.section'));
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__link');
  if (sections.length === 0) return;

  function update(): void {
    const navHeight = document.getElementById('nav')?.offsetHeight ?? 0;
    const probe = window.scrollY + navHeight + 8;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    let activeId = '';
    if (atBottom) {
      // Le sezioni finali possono essere più basse della finestra: a fondo pagina
      // l'ultima sezione è attiva per definizione.
      activeId = sections[sections.length - 1].id;
    } else {
      for (const section of sections) {
        if (section.offsetTop <= probe) activeId = section.id;
      }
    }

    navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === activeId));
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// ---------- HAMBURGER ----------

function initHamburger(): void {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav__links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });

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
  initTerminalShortcuts();
  initTerminal();
  initLightbox();
  renderMethodology();
  renderFlagshipCases();
  renderProjectGrid();
  renderSkills();
  initFilters();
  initScrollReveal();
  initScrollSpy();
  initHamburger();
  initScrollTop();

  document.querySelectorAll('.about__content, .methodology__lead, .contact__text, .contact__links').forEach(el => {
    el.classList.add('reveal');
  });
  initScrollReveal();
});
