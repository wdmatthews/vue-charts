<template>
  <BarChart
    :width="$store.state.width"
    :height="$store.state.height"
    :labels="$store.state.labels"
    :datasets="$store.state.datasets"
    :options="localOptions"
  />
</template>

<script>
export default {
  layout: 'chart',
  data: vm => ({
    localOptions: { ...vm.$store.state.options },
  }),
  head: vm => ({
    title: 'Bar Chart',
  }),
  computed: {
    options() {
      return this.$store.state.options
    },
  },
  watch: {
    options() {
      this.localOptions = { ...this.localOptions, ...this.$store.state.options }
    },
  },
}
</script>
