<script setup>
import InputText from '@/components/forms/InputText.vue'
import { Form, defineRule } from 'vee-validate'
import * as yup from 'yup'

/*const onSubmit = (values) => {
  console.log(values)
}*/

defineRule('email', yup.string().email().required())
defineRule('password', yup.string().min(8).required())

const emailRules = 'email'
const passwordRules = 'password'

const onSubmit = (values, { resetForm }) => {
  console.log('Form Submitted', values)
  // Reset form if needed
  resetForm()
}
</script>

<template>
  <VaModal no-padding>
    <template #content="{ ok }">
      <!-- <VaImage :ratio="16 / 9" src="https://picsum.photos/1500" /> -->
      <VaCardContent>
        <div class="row">
          <Form @submit="onSubmit">
            <InputText name="email" label="Email" type="email" :rules="emailRules" />
            <InputText name="password" label="Password" type="password" :rules="passwordRules" />
            <button type="submit">Submit</button>
          </Form>
        </div>
      </VaCardContent>
      <VaCardActions>
        <VaButton @click="$emit('closeModal')"> Apply </VaButton>
      </VaCardActions>
    </template>
  </VaModal>
</template>
