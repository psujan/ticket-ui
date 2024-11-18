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
})

const computedId = computed(() => {
  return props.id || Math.random().toString(36).substring(2, 7)
})
</script>

<template>
  <div class="form-field">
    <label :for="computedId" class="field-label" v-if="showLabel"
      >{{ label }} <span class="field-req" v-if="isRequired">*</span></label
    >
    <Field :name="name" :type="type" :id="computedId" class="field-input" />
    <ErrorMessage :name="name" class="field-error" />
  </div>
</template>
