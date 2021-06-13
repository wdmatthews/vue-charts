<template>
  <v-expansion-panel>
    <v-expansion-panel-header v-text="dataset.label" />
    <v-expansion-panel-content>
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
  },
}
</script>
