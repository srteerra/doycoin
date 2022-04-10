'use-strict'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './assets/style.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  store,
  render: h => h (App)
}).$mount('#app')

// Vue.config.productionTip = false

window.ethereum.on('accountsChanged', function (accounts) {
  console.log(accounts)
  if (accounts.length > 0) {
    store.dispatch('setAcc', accounts[0])
  } else {
    
  }
})

ethereum.on('chainChanged', (_chainId) => {
  console.log(_chainId)
  window.location.reload()
})