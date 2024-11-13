<template>
  <div>
    <label :for="name">{{ label }}</label>
    <Field
      :id="name"
      :name="name"
      :type="type"
      v-bind="field"
      @input="onInput"
      class="form-input"
    />
    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
  </div>
</template>

<script>
import { Field, useField } from 'vee-validate';

export default {
  components: {
    Field,
  },
  props: {
    name: { type: String, required: true },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    rules: { type: Object, required: true },
  },
  setup(props) {
    const { field, errors, handleChange } = useField(props.name, props.rules);

    const onInput = (e) => {
      handleChange(e); // Trigger validation on input change
    };

    return { field, errors, onInput };
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 0.8em;
}
</style>
