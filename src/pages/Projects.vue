<template>
  <section class="py-20 md:py-28">
    <div class="container">
      <!-- Header -->
      <div class="mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
        <p class="text-gray-400 text-lg max-w-2xl">
          A selection of projects showcasing my skills and the technologies I've worked with.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="p in projects"
          :key="p.slug"
          class="card group hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 flex flex-col"
        >
          <!-- Project title -->
          <h2 class="text-2xl font-bold mb-3 group-hover:text-violet-300 transition-colors">
            {{ p.title }}
          </h2>

          <!-- Description -->
          <p class="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
            {{ p.excerpt }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="t in p.tech"
              :key="t"
              class="tag text-xs"
            >
              {{ t }}
            </span>
          </div>

          <!-- CTA -->
          <RouterLink
            :to="`/projects/${p.slug}`"
            class="btn text-sm inline-block"
          >
            Read more →
          </RouterLink>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="projects.length === 0" class="text-center py-12">
        <p class="text-gray-400 text-lg">No projects yet.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import projects from '@/data/projects'
</script>
