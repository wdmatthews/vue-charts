<template>
  <base-dialog ref="baseDialog">
    <template #title>
      Edit Datum
    </template>
    <v-form
      ref="form"
      v-model="formIsValid"
      @submit.prevent="save"
    >
      <DatumField
        v-model.number="editValue"
        :additional-rules="[v => !v || v !== datum || 'Change the value to save']"
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
    datasetIndex: {
      type: Number,
      default: 0,
    },
    datumIndex: {
      type: Number,
      default: 0,
    },
    datum: {
      type: Number,
      default: 0,
    },
  },
  data: vm => ({
    formIsValid: false,
    editValue: '',
  }),
  methods: {
    open() {
      this.editValue = this.datum
      this.$refs.form?.resetValidation()
      this.$refs.baseDialog.open()
    },
    close() {
      this.$refs.baseDialog.close()
    },
    save() {
      if (!this.formIsValid) { return }
      this.$store.commit('editDatum', {
        datasetIndex: this.datasetIndex,
        datumIndex: this.datumIndex,
        value: this.editValue,
      })
      this.close()
    },
  },
}
</script>
