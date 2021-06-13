<template>
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
</template>

<script>
export default {
  data: vm => ({
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
