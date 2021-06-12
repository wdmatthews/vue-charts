<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="dataset.label" />
    </v-list-item-content>
    <v-list-item-action>
      <v-btn
        color="primary"
        icon
        @click="$refs.editDialog.open()"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-action>
      <v-btn
        color="error"
        icon
        @click="$refs.removeDialog.open()"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
    <DatasetEditDialog
      ref="editDialog"
      :index="index"
      :dataset="dataset"
    />
    <DatasetRemoveDialog
      ref="removeDialog"
      :index="index"
      :dataset="dataset"
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
    dataset: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
