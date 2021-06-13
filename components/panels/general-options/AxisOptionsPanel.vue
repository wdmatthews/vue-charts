<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ axis.toUpperCase() }} Axis</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-form
        v-model="formIsValid"
        @submit.prevent="save"
      >
        <v-checkbox
          v-model="editTitleDisplayValue"
          label="Title Display"
          class="mt-0"
          :disabled="!isEditing"
        />
        <TextField
          v-model.number="editTitleTextValue"
          label="Title Text"
          :disabled="!isEditing"
          @submit="save"
        />
        <ColorField
          v-model="editTitleColorValue"
          label="Title Color"
          :disabled="!isEditing"
          @submit="save"
        />
        <v-checkbox
          v-model="editGridDisplayValue"
          label="Grid Display"
          class="mt-0"
          :disabled="!isEditing"
        />
        <ColorField
          v-model="editGridColorValue"
          label="Grid Color"
          :disabled="!isEditing"
          @submit="save"
        />
        <TextField
          v-model.number="editGridLineWidthValue"
          label="Grid Line Width"
          :hint="positiveNumberHint"
          :disabled="!isEditing"
          :additional-rules="[v => !v || !isNaN(v) && v >= 0 || positiveNumberHint]"
          @submit="save"
        />
        <v-checkbox
          v-model="editGridDrawBorderValue"
          label="Grid Draw Border"
          class="mt-0"
          :disabled="!isEditing"
        />
        <ColorField
          v-model="editGridBorderColorValue"
          label="Grid Border Color"
          :disabled="!isEditing"
          @submit="save"
        />
        <TextField
          v-model.number="editGridBorderWidthValue"
          label="Grid Border Width"
          :hint="positiveNumberHint"
          :disabled="!isEditing"
          :additional-rules="[v => !v || !isNaN(v) && v >= 0 || positiveNumberHint]"
          @submit="save"
        />
        <v-checkbox
          v-model="editGridDrawTicksValue"
          label="Grid Draw Ticks"
          class="mt-0"
          :disabled="!isEditing"
        />
        <ColorField
          v-model="editGridTickColorValue"
          label="Grid Tick Color"
          :disabled="!isEditing"
          @submit="save"
        />
        <TextField
          v-model.number="editGridTickWidthValue"
          label="Grid Tick Width"
          :hint="positiveNumberHint"
          :disabled="!isEditing"
          :additional-rules="[v => !v || !isNaN(v) && v >= 0 || positiveNumberHint]"
          @submit="save"
        />
        <TextField
          v-model.number="editGridTickLengthValue"
          label="Grid Tick Length"
          :hint="positiveNumberHint"
          :disabled="!isEditing"
          :additional-rules="[v => !v || !isNaN(v) && v >= 0 || positiveNumberHint]"
          @submit="save"
        />
        <v-checkbox
          v-model="editTickDisplayValue"
          label="Tick Label Display"
          class="mt-0"
          :disabled="!isEditing"
        />
        <ColorField
          v-model="editTickColorValue"
          label="Tick Label Color"
          :disabled="!isEditing"
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
  props: {
    axis: {
      type: String,
      default: 'x',
    },
  },
  data: vm => ({
    isEditing: false,
    formIsValid: false,
    positiveNumberHint: 'Positive number or zero',
    editTitleDisplayValue: vm.$store.state.options.scales[vm.axis].title.display,
    editTitleTextValue: vm.$store.state.options.scales[vm.axis].title.text,
    editTitleColorValue: vm.$store.state.options.scales[vm.axis].title.color,
    editGridDisplayValue: vm.$store.state.options.scales[vm.axis].grid.display,
    editGridColorValue: vm.$store.state.options.scales[vm.axis].grid.color,
    editGridLineWidthValue: vm.$store.state.options.scales[vm.axis].grid.lineWidth,
    editGridDrawBorderValue: vm.$store.state.options.scales[vm.axis].grid.drawBorder,
    editGridBorderColorValue: vm.$store.state.options.scales[vm.axis].grid.borderColor,
    editGridBorderWidthValue: vm.$store.state.options.scales[vm.axis].grid.borderWidth,
    editGridDrawTicksValue: vm.$store.state.options.scales[vm.axis].grid.drawTicks,
    editGridTickColorValue: vm.$store.state.options.scales[vm.axis].grid.tickColor,
    editGridTickWidthValue: vm.$store.state.options.scales[vm.axis].grid.tickWidth,
    editGridTickLengthValue: vm.$store.state.options.scales[vm.axis].grid.tickLength,
    editTickDisplayValue: vm.$store.state.options.scales[vm.axis].ticks.display,
    editTickColorValue: vm.$store.state.options.scales[vm.axis].ticks.color,
  }),
  methods: {
    save() {
      if (!this.formIsValid) { return }
      const options = this.$store.state.options
      this.$store.commit('saveOptions', {
        ...options,
        scales: {
          ...options.scales,
          [this.axis]: {
            ...options.scales[this.axis],
            title: {
              ...options.scales[this.axis].title,
              display: this.editTitleDisplayValue,
              text: this.editTitleTextValue,
              color: this.editTitleColorValue,
            },
            grid: {
              ...options.scales[this.axis].grid,
              display: this.editGridDisplayValue,
              color: this.editGridColorValue,
              lineWidth: this.editGridLineWidthValue,
              drawBorder: this.editGridDrawBorderValue,
              borderColor: this.editGridBorderColorValue,
              borderWidth: this.editGridBorderWidthValue,
              drawTicks: this.editGridDrawTicksValue,
              tickColor: this.editGridTickColorValue,
              tickWidth: this.editGridTickWidthValue,
              tickLength: this.editGridTickLengthValue,
            },
            ticks: {
              ...options.scales[this.axis].ticks,
              display: this.editTickDisplayValue,
              color: this.editTickColorValue,
            },
          },
        },
      })
      this.isEditing = false
    },
    startEditing() {
      this.isEditing = true
    },
    cancelEditing() {
      this.editTitleDisplayValue = this.$store.state.options.scales[this.axis].title.display
      this.editTitleTextValue = this.$store.state.options.scales[this.axis].title.text
      this.editTitleColorValue = this.$store.state.options.scales[this.axis].title.color
      this.editGridDisplayValue = this.$store.state.options.scales[this.axis].grid.display
      this.editGridColorValue = this.$store.state.options.scales[this.axis].grid.color
      this.editGridLineWidthValue = this.$store.state.options.scales[this.axis].grid.lineWidth
      this.editGridDrawBorderValue = this.$store.state.options.scales[this.axis].grid.drawBorder
      this.editGridBorderColorValue = this.$store.state.options.scales[this.axis].grid.borderColor
      this.editGridBorderWidthValue = this.$store.state.options.scales[this.axis].grid.borderWidth
      this.editGridDrawTicksValue = this.$store.state.options.scales[this.axis].grid.drawTicks
      this.editGridTickColorValue = this.$store.state.options.scales[this.axis].grid.tickColor
      this.editGridTickWidthValue = this.$store.state.options.scales[this.axis].grid.tickWidth
      this.editGridTickLengthValue = this.$store.state.options.scales[this.axis].grid.tickLength
      this.editTickDisplayValue = this.$store.state.options.scales[this.axis].ticks.display
      this.editTickColorValue = this.$store.state.options.scales[this.axis].ticks.color
      this.isEditing = false
    },
  },
}
</script>
