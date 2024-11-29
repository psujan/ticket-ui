import TicketService from '@/services/TicketSerivce'
import CategoryService from '@/services/CategoryService'
import { ref } from 'vue'
import eventBus, { EVENT } from '@/utils/mitt'

export default function useTicket() {
  const rows = ref([])
  const list = ref([])
  const row = ref(null)

  const showError = ref(false)
  const errorTitle = ref('Something Went Wrong')
  const validationMessages = ref([])

  const getRecords = async (pageNo = 1) => {
    const result = await TicketService.getPaginated(pageNo)
    if (result.isSucc) {
      rows.value = result.res.data.data
    }
  }

  const getList = async (status = 'active') => {
    const result = await CategoryService.getList(status)
    if (result.isSucc) {
      list.value = result.res.data.data
    }
  }

  const resetError = () => {
    showError.value = false
    errorTitle.value = undefined
    validationMessages.value = []
  }

  const getTicketById = async (id) => {
    const result = await TicketService.getTicketById(id)
    if (result.isSucc) {
      row.value = result.res.data.data
    }
  }

  const addRecord = async (form) => {
    resetError()
    const formData = new FormData()
    Object.entries(form).forEach(([key, value]) => {
      if (key != 'files') {
        formData.append(key, value)
      }
    })
    if (form.files && form.files.length > 0) {
      form.files.forEach((file) => {
        // Use the same key 'files' for each file
        formData.append('files', file)
      })
    }
    const result = await TicketService.addTicket(formData)
    if (result.isSucc) {
      eventBus.emit(EVENT.ADD, { message: result.res.data.message })
      return
    }

    if (result.err != null) {
      handleError(result.err)
    }
  }

  /*const deleteRecord = async (id) => {
    const result = await CategoryService.deleteCategory(id)
    if (result.isSucc) {
      eventBus.emit(EVENT.DELETE, { message: result.res.data.message, type: EVENT_STATUS.SUCCESS })
    }

    if (result.err != null) {
      console.error(result.err)
      eventBus.emit(EVENT.DELETE, { message: 'Something Went Wrong', type: EVENT_STATUS.ERROR })
    }
  }*/

  const editRecord = async (id, form) => {
    const formData = new FormData()
    Object.entries(form).forEach(([key, value]) => {
      if (key != 'files') {
        formData.append(key, value)
      }
    })
    if (form.files && form.files.length > 0) {
      form.files.forEach((file) => {
        // Use the same key 'files' for each file
        formData.append('files', file)
      })
    }
    const result = await TicketService.editTicket(id, formData)
    if (result.isSucc) {
      eventBus.emit(EVENT.UPDATE, { message: result.res.data.message })
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
      eventBus.emit(EVENT.VALIDATION_ERROR, { message: errorTitle.value })
    }
  }

  return {
    showError,
    errorTitle,
    validationMessages,
    rows,
    row,
    list,
    addRecord,
    editRecord,
    getTicketById,
    resetError,
    getRecords,
    getList,
  }
}
