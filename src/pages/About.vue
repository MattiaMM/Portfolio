<template>
  <!-- Hero Section -->
  <section class="py-20 md:py-28">
    <div class="container">
      <!-- Header -->
      <div class="mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p class="text-gray-300 text-lg leading-relaxed max-w-3xl">
          I'm Mattia De Pascalis, a full‑stack and Python developer from Milan. I craft fast, maintainable software with a focus on developer experience and reliability. I enjoy building Vue frontends, Python CLI tooling and cloud‑ready backends.
        </p>
      </div>

      <!-- About Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <!-- Profile Card -->
        <div class="card group hover:border-cyan-400">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-3 h-3 rounded-full bg-cyan-400"></div>
            <h2 class="text-xl font-bold">Profile</h2>
          </div>

          <ul class="space-y-3 text-gray-300">
            <li class="flex gap-3">
              <span class="text-cyan-400 font-semibold min-w-fit">Location:</span>
              <span>Milan, Italy</span>
            </li>
            <li class="flex gap-3">
              <span class="text-cyan-400 font-semibold min-w-fit">Focus:</span>
              <span>Full‑Stack (Vue/TS, Node), Python (CLI, automation)</span>
            </li>
            <li class="flex gap-3">
              <span class="text-cyan-400 font-semibold min-w-fit">Interests:</span>
              <span>DX, performance, clean architecture, testing</span>
            </li>
          </ul>
        </div>

        <!-- Approach Card -->
        <div class="card group hover:border-cyan-400">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-3 h-3 rounded-full bg-cyan-400"></div>
            <h2 class="text-xl font-bold">Approach</h2>
          </div>

          <ul class="space-y-3 text-gray-300">
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Clarity first: readable, maintainable code</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Strong typing and automated checks</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Test early, monitor in production</span>
            </li>
          </ul>
        </div>

        <!-- Experience Card -->
        <div class="card group hover:border-cyan-400">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-3 h-3 rounded-full bg-cyan-400"></div>
            <h2 class="text-xl font-bold">Experience</h2>
          </div>

          <ul class="space-y-2 text-gray-300 text-sm">
            <li>• Web development with modern JS/TS frameworks</li>
            <li>• Backend development (Node.js, FastAPI, Python)</li>
            <li>• Cloud deployment and CI/CD pipelines</li>
            <li>• CLI tools and automation scripts</li>
            <li>• API design and architecture</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="py-20 md:py-28 bg-slate-900">
    <div class="container">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <!-- Frontend -->
        <div>
          <h3 class="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM5 10a1 1 0 01-1-1V8a1 1 0 012 0v1a1 1 0 01-1 1zM5.757 5.757a1 1 0 000-1.414L5.05 5.05a1 1 0 101.414 1.414l.707-.707z" />
            </svg>
            Frontend
          </h3>

          <div class="flex flex-wrap gap-3">
            <span v-for="skill in frontend" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </div>

        <!-- Backend -->
        <div>
          <h3 class="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2H2a1 1 0 000 2h1v2H2a1 1 0 000 2h1v2a2 2 0 002 2h2v1a1 1 0 102 0v-1h2v1a1 1 0 102 0v-1h2a2 2 0 002-2v-2h1a1 1 0 100-2h-1v-2h1a1 1 0 100-2h-1V5a2 2 0 00-2-2h-2V2a1 1 0 10-2 0v1H7V2a1 1 0 10-2 0v1H5zm8 4v2h-2V7h2zm0 4v2h-2v-2h2zm-6-4v2H7V7h2zm0 4v2H7v-2h2z" />
            </svg>
            Backend
          </h3>

          <div class="flex flex-wrap gap-3">
            <span v-for="skill in backend" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </div>
      </div>

      <!-- Additional Skills -->
      <div>
        <h3 class="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          Other
        </h3>

        <div class="flex flex-wrap gap-3">
          <span v-for="skill in other" :key="skill" class="tag">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 md:py-28">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
      <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        I'm always interested in hearing about new projects and opportunities.
      </p>

      <a
        href="mailto:hello@mattiadepascalis.dev"
        class="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200"
      >
        Get in touch
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const frontend = [
  'Vue 3',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'Responsive Design',
]

const backend = [
  'Node.js',
  'Python',
  'FastAPI',
  'REST APIs',
  'WebSockets',
  'PostgreSQL',
  'MongoDB',
  'Authentication',
]

const other = [
  'CLI Development',
  'CI/CD Pipelines',
  'Docker',
  'Git',
  'Testing',
  'Performance Optimization',
  'Cloud Deployment',
  'Automation Scripts',
]
</script>
