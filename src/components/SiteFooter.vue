<template>
  <footer class="border-t border-gray-800 bg-slate-950">
    <div class="container py-16 md:py-20">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-cyan-500/30"></div>
            <span class="font-bold text-lg">Mattia De Pascalis</span>
          </div>
          <p class="text-gray-400 text-sm">Full‑Stack & Python Developer • Milan</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-gray-50 font-semibold mb-4">Navigation</h3>
          <div class="flex flex-col gap-2">
            <RouterLink to="/" class="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Home</RouterLink>
            <RouterLink to="/about" class="text-gray-400 text-sm hover:text-cyan-400 transition-colors">About</RouterLink>
            <RouterLink to="/projects" class="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Projects</RouterLink>
          </div>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-gray-50 font-semibold mb-4">Connect</h3>
          <div class="flex flex-col gap-2">
            <a
              href="https://github.com/mattiadepascalis"
              target="_blank"
              rel="noreferrer noopener"
              class="text-gray-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              GitHub
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
              class="text-gray-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              LinkedIn
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </a>
            <a
              href="mailto:hello@mattiadepascalis.dev"
              class="text-gray-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              Email
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 pt-8">
        <p class="text-gray-500 text-xs text-center">
          &copy; {{ new Date().getFullYear() }} Mattia De Pascalis. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
