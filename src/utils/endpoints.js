const API_URL = import.meta.env.VITE_API_URL
export default {
  //Auth Routes
  LOGIN_ROUTE: API_URL + '/auth/login',

  //Category Routes
  FETCH_CATEGORY: API_URL + '/category/paginated',
  ADD_CATEGORY: API_URL + '/category',
  DELETE_CATEGORY: API_URL + '/category/{id}',
  EDIT_CATEGORY: API_URL + '/category/{id}',
  LIST_CATEGORY: API_URL + '/category/list',

  //Ticket Routes
  FETCH_TICKET: API_URL + '/ticket/paginated',
  ADD_TICKET: API_URL + '/ticket',
  EDIT_TICKET: API_URL + '/ticket/{id}',
  DELETE_TICKET: API_URL + '/ticket/{id}',
  FETCH_A_TICKET: API_URL + '/ticket/{id}',
  UPDATE_TICKET_STATUS: API_URL + '/ticket/{id}/update-status',
}
