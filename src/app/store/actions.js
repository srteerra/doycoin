/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import detectEthereumProvider from "@metamask/detect-provider"
import { client } from "../../lib/sanityClient"
import imageUrlBuilder from "@sanity/image-url"

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

const provider = new detectEthereumProvider()
const Web3 = require("web3")
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546")
// const ethereum = window.ethereum

console.log("providers:", window.ethereum)
console.log("provider:", provider)

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
	async showinstallCoinbaseModal (context) {
		context.commit("SHOW_INSTALL_COINBASE")
	},
	async disconnectAcc () {
		window.location.reload()
	},
	async setAcc ({ commit }, acc) {
		commit("CURRENT_ADDRESS", acc)
	},
	async connectAcc_Wallet ({ commit, dispatch, getters }, payload ) {
		commit("CONNECT_BUTTON", true) // Button disabled
		commit("LOADING_DATA", true) // Loading data on

		var walletProvider = undefined

		if (payload.provider) {
			if (payload.provider === 1) {
				if (!window.ethereum.providers) {
					console.log("no meta")
					commit("SHOW_INSTALL_METAMASK")
					commit("CONNECT_BUTTON", false) // Button enabled
					commit("DISCONNECT_BUTTON", true) // Disconnect button disabled on nav
					commit("LOADING_DATA", false) // Loading data off
					commit("SHOW_CONNECT")
					return ""
				} else {
					walletProvider = window.ethereum.providers.find((provider) => provider.isMetaMask)
					console.log("meta", walletProvider)
				}
			} 
			if (payload.provider === 2) {
				if (!window.ethereum.providers) {
					console.log("no coin")
					commit("SHOW_INSTALL_COINBASE")
					commit("CONNECT_BUTTON", false) // Button enabled
					commit("DISCONNECT_BUTTON", true) // Disconnect button disabled on nav
					commit("LOADING_DATA", false) // Loading data off
					commit("SHOW_CONNECT")
					return ""
				} else {
					walletProvider = window.ethereum.providers.find((provider) => provider.isCoinbaseWallet)
					console.log("coinbase", walletProvider)
				}
			}
			if (payload.provider === 3) {
				if (!window.ethereum.providers) {
					console.log("no brave")
					commit("SHOW_INSTALL_COINBASE")
					commit("CONNECT_BUTTON", false) // Button enabled
					commit("DISCONNECT_BUTTON", true) // Disconnect button disabled on nav
					commit("LOADING_DATA", false) // Loading data off
					commit("SHOW_CONNECT")
					return ""
				} else {
					walletProvider = window.ethereum.providers.find((provider) => provider.isBraveWallet)
					console.log("brave", walletProvider)
				}
			}

			walletProvider
				.request({ method: "eth_requestAccounts" })
				.then((provider) => {
					if (provider) {
						dispatch("setAcc", walletProvider.selectedAddress)
						commit("IS_CONNECTED", true)
						commit("DISCONNECT_BUTTON", false) // Disconnect button enabled on nav
						commit("LOADING_DATA", false) // Loading data off
						commit("SHOW_CONNECT")

						const userDoc = {
							_type: "users",
							_id: getters.getAddress,
							userName: "Unnamed",
							userAddress: getters.getAddress,
							userTrees: 0,
							userCountry: "Undefined"
						}

						client.createIfNotExists(userDoc)
						client.getDocument(getters.getAddress).then((users) => {
							console.log(`${users.userName}`)
							commit("SET_PLANTED_TREES", {amount: users.userTrees} )
							commit("SET_USER_COUNTRY", {country: users.userCountry} )
							commit("SET_USERNAME", {name: users.userName} )
							if (users.userAvatar == undefined) {
								commit("SET_AVATAR", {avatar: undefined} )
							} else {
								commit("SET_AVATAR", {avatar: builder.image(users.userAvatar).url()} )
							}
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

			console.log("Fail")
		}
	},
	async sendDonation ({ getters }) {
		console.log(getters.getAddress)
		console.log(process.env.MAIN_ACC)
		
		web3.eth.sendTransaction({
			from: getters.getAddress,
			to: "0xB37ECC72B98d7004c284fDa84315EaC16903Bda3",
			gas: "30400", // 30400
			chain: "56",
			value: web3.utils.toWei("1"),
		}).then((res) => {
			console.log(res)
		})
	}
}