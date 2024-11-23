import { ref } from 'vue'

export function useErrorHandle() {
  const showError = ref(true)
  const errorTitle = ref('something Went Wrong')
  const serverValidationErrors = ref(null)

  const handleNetworkError = (err) => {
    if (err?.code == 'ERR_NETWORK') {
      showError.value = true
      errorTitle.value = 'Network Error'
    }
    return {
      showError,
      errorTitle,
    }
  }

  const handleValidationError = (err) => {
    if (err?.response && err?.response?.data?.errors) {
      // this is validation error
      showError.value = true
      errorTitle.value = 'One or more validation errors occured'
      console.log('here', err.response.data.errors)
      serverValidationErrors.value = err.response.data.errors
      return {
        showError,
        errorTitle,
        serverValidationErrors,
      }
    }
  }

  return {
    handleNetworkError,
    handleValidationError,
  }
}
