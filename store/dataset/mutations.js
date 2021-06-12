import Vue from 'vue'

export const add = (state, value) => {
  state.datasets.push(value)
}

export const editLabel = (state, { index, value }) => {
  Vue.set(state.datasets, index, { ...state.datasets[index], label: value })
}

export const remove = (state, index) => {
  state.datasets.splice(index, 1)
}
