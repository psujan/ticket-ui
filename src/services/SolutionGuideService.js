// import Endpoints from '@/utils/endpoints'
import apiClient from '@/utils/apiClient'
import Endpoints from '@/utils/endpoints'
import $loading from '@/utils/loading'

const SolutionGuideService = {
  getPaginated: async (pageNo) => {
    const loader = $loading.show()
    const url = Endpoints.FETCH_SLN_GUIDE + `?pageNumber=${pageNo}`
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
  create: async (form) => {
    const loader = $loading.show()
    const url = Endpoints.ADD_SLN_GUIDE
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
  getById: async (id) => {
    const loader = $loading.show()
    const url = Endpoints.FETCH_A_SLN_GUIDE.replace('{id}', id)
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
  update: async (id, form) => {
    const loader = $loading.show()
    const url = Endpoints.EDIT_SLN_GUIDE.replace('{id}', id)
    return apiClient
      .put(url, form, {
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
  deleteRecord: async (id) => {
    const loader = $loading.show()
    const url = Endpoints.DELETE_SLN_GUIDE.replace('{id}', id)
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

export default SolutionGuideService
