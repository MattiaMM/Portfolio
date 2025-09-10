<template>
  <section class="section">
    <div class="container" v-if="project">
      <RouterLink class="btn" to="/projects" style="margin-bottom:14px; display:inline-flex">← Back to projects</RouterLink>

      <TypingText tag="h1" :text="project.title" style="margin:8px 0 6px" />
      <p class="muted" style="margin-top:0">{{ project.excerpt }}</p>

      <div class="mono" style="display:flex; gap:8px; flex-wrap:wrap; margin: 8px 0 16px">
        <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
      </div>

      <div class="grid" style="grid-template-columns: 2fr 1fr; gap: 24px; align-items: start">
        <div class="card">
          <h3 style="margin-top:0">Overview</h3>
          <p v-for="(para, i) in descriptionParagraphs" :key="i" class="desc">{{ para }}</p>

          <div v-if="project.lessons?.length" style="margin-top:12px">
            <h4>What I Learned</h4>
            <ul>
              <li v-for="(l, i) in project.lessons" :key="i">{{ l }}</li>
            </ul>
          </div>
        </div>

        <aside class="card">
          <h3 style="margin-top:0">Links</h3>
          <ul>
            <li v-if="project.links?.demo"><a :href="project.links?.demo" target="_blank" rel="noreferrer noopener">Live Demo</a></li>
            <li v-if="project.links?.repo"><a :href="project.links?.repo" target="_blank" rel="noreferrer noopener">Repository</a></li>
            <li v-if="project.links?.docs"><a :href="project.links?.docs" target="_blank" rel="noreferrer noopener">Docs</a></li>
          </ul>
        </aside>
      </div>
    </div>

    <div class="container" v-else>
      <p>Project not found.</p>
      <RouterLink class="btn" to="/projects">← Back to projects</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import projects from '@/data/projects'
import TypingText from '@/components/TypingText.vue'

const props = defineProps<{ slug: string }>()
const project = computed(() => projects.find(p => p.slug === props.slug))
const descriptionParagraphs = computed(() => project.value?.description.split('\n').filter(Boolean) ?? [])
</script>

<style scoped>
.desc { color: var(--text); opacity: .9; }
@media (max-width: 920px) {
  .grid { grid-template-columns: 1fr !important; }
}
</style>
