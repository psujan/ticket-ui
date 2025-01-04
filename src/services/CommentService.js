// import Endpoints from '@/utils/endpoints'
import apiClient from '@/utils/apiClient'
import Endpoints from '@/utils/endpoints'
import $loading from '@/utils/loading'

const CommentService = {
  getAll: async (ticketId) => {
    const loader = $loading.show()
    const url = Endpoints.GET_ALL_COMMENTS.replace('{id}', ticketId)
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
  add: async (formValue) => {
    const loader = $loading.show()
    const url = Endpoints.ADD_COMMENT
    return apiClient
      .post(url, formValue)
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

export default CommentService
