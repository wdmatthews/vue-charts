<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="datum" />
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
    <DatumEditDialog
      ref="editDialog"
      :dataset-index="datasetIndex"
      :datum-index="datumIndex"
      :datum="datum"
    />
    <DatumRemoveDialog
      ref="removeDialog"
      :dataset-index="datasetIndex"
      :datum-index="datumIndex"
      :datum="datum"
    />
  </v-list-item>
</template>

<script>
export default {
  props: {
    datasetIndex: {
      type: Number,
      default: 0,
    },
    datumIndex: {
      type: Number,
      default: 0,
    },
    datum: {
      type: Number,
      default: 0,
    },
  },
}
</script>
