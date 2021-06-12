<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="label" />
    </v-list-item-content>
    <v-list-item-action>
      <v-btn
        color="primary"
        icon
        @click="openEditDialog"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-action>
      <v-btn
        color="error"
        icon
        @click="openRemoveDialog"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
    <LabelEditDialog
      ref="editDialog"
      :index="index"
      :label="label"
    />
    <LabelRemoveDialog
      ref="removeDialog"
      :index="index"
      :label="label"
    />
  </v-list-item>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data: vm => ({
    
  }),
  methods: {
    openEditDialog() {
      this.$refs.editDialog.open()
    },
    openRemoveDialog() {
      this.$refs.removeDialog.open()
    },
  },
}
</script>
