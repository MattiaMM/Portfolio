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
        <div class="hidden lg:block h-96">
          <AnimatedHeroVisual />
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
import AnimatedHeroVisual from '@/components/AnimatedHeroVisual.vue'
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

