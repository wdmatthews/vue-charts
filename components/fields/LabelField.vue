<template>
  <v-text-field
    ref="field"
    label="Label"
    outlined
    :rules="rules"
    :value="value"
    @input="$emit('input', $event)"
    @keyup="submitForm"
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
