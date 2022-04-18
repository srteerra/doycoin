/* eslint-disable no-undef */
import detectEthereumProvider from "@metamask/detect-provider"
import { client } from "../../lib/sanityClient"
import imageUrlBuilder from "@sanity/image-url"

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

const provider = await detectEthereumProvider()
const Web3 = require("web3")
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")
const ethereum = window.ethereum

console.log(provider)

export const actions = {
	async showDonateModal (context) {
		context.commit("SHOW_DONATE")
	},
	async exportDonatorData (context, payload) {
		context.commit("DONATOR_DATA", payload)
	},
	async showconnectWalletModal (context) {
		context.commit("SHOW_CONNECT")
	},
	async showinstallMetaModal (context) {
		context.commit("SHOW_INSTALL_METAMASK")
	},
	async disconnectAcc () {
		window.location.reload()
	},
	async setAcc ({ commit }, acc) {
		commit("CURRENT_ADDRESS", acc)
	},
	async connectAcc ({ commit, dispatch, getters }) {
		commit("CONNECT_BUTTON", true) // Button disabled
		commit("LOADING_DATA", true) // Loading data on

		if (provider) {
			console.log(provider)
			ethereum
				.request({ method: "eth_requestAccounts" })
				.then((provider) => {
					if (provider) {
						dispatch("setAcc", ethereum.selectedAddress)
						commit("IS_CONNECTED", true)
						commit("DISCONNECT_BUTTON", false) // Disconnect button enabled on nav
						commit("LOADING_DATA", false) // Loading data off
						commit("SHOW_CONNECT")

						const userDoc = {
							_type: "users",
							_id: getters.getAddress,
							userName: "Unnamed",
							userAddress: getters.getAddress
						}

						client.createIfNotExists(userDoc)
						client.getDocument(getters.getAddress).then((users) => {
							console.log(`${users.userName}`)
							commit("SET_PLANTED_TREES", {amount: users.userTrees} )
							commit("SET_USERNAME", {name: users.userName} )
							commit("SET_AVATAR", {avatar: builder.image(users.userAvatar).url()} )
						})
					}
				})
				.catch((err) => {
					if (err.code === 4001) {
						console.log("Please connect to MetaMask.")
						commit("CONNECT_BUTTON", false) // Button enabled
						commit("DISCONNECT_BUTTON", true) // Disconnect button disabled on nav
						commit("LOADING_DATA", false) // Loading data off
						commit("SHOW_CONNECT")
					} else {
						console.error(err)
					}
				})
		} else {
			console.log("Please install MetaMask!")
			commit("SHOW_INSTALL_METAMASK")
			commit("CONNECT_BUTTON", false) // Button enabled
			commit("DISCONNECT_BUTTON", true) // Disconnect button disabled on nav
			commit("LOADING_DATA", false) // Loading data off
			commit("SHOW_CONNECT")
		}
	},
	async sendDonation ({ getters }) {
		console.log(getters.getAddress)
		console.log(process.env.MAIN_ACC)

		console.log("Gas price is: ", getters.getGasPrice)
		
		web3.eth.sendTransaction({
			from: getters.getAddress,
			to: "0xB37ECC72B98d7004c284fDa84315EaC16903Bda3",
			gas: "30400", // 30400
			gasPrice: getters.getGasPrice, // 10000000000000
			value: "10000000000000",
			data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
		}).then((res) => {
			console.log(res)
		})
	}
}