<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Bar Chart</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-form
        v-model="formIsValid"
        @submit.prevent="save"
      >
        <TextField
          v-model="editIndexAxisValue"
          label="Index Axis"
          :hint="indexAxisHint"
          :disabled="!isEditing"
          :additional-rules="[v => !v || indexAxisChoices.includes(v) || indexAxisHint]"
          @submit="save"
        />
        <TextField
          v-model.number="editBorderRadiusValue"
          label="Border Radius"
          :hint="borderRadiusHint"
          :disabled="!isEditing"
          :additional-rules="[v => !v || !isNaN(v) && v >= 0 || borderRadiusHint]"
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
    editIndexAxisValue: vm.$store.state.options.indexAxis,
    indexAxisChoices: ['x', 'y'],
    indexAxisHint: 'x or y',
    editBorderRadiusValue: vm.$store.state.options.borderRadius,
    borderRadiusHint: 'Positive number or zero',
  }),
  methods: {
    save() {
      if (!this.formIsValid) { return }
      this.$store.commit('saveOptions', {
        indexAxis: this.editIndexAxisValue,
        borderRadius: this.editBorderRadiusValue,
      })
      this.isEditing = false
    },
    startEditing() {
      this.isEditing = true
    },
    cancelEditing() {
      this.editIndexAxisValue = this.$store.state.options.indexAxis
      this.editBorderRadiusValue = this.$store.state.options.borderRadius
      this.isEditing = false
    },
  },
}
</script>
