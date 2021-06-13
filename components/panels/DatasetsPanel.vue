<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Datasets
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row
        no-gutters
        align="center"
      >
        <v-col>
          <v-form
            ref="addDatasetForm"
            v-model="addDatasetFormIsValid"
            @submit.prevent="addDataset"
          >
            <LabelField v-model="addDatasetLabelValue" />
          </v-form>
        </v-col>
        <v-btn
          color="primary"
          icon
          class="ml-4"
          style="margin-bottom: 30px"
          :disabled="!addDatasetFormIsValid"
          @click="addDataset"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-list>
        <DatasetItem
          v-for="(dataset, i) in $store.state.datasets"
          :key="`dataset-${i}`"
          :index="i"
          :dataset="dataset"
        />
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data: vm => ({
    addDatasetFormIsValid: false,
    addDatasetLabelValue: '',
  }),
  methods: {
    addDataset() {
      if (!this.addDatasetFormIsValid) { return }
      this.$store.commit('addDataset', {
        label: this.addDatasetLabelValue,
        backgroundColor: '#81D4FA',
        borderColor: '#81D4FA',
        data: [1, 2, 3],
      })
      this.addDatasetLabelValue = ''
      this.$refs.addDatasetForm.resetValidation()
    },
  },
}
</script>
