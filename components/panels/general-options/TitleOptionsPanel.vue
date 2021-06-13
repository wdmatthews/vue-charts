<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Title</v-expansion-panel-header>
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
    editTitleDisplayValue: vm.$store.state.options.plugins.title.display,
    editTitleTextValue: vm.$store.state.options.plugins.title.text,
    editTitleColorValue: vm.$store.state.options.plugins.title.color,
  }),
  methods: {
    save() {
      if (!this.formIsValid) { return }
      const options = this.$store.state.options
      this.$store.commit('saveOptions', {
        ...options,
        plugins: {
          ...options.plugins,
          title: {
            ...options.plugins.title,
            display: this.editTitleDisplayValue,
            text: this.editTitleTextValue,
            color: this.editTitleColorValue,
          },
        },
      })
      this.isEditing = false
    },
    startEditing() {
      this.isEditing = true
    },
    cancelEditing() {
      this.editTitleDisplayValue = this.$store.state.options.plugins.title.display
      this.editTitleTextValue = this.$store.state.options.plugins.title.text
      this.editTitleColorValue = this.$store.state.options.plugins.title.color
      this.isEditing = false
    },
  },
}
</script>
