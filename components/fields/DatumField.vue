<template>
  <v-text-field
    ref="field"
    label="Datum"
    outlined
    :rules="rules"
    :value="value"
    @input="$emit('input', $event)"
    @keyup="submitForm"
    @blur="$refs.field.resetValidation()"
  />
</template>

<script>
import required from '@/assets/js/validation/required.js'
import number from '@/assets/js/validation/number.js'

export default {
  props: {
    value: {
      type: [Number, String],
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
      number,
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
