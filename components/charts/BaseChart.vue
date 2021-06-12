<template>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <canvas
    ref="canvas"
    :width="width"
    :height="height"
  ></canvas>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
    labels: {
      type: Array,
      default: () => [],
    },
    datasets: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  data: vm => ({
    chart: null,
  }),
  watch: {
    labels() {
      this.chart.data.labels = this.labels
      this.chart.update()
    },
    datasets() {
      this.chart.data.datasets = this.datasets
      this.chart.update()
    },
    options() {
      this.chart.options = this.options
      this.chart.update()
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.chart = new Chart(this.$refs.canvas.getContext('2d'), {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: this.options,
    })
  },
}
</script>
