import CategoryService from '@/services/CategoryService'
import { onMounted, ref } from 'vue'
import eventBus, { EVENT, EVENT_STATUS } from '@/utils/mitt'

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
    console.log('calling reset')
    showError.value = false
    errorTitle.value = undefined
    validationMessages.value = []
  }

  const addRecord = async (formValue) => {
    resetError()
    const result = await CategoryService.addCategory(formValue)
    if (result.isSucc) {
      eventBus.emit(EVENT.ADD, { message: result.res.data.message })
      return
    }

    if (result.err != null) {
      handleError(result.err)
    }
  }

  const deleteRecord = async (id) => {
    const result = await CategoryService.deleteCategory(id)
    if (result.isSucc) {
      eventBus.emit(EVENT.DELETE, { message: result.res.data.message, type: EVENT_STATUS.SUCCESS })
    }

    if (result.err != null) {
      console.error(result.err)
      eventBus.emit(EVENT.DELETE, { message: 'Something Went Wrong', type: EVENT_STATUS.ERROR })
    }
  }

  const editRecord = async (id, formValue) => {
    const result = await CategoryService.editCategory(id, formValue)
    if (result.isSucc) {
      eventBus.emit(EVENT.UPDATE, { message: result.res.data.message })
      return
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
      for (const [, v] of Object.entries(failedValidations)) {
        validationMessages.value.push(v[0])
      }
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
    resetError,
    editRecord,
    addRecord,
    getRecords,
    deleteRecord,
  }
}
