<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import ValidationMessages from '@/components/forms/ValidationMessages.vue'
import useSolutionGuide from '@/composables/useSolutionGuide'
import { reactive, ref, watch } from 'vue'
import InputSelect from '@/components/forms/InputSelect.vue'
import InputText from '@/components/forms/InputText.vue'
import { Form } from 'vee-validate'
import InputQuillEditor from '@/components/forms/InputQuillEditor.vue'
import InputFile from '@/components/forms/InputFile.vue'
import eventBus, { EVENT_SOLUTIONGUIDE as EVENT } from '@/utils/mitt'
import toast from '@/utils/toast'
import router from '@/router'
import { useRoute } from 'vue-router'

//composable call
const route = useRoute()
const { showError, errorTitle, validationMessages, row, create, update, getById } =
  useSolutionGuide()

//reactive & computed data
const validationErrorRef = ref(null)

const form = reactive({
  title: '',
  status: '',
  files: [],
  details: '',
})

//methods
const routeTo = (routeName) => {
  router.push({ name: routeName })
}
const handleSubmit = () => {
  if (row.value != null) {
    update(row.value.id, form)
  } else {
    create(form)
  }
}

const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
]

const scrollTo = (view) => {
  view.value?.scrollIntoView({ behavior: 'smooth' })
}

const setFormValue = () => {
  form.title = row.value.title
  form.status = row.value.status
  form.details = row.value.details
  form.files = []
}

const resetFormValue = () => {
  form.title = ''
  form.status = ''
  form.details = ''
  form.files = []
}

//manage event
eventBus.on(EVENT.ADD, (data) => {
  toast(data.message)
  router.push({ name: 'solution-guide' })
})

eventBus.on(EVENT.UPDATE, (data) => {
  toast(data.message)
  router.push({ name: 'solution-guide' })
})

eventBus.on(EVENT.VALIDATION_ERROR, () => {
  scrollTo(validationErrorRef)
})

//lifecycle

//watcher
watch(
  () => route,
  (to) => {
    if (to.params.id) {
      getById(to.params.id)
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
    <div class="wrap">
      <div class="d-flex align-items-center mb-4">
        <h2 class="title">{{ row != null ? 'Edit' : 'Add' }} Solution Guide</h2>
        <div style="margin-left: 20px">
          <VaPopover placement="bottom" message="Solution Guide List">
            <VaButton round @click="routeTo('solution-guide')"
              ><i class="ri-external-link-line"></i
            ></VaButton>
          </VaPopover>
        </div>
      </div>
      <div class="p-3 round-default bg-white">
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
              <div class="col-sm-12 col-md-6 col-lg-8 mb-4">
                <InputText name="title" label="Title" v-model="form.title" />
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div class="form-field">
                  <InputSelect
                    name="status"
                    :options="statusOptions"
                    label="Status"
                    v-model="form.status"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-12 mb-4">
                <div class="form-field">
                  <InputQuillEditor name="details" label="Details" v-model="form.details" />
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-12 mb-4">
                <div class="form-field">
                  <InputFile :isRequired="false" label="Files" v-model="form.files" />
                </div>
                <div v-if="row && row.files && row.files.length > 0">
                  <h5 class="mb-2">Uploaded Files</h5>
                  <div
                    v-for="(f, i) in row.files"
                    :key="i"
                    class="mb-2 upload-list bg-gray-light d-flex justify-content-between px-2 py-2"
                  >
                    <span class="clr-primary">{{ f.name }}</span>
                    <div>
                      <a href="#"
                        ><span class="error px-1"><i class="ri-delete-bin-line"></i></span
                      ></a>
                      <a href="#"
                        ><span class="clr-primary px-1"><i class="ri-download-cloud-line"></i></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-action-button cd" style="margin-top: 20px">
            <div class="form-btns">
              <VaButton preset="primary" @click="resetFormValue" class="cancel-btn">
                Cancel
              </VaButton>
              <VaButton type="submit"> Submit </VaButton>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.form-action-button {
  display: grid;
}

.form-btns {
  justify-self: end;
}

.form-btns button {
  min-width: 180px;
}

.upload-list {
  border-radius: 6px;
}
</style>
