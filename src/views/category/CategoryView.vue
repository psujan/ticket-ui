<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import CategoryList from './partials/CategoryList.vue'
import CategoryModal from './partials/CategoryModal.vue'
import { useModal } from 'vuestic-ui'
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

const handleModalClose = () => {
  model.value = false
}

const formValues = {
  email: '',
  password: '',
}

const handleSubmit = (v) => {
  console.log(v)
  console.log('submitting')
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
        <CategoryList @deleteItem="deleteItem" />
      </div>
    </div>
    <CategoryModal v-model="model" @closeModal="handleModalClose" />
  </DashboardLayout>
</template>
