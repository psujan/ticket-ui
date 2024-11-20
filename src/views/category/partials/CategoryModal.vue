<script setup>
import InputText from '@/components/forms/InputText.vue'
import * as yup from 'yup'
import { Form , validate} from 'vee-validate'

const schema = yup.object({
  address: yup.string().required('Address is required'),
  email: yup.string().email().required('Email khai ta rakheko'),
  //name: yup.string().required(),
  password: yup.string().required('Password is required').min(8, 'Password must be 8 char long'),
})

const handleSubmit = (values) => {
  console.log('submitting', values)
}



const formValues = {}
</script>

<template>
  <VaModal no-padding>
    <template #content="{ ok }">
      <!-- <VaImage :ratio="16 / 9" src="https://picsum.photos/1500" /> -->
      <Form
        :initial-values="formValues"
        @submit="handleSubmit"
        
        :validation-schema="schema"
        ref="categoryForm"
      >
        <VaCardContent>
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
        </VaCardContent>
        <VaCardActions class="form-action-button">
          <VaButton preset="primary" @click="$emit('closeModal')" class="cancel-btn">
            Cancel
          </VaButton>
          <VaButton @click="handleSubmit"> Submit </VaButton>
        </VaCardActions>
      </Form>
    </template>
  </VaModal>
</template>
