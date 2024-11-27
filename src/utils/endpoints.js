const API_URL = import.meta.env.VITE_API_URL
export default {
  //Auth Routes
  LOGIN_ROUTE: API_URL + '/auth/login',

  //Category Routes
  FETCH_CATEGORY: API_URL + '/category/paginated',
  ADD_CATEGORY: API_URL + '/category',
  DELETE_CATEGORY : API_URL + '/category/{id}'
}
