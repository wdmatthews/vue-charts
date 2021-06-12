<template>
  <LineChart
    :width="width"
    :height="height"
    :labels="labels"
    :datasets="datasets"
    :options="localOptions"
  />
</template>

<script>
export default {
  layout: 'chart',
  data: vm => ({
    width: 400,
    height: 400,
    labels: [],
    datasets: [],
    options: {},
    localOptions: {},
  }),
  head: vm => ({
    title: 'Line Chart',
  }),
  watch: {
    options() {
      this.localOptions = { ...this.options, ...this.localOptions }
    },
  },
  created() {
    this.width = this.$store.state.width
    this.height = this.$store.state.height
    this.labels = this.$store.state.labels
    this.datasets = this.$store.state.datasets
    this.options = this.$store.state.options
    this.localOptions = { ...this.options }
  },
}
</script>
