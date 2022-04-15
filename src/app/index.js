/* eslint-disable no-undef */
"use-strict"
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { client } from "../lib/sanityClient"

import "bootstrap"
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import "./assets/style.scss"

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
	router,
	store,
	render: h => h (App)
}).$mount("#app")

// Vue.config.productionTip = false

// On resize change
window.addEventListener("resize", () => {
	store.commit("WINDOW_WIDTH")
})

// On Acc change
window.ethereum.on("accountsChanged", function (accounts) {
	console.log(accounts)
	if (accounts.length > 0) {
		store.dispatch("setAcc", accounts[0])
		const userDoc = {
			_type: "users",
			_id: ethereum.selectedAddress,
			userName: "Unnamed",
			userAddress: store.getters.getAddress
		}

		client.createIfNotExists(userDoc)
	} else {
		window.location.reload()
	}
})

ethereum.on("disconnect", (error) => {
	console.log(error)
})

// On Chain change
ethereum.on("chainChanged", (_chainId) => {
	console.log(_chainId)
	window.location.reload()
})