import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/base.css'
import './assets/styles/animations.css'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'

const app = createApp(App)

app.use(router)
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine)
  },
})

app.mount('#app')
