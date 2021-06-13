import Vue from 'vue'

export const save = (state, options) => {
  Vue.set(state, 'options', { ...state.options, ...options })
}
