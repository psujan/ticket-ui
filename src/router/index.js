import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import CategoryView from '../views/category/CategoryView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/categories',
      name: 'category',
      component: CategoryView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const { isAuthenticated } = storeToRefs(auth)
  console.log('router', isAuthenticated)
  if (to.name != 'login' && !isAuthenticated.value) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
