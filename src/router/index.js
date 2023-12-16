import { createRouter, createWebHistory } from 'vue-router'
import AuthMain from '@/components/AuthMain.vue'
import AuthComplete from '@/components/AuthComplete.vue'
import RegMain from '@/components/RegMain.vue'
import RegInfo from '@/components/RegInfo.vue'
import RegComplete from '@/components/RegComplete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authmain',
      component: AuthMain
    },
    {
      path: '/complete',
      name: 'authcomplete',
      component: AuthComplete
    },
    {
      path: '/regmain',
      name: 'regmain',
      component: RegMain
    },
    {
      path: '/reginfo',
      name: 'reginfo',
      component: RegInfo
    },
    {
      path: '/regcomplete',
      name: 'regcomplete',
      component: RegComplete
    }
  ]
})

export default router
