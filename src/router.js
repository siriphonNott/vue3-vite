import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/repository',
    name: 'Repository',
    component: () => import('@/views/Repository.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router