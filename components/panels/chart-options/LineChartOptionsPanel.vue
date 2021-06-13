<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Line Chart</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-form
        v-model="formIsValid"
        @submit.prevent="save"
      >
        <TextField
          v-model.number="editTensionValue"
          label="Tension"
          :hint="positiveNumberHint"
          :disabled="!isEditing"
          :additional-rules="[v => !v || !isNaN(v) && v >= 0 || positiveNumberHint]"
          @submit="save"
        />
        <v-checkbox
          v-model="editFillValue"
          label="Fill"
          class="mt-0"
          :disabled="!isEditing"
        />
        <TextField
          v-model.number="editBorderDashValue"
          label="Border Dash"
          :hint="positiveNumberHint"
          :disabled="!isEditing"
          :additional-rules="[v => !v || !isNaN(v) && v >= 0 || positiveNumberHint]"
          @submit="save"
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
    editTensionValue: vm.$store.state.options.tension,
    positiveNumberHint: 'Positive number or zero',
    editFillValue: vm.$store.state.options.fill,
    editBorderDashValue: vm.$store.state.options.borderDash.length > 0
      ? vm.$store.state.options.borderDash[0]
      : 0,
  }),
  methods: {
    save() {
      if (!this.formIsValid) { return }
      this.$store.commit('saveOptions', {
        tension: this.editTensionValue,
        fill: this.editFillValue,
        borderDash: this.editBorderDashValue > 0
          ? [this.editBorderDashValue, this.editBorderDashValue]
          : [],
      })
      this.isEditing = false
    },
    startEditing() {
      this.isEditing = true
    },
    cancelEditing() {
      this.editTensionValue = this.$store.state.options.tension
      this.editFillValue = this.$store.state.options.fill
      this.editBorderDashValue = this.$store.state.options.borderDash.length > 0
        ? this.$store.state.options.borderDash[0]
        : 0
      this.isEditing = false
    },
  },
}
</script>
