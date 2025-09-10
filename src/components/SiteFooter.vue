<template>
  <footer class="footer">
    <div class="container inner">
      <div>
        <strong>Mattia De Pascalis</strong>
        <div class="mono muted">Full‑Stack & Python Developer • Milan</div>
      </div>
      <div class="links">
        <a href="https://github.com/mattiadepascalis" target="_blank" rel="noreferrer noopener">GitHub</a>
        <span>•</span>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        <span>•</span>
        <a href="mailto:hello@mattiadepascalis.dev">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.links { display: flex; gap: 10px; align-items: center; }
@media (max-width: 720px) {
  .inner { flex-direction: column; align-items: flex-start; gap: 8px; }
}
</style>
