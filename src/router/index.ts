import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Projects from '@/pages/Projects.vue'
import ProjectDetail from '@/pages/ProjectDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/projects/:slug', name: 'project', component: ProjectDetail, props: true },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
