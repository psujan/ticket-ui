import AuthService from '@/services/AuthService'
import { ref } from 'vue'
import * as yup from 'yup'
import { useAuthStore } from '@/stores/useAuthStore'
import router from '@/router'
import { setAuthToken } from '@/utils/apiClient'

export default function useAuthService() {
  const authStore = useAuthStore()

  const schema = yup.object({
    username: yup.string().required('Email is required').email('Please provide valid email'),
    //name: yup.string().required(),
    password: yup.string().required('Password is required').min(8, 'Password must be 8 char long'),
  })

  const logout = () => {
    authStore.clearAuthCredentials()
    router.push({ name: 'login' })
  }

  const showError = ref(false)
  const errorTitle = ref('')

  const validationMessages = ref([])

  const resetValidationError = () => {
    validationMessages.value = []
  }

  const handleSubmit = async (formValues) => {
    resetValidationError()
    showError.value = false
    const result = await AuthService.Login(formValues)
    if (result.isSucc) {
      const { roles, token, user } = result.res.data.data
      authStore.setAuthToken(token)
      authStore.setUser(user)
      authStore.setRoles(roles)
      authStore.setTokenAddedAt(Date())
      setAuthToken()
      router.push({ name: 'dashboard' })
      console.log('here finallly')
    }

    // handle error response
    if (result.err != null) {
      handleError(result.err)
    }
  }

  const handleError = (err) => {
    //handle server side validation errors
    if (err?.response && err?.response?.data?.errors) {
      // this is validation error
      showError.value = true
      errorTitle.value = 'One or more validation errors occured'
      const failedValidations = err.response.data.errors
      validationMessages.value.push(failedValidations.UserName[0])
      validationMessages.value.push(failedValidations.Password[0])
    }

    // handle any other bad request
    if (err?.response?.status == '400') {
      showError.value = true
      errorTitle.value = err.response.data.message
    }

    // handle network error
    if (err?.code == 'ERR_NETWORK') {
      showError.value = true
      errorTitle.value = 'Network Error'
    }
  }

  return {
    schema,
    showError,
    errorTitle,
    handleSubmit,
    logout,
    validationMessages,
  }
}
