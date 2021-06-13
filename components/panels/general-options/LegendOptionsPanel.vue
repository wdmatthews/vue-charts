<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Legend</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-form
        v-model="formIsValid"
        @submit.prevent="save"
      >
        <v-checkbox
          v-model="editLegendDisplayValue"
          label="Legend Display"
          class="mt-0"
          :disabled="!isEditing"
        />
        <div class="text-center mb-4">
          <v-btn
            v-show="!isEditing"
            color="primary"
            @click="startEditing"
          >
            Edit
          </v-btn>
          <v-btn
            v-show="isEditing"
            class="mr-4"
            @click="cancelEditing"
          >
            Cancel
          </v-btn>
          <v-btn
            v-show="isEditing"
            color="primary"
            :disabled="!formIsValid"
            @click="save"
          >
            Save
          </v-btn>
        </div>
      </v-form>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data: vm => ({
    isEditing: false,
    formIsValid: false,
    editLegendDisplayValue: vm.$store.state.options.plugins.legend.display,
  }),
  methods: {
    save() {
      if (!this.formIsValid) { return }
      const options = this.$store.state.options
      this.$store.commit('saveOptions', {
        ...options,
        plugins: {
          ...options.plugins,
          legend: {
            ...options.plugins.legend,
            display: this.editLegendDisplayValue,
          },
        },
      })
      this.isEditing = false
    },
    startEditing() {
      this.isEditing = true
    },
    cancelEditing() {
      this.editLegendDisplayValue = this.$store.state.options.plugins.legend.display
      this.isEditing = false
    },
  },
}
</script>
