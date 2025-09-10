<template>
  <section class="hero">
    <Particles id="hero-bg" class="particles" :options="particlesOptions" />

    <div class="container hero-inner">
      <div class="copy">
        <p class="kicker mono">Full‑Stack · Python · Automation</p>
        <h1>
          Hi, I'm <span class="gradient">Mattia De Pascalis</span>.
          <br />
          <TypingText tag="span" :text="'I build modern web apps and CLI automation.'" :delay="200" />
        </h1>
        <p class="sub balance">Full‑stack and Python developer based in Milan. I design and ship fast, reliable software with Vue, TypeScript, Node.js and Python.</p>
        <div class="btns">
          <RouterLink class="btn primary" to="/projects">View Projects</RouterLink>
          <a class="btn" href="mailto:hello@mattiadepascalis.dev">Contact me</a>
        </div>
      </div>

      <div class="visual">
        <div class="solar" aria-hidden="true">
          <div class="sun"></div>
          <!-- Orbits with varied start angles, speeds and directions -->
          <div class="orbit orbit-1" style="--start: 25deg; --dur: 9s">
            <div class="track">
              <div class="planet planet-1"></div>
            </div>
          </div>
          <div class="orbit orbit-2 rev" style="--start: 140deg; --dur: 14s">
            <div class="track">
              <div class="planet planet-2"></div>
            </div>
          </div>
          <div class="orbit orbit-3" style="--start: 290deg; --dur: 20s">
            <div class="track">
              <div class="planet planet-3">
                <div class="moon-orbit" style="--moon-dur: 4.8s">
                  <div class="moon"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="orbit orbit-4" style="--start: 80deg; --dur: 28s">
            <div class="track">
              <div class="planet planet-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="about">
    <div class="container">
      <TypingText tag="h2" text="About" />
      <p>
        I'm a full‑stack and Python developer from Milan. I enjoy building resilient web applications, developer tooling and
        command‑line automation that saves time. My stack centers on Vue 3 + TypeScript on the frontend and Node.js / Python
        on the backend.
      </p>
      <div class="grid cols-3" style="margin-top:18px">
        <div class="card">
          <strong>Frontend</strong>
          <div class="muted">Vue 3, Vite, TypeScript, Tailwind, Animations</div>
        </div>
        <div class="card">
          <strong>Backend</strong>
          <div class="muted">Node.js, FastAPI, REST, WebSockets, Auth</div>
        </div>
        <div class="card">
          <strong>Automation</strong>
          <div class="muted">Python CLI, scripting, scraping, CI/CD pipelines</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="projects">
    <div class="container">
      <TypingText tag="h2" text="Featured Projects" :delay="100" />
      <div class="grid cols-3">
        <article v-for="p in topProjects" :key="p.slug" class="card">
          <h3 style="margin-top:0">{{ p.title }}</h3>
          <p class="muted">{{ p.excerpt }}</p>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 14px">
            <span v-for="t in p.tech.slice(0,4)" :key="t" class="mono tag">{{ t }}</span>
          </div>
          <RouterLink class="btn" :to="`/projects/${p.slug}`">Read more</RouterLink>
        </article>
      </div>
      <div style="margin-top:18px">
        <RouterLink class="btn" to="/projects">Browse all projects</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import projects from '@/data/projects'
import TypingText from '@/components/TypingText.vue'

const topProjects = computed(() => projects.slice(0, 3))

// Lighten particles on small screens
const isNarrow = ref(false)
let mq: MediaQueryList | undefined
const handleChange = () => { if (mq) isNarrow.value = mq.matches }
onMounted(() => {
  mq = window.matchMedia('(max-width: 720px)')
  isNarrow.value = mq.matches
  mq.addEventListener('change', handleChange)
})
onUnmounted(() => {
  mq?.removeEventListener('change', handleChange)
})

const particlesOptions = computed(() => ({
  background: { color: { value: '#0a0a0f' } },
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: isNarrow.value ? 34 : 60, density: { enable: true, area: 800 } },
    color: { value: ['#8b5cf6', '#22d3ee', '#ffffff'] },
    links: { enable: true, color: '#6b7280', distance: isNarrow.value ? 90 : 120, opacity: 0.22, width: 1 },
    move: { enable: true, speed: isNarrow.value ? 0.45 : 0.7, outModes: { default: 'out' } },
    opacity: { value: { min: 0.2, max: 0.55 } },
    size: { value: { min: 1, max: 2.6 } }
  },
  detectRetina: true
}))
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: clamp(40px, 7vw, 64px) 0 clamp(28px, 4vw, 40px);
}
.particles { position: absolute; inset: 0; z-index: 0; }
.hero-inner { position: relative; z-index: 1; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 20px; align-items: center; }
.copy .kicker { opacity: .8; margin: 0 0 6px; font-size: 0.95rem; letter-spacing: 0.2px; }
.copy h1 { font-size: clamp(26px, 4vw, 40px); line-height: 1.15; margin: 0 0 10px; }
.copy .sub { color: var(--muted); margin: 0 0 16px; max-width: 60ch; }
.gradient { background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; background-clip: text; color: transparent; }

