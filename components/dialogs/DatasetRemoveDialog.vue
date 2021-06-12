<template>
  <base-dialog ref="baseDialog">
    <template #title>
      Remove Dataset
    </template>
    <p class="mb-0 text-center">
      Are you sure you want to remove {{ dataset.label }}?
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
    index: {
      type: Number,
      default: 0,
    },
    dataset: {
      type: Object,
      default: () => {},
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
      this.$store.commit('removeDataset', this.index)
      this.close()
    },
  },
}
</script>
