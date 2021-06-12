<template>
  <v-dialog
    v-model="show"
    max-width="500"
  >
    <v-card>
      <v-card-title class="pa-4">
        <span class="mx-auto">
          <slot name="title" />
        </span>
      </v-card-title>
      <v-card-text class="px-4 py-0">
        <slot />
      </v-card-text>
      <v-card-actions class="pa-4">
        <v-spacer />
        <slot name="actions" />
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: vm => ({
    show: false,
  }),
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
  },
}
</script>
