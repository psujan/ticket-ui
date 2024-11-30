<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import ValidationMessages from '@/components/forms/ValidationMessages.vue'
import useTicket from '@/composables/useTicket'
import { onMounted, reactive, computed, ref, watch } from 'vue'
import InputSelect from '@/components/forms/InputSelect.vue'
import InputText from '@/components/forms/InputText.vue'
import { Form } from 'vee-validate'
import InputQuillEditor from '@/components/forms/InputQuillEditor.vue'
import InputFile from '@/components/forms/InputFile.vue'
import eventBus, { EVENT } from '@/utils/mitt'
import toast from '@/utils/toast'
import router from '@/router'
import { useRoute } from 'vue-router'
import { ticketStatusOptions } from '@/utils/data'

//composable call
const route = useRoute()
const {
  showError,
  errorTitle,
  validationMessages,
  list,
  row,
  addRecord,
  editRecord,
  getList,
  getTicketById,
} = useTicket()

//reactive & computed data
const validationErrorRef = ref(null)

const form = reactive({
  title: '',
  status: '',
  issuerEmail: '',
  issuerPhone: '',
  files: [],
  categoryId: '',
  details: '',
})

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
const routeTo = (routeName) => {
  router.push({ name: routeName })
}
const handleSubmit = () => {
  if (row.value != null) {
    editRecord(row.value.id, form)
  } else {
    addRecord(form)
  }
}

const scrollTo = (view) => {
  view.value?.scrollIntoView({ behavior: 'smooth' })
}

const setFormValue = () => {
  console.log(row.value)
  form.title = row.value.title
  form.categoryId = row.value.categoryId
  form.status = row.value.status
  form.details = row.value.details
  form.issuerPhone = row.value.issuerPhone
  form.issuerEmail = row.value.issuerEmail == null ? '' : row.value.issuerEmail
  form.files = []
}

//manage event
eventBus.on(EVENT.ADD, (data) => {
  toast(data.message)
  router.push({ name: 'ticket' })
})

eventBus.on(EVENT.UPDATE, (data) => {
  toast(data.message)
  router.push({ name: 'ticket' })
})

eventBus.on(EVENT.VALIDATION_ERROR, () => {
  scrollTo(validationErrorRef)
})

//lifecycle
onMounted(() => {
  getList()
})

//watcher
watch(
  () => route,
  (to) => {
    if (to.params.id) {
      getTicketById(to.params.id)
    }
  },
  {
    immediate: true,
  },
)

watch(
  () => row.value,
  () => {
    if (row.value != null) {
      setFormValue()
    }
  },
  { immediate: true },
)
</script>

<template>
  <DashboardLayout>
    <div class="row">
      <div class="flx margin-b x-center">
        <h2 class="title">{{ row != null ? 'Edit' : 'Add' }} Ticket</h2>
        <div style="margin-left: 20px">
          <VaButton round @click="routeTo('ticket')"
            ><i class="ri-external-link-line"></i
          ></VaButton>
        </div>
      </div>

      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <Form @submit="handleSubmit">
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
                <InputText name="title" label="Title" v-model="form.title" />
              </div>

              <div class="flex flex-col md6 sm12">
                <div class="form-field">
                  <InputSelect
                    name="category"
                    label="Category"
                    :options="computedList"
                    v-model="form.categoryId"
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
                    v-model="form.issuerEmail"
                  />
                </div>
              </div>
              <div class="flex flex-col md4 sm12">
                <div class="form-field">
                  <InputText
                    name="phone"
                    label="Phone"
                    :isRequired="false"
                    v-model="form.issuerPhone"
                  />
                </div>
              </div>
              <div class="flex flex-col md4 sm12">
                <div class="form-field">
                  <InputSelect
                    name="status"
                    :options="ticketStatusOptions"
                    label="Status"
                    v-model="form.status"
                  />
                </div>
              </div>

              <div class="flex flex-col md12 sm12">
                <div class="form-field">
                  <InputQuillEditor name="details" label="Details" v-model="form.details" />
                </div>
              </div>
              <div class="flex flex-col md12 sm12">
                <div class="form-field">
                  <InputFile :isRequired="false" label="Files" v-model="form.files" />
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
