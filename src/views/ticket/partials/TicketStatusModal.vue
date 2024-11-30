<!-- eslint-disable vue/no-mutating-props -->
<script setup>
//import { watch } from 'vue'
import toast from '@/utils/toast'
import ValidationMessages from '@/components/forms/ValidationMessages.vue'
import * as yup from 'yup'
import { Form } from 'vee-validate'
import InputSelect from '@/components/forms/InputSelect.vue'
import useTicket from '@/composables/useTicket'
import eventBus, { EVENT } from '@/utils/mitt'
import { ticketStatusOptions } from '@/utils/data'
const { showError, errorTitle, validationMessages, updateStatus } = useTicket()
//props
const props = defineProps({
  form: {
    default: () => {},
  },
  showStatusModal: {
    default: false,
  },
})

const emit = defineEmits(['onModalClose'])

eventBus.on(EVENT.ADD, (data) => {
  toast(data.message)
  emit('onModalClose', true)
})

eventBus.on(EVENT.TICKET_STAUS_UPDATE, (data) => {
  toast(data.message)
  emit('onModalClose', true)
})

const schema = yup.object({
  status: yup.string().required('Status is required'),
})

const handleSubmit = () => {
  updateStatus(props.form.id, props.form.status)
}
</script>

<template>
  <VaModal no-padding hide-default-actions size="small">
    <div>
      <Form
        :initial-values="formValues"
        :validation-schema="schema"
        @submit="handleSubmit"
        ref="categoryForm"
      >
        <VaCardContent>
          <h2 class="title form-title">Update Status</h2>
          <ValidationMessages v-if="showError" :messages="validationMessages" :title="errorTitle" />

          <div class="row form-row">
            <div class="flex flex-col md12 sm12">
              <div class="form-field">
                <InputSelect
                  name="status"
                  :options="ticketStatusOptions"
                  label="Status"
                  v-model="form.status"
                />
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
  </VaModal>
</template>
