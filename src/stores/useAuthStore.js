// stores/counter.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isAuthenticated: false,
      user: null,
      role: undefined,
      token: undefined,
      tokenAddedAt: undefined,
    }
  },

  getters: {
    //isAuthenticated: (state) => state.isAuthenticated,
  },

  actions: {
    setAuthToken(token) {
      this.token = token
    },

    setUser(user) {
      this.user = user
      this.isAuthenticated = true
    },

    setRoles(roles) {
      this.role = roles
    },

    setTokenAddedAt(date) {
      this.tokenAddedAt = date
    },

    clearAuthCredentials() {
      this.user = null
      this.token = undefined
      this.role = undefined
      this.tokenValidUpto = undefined
      this.isAuthenticated = false
    },
  },
  persist: true,
})
