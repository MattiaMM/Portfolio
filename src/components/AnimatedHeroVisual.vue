<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <canvas
      ref="canvas"
      class="w-full h-full"
      :width="width"
      :height="height"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const width = ref(0)
const height = ref(0)
let animationId: number | null = null
let mouseX = 0
let mouseY = 0

interface Orb {
  x: number
  y: number
  baseX: number
  baseY: number
  radius: number
  vx: number
  vy: number
  color: string
  targetX: number
  targetY: number
}

let orbs: Orb[] = []

const colors = [
  'rgba(6, 182, 212, 0.8)',    // cyan
  'rgba(59, 130, 246, 0.8)',   // blue
  'rgba(139, 92, 246, 0.8)',   // purple
  'rgba(34, 211, 238, 0.6)',   // light cyan
]

function initOrbs() {
  orbs = []
  const orbCount = 5

  for (let i = 0; i < orbCount; i++) {
    const angle = (i / orbCount) * Math.PI * 2
    const distance = Math.min(width.value, height.value) * 0.25

    const orb: Orb = {
      x: width.value / 2 + Math.cos(angle) * distance,
      y: height.value / 2 + Math.sin(angle) * distance,
      baseX: width.value / 2 + Math.cos(angle) * distance,
      baseY: height.value / 2 + Math.sin(angle) * distance,
      radius: 40 + Math.random() * 30,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      color: colors[i % colors.length],
      targetX: 0,
      targetY: 0,
    }
    orbs.push(orb)
  }
}

function drawGlow(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
  // Extract alpha and create glow effect
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 1.5)
  gradient.addColorStop(0, color)
  gradient.addColorStop(0.5, color.replace('0.8', '0.4').replace('0.6', '0.2'))
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.arc(x, y, radius * 1.5, 0, Math.PI * 2)
  ctx.fill()

  // Draw core orb
  const coreGradient = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius)
  coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
  coreGradient.addColorStop(0.5, color)
  coreGradient.addColorStop(1, color.replace('0.8', '0.3').replace('0.6', '0.1'))

  ctx.fillStyle = coreGradient
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fill()

  // Glowing outline
  ctx.strokeStyle = color.replace('0.8', '1').replace('0.6', '0.8')
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.stroke()
}

function animate() {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return

  // Clear canvas with fade effect
  ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
  ctx.fillRect(0, 0, width.value, height.value)

  // Update and draw orbs
  for (const orb of orbs) {
    // Smooth movement towards base position when mouse is far
    const distToMouse = Math.hypot(mouseX - orb.x, mouseY - orb.y)
    const maxDistance = 200

    if (distToMouse < maxDistance) {
      // Repel from mouse
      const angle = Math.atan2(orb.y - mouseY, orb.x - mouseX)
      const force = (1 - distToMouse / maxDistance) * 3
      orb.vx += Math.cos(angle) * force
      orb.vy += Math.sin(angle) * force
    } else {
      // Return to base position
      orb.targetX = orb.baseX
      orb.targetY = orb.baseY
    }

    // Smooth movement toward target
    orb.vx += (orb.targetX - orb.x) * 0.01
    orb.vy += (orb.targetY - orb.y) * 0.01

    // Apply friction
    orb.vx *= 0.95
    orb.vy *= 0.95

    // Update position
    orb.x += orb.vx
    orb.y += orb.vy

    // Boundary wrapping with smooth edges
    const margin = 100
    if (orb.x < -margin) orb.x = width.value + margin
    if (orb.x > width.value + margin) orb.x = -margin
    if (orb.y < -margin) orb.y = height.value + margin
    if (orb.y > height.value + margin) orb.y = -margin

    // Draw orb
    drawGlow(ctx, orb.x, orb.y, orb.radius, orb.color)
  }

  // Draw connections between nearby orbs
  ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)'
  ctx.lineWidth = 1
  for (let i = 0; i < orbs.length; i++) {
    for (let j = i + 1; j < orbs.length; j++) {
      const dx = orbs[i].x - orbs[j].x
      const dy = orbs[i].y - orbs[j].y
      const distance = Math.hypot(dx, dy)

      if (distance < 200) {
        ctx.globalAlpha = (1 - distance / 200) * 0.3
        ctx.beginPath()
        ctx.moveTo(orbs[i].x, orbs[i].y)
        ctx.lineTo(orbs[j].x, orbs[j].y)
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    }
  }

  animationId = requestAnimationFrame(animate)
}

function handleMouseMove(e: MouseEvent) {
  const rect = canvas.value?.getBoundingClientRect()
  if (rect) {
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  }
}

function handleMouseLeave() {
  // Reset target positions when mouse leaves
  for (const orb of orbs) {
    orb.targetX = orb.baseX
    orb.targetY = orb.baseY
  }
}

function resizeCanvas() {
  const container = canvas.value?.parentElement
  if (container) {
    width.value = container.clientWidth
    height.value = container.clientHeight
    if (canvas.value) {
      canvas.value.width = width.value
      canvas.value.height = height.value
    }
  }
}

onMounted(() => {
  resizeCanvas()
  initOrbs()
  animate()

  window.addEventListener('mousemove', handleMouseMove)
  canvas.value?.addEventListener('mouseleave', handleMouseLeave)
  window.addEventListener('resize', () => {
    resizeCanvas()
    initOrbs()
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  canvas.value?.removeEventListener('mouseleave', handleMouseLeave)
  if (animationId !== null) {
    cancelAnimationFrame(animationId)
  }
})
</script>
