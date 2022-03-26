import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
const metamask = require('../metamask.js')

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  getters: {
  },
  actions: {
    showDonateModal (context) {
      context.commit('showDonateModal')
    }
  },
  modules: {
  }
})
