<script setup>
import { Field, ErrorMessage } from 'vee-validate'
import { computed } from 'vue'
const props = defineProps({
  label: String,
  isRequired: {
    type: Boolean,
    default: true,
  },
  id: String,
  name: String,
  type: {
    type: String,
    default: 'text',
  },
  showLabel: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    default: '',
  },
})

const computedId = computed(() => {
  return props.id || Math.random().toString(36).substring(2, 7)
})

const computedPlaceHolder = computed(() => {
  return props.placeholder || `Enter ${props.label}`
})

const model = defineModel()
</script>

<template>
  <div class="form-field">
    <label :for="computedId" class="field-label" v-if="showLabel"
      >{{ label }} <span class="field-req" v-if="isRequired">*</span></label
    >
    <VaFileUpload v-model="model" dropzone upload-button-text="Upload File" />
    <ErrorMessage :name="name" class="field-error" />
  </div>
</template>
