<template>
  <sidebar-menu
    @update:collapsed="onToggleCollapse"
    :menu="menu"
    theme="white-theme"
    widthCollapsed="60px"
    :hideToggle="false"
  >
    <template v-slot:toggle-icon>
      <div class="sidebar-toggle">
        <span><i class="ri ri-menu-line"></i></span>
      </div>
    </template>
  </sidebar-menu>
</template>

<script setup>
import { useSidebarStore } from '@/stores/useSidebarStore'
const sidebar = useSidebarStore()
const menu = [
  // {
  //   header: 'Main Navigation',
  //   hiddenOnCollapse: false,
  // },
  {
    href: '/',
    title: 'Dashboard',
    icon: 'ri-dashboard-line',
  },
  {
    href: '/categories',
    title: 'Categories',
    icon: 'ri-menu-unfold-line',
  },
  {
    href: '/ticket',
    title: 'Tickets',
    icon: 'ri-share-forward-box-line',
  },
  {
    href: '/solution-guide',
    title: 'Solution Guide',
    icon: 'ri-stack-line',
  },
]

const onToggleCollapse = (state) => {
  sidebar.toggleSidebar(state)
}
</script>
