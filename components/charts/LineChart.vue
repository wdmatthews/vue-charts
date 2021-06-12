<template>
  <BaseChart
    ref="baseChart"
    type="line"
    :width="width"
    :height="height"
    :labels="labels"
    :datasets="datasets"
    :options="options"
  />
</template>

<script>
export default {
  props: {
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
}
</script>
