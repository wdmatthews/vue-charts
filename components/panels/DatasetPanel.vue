<template>
  <v-expansion-panel>
    <v-expansion-panel-header v-text="dataset.label" />
    <v-expansion-panel-content>
      <v-form
        v-model="colorFormIsValid"
        @submit.prevent="saveColors"
      >
        <ColorField
          v-model="editBackgroundColorValue"
          label="Background Color"
          :disabled="!isEditingColor"
          @submit="saveColors"
        />
        <ColorField
          v-model="editBorderColorValue"
          label="Border Color"
          :disabled="!isEditingColor"
          @submit="saveColors"
        />
        <div class="text-center mb-4">
          <v-btn
            v-show="!isEditingColor"
            color="primary"
            @click="startEditingColors"
          >
            Edit
          </v-btn>
          <v-btn
            v-show="isEditingColor"
            class="mr-4"
            @click="cancelEditingColors"
          >
            Cancel
          </v-btn>
          <v-btn
            v-show="isEditingColor"
            color="primary"
            :disabled="!colorFormIsValid"
            @click="saveColors"
          >
            Save
          </v-btn>
        </div>
      </v-form>
      <v-row
        no-gutters
        align="center"
      >
        <v-col>
          <v-form
            ref="addDatumForm"
            v-model="addDatumFormIsValid"
            @submit.prevent="addDatum"
          >
            <DatumField v-model.number="addDatumValue" />
          </v-form>
        </v-col>
        <v-btn
          color="primary"
          icon
          class="ml-4"
          style="margin-bottom: 30px"
          :disabled="!addDatumFormIsValid"
          @click="addDatum"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-list>
        <DatasetDatumItem
          v-for="(datum, i) in dataset.data"
          :key="`dataset-datum-${i}`"
          :dataset-index="index"
          :datum-index="i"
          :datum="datum"
        />
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
    addDatumFormIsValid: false,
    addDatumValue: '',
    isEditingColor: false,
    colorFormIsValid: false,
    editBackgroundColorValue: vm.dataset.backgroundColor,
    editBorderColorValue: vm.dataset.borderColor,
  }),
  methods: {
    addDatum() {
      if (!this.addDatumFormIsValid) { return }
      this.$store.commit('addDatum', {
        datasetIndex: this.index,
        value: this.addDatumValue,
      })
      this.addDatumValue = ''
      this.$refs.addDatumForm.resetValidation()
    },
    saveColors() {
      if (!this.colorFormIsValid) { return }
      this.$store.commit('editDatasetColors', {
        index: this.index,
        backgroundColor: this.editBackgroundColorValue,
        borderColor: this.editBorderColorValue,
      })
      this.isEditingColor = false
    },
    startEditingColors() {
      this.isEditingColor = true
    },
    cancelEditingColors() {
      this.editBackgroundColorValue = this.dataset.backgroundColor
      this.editBorderColorValue = this.dataset.borderColor
      this.isEditingColor = false
    },
  },
}
</script>
