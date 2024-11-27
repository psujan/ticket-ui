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
const { showError, errorTitle, validationMessages, addRecord, resetError, editRecord } =
  useCategory()
//props
const props = defineProps({
  formValues: {
    default: () => {},
  },
  row: {
    default: null,
  },
  showModal: {
    default: false,
  },
})

const emit = defineEmits(['onModalClose'])

eventBus.on(EVENT.ADD, (data) => {
  toast(data.message)
  emit('onModalClose', true)
})

eventBus.on(EVENT.UPDATE, (data) => {
  toast(data.message)
  emit('onModalClose', true)
})

/*const schema = yup.object({
  title: yup.string().required('Title is required'),
  status: yup.string().required('Status is required'),
})*/

const handleSubmit = () => {
  let { title, status } = props.formValues
  status = status == 1 ? true : false
  if (props.row == null) {
    addRecord({ title, status })
  } else {
    editRecord(props.row.id, { title, status })
  }
}

//watchers
//watchers
watch(
  () => props.showModal,
  (_, oldV) => {
    if (!oldV) {
      resetError()
    }
  },
)
</script>

<template>
  <VaModal no-padding no-outside-dismiss hide-default-actions>
    <div>
      <Form :initial-values="formValues" @submit="handleSubmit" ref="categoryForm">
        <VaCardContent>
          <h2 class="title form-title">{{ row != null ? 'Edit' : 'Add' }} Category</h2>
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
          <VaButton preset="primary" @click="$emit('onModalClose')" class="cancel-btn">
            Cancel
          </VaButton>
          <VaButton type="submit"> Submit </VaButton>
        </VaCardActions>
      </Form>
    </div>
    <!-- <VaImage :ratio="16 / 9" src="https://picsum.photos/1500" /> -->
  </VaModal>
</template>
