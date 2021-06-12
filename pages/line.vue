<template>
  <LineChart
    :width="width"
    :height="height"
    :labels="labels"
    :datasets="datasets"
    :options="options"
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
  }),
  head: vm => ({
    title: 'Line Chart',
  }),
  created() {
    this.width = this.$store.state.width
    this.height = this.$store.state.height
    this.labels = [...this.$store.state.labels]
    this.datasets = [...this.$store.state.datasets]
    this.options = { ...this.$store.state.options }
  },
}
</script>
