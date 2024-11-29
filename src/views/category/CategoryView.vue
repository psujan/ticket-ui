<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import CategoryList from './partials/CategoryList.vue'
import CategoryModal from './partials/CategoryModal.vue'
import { useModal } from 'vuestic-ui'
import useCategory from '@/composables/useCategory'
import { ref, reactive, watch } from 'vue'
import { actions, confirmOptions } from '@/utils/data'
import eventBus, { EVENT, EVENT_STATUS } from '@/utils/mitt'
import toast from '@/utils/toast'
import AppPagination from '@/components/common/AppPagination.vue'

// composable functions
const { confirm } = useModal()
const { rows, addRecord, deleteRecord, getRecords } = useCategory()
const row = ref(null)

//reactive data
const showModal = defineModel('showModal', { default: false })
const formValues = reactive({
  title: undefined,
  status: undefined,
})

//manage events
eventBus.on(EVENT.DELETE, ({ message, type }) => {
  if (type == EVENT_STATUS.SUCCESS) {
    toast(message)
    getRecords()
    return
  }

  toast(message, EVENT_STATUS.ERROR)
})

// component methods
const openModal = (action) => {
  if (action == actions.add) {
    resetFormValue()
    showModal.value = true
    row.value = null
  }

  if (action == actions.edit) {
    showModal.value = true
  }
}

const resetFormValue = () => {
  formValues.title = undefined
  formValues.status = undefined
}

const handleModalClose = (reload = false) => {
  showModal.value = false
  row.value = null
  if (reload) {
    getRecords()
  }
}

const handleSubmit = () => {
  addRecord(formValues)
}

const handleDelete = (id) => {
  confirm(confirmOptions).then((ok) => {
    if (!ok) {
      return
    }
    deleteRecord(id)
  })
}

const handleEdit = (editRow) => {
  row.value = editRow
  formValues.title = editRow.title
  formValues.status = editRow.status ? 1 : 0
  openModal(actions.edit)
}

//watcher
</script>

<template>
  <DashboardLayout>
    <div class="row">
      <div class="flx margin-b x-center">
        <h2 class="title">Categories</h2>
        <div style="margin-left: 20px">
          <VaButton round @click="openModal(actions.add)"><i class="ri-add-line"></i></VaButton>
        </div>
      </div>
      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <CategoryList :rows="rows" @onEdit="handleEdit" @onDelete="handleDelete" />
        <AppPagination :rows="rows" @onPageChange="(pageNo) => getRecords(pageNo)" />
      </div>
    </div>
    <CategoryModal
      :showModal="showModal"
      v-model="showModal"
      :row="row"
      :formValues="formValues"
      @onModalClose="handleModalClose"
      @onFormSubmit="handleSubmit"
    />
  </DashboardLayout>
</template>
