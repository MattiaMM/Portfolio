<template>
  <header class="site-header">
    <div class="container inner">
      <RouterLink class="brand" to="/">
        <span class="dot" aria-hidden="true"></span>
        <span>Mattia <span class="mono">De Pascalis</span></span>
      </RouterLink>

      <button class="nav-toggle" @click="isOpen = !isOpen" :aria-expanded="isOpen.toString()" aria-controls="primary-nav" aria-label="Toggle navigation">
        <span class="bar"></span><span class="bar"></span><span class="bar"></span>
      </button>

      <nav id="primary-nav" :class="{ open: isOpen }" aria-label="Primary">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <a href="mailto:hello@mattiadepascalis.dev" class="mono">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { isOpen.value = false })
</script>

<style scoped>
nav { display: flex; align-items: center; }
.nav-toggle { display: none; }

@media (max-width: 720px) {
  .inner { position: relative; }
  .nav-toggle {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: color-mix(in oklab, var(--card) 92%, transparent);
    color: var(--text);
  }
  .nav-toggle .bar { display: block; width: 18px; height: 2px; margin: 0 auto; background: var(--text); opacity: .9; }

  nav {
    position: absolute;
    top: 100%;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 10px 12px;
    box-shadow: 0 12px 30px rgba(0,0,0,.35);
  }
  nav.open { display: flex; }
  nav a { margin: 0; padding: 6px 8px; border-radius: 8px; }
}
</style>
