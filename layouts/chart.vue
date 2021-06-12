<template>
  <v-app>
    <TheNavigationDrawer ref="navigationDrawer" />
    <TheAppBar @toggle-navigation="$refs.navigationDrawer.toggle()" />
    <v-main>
      <v-tabs
        v-model="tab"
        centered
      >
        <v-tab>Chart</v-tab>
        <v-tab>Data</v-tab>
        <v-tab>Options</v-tab>
      </v-tabs>
      <v-tabs-items
        v-model="tab"
        style="background: transparent;"
      >
        <v-tab-item>
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              md="6"
              class="pa-4"
            >
              <v-card class="pa-4">
                <Nuxt />
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              md="6"
              class="pa-4"
            >
              <v-expansion-panels
                v-model="dataLabelsExpansionPanel"
                class="mb-4"
              >
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Labels
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row
                      no-gutters
                      align="center"
                    >
                      <v-col>
                        <v-form
                          ref="addLabelForm"
                          v-model="addLabelFormIsValid"
                          @submit.prevent="addLabel"
                        >
                          <LabelField v-model="addLabelValue" />
                        </v-form>
                      </v-col>
                      <v-btn
                        color="primary"
                        icon
                        class="ml-4"
                        style="margin-bottom: 30px"
                        :disabled="!addLabelFormIsValid"
                        @click="addLabel"
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-row>
                    <v-list>
                      <LabelItem
                        v-for="(label, i) in $store.state.labels"
                        :key="`label-${i}`"
                        :index="i"
                        :label="label"
                      />
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
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
              </v-expansion-panels>
              <v-expansion-panels v-model="dataDatasetsExpansionPanel">
                <v-expansion-panel
                  v-for="(dataset, i) in $store.state.datasets"
                  :key="`dataset-data-${i}`"
                >
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
                          @submit.prevent="addDatum(i)"
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
                        @click="addDatum(i)"
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-row>
                    <v-list>
                      <DatasetDatumItem
                        v-for="(datum, j) in dataset.data"
                        :key="`dataset-datum-${j}`"
                        :dataset-index="i"
                        :datum-index="j"
                        :datum="datum"
                      />
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          Options
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: vm => ({
    tab: 0,
    dataLabelsExpansionPanel: 0,
    dataDatasetsExpansionPanel: 0,
    addLabelFormIsValid: false,
    addLabelValue: '',
    addDatasetFormIsValid: false,
    addDatasetLabelValue: '',
    addDatumFormIsValid: false,
    addDatumValue: '',
  }),
  methods: {
    addLabel() {
      if (!this.addLabelFormIsValid) { return }
      this.$store.commit('addLabel', this.addLabelValue)
      this.addLabelValue = ''
      this.$refs.addLabelForm.resetValidation()
    },
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
    addDatum(datasetIndex) {
      if (!this.addDatumFormIsValid) { return }
      this.$store.commit('addDatum', {
        datasetIndex,
        value: this.addDatumValue,
      })
      this.addDatumValue = ''
      this.$refs.addDatumForm[datasetIndex].resetValidation()
    },
  },
}
</script>
