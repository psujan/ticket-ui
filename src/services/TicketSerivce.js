// import Endpoints from '@/utils/endpoints'
import apiClient from '@/utils/apiClient'
import Endpoints from '@/utils/endpoints'
import $loading from '@/utils/loading'

const TicketService = {
  getPaginated: async (pageNo) => {
    const loader = $loading.show()
    const url = Endpoints.FETCH_TICKET + `?pageNumber=${pageNo}`
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
  addTicket: async (form) => {
    const loader = $loading.show()
    const url = Endpoints.ADD_TICKET
    //const client = apiClient.
    return apiClient
      .post(url, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
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
  editTicket: async (id, formValues) => {
    const loader = $loading.show()
    const url = Endpoints.EDIT_CATEGORY.replace('{id}', id)
    return apiClient
      .put(url, formValues)
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
  deleteTicket: async (id) => {
    const loader = $loading.show()
    const url = Endpoints.DELETE_CATEGORY.replace('{id}', id)
    return apiClient
      .delete(url)
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

export default TicketService
