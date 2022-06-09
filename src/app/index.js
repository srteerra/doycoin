/* eslint-disable no-undef */
"use-strict"
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { client } from "../lib/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import detectEthereumProvider from "@metamask/detect-provider"

import "bootstrap"
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import "./assets/style.scss"

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)
const provider = new detectEthereumProvider()

console.log("providers", provider)

if (window.ethereum.providers) {
	if (provider.isMetaMask === true) {
		var metamaskProvider = window.ethereum.providers.find((provider) => provider.isMetaMask)
		console.log("meta", metamaskProvider)
	} 
	if (provider.isCoinbaseWallet === true) {
		var coinbaseProvider = window.ethereum.providers.find((provider) => provider.isCoinbaseWallet)
		console.log("coinbase", coinbaseProvider)
	}
} else {
	console.log("It seems that you don't have a wallet")
}

// const web3 = require("web3")
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

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

// On Metamask Acc change
metamaskProvider.on("accountsChanged", function (accounts) {
	console.log(accounts)
	if (accounts.length > 0) {
		store.dispatch("setAcc", accounts[0])
		const userDoc = {
			_type: "users",
			_id: store.getters.getAddress,
			userName: "Unnamed",
			userAddress: store.getters.getAddress,
			userTrees: 0,
			userCountry: "Undefined"
		}

		client.createIfNotExists(userDoc)
		client.getDocument(store.getters.getAddress).then((users) => {
			console.log(`${users.userName}`)
			store.commit("SET_PLANTED_TREES", {amount: users.userTrees} )
			store.commit("SET_USER_COUNTRY", {country: users.userCountry} )
			store.commit("SET_USERNAME", {name: users.userName} )
			if (users.userAvatar == undefined) {
				store.commit("SET_AVATAR", {avatar: undefined} )
			} else {
				store.commit("SET_AVATAR", {avatar: builder.image(users.userAvatar).url()} )
			}
		})
	} else {
		window.location.href = "/"
	}
})

// On Coinbase Acc change
coinbaseProvider.on("accountsChanged", function (accounts) {
	console.log(accounts)
	if (accounts.length > 0) {
		store.dispatch("setAcc", accounts[0])
		const userDoc = {
			_type: "users",
			_id: store.getters.getAddress,
			userName: "Unnamed",
			userAddress: store.getters.getAddress,
			userTrees: 0,
			userCountry: "Undefined"
		}

		client.createIfNotExists(userDoc)
		client.getDocument(store.getters.getAddress).then((users) => {
			console.log(`${users.userName}`)
			store.commit("SET_PLANTED_TREES", {amount: users.userTrees} )
			store.commit("SET_USER_COUNTRY", {country: users.userCountry} )
			store.commit("SET_USERNAME", {name: users.userName} )
			if (users.userAvatar == undefined) {
				store.commit("SET_AVATAR", {avatar: undefined} )
			} else {
				store.commit("SET_AVATAR", {avatar: builder.image(users.userAvatar).url()} )
			}
		})
	} else {
		window.location.href = "/"
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