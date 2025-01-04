import SolutionGuideService from '@/services/SolutionGuideService'
import { ref } from 'vue'
import eventBus, { EVENT_SOLUTIONGUIDE as EVENT, EVENT_STATUS } from '@/utils/mitt'
import { useAuthStore } from '@/stores/useAuthStore'

export default function useSolutionGuide() {
  const rows = ref([])
  const list = ref([])
  const row = ref(null)

  const auth = useAuthStore()
  const showError = ref(false)
  const errorTitle = ref('Something Went Wrong')
  const validationMessages = ref([])

  const getPaginated = async (pageNo = 1) => {
    const result = await SolutionGuideService.getPaginated(pageNo)
    if (result.isSucc) {
      rows.value = result.res.data.data
    }
  }

  const resetError = () => {
    showError.value = false
    errorTitle.value = undefined
    validationMessages.value = []
  }

  const getById = async (id) => {
    const result = await SolutionGuideService.getById(id)
    if (result.isSucc) {
      row.value = result.res.data.data
    }
  }

  const create = async (form) => {
    resetError()
    const formData = new FormData()
    Object.entries(form).forEach(([key, value]) => {
      if (key != 'files') {
        formData.append(key, value)
      }
    })
    formData.append('username', auth.user.email)

    if (form.files && form.files.length > 0) {
      form.files.forEach((file) => {
        // Use the same key 'files' for each file
        formData.append('files', file)
      })
    }
    const result = await SolutionGuideService.create(formData)
    if (result.isSucc) {
      eventBus.emit(EVENT.ADD, { message: result.res.data.message })
      return
    }

    if (result.err != null) {
      handleError(result.err)
    }
  }

  const deleteRecord = async (id) => {
    const result = await SolutionGuideService.deleteRecord(id)
    if (result.isSucc) {
      eventBus.emit(EVENT.DELETE, {
        message: result.res.data.message,
        type: EVENT_STATUS.SUCCESS,
      })
    }

    if (result.err != null) {
      eventBus.emit(EVENT.DELETE, { message: 'Something Went Wrong', type: EVENT_STATUS.ERROR })
    }
  }

  const update = async (id, form) => {
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
    formData.append('username', auth.user.email)
    const result = await SolutionGuideService.update(id, formData)
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
    create,
    update,
    deleteRecord,
    getById,
    resetError,
    getPaginated,
  }
}
