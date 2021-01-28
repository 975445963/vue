import Vue from 'vue'
import Vuex from 'vuex'
import { cachedViews } from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '38f50884-088b-4b5c-b3f5-457057663c39',
    cachedViews
  },
  getters: {},
  mutations: {
    setTitle(state, topTitle) {
      console.log(123)
      state.topTitle = topTitle
    }
  },
  actions: {}
})

export default store
