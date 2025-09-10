<template>
  <section class="section">
    <div class="container">
      <h2>About</h2>
      <p class="lead">
        I'm Mattia De Pascalis, a full‑stack and Python developer from Milan. I craft fast, maintainable software with
        a focus on developer experience and reliability. I enjoy building Vue frontends, Python CLI tooling and cloud‑ready backends.
      </p>

      <div class="grid about-grid">
        <div class="card">
          <h3>Profile</h3>
          <ul>
            <li><strong>Based in:</strong> Milan, Italy</li>
            <li><strong>Focus:</strong> Full‑Stack (Vue/TS, Node), Python (CLI, automation)</li>
            <li><strong>Interests:</strong> DX, performance, clean architecture, testing</li>
          </ul>
        </div>

        <div class="card">
          <h3>Skills</h3>
          <div class="mono skills">
            <span class="tag">Vue 3</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Vite</span>
            <span class="tag">Node.js</span>
            <span class="tag">Python</span>
            <span class="tag">FastAPI</span>
            <span class="tag">REST</span>
            <span class="tag">WebSockets</span>
            <span class="tag">CLI</span>
            <span class="tag">CI/CD</span>
          </div>
        </div>

        <div class="card">
          <h3>Approach</h3>
          <ul>
            <li>Clarity first: readable, maintainable code.</li>
            <li>Strong typing and automated checks.</li>
            <li>Test early, monitor in production.</li>
          </ul>
        </div>
      </div>

      <div class="btns cta">
        <a class="btn primary" href="mailto:hello@mattiadepascalis.dev">Get in touch</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.lead { color: var(--muted); max-width: 70ch; margin-top: -4px; }
.about-grid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); margin-top: 12px; }
.skills { display: flex; gap: 8px; flex-wrap: wrap; }
.card h3 { margin: 0 0 6px; font-size: clamp(18px, 2.2vw, 20px); }
.card ul { padding-left: 18px; margin: 6px 0 0; }
.card li { margin: 4px 0; }
.cta { margin-top: 12px; }
</style>
