<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import useTicket from '@/composables/useTicket'
import { reactive } from 'vue'
import InputSelect from '@/components/forms/InputSelect.vue'
import InputText from '@/components/forms/InputText.vue'
import { Form } from 'vee-validate'
import InputQuillEditor from '@/components/forms/InputQuillEditor.vue'
import InputFile from '@/components/forms/InputFile.vue'

//composable call
const { showError, errorTitle, validationMessages } = useTicket()

//props
defineProps({
  row: {
    default: null,
  },
})
//reactive data
const formValues = reactive({
  title: undefined,
  status: undefined,
  issuerEmail: undefined,
  issuerPhone: undefined,
  files: null,
  categoryId: undefined,
  details: undefined,
})

//methods

//handle event
</script>

<template>
  <DashboardLayout>
    <div class="row">
      <div class="flx margin-b x-center">
        <h2 class="title">Add Ticket</h2>
        <div style="margin-left: 20px">
          <VaButton round><i class="ri-external-link-line"></i></VaButton>
        </div>
      </div>

      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <Form :initial-values="formValues" @submit="handleSubmit">
          <div>
            <ValidationMessages
              v-if="showError"
              :messages="validationMessages"
              :title="errorTitle"
            />

            <div class="row form-row">
              <div class="flex flex-col md6 sm12">
                <InputText name="title" label="Title" v-model="formValues.title" />
              </div>

              <div class="flex flex-col md6 sm12">
                <div class="form-field">
                  <InputSelect name="category" label="Category" v-model="formValues.status" />
                </div>
              </div>

              <div class="flex flex-col md4 sm12">
                <div class="form-field">
                  <InputText
                    name="email"
                    tye="email"
                    label="Email"
                    :isRequired="false"
                    v-model="formValues.issuerEmail"
                  />
                </div>
              </div>
              <div class="flex flex-col md4 sm12">
                <div class="form-field">
                  <InputText
                    name="phone"
                    label="Phone"
                    :isRequired="false"
                    v-model="formValues.issuerPhone"
                  />
                </div>
              </div>
              <div class="flex flex-col md4 sm12">
                <div class="form-field">
                  <InputSelect name="status" label="Status" v-model="formValues.status" />
                </div>
              </div>

              <div class="flex flex-col md12 sm12">
                <div class="form-field">
                  <InputQuillEditor name="details" label="Details" v-model="formValues.details" />
                </div>
              </div>
              <div class="flex flex-col md12 sm12">
                <div class="form-field">
                  <InputFile :isRequired="false" label="Files" v-model="formValues.status" />
                </div>
              </div>
            </div>
          </div>
          <div class="form-action-button cd" style="margin-top: 20px">
            <VaButton preset="primary" @click="$emit('onModalClose')" class="cancel-btn">
              Cancel
            </VaButton>
            <VaButton type="submit"> Submit </VaButton>
          </div>
        </Form>
      </div>
    </div>
  </DashboardLayout>
</template>
