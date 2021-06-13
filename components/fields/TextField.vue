<template>
  <v-text-field
    ref="field"
    outlined
    persistent-hint
    :label="label"
    :hint="hint"
    :disabled="disabled"
    :rules="rules"
    :value="value"
    @input="$emit('input', $event)"
    @keyup="submitForm"
    @blur="$refs.field.resetValidation()"
  />
</template>

<script>
import required from '@/assets/js/validation/required.js'

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    additionalRules: {
      type: Array,
      default: () => [],
    },
  },
  data: vm => ({
    rules: [
      required,
      ...vm.additionalRules,
    ],
  }),
  methods: {
    submitForm(event) {
      if (event && event.key === 'Enter') {
        this.$emit('submit')
      }
    },
  },
}
</script>
