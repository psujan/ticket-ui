// import Endpoints from '@/utils/endpoints'
import apiClient from '@/utils/apiClient'
import Endpoints from '@/utils/endpoints'
import $loading from '@/utils/loading'

const CategoryService = {
  getPaginated: async (pageNo) => {
    const loader = $loading.show()
    const url = Endpoints.FETCH_CATEGORY + `?pageNo=${pageNo}`
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
  addCategory: async (formValue) => {
    const loader = $loading.show()
    const url = Endpoints.ADD_CATEGORY
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
  deleteCategory : async (id)=>{
    const loader = $loading.show()
    const url = Endpoints.DELETE_CATEGORY.replace("{id}" , id)
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
  }
}

export default CategoryService
