import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  getters: {
    filterArr: state => {
      return state.arr.filter(item => item >= 3)
    }
  },
  mutations: {
    changeCount: (state, payload) => {
      state.count = payload
    }
  },
  actions: {
    actCount: ({commit}, payload) => {
      commit('changeCount', payload)
    }
  }
})
