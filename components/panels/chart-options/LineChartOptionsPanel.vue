<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Line Chart</v-expansion-panel-header>
    <v-expansion-panel-content>
      Options
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data: vm => ({
    isEditing: false,
    formIsValid: false,
  }),
  methods: {
    save() {
      if (!this.formIsValid) { return }
      this.$store.commit('saveOptions', {
        
      })
      this.isEditing = false
    },
    startEditing() {
      this.isEditing = true
    },
    cancelEditing() {
      //
      this.isEditing = false
    },
  },
}
</script>
