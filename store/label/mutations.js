import Vue from 'vue'

export const add = (state, value) => {
  state.labels.push(value)
}

export const edit = (state, { index, value }) => {
  Vue.set(state.labels, index, value)
}

export const remove = (state, index) => {
  state.labels.splice(index, 1)
}
