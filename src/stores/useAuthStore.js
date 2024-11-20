// stores/counter.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { isAuthenticated: false, user: null }
  },

  getters: {
    //isAuthenticated: (state) => state.isAuthenticated,
  },

  actions: {
    toggleSidebar() {
      this.isMinimized = !this.isMinimized
    },

    login() {},
  },
})
