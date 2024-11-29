<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import ValidationMessages from '@/components/forms/ValidationMessages.vue'
import useTicket from '@/composables/useTicket'
import { onMounted, reactive, computed, ref } from 'vue'
import InputSelect from '@/components/forms/InputSelect.vue'
import InputText from '@/components/forms/InputText.vue'
import { Form } from 'vee-validate'
import InputQuillEditor from '@/components/forms/InputQuillEditor.vue'
import InputFile from '@/components/forms/InputFile.vue'
import eventBus, { EVENT } from '@/utils/mitt'
import toast from '@/utils/toast'
import router from '@/router'

//composable call
const { showError, errorTitle, validationMessages, list, addRecord, getList } = useTicket()

//props
defineProps({
  row: {
    default: null,
  },
})
//reactive & computed data
const validationErrorRef = ref(null)

const formValues = reactive({
  title: '',
  status: '',
  issuerEmail: '',
  issuerPhone: '',
  files: [],
  categoryId: '',
  details: '',
})

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'InProgess', value: 'InProgress' },
  { label: 'Reopened', value: 'Reopened' },
  { label: 'Resolved', value: 'Resolved' },
  { label: 'Terminated', value: 'Terminated' },
]

const computedList = computed(() => {
  if (list.value.length) {
    return list.value.map((item) => ({
      value: item.id,
      label: item.title,
    }))
  }

  return []
})

//methods
const handleSubmit = () => {
  console.log('here submitting', formValues)
  addRecord(formValues)
}

const scrollTo = (view) => {
  view.value?.scrollIntoView({ behavior: 'smooth' })
}

//manage event
eventBus.on(EVENT.ADD, (data) => {
  toast(data.message)
  router.push({ name: 'ticket' })
})

eventBus.on(EVENT.VALIDATION_ERROR, () => {
  console.log('event fired')
  scrollTo(validationErrorRef)
})

//lifecycle
onMounted(() => {
  getList()
})
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
            <div ref="validationErrorRef">
              <ValidationMessages
                v-if="showError"
                :messages="validationMessages"
                :title="errorTitle"
              />
            </div>

            <div class="row form-row">
              <div class="flex flex-col md6 sm12">
                <InputText name="title" label="Title" v-model="formValues.title" />
              </div>

              <div class="flex flex-col md6 sm12">
                <div class="form-field">
                  <InputSelect
                    name="category"
                    label="Category"
                    :options="computedList"
                    v-model="formValues.categoryId"
                  />
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
                  <InputSelect
                    name="status"
                    :options="statusOptions"
                    label="Status"
                    v-model="formValues.status"
                  />
                </div>
              </div>

              <div class="flex flex-col md12 sm12">
                <div class="form-field">
                  <InputQuillEditor name="details" label="Details" v-model="formValues.details" />
                </div>
              </div>
              <div class="flex flex-col md12 sm12">
                <div class="form-field">
                  <InputFile :isRequired="false" label="Files" v-model="formValues.files" />
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
