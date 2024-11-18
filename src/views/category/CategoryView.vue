<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import CategoryList from './partials/CategoryList.vue'
import CategoryModal from './partials/CategoryModal.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import InputText from '@/components/forms/InputText.vue'

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
  }).then((ok) => {
    if (!ok) {
      return
    }

    console.log('delete api')
  })
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

const schema = yup.object({
  address: yup.string().required('Address is required'),
  email: yup.string().email().required('Email khai ta rakheko'),
  //name: yup.string().required(),
  password: yup.string().required('Password is required').min(8, 'Password must be 8 char long'),
})
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
        <Form
          v-slot="{ validate }"
          :initial-values="formValues"
          @submit="handleSubmit"
          :validation-schema="schema"
        >
          <div class="row form-row">
            <div class="flex flex-col md6">
              <InputText name="address" label="Address" />
            </div>

            <div class="flex flex-col md6">
              <div class="form-field">
                <InputText name="email" label="Email" />
              </div>
            </div>
          </div>

          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <button type="submit" @click="validate">Submit</button>
        </Form>
        <CategoryList @deleteItem="deleteItem" />
      </div>
    </div>
    <CategoryModal v-model="model" @closeModal="handleModalClose" />
  </DashboardLayout>
</template>
