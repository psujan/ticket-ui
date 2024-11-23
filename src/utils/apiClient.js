import axios from 'axios'
import { useAuthStore } from '@/stores/useAuthStore'

const apiClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const setAuthToken = () => {
  const store = useAuthStore()
  const token = store.token
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default apiClient

export { setAuthToken }
