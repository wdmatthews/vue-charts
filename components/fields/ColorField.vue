<template>
  <v-text-field
    ref="field"
    outlined
    :label="label"
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
import color from '@/assets/js/validation/color.js'

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Color',
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
      color,
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
