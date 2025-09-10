<template>
  <section class="section">
    <div class="container">
      <TypingText tag="h2" text="Projects" />
      <p class="muted balance lead">A selection of projects with what I learned and the tech used.</p>

      <div class="grid cols-3 projects-grid">
        <article v-for="p in projects" :key="p.slug" class="card">
          <h3>{{ p.title }}</h3>
          <p class="muted">{{ p.excerpt }}</p>
          <div class="tags">
            <span v-for="t in p.tech" :key="t" class="mono tag">{{ t }}</span>
          </div>
          <RouterLink class="btn" :to="`/projects/${p.slug}`">Read more</RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import projects from '@/data/projects'
import TypingText from '@/components/TypingText.vue'
</script>

<style scoped>
.lead { margin-top: -4px; }
.projects-grid { margin-top: 12px; }
article.card h3 { margin: 0 0 6px; font-size: clamp(18px, 2.2vw, 20px); }
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 12px; }
article.card:hover { border-color: color-mix(in oklab, var(--primary) 25%, var(--border)); }
</style>
