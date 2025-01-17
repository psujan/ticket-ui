// import Endpoints from '@/utils/endpoints'
import apiClient from '@/utils/apiClient'
import Endpoints from '@/utils/endpoints'
import $loading from '@/utils/loading'
import { useAuthStore } from '@/stores/useAuthStore'

const UserService = {
  getPaginatedTickets: async () => {
    const {user} = useAuthStore();
    const loader = $loading.show()
    const url = Endpoints.FETCH_USER_TICKET + `?userName=${user.email}`
    return apiClient
      .get(url)
      .then((res) => {
        return {
          isSucc: true,
          res: res,
          err: null,
        }
      })
      .catch((err) => {
        return {
          isSucc: false,
          res: null,
          err: err,
        }
      })
      .finally(() => {
        loader.hide()
      })
  },
}

export default UserService
  