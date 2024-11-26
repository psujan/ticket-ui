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
  options: {
    default: () => [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
    ],
  },
})

const computedId = computed(() => {
  return props.id || Math.random().toString(36).substring(2, 7)
})

const model = defineModel()
</script>

<template>
  <div class="form-field">
    <label :for="computedId" class="field-label" v-if="showLabel"
      >{{ label }} <span class="field-req" v-if="isRequired">*</span></label
    >
    <Field :name="name" :id="computedId" class="field-input" v-model="model" as="select">
      <option value="">--Please Select--</option>
      <option :value="option.value" v-for="(option, i) in options" :key="i">
        {{ option.label }}
      </option>
    </Field>
    <ErrorMessage :name="name" class="field-error" />
  </div>
</template>
