<template>
  <div class="flex flex-col min-h-screen">
    <a
      href="#content"
      class="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-violet-600 focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all"
    >
      Skip to content
    </a>
    <SiteHeader />
    <main id="content" class="flex-grow">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>
