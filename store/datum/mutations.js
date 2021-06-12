import Vue from 'vue'

export const add = (state, { datasetIndex, value }) => {
  const dataset = state.datasets[datasetIndex]
  dataset.data.push(value)
  Vue.set(state.datasets, datasetIndex, { ...dataset })
}

export const edit = (state, { datasetIndex, datumIndex, value }) => {
  const dataset = state.datasets[datasetIndex]
  dataset.data[datumIndex] = value
  Vue.set(state.datasets, datasetIndex, { ...dataset })
}

export const remove = (state, { datasetIndex, datumIndex }) => {
  const dataset = state.datasets[datasetIndex]
  dataset.data.splice(datumIndex, 1)
  Vue.set(state.datasets, datasetIndex, { ...dataset })
}
