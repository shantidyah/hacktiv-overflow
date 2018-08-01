import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalReg : false,
    modalLog: false
  },
  mutations: {
    modalReg(state,payload){
      state.modalReg = payload
    }
  },
  actions: {

  }
})
