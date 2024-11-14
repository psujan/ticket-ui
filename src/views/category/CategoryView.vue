<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import CategoryList from './partials/CategoryList.vue'
import CategoryModal from './partials/CategoryModal.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'

const model = defineModel({ default: false })

const openModal = (action) => {
  if (action == 'create') {
    model.value = true
  }
}

const handleModalClose = () => {
  model.value = false
}

const formValues = {
  email: 'test',
  password: 'test',
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
        <Form v-slot="{ validate }" :initial-values="formValues" @submit="handleSubmit">
          <label for="email">Email</label>
          <Field name="email" type="email" id="email" rules="required|email" />
          <ErrorMessage name="email" />
          <Field name="password" type="password" rules="required|min:8" />
          <ErrorMessage name="password" />
          <button type="submit" @click="validate">Submit</button>
        </Form>
        <CategoryList />
      </div>
    </div>
    <CategoryModal v-model="model" @closeModal="handleModalClose" />
  </DashboardLayout>
</template>
