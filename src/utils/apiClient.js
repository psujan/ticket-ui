import axios from 'axios'
import { useAuthStore } from '@/stores/useAuthStore'

const TOKEN_VALID_HOURS = 3

const apiClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const setAuthToken = () => {
  const store = useAuthStore()
  if (!store.tokenAddedAt) {
    store.clearAuthCredentials()
  }
  const token = store.token
  const toeknValidUpto = new Date(store.tokenAddedAt)
  toeknValidUpto.setHours(toeknValidUpto.getHours() + TOKEN_VALID_HOURS)
  const now = new Date()
  if (now > toeknValidUpto) {
    store.clearAuthCredentials()
    return
  }
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default apiClient
export { setAuthToken }
