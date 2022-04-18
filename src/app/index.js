/* eslint-disable no-undef */
"use-strict"
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { client } from "../lib/sanityClient"
import imageUrlBuilder from "@sanity/image-url"

import "bootstrap"
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import "./assets/style.scss"

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

const Web3 = require("web3")
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
	router,
	store,
	render: h => h (App)
}).$mount("#app")

// Vue.config.productionTip = false

web3.eth.getGasPrice().then(console.log)

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
		client.getDocument(store.getters.getAddress).then((users) => {
			console.log(`${users.userName}`)
			store.commit("SET_PLANTED_TREES", {amount: users.userTrees} )
			store.commit("SET_USERNAME", {name: users.userName} )
			if (builder.image(users.userAvatar).options.source !== undefined) {
				store.commit("SET_AVATAR", {avatar: builder.image(users.userAvatar).url()} )
			} else {
				store.commit("SET_AVATAR", {avatar: ""} )
			}
		})
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