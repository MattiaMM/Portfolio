<template>
  <component
    :is="tag"
    class="typing-text"
    :aria-label="text"
    aria-live="polite"
    ref="root"
    v-bind="$attrs"
  >
    <span>{{ displayed }}</span><span v-if="cursor && !finished" class="cursor">▍</span>
  </component>
  
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  text: string
  speed?: number // ms per character
  delay?: number // initial delay before typing starts
  cursor?: boolean
  tag?: keyof HTMLElementTagNameMap | string
}>(), {
  speed: 40,
  delay: 0,
  cursor: true,
  tag: 'span',
})

const root = ref<HTMLElement | null>(null)
const displayed = ref('')
const finished = ref(false)
let intervalId: number | null = null
let startTimeoutId: number | null = null
let observer: IntersectionObserver | null = null
let started = false

function beginTyping() {
  const total = props.text.length
  let i = 0
  intervalId = window.setInterval(() => {
    if (i <= total) {
      displayed.value = props.text.slice(0, i)
      i += 1
    } else {
      if (intervalId) window.clearInterval(intervalId)
      intervalId = null
      finished.value = true
    }
  }, Math.max(10, props.speed))
}

function startTyping() {
  if (started) return
  started = true

  // Respect reduced motion
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    displayed.value = props.text
    finished.value = true
    return
  }

  if (props.delay && props.delay > 0) {
    startTimeoutId = window.setTimeout(beginTyping, props.delay)
  } else {
    beginTyping()
  }
}

onMounted(() => {
  if (root.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTyping()
          observer?.disconnect()
        }
      })
    }, { threshold: 0.2 })
    observer.observe(root.value)
  } else {
    startTyping()
  }
})

onUnmounted(() => {
  if (intervalId) window.clearInterval(intervalId)
  if (startTimeoutId) window.clearTimeout(startTimeoutId)
  observer?.disconnect()
})
</script>

<style scoped>
.typing-text { display: inline-block; white-space: pre-wrap; }
.cursor {
  display: inline-block;
  margin-left: 2px;
  opacity: 0.8;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .cursor { display: none; }
}
</style>
