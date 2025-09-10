<template>
  <div class="app">
    <SiteHeader />
    <main id="content">
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

<style>
#content {
  min-height: calc(100vh - 140px);
}
</style>
