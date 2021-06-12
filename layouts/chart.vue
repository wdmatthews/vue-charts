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
              <v-expansion-panels v-model="dataExpansionPanel">
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
                      <DataLabel
                        v-for="(label, i) in $store.state.labels"
                        :key="`label-${i}`"
                        :index="i"
                        :label="label"
                      />
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- <v-expansion-panel>
                  <v-expansion-panel-header>
                    
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    
                  </v-expansion-panel-content>
                </v-expansion-panel> -->
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
    dataExpansionPanel: 0,
    addLabelFormIsValid: false,
    addLabelValue: '',
  }),
  methods: {
    addLabel() {
      if (!this.addLabelFormIsValid) { return }
      this.$store.commit('addLabel', this.addLabelValue)
      this.addLabelValue = ''
      this.$refs.addLabelForm.resetValidation()
    },
  },
}
</script>
