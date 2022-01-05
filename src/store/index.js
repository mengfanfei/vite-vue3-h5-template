import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0,
      name: 'mengfanfei',
      name2: 'mff'
    }
  },
  getters,
  actions,
})