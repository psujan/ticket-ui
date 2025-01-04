import CommentService from '@/services/CommentService'
import { ref } from 'vue'
import eventBus, { EVENT_COMMENT as EVENT } from '@/utils/mitt'

export default function useComment() {
  const rows = ref([])

  const showError = ref(false)
  const errorTitle = ref('Something Went Wrong')
  const validationMessages = ref([])

  const getAll = async (ticketId) => {
    const result = await CommentService.getAll(ticketId)
    if (result.isSucc) {
      rows.value = result.res.data.data
    }
  }

  const resetError = () => {
    console.log('calling reset')
    showError.value = false
    errorTitle.value = undefined
    validationMessages.value = []
  }

  const add = async (formValue) => {
    resetError()
    const result = await CommentService.add(formValue)
    if (result.isSucc) {
      eventBus.emit(EVENT.ADD, { message: result.res.data.message })
      return
    }

    if (result.err != null) {
      handleError(result.err)
    }
  }

  const handleError = (err) => {
    // handle network error
    if (err?.code == 'ERR_NETWORK') {
      showError.value = true
      errorTitle.value = 'Network Error'
    }

    // handle any other bad request
    if (err?.response?.status == '400') {
      showError.value = true
      errorTitle.value = err.response.data.message
    }

    if (err?.response && err?.response?.data?.errors) {
      // this is validation error
      showError.value = true
      errorTitle.value = err.response.data.title
      const failedValidations = err.response.data.errors
      for (const [, v] of Object.entries(failedValidations)) {
        validationMessages.value.push(v[0])
      }
    }
  }

  // onMounted(() => {
  //   getAll()
  // })

  return {
    showError,
    errorTitle,
    validationMessages,
    rows,
    resetError,
    getAll,
    add,
  }
}
