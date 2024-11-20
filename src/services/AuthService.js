// import Endpoints from '@/utils/endpoints'
import Endpoints from '@/utils/endpoints'
import $loading from '@/utils/loading'
import axios from 'axios'

const AuthService = {
  Login: async (payload) => {
    const loader = $loading.show()
    const url = Endpoints.LOGIN_ROUTE
    return await axios
      .post(url, payload)
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
          err: err,
          res: null,
        }
      })
      .finally(() => {
        loader.hide()
      })
  },
}

export default AuthService
