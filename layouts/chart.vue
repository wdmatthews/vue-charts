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
                <LabelsPanel />
                <DatasetsPanel />
              </v-expansion-panels>
              <v-expansion-panels v-model="dataDatasetsExpansionPanel">
                <DatasetPanel
                  v-for="(dataset, i) in $store.state.datasets"
                  :key="`dataset-data-${i}`"
                  :index="i"
                  :dataset="dataset"
                />
              </v-expansion-panels>
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
                v-model="optionsExpansionPanel"
                class="mb-4"
              >
                <BarChartOptionsPanel v-if="chartType === 'bar'" />
                <LineChartOptionsPanel v-if="chartType === 'line'" />
                <TitleOptionsPanel />
                <LegendOptionsPanel />
                <AxisOptionsPanel axis="x" />
                <AxisOptionsPanel axis="y" />
              </v-expansion-panels>
              <FormattedOptionsCard />
            </v-col>
          </v-row>
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
    optionsExpansionPanel: 0,
  }),
  computed: {
    chartType() {
      return this.$route.path.substring(1)
    },
  },
}
</script>
