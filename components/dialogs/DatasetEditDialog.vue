<template>
  <base-dialog ref="baseDialog">
    <template #title>
      Edit Dataset
    </template>
    <v-form
      ref="form"
      v-model="formIsValid"
      @submit.prevent="save"
    >
      <LabelField
        v-model="editValue"
        :additional-rules="[v => !v || v !== dataset.label || 'Change the value to save']"
      />
    </v-form>
    <template #actions>
      <v-btn
        text
        @click="close"
      >
        Cancel
      </v-btn>
      <v-btn
        color="primary"
        text
        :disabled="!formIsValid"
        @click="save"
      >
        Save
      </v-btn>
    </template>
  </base-dialog>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    dataset: {
      type: Object,
      default: () => {},
    },
  },
  data: vm => ({
    formIsValid: false,
    editValue: '',
  }),
  methods: {
    open() {
      this.editValue = this.dataset.label
      this.$refs.form?.resetValidation()
      this.$refs.baseDialog.open()
    },
    close() {
      this.$refs.baseDialog.close()
    },
    save() {
      if (!this.formIsValid) { return }
      this.$store.commit('editDatasetLabel', { index: this.index, value: this.editValue })
      this.close()
    },
  },
}
</script>
