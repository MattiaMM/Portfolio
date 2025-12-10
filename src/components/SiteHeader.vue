<template>
  <header class="sticky top-0 z-50 bg-slate-950 border-b border-gray-800 backdrop-blur-sm">
    <div class="container flex items-center justify-between h-20">
      <!-- Brand -->
      <RouterLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div class="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-cyan-500/30"></div>
        <span class="text-lg font-bold tracking-tight">
          Mattia <span class="font-mono text-sm text-gray-400">De Pascalis</span>
        </span>
      </RouterLink>

      <!-- Mobile toggle -->
      <button
        class="hidden md:hidden flex-col gap-1.5 w-8 h-8"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen.toString()"
        aria-controls="primary-nav"
        aria-label="Toggle navigation"
      >
        <span class="w-5 h-0.5 bg-gray-50 transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
        <span class="w-5 h-0.5 bg-gray-50 transition-all duration-300" :class="{ 'opacity-0': isOpen }"></span>
        <span class="w-5 h-0.5 bg-gray-50 transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
      </button>

      <!-- Desktop Navigation -->
      <nav
        id="primary-nav"
        class="hidden md:flex items-center gap-8"
        aria-label="Primary"
      >
        <RouterLink
          to="/"
          class="text-gray-200 text-sm font-medium transition-colors hover:text-cyan-400 duration-200"
          active-class="text-cyan-400"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-gray-200 text-sm font-medium transition-colors hover:text-cyan-400 duration-200"
          active-class="text-cyan-400"
        >
          About
        </RouterLink>
        <RouterLink
          to="/projects"
          class="text-gray-200 text-sm font-medium transition-colors hover:text-cyan-400 duration-200"
          active-class="text-cyan-400"
        >
          Projects
        </RouterLink>
        <a
          href="mailto:hello@mattiadepascalis.dev"
          class="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200"
        >
          Contact
        </a>
      </nav>

      <!-- Mobile Navigation -->
      <nav
        v-if="isOpen"
        class="absolute top-20 left-0 right-0 md:hidden bg-slate-900 border-b border-gray-800 flex flex-col gap-2 p-4"
        aria-label="Mobile navigation"
      >
        <RouterLink
          to="/"
          class="px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-800 transition-colors"
          @click="isOpen = false"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-800 transition-colors"
          @click="isOpen = false"
        >
          About
        </RouterLink>
        <RouterLink
          to="/projects"
          class="px-4 py-2 rounded-lg text-gray-200 hover:bg-slate-800 transition-colors"
          @click="isOpen = false"
        >
          Projects
        </RouterLink>
        <a
          href="mailto:hello@mattiadepascalis.dev"
          class="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium"
          @click="isOpen = false"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>
