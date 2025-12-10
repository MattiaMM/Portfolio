<template>
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <Particles id="hero-bg" class="absolute inset-0" :options="particlesOptions" />

    <div class="container relative z-10 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Copy -->
        <div class="space-y-8">
          <div>
            <p class="text-cyan-400 text-sm font-mono font-semibold tracking-wider mb-4">FULL‑STACK · PYTHON · AUTOMATION</p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm
              <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mattia De Pascalis
              </span>
            </h1>
            <div class="text-xl md:text-2xl text-gray-300 leading-relaxed">
              I build <span class="font-semibold text-cyan-400">modern web apps</span> and
              <TypingText tag="span" :text="'CLI automation.'" :delay="200" class="font-semibold text-cyan-400" />
            </div>
          </div>

          <p class="text-gray-400 text-lg leading-relaxed max-w-xl">
            Full‑stack and Python developer based in Milan. I design and ship fast, reliable software with Vue, TypeScript, Node.js and Python.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink
              to="/projects"
              class="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 text-center sm:text-left"
            >
              View Projects
            </RouterLink>
            <a
              href="mailto:hello@mattiadepascalis.dev"
              class="px-8 py-3 rounded-lg border border-gray-700 text-gray-200 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 text-center sm:text-left"
            >
              Contact me
            </a>
          </div>
        </div>

        <!-- Right: Animated Visual -->
        <div class="hidden lg:flex justify-center items-center">
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
    </div>
  </section>

  <!-- About Section -->
  <section class="py-20 md:py-28 bg-slate-900">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
      <p class="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl">
        I'm a full‑stack and Python developer from Milan. I enjoy building resilient web applications, developer tooling and command‑line automation that saves time. My stack centers on Vue 3 + TypeScript on the frontend and Node.js / Python on the backend.
      </p>

      <!-- Skills Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card group hover:border-cyan-400">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-pulse"></div>
            <h3 class="text-lg font-semibold">Frontend</h3>
          </div>
          <p class="text-gray-400 text-sm">Vue 3, Vite, TypeScript, Tailwind, Animations</p>
        </div>

        <div class="card group hover:border-cyan-400">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-pulse"></div>
            <h3 class="text-lg font-semibold">Backend</h3>
          </div>
          <p class="text-gray-400 text-sm">Node.js, FastAPI, REST, WebSockets, Auth</p>
        </div>

        <div class="card group hover:border-cyan-400">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-pulse"></div>
            <h3 class="text-lg font-semibold">Automation</h3>
          </div>
          <p class="text-gray-400 text-sm">Python CLI, scripting, scraping, CI/CD pipelines</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects Section -->
  <section class="py-20 md:py-28">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <article v-for="p in topProjects" :key="p.slug" class="card group hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col">
          <h3 class="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{{ p.title }}</h3>
          <p class="text-gray-400 text-sm mb-6 flex-grow">{{ p.excerpt }}</p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="t in p.tech.slice(0, 4)" :key="t" class="tag text-xs">{{ t }}</span>
          </div>

          <RouterLink
            :to="`/projects/${p.slug}`"
            class="btn text-sm inline-block"
          >
            Read more →
          </RouterLink>
        </article>
      </div>

      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-gray-200 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
      >
        Browse all projects
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import projects from '@/data/projects'
import TypingText from '@/components/TypingText.vue'
import Particles from '@tsparticles/vue3'

const topProjects = computed(() => projects.slice(0, 3))

// Lighten particles on small screens
const isNarrow = ref(false)
let mq: MediaQueryList | undefined
const handleChange = () => { if (mq) isNarrow.value = mq.matches }
onMounted(() => {
  mq = window.matchMedia('(max-width: 768px)')
  isNarrow.value = mq.matches
  mq.addEventListener('change', handleChange)
})
onUnmounted(() => {
  mq?.removeEventListener('change', handleChange)
})

