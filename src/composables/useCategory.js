import CategoryService from '@/services/CategoryService'
import { onMounted, ref } from 'vue'
import eventBus, { EVENT } from '@/utils/mitt'

export default function useCategory() {
  const rows = ref([])

  const showError = ref(false)
  const errorTitle = ref('Something Went Wrong')
  const validationMessages = ref([])

  const getRecords = async (pageNo = 1) => {
    const result = await CategoryService.getPaginated(pageNo)
    if (result.isSucc) {
      console.log(result)
      rows.value = result.res.data.data
    }
  }

  const resetError = () => {
    showError.value = false
    errorTitle.value = undefined
    validationMessages.value = []
  }

  const addRecord = async (formValue) => {
    resetError()
    const result = await CategoryService.addCategory(formValue)
    if (result.isSucc) {
      /*toast(result.res.data.message)
      actionStatus.value = true
      actionMessage.value = result.res.data.message
      return*/
      eventBus.emit(EVENT.ADD, { message: result.res.data.message })
    }

    if (result.err != null) {
      handleError(result.err)
    }
  }

  const handleError = (err) => {
    console.log(err)

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
      validationMessages.value.push(failedValidations.Title[0])
      validationMessages.value.push(failedValidations.Status[0])
    }
  }

  onMounted(() => {
    getRecords()
  })

  return {
    showError,
    errorTitle,
    validationMessages,
    rows,
    addRecord,
    getRecords,
  }
}
