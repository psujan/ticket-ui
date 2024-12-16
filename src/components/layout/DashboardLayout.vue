<script setup>
import AppHeader from '../common/AppHeader.vue'
import AppSidebar from '../common/AppSidebar.vue'
import { useSidebarStore } from '@/stores/useSidebarStore'

const sidebar = useSidebarStore()
</script>

<template>
  <AppHeader></AppHeader>
  <AppSidebar style="width: 18%"></AppSidebar>
  <main :class="`${sidebar.isMinimized ? 'is-minimized' : 'is-not-minimized'}`">
    <div class="px-3 my-4">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped>
.is-minimized {
  padding-left: 70px;
}

.is-not-minimized {
  padding-left: 260px;
}
</style>
