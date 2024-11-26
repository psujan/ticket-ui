<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import CategoryList from './partials/CategoryList.vue'
import CategoryModal from './partials/CategoryModal.vue'
import { useModal } from 'vuestic-ui'
import useCategory from '@/composables/useCategory'
import { reactive } from 'vue'

const { rows, addRecord, getRecords } = useCategory()

const model = defineModel({ default: false })
const { confirm } = useModal()
const openModal = (action) => {
  if (action == 'create') {
    model.value = true
  }
}

const deleteItem = () => {
  confirm({
    message: 'Are you sure you want to delete this item?',
    size: 'small',
    maxWidth: '380px',
  }).then((ok) => console.log(ok))
}

const handleModalClose = ({ reload }) => {
  model.value = false
  if (reload) {
    getRecords()
  }
}

const formValues = reactive({
  title: undefined,
  status: undefined,
})

const handleSubmit = () => {
  addRecord(formValues)
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
        <CategoryList @deleteItem="deleteItem" :rows="rows" />
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