const particlesOptions = computed(() => ({
  background: { color: { value: 'transparent' } },
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: isNarrow.value ? 30 : 50, density: { enable: true, area: 1000 } },
    color: { value: ['#06b6d4', '#0ea5e9', '#3b82f6', '#ffffff'] },
    links: { enable: true, color: '#4b5563', distance: isNarrow.value ? 100 : 140, opacity: 0.2, width: 0.8 },
    move: { enable: true, speed: isNarrow.value ? 0.4 : 0.6, outModes: { default: 'out' } },
    opacity: { value: { min: 0.15, max: 0.5 } },
    size: { value: { min: 0.8, max: 2 } }
  },
  detectRetina: true
}))
</script>

<style scoped>
/* Solar System Animation */
.solar {
  position: relative;
  width: clamp(260px, 45vw, 440px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  isolation: isolate;
  contain: paint;
}

.sun {
  width: clamp(56px, 7.2vw, 80px);
  height: clamp(56px, 7.2vw, 80px);
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, #ffd36a, #ff9933 55%, #ff6b00 80%);
  box-shadow: 0 0 40px rgba(255, 163, 26, 0.55), 0 0 100px rgba(255, 115, 0, 0.35);
}

.orbit {
  position: absolute;
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 50%;
}

.orbit .track {
  position: absolute;
  inset: 0;
  transform: rotate(var(--start, 0deg));
  transform-origin: 50% 50%;
  will-change: transform;
  backface-visibility: hidden;
  animation: spinOrbit var(--dur, 16s) linear infinite;
}

.orbit.rev .track {
  animation-direction: reverse;
}

.planet {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: radial-gradient(
    circle at 75% 50%,
    color-mix(in oklab, var(--color, #999) 95%, white) 0%,
    color-mix(in oklab, var(--color, #999) 85%, white) 28%,
    var(--color, #999) 58%,
    color-mix(in oklab, var(--color, #999) 35%, black) 100%
  );
  box-shadow: 0 0 10px color-mix(in oklab, var(--color, #999) 45%, transparent);
}

.planet-1 {
  --color: #8b5cf6;
  width: clamp(8px, 1.1vw, 12px);
  height: clamp(8px, 1.1vw, 12px);
}

.planet-2 {
  --color: #22d3ee;
  width: clamp(9px, 1.2vw, 14px);
  height: clamp(9px, 1.2vw, 14px);
}

.planet-3 {
  --color: #60a5fa;
  width: clamp(7px, 0.95vw, 11px);
  height: clamp(7px, 0.95vw, 11px);
}

.planet-4 {
  --color: #34d399;
  width: clamp(10px, 1.3vw, 16px);
  height: clamp(10px, 1.3vw, 16px);
}

.planet-2::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200%;
  height: 70%;
  transform: translate(-50%, -50%) rotate(20deg);
  border: 1px solid color-mix(in oklab, var(--color) 45%, transparent);
  border-radius: 50%;
  opacity: 0.8;
}

.moon-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;
  will-change: transform;
  backface-visibility: hidden;
  border-radius: 50%;
  animation: spinMoon var(--moon-dur, 5s) linear infinite;
}

.moon {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: radial-gradient(circle at 70% 50%, #fff, #cbd5e1 55%, #64748b 100%);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.35);
}

.orbit-1 {
  width: 36%;
  height: 36%;
}

.orbit-2 {
  width: 52%;
  height: 52%;
}

.orbit-3 {
  width: 68%;
  height: 68%;
}

.orbit-4 {
  width: 84%;
  height: 84%;
}

@keyframes spinOrbit {
  from {
    transform: rotate(var(--start, 0deg));
  }
  to {
    transform: rotate(calc(var(--start, 0deg) + 360deg));
  }
}

@keyframes spinMoon {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit .track {
    animation-duration: 0s;
  }
  .moon-orbit {
    animation-duration: 0s;
  }
}
</style>
