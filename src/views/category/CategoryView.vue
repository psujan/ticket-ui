<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import CategoryList from './partials/CategoryList.vue'
import CategoryModal from './partials/CategoryModal.vue'
import { useModal } from 'vuestic-ui'
import useCategory from '@/composables/useCategory'
import { reactive } from 'vue'
import { confirmOptions } from '@/utils/data'
import eventBus, { EVENT, EVENT_STATUS } from '@/utils/mitt'
import toast from '@/utils/toast'

// composable functions
const { confirm } = useModal()
const { rows, addRecord, deleteRecord, getRecords } = useCategory()

//reactive data
const model = defineModel({ default: false })
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
  if (action == 'create') {
    model.value = true
  }
}

const handleModalClose = (reload = false) => {
  model.value = false
  if (reload) {
    getRecords()
  }
}

const handleSubmit = () => {
  addRecord(formValues)
}

const handleDelete = (id) => {
  console.log('delete', id)
  confirm(confirmOptions).then((ok) => {
    if (!ok) {
      return
    }
    deleteRecord(id)
  })
}

const handleEdit = (row) => {
  console.log(row)
}
</script>

<template>
  <DashboardLayout>
    <div class="row">
      <div class="flx margin-b x-center">
        <h2 class="title">Categories</h2>
        <div style="margin-left: 20px">
          <VaButton round @click="openModal('create')"><i class="ri-add-line"></i></VaButton>
        </div>
      </div>
      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <CategoryList
          @deleteItem="deleteItem"
          :rows="rows"
          @onEdit="handleEdit"
          @onDelete="handleDelete"
        />
      </div>
    </div>
    <CategoryModal
      v-model="model"
      :form-values="formValues"
      @onModalClose="handleModalClose"
      @onFormSubmit="handleSubmit"
    />
  </DashboardLayout>
</template>
