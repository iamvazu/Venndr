import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
      user
  }
})