.visual { display:flex; justify-content:center; }
.solar { position: relative; width: clamp(260px, 45vw, 440px); aspect-ratio: 1/1; border-radius: 50%; display: grid; place-items: center; isolation: isolate; contain: paint; }
.sun { width: clamp(56px, 7.2vw, 80px); height: clamp(56px, 7.2vw, 80px); border-radius: 999px; background: radial-gradient(circle at 30% 30%, #ffd36a, #ff9933 55%, #ff6b00 80%); box-shadow: 0 0 40px rgba(255, 163, 26, 0.55), 0 0 100px rgba(255, 115, 0, 0.35); }
/* Orbits */
.orbit { position: absolute; border: 1px solid color-mix(in oklab, var(--primary) 30%, transparent); border-radius: 50%; }
.orbit .track { position: absolute; inset: 0; transform: rotate(var(--start, 0deg)); transform-origin: 50% 50%; will-change: transform; backface-visibility: hidden; animation: spinOrbit var(--dur, 16s) linear infinite; }
.orbit.rev .track { animation-direction: reverse; }
/* Planet positioning anchored to the left edge so lighting faces inward (toward center) */
.planet { position: absolute; top: 50%; left: 0; transform: translate(-50%, -50%); border-radius: 999px; }
/* Planet shading: highlight always inward thanks to orbit rotation carrying local coords */
.planet {
  background: radial-gradient(circle at 75% 50%,
    color-mix(in oklab, var(--color, #999) 95%, white) 0%,
    color-mix(in oklab, var(--color, #999) 85%, white) 28%,
    var(--color, #999) 58%,
    color-mix(in oklab, var(--color, #999) 35%, black) 100%);
  box-shadow: 0 0 10px color-mix(in oklab, var(--color, #999) 45%, transparent);
}
/* Planet variants (size, color, extras) */
.planet-1 { --color: #8b5cf6; width: clamp(8px, 1.1vw, 12px); height: clamp(8px, 1.1vw, 12px); }
.planet-2 { --color: #22d3ee; width: clamp(9px, 1.2vw, 14px); height: clamp(9px, 1.2vw, 14px); }
.planet-3 { --color: #60a5fa; width: clamp(7px, 0.95vw, 11px); height: clamp(7px, 0.95vw, 11px); }
.planet-4 { --color: #34d399; width: clamp(10px, 1.3vw, 16px); height: clamp(10px, 1.3vw, 16px); }
/* Ring for planet-2 */
.planet-2::after { content: ""; position: absolute; left: 50%; top: 50%; width: 200%; height: 70%; transform: translate(-50%, -50%) rotate(20deg); border: 1px solid color-mix(in oklab, var(--color) 45%, transparent); border-radius: 50%; opacity: .8; }
/* Moon around planet-3 */
.moon-orbit { position: absolute; left: 50%; top: 50%; width: 18px; height: 18px; transform: translate(-50%, -50%); transform-origin: 50% 50%; will-change: transform; backface-visibility: hidden; border-radius: 50%; }
.moon-orbit { animation: spinMoon var(--moon-dur, 5s) linear infinite; }
.moon { position: absolute; top: 50%; left: 0; transform: translate(-50%, -50%); width: 4px; height: 4px; border-radius: 50%; background: radial-gradient(circle at 70% 50%, #fff, #cbd5e1 55%, #64748b 100%); box-shadow: 0 0 6px rgba(255,255,255,.35); }

/* Orbit sizes */
.orbit-1 { width: 36%; height: 36%; }
.orbit-2 { width: 52%; height: 52%; }
.orbit-3 { width: 68%; height: 68%; }
.orbit-4 { width: 84%; height: 84%; }

@keyframes spinOrbit {
  from { transform: rotate(var(--start, 0deg)); }
  to { transform: rotate(calc(var(--start, 0deg) + 360deg)); }
}

@keyframes spinMoon {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@media (max-width: 920px) {
  .hero-inner { grid-template-columns: 1fr; gap: 16px; }
  .visual { order: -1; }
}

@media (prefers-reduced-motion: reduce) {
  .orbit .track { animation-duration: 0s; }
  .moon-orbit { animation-duration: 0s; }
}
</style>
