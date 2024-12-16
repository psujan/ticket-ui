// stores/counter.js
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return { isMinimized: false }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    toggleSidebar(state) {
      this.isMinimized = state
    },
  },
})
