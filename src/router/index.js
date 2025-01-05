import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import CategoryView from '../views/category/CategoryView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { storeToRefs } from 'pinia'
import TicketView from '@/views/ticket/TicketView.vue'
import TicketAdd from '@/views/ticket/TicketAdd.vue'
import TicketDiscussion from '@/views/discussion/TicketDiscussion.vue'
import UserPortalView from '@/views/user-portal/UserPortalView.vue'
import OpenRequestView from '@/views/user-portal/OpenRequestView.vue'
import MyRequestView from '@/views/user-portal/MyRequestView.vue'
import SolutionGuide from '@/views/solution-guide/SolutionGuide.vue'
import SolutionGuideAdd from '@/views/solution-guide/partials/SolutionGuideAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
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
    {
      path: '/ticket',
      name: 'ticket',
      component: TicketView,
    },
    {
      path: '/ticket/new',
      name: 'ticket-add',
      component: TicketAdd,
    },
    {
      path: '/ticket/edit/:id',
      name: 'ticket-edit',
      component: () => TicketAdd,
    },
    {
      path: '/ticket/:id/discussion',
      name: 'ticket-discussion',
      component: () => TicketDiscussion,
    },
    {
      path: '/solution-guide',
      name: 'solution-guide',
      component: () => SolutionGuide,
    },
    {
      path: '/solution-guide/new',
      name: 'solution-guide-new',
      component: () => SolutionGuideAdd,
    },
    {
      path: '/solution-guide/edit/:id',
      name: 'solutionguide-edit',
      component: () => SolutionGuideAdd,
    },
    {
      path: '/',
      name: 'user-portal',
      component: () => UserPortalView,
    },
    {
      path: '/open-a-request',
      name: 'open-request',
      component: () => OpenRequestView,
    },
    {
      path: '/my-request',
      name: 'my-request',
      component: () => MyRequestView,
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
  const { roles } = storeToRefs(auth)
  // if (to.name != 'login' && !isAuthenticated.value) {
  //   next({ name: 'user-portal' })
  //   return
  // }

  console.log('here route', roles.value)
  if (to.name == 'dashboard' && !isAdmin(roles.value)) {
    next({ name: 'user-portal' })
    return
  }

  if (to.name == 'user-portal' && isAdmin(roles.value)) {
    next({ name: 'dashboard' })
    return
  }

  next()
})

const isAdmin = (roles) => {
  if (roles && roles.length && roles.includes('SuperAdmin')) {
    return true
  }

  return false
}

export default router
