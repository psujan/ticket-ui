<!-- eslint-disable vue/no-mutating-props -->
<script setup>
import { watch } from 'vue'
import toast from '@/utils/toast'
import InputText from '@/components/forms/InputText.vue'
import ValidationMessages from '@/components/forms/ValidationMessages.vue'
import * as yup from 'yup'
import { Form } from 'vee-validate'
import InputSelect from '@/components/forms/InputSelect.vue'
import useCategory from '@/composables/useCategory'
import eventBus, { EVENT } from '@/utils/mitt'

const { showError, errorTitle, validationMessages, addRecord} =
  useCategory()
//props
const props = defineProps({
  formValues: {
    default: () => {},
  },
})

const emit = defineEmits(['onModalClose'])

eventBus.on(EVENT.ADD, (data) => {
  toast(data.message)
  emit('onModalClose' , ({reload : true}))
})

/*const schema = yup.object({
  address: yup.string().required('Address is required'),
  email: yup.string().email().required('Email khai ta rakheko'),
  //name: yup.string().required(),
  password: yup.string().required('Password is required').min(8, 'Password must be 8 char long'),
})*/

const handleSubmit = () => {
  let { title, status } = props.formValues
  status = status == 1 ? true : false
  addRecord({ title, status })
}

</script>

<template>
  <VaModal no-padding no-outside-dismiss>
    <template #content="{ ok }">
      <!-- <VaImage :ratio="16 / 9" src="https://picsum.photos/1500" /> -->
      <Form :initial-values="formValues" @submit="handleSubmit" ref="categoryForm">
        <VaCardContent>
          <h2 class="title form-title">Add Category</h2>
          <ValidationMessages v-if="showError" :messages="validationMessages" :title="errorTitle" />

          <div class="row form-row">
            <div class="flex flex-col md6 sm12">
              <InputText name="title" label="Title" v-model="formValues.title" />
            </div>

            <div class="flex flex-col md6 sm12">
              <div class="form-field">
                <InputSelect name="status" label="Status" v-model="formValues.status" />
              </div>
            </div>
          </div>
        </VaCardContent>
        <VaCardActions class="form-action-button">
          <VaButton preset="primary" @click="$emit('closeModal')" class="cancel-btn">
            Cancel
          </VaButton>
          <VaButton type="submit"> Submit </VaButton>
        </VaCardActions>
      </Form>
    </template>
  </VaModal>
</template>
