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
                    <v-list>
                      <v-list-item
                        v-for="(label, i) in $store.state.labels"
                        :key="`label-${i}`"
                      >
                        <v-list-item-content>
                          <v-list-item-title v-text="label" />
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn
                            color="primary"
                            icon
                            @click="openEditLabelDialog(i)"
                          >
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                        </v-list-item-action>
                        <v-list-item-action>
                          <v-btn
                            color="error"
                            icon
                            @click="openRemoveLabelDialog(i)"
                          >
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
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
  }),
  methods: {
    openEditLabelDialog() {
      
    },
    openRemoveLabelDialog() {
      
    },
  },
}
</script>
