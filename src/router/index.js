import About from '@/views/About.vue'
import CapitalGame from '@/views/CapitalGame.vue'
import Contact from '@/views/Contact.vue'
import CountryGame from '@/views/CountryGame.vue'
import FlagGame from '@/views/FlagGame.vue'
import Games from '@/views/Games.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/games',
      name: 'games',
      component: Games,
      children : [
        {
          path: '',
          name: 'jeux-pays',
          component: CountryGame,
        },
        {
          path: 'jeux-capital',
          name: 'jeux-capital',
          component: CapitalGame,
        },
        {
          path: 'jeux-drapeau',
          name: 'jeux-drapeau',
          component: FlagGame,
        },
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router
