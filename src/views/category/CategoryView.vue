<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import CategoryList from './partials/CategoryList.vue'
import CategoryModal from './partials/CategoryModal.vue'

const model = defineModel({ default: false })

const openModal = (action) => {
  if (action == 'create') {
    model.value = true
  }
}

const handleModalClose = () => {
  model.value = false
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
        <CategoryList />
      </div>
    </div>
    <CategoryModal v-model="model" @closeModal="handleModalClose" />
  </DashboardLayout>
</template>
