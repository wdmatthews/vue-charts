<template>
  <base-dialog ref="baseDialog">
    <template #title>
      Remove Datum
    </template>
    <p class="mb-0 text-center">
      Are you sure you want to remove {{ datum }}?
    </p>
    <template #actions>
      <v-btn
        text
        @click="close"
      >
        Cancel
      </v-btn>
      <v-btn
        color="error"
        text
        @click="remove"
      >
        Remove
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
  methods: {
    open() {
      this.$refs.baseDialog.open()
    },
    close() {
      this.$refs.baseDialog.close()
    },
    remove() {
      this.$store.commit('removeDatum', { datasetIndex: this.datasetIndex, datumIndex: this.datumIndex })
      this.close()
    },
  },
}
</script>
