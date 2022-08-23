/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { client } from '../../lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import { basename } from 'path'

// import { dispatch } from 'rxjs/internal-compatibility'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

const Web3 = require('web3')
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546')
const ethereum = window.ethereum

const artifact = require('../../../build/contracts/DoycoinTest.json')

const net = await web3.eth.net.getId()

// let tokenContract = new web3.eth.Contract(artifact.abi, artifact.networks[netID].address)

// var contractAddress = '0xd3ecC6a4ce1a9fAEC1AA5E30B55f8a1a4b84F938' // ELON
// var contractAddress = '0x635Cd5EDf4C9F178d8357480821e54F12c709E9A' // DYC
// var contractAddress = '0xc748673057861a797275CD8A068AbB95A902e8de' // BABY DOGE

export const actions = {
	async showDonateModal(context) {
		context.commit('SHOW_DONATE')
	},
	async showaddressToDonate(context) {
		context.commit('SHOW_ADDRESS_TO_DONATE')
	},
	async exportDonatorData(context, payload) {
		context.commit('DONATOR_DATA', payload)
	},
	async noWalletNotiShow(context) {
		context.commit('SHOW_NOWALLET_NOTIFICATION')
	},
	async showconnectWalletModal(context) {
		context.commit('SHOW_CONNECT')
	},
	async showinstallMetaModal(context) {
		context.commit('SHOW_INSTALL_METAMASK')
	},
	async showinstallCoinbaseModal(context) {
		context.commit('SHOW_INSTALL_COINBASE')
	},
	async disconnectAcc() {
		window.location.reload()
	},
	async setAcc({ commit }, acc) {
		commit('CURRENT_ADDRESS', acc)
	},
	async connectAcc_Wallet({ commit, dispatch, getters }) {
		commit('CONNECT_BUTTON', true) // Button disabled
		commit('LOADING_DATA', true) // Loading data on

		if (ethereum) {
			ethereum
				.request({ method: 'eth_requestAccounts' })
				.then(provider => {
					if (provider) {
						dispatch('setAcc', ethereum.selectedAddress)
						commit('IS_CONNECTED', true)
						commit('DISCONNECT_BUTTON', false) // Disconnect button enabled on nav
						commit('LOADING_DATA', false) // Loading data off
						commit('SHOW_CONNECT')
						commit('CHANGE_CRYPTO', {crypto: 'BNB'})
						console.log(net)
						commit('SET_NET', net)

						if (getters.netID === 56) {
							try {
								dispatch('updateBalance')
							} catch (error) {
								console.log(error)
							}
						} else {
							console.log('change your chain')
						}

						const userDoc = {
							_type: 'users',
							_id: getters.getAddress,
							userName: 'Unnamed',
							userAddress: getters.getAddress,
							userTrees: 0,
							userCountry: 'Undefined'
						}

						client.createIfNotExists(userDoc)
						client.getDocument(getters.getAddress).then(users => {
							console.log(`${users.userName}`)
							commit('SET_PLANTED_TREES', { amount: users.userTrees })
							commit('SET_USER_COUNTRY', { country: users.userCountry })
							commit('SET_USERNAME', { name: users.userName })
							if (users.userAvatar == undefined) {
								commit('SET_AVATAR', { avatar: undefined })
							} else {
								commit('SET_AVATAR', {
									avatar: builder.image(users.userAvatar).url()
								})
							}
						})
					}
				})
				.catch(err => {
					if (err.code === 4001) {
						console.log('Request denied.')
						dispatch('addNotification', {
							type: 'danger',
							message: 'Request denied.'
						})
						commit('CONNECT_BUTTON', false) // Button enabled
						commit('DISCONNECT_BUTTON', true) // Disconnect button disabled on nav
						commit('LOADING_DATA', false) // Loading data off
						commit('SHOW_CONNECT')
					} else if (err.code === -32002) {
						console.log('Request still in progress.')
						dispatch('addNotification', {
							type: 'danger',
							message: 'Metamask is already processing.'
						})
						commit('CONNECT_BUTTON', false) // Button enabled
						commit('DISCONNECT_BUTTON', true) // Disconnect button disabled on nav
						commit('LOADING_DATA', false) // Loading data off
						commit('SHOW_CONNECT')
					} else {
						console.error(err)
						dispatch('addNotification', {
							type: 'danger',
							message: err
						})
						commit('CONNECT_BUTTON', false) // Button enabled
						commit('DISCONNECT_BUTTON', true) // Disconnect button disabled on nav
						commit('LOADING_DATA', false) // Loading data off
						commit('SHOW_CONNECT')
					}
				})
		} else {
			console.log('Please install a wallet!')
			commit('SHOW_INSTALL_METAMASK')
			commit('CONNECT_BUTTON', false) // Button enabled
			commit('DISCONNECT_BUTTON', true) // Disconnect button disabled on nav
			commit('LOADING_DATA', false) // Loading data off
			commit('SHOW_CONNECT')
		}
	},
	async sendDonation({ getters }) {
		console.log(getters.getAddress)

		// web3.eth
		// 	.sendTransaction({
		// 		from: getters.getAddress,
		// 		to: '0x6FB305Bb2497Ccfdc026A09333C852c9D64636F0',
		// 		// gas: '30400', // 30400
		// 		// chain: '56',
		// 		// value: web3.utils.toWei('1')
		// 		value: 1000000000
		// 	})
		// 	.then(res => {
		// 		console.log(res)
		// 	})

		// const balanceDY = await DYContract.methods.balanceOf(getters.getAddress).call()
		// console.log(balanceDY)

		// DYContract.methods.transfer('0x6FB305Bb2497Ccfdc026A09333C852c9D64636F0', 10000).send({
		// 	from: frmo
		// })

		// let USDTContract = new web3.eth.Contract(artifact.abi, contractAddress, {from: frmo})





		tokenContract.methods.transfer('0xB37ECC72B98d7004c284fDa84315EaC16903Bda3', 100000).send({
			from: getters.getAddress
		})
	},
	async updateBalance({ commit, getters }) {
		var tokenContract = new web3.eth.Contract(artifact.abi, getters.getContract)

		function addTrailingZeros(number,numZeros){
			var numberOfZeros = '0'.repeat(numZeros)
			return (number + numberOfZeros)
		};

		console.log(addTrailingZeros(10,3))

		try {
			var balance = tokenContract.methods.balanceOf(getters.getAddress).call().then(res => {
				console.log('balance: ',res)
				return res
			})

			var decimal = tokenContract.methods.decimals().call().then(res => {
				console.log('decimal: ',res)
				return res
			})

			tokenContract.methods.name().call().then(res => console.log('tokenName: ',res))

			tokenContract.methods.symbol().call().then(res => console.log('tokenSymbol: ',res))

			var adjustedBalance = await balance / Math.pow(10, await decimal)
			console.log('adjustedBalance: ',adjustedBalance)

			commit('SET_BALANCE', {balance: adjustedBalance})
		} catch (error) {
			console.log(error)
		}
	},
	async selectCrypto({ commit, dispatch, getters }, payload) {
		if (getters.getNetID === 56) {
			try {
				commit('CHANGE_CRYPTO', payload)
				dispatch('updateBalance')
			} catch (error) {
				console.log(error)
			}
		} else {
			console.log('change your chain')
		}
	},
	async addNotification({ commit }, payload) {
		commit('PUSH_NOTIFICATION', payload)
	},
	async changeNetwork() {
		window.ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
		})
	},
	async removeNotification({ commit }, notification) {
		commit('REMOVE_NOTIFICATION', notification)
	},
	async updateAccount({ commit, getters, dispatch }, payload) {
		if (payload.avatar) {
			// client.assets
			// 	.upload('file', payload.avatar)
			// 	.then((document) => {
			// 		console.log('The file was uploaded!', document)
			// 	})
			// 	.catch((error) => {
			// 		console.error('Upload failed:', error.message)
			// 	})
			client.assets
				.upload('image', payload.avatar)
				.then(imageAsset => {
					// Here you can decide what to do with the returned asset document.
					// If you want to set a specific asset field you can to the following:
					return client
						.patch(getters.getAddress)
						.set({
							userAvatar: {
								_type: 'image',
								asset: {
									_type: 'reference',
									_ref: imageAsset._id
								}
							}
						})
						.commit()
						.then((res) => {
							console.log(res)
							commit('SET_AVATAR', {avatar: builder.image(res.userAvatar).url()})
						})
				})
				.then(() => {
					console.log('Done!')
				})
		}

		client
			.patch(getters.getAddress) // Document ID to patch
			.set({userName: payload.name, userCountry: payload.country})
			.commit()
			.then((updatedAcc) => {
				console.log('Hurray, the acc is updated! New document:')
				console.log(updatedAcc)
				console.log(updatedAcc.userName)
				console.log(updatedAcc.userCountry)
				commit('SET_USERNAME', {name: updatedAcc.userName})
				commit('SET_USER_COUNTRY', {country: updatedAcc.userCountry})
				dispatch('addNotification', {
					type: 'success',
					message: 'Profile updated!'
				})
			})
			.catch((err) => {
				console.error('Oh no, the update failed: ', err.message)
				dispatch('addNotification', {
					type: 'danger',
					message: 'Oh no, the update failed.'
				})
			})
	},
	async test({ dispatch }) {
		dispatch('addNotification', {
			type: 'success',
			message: 'Profile updated!'
		})
		// dispatch('addNotification', {
		// 	type: 'danger',
		// 	message: 'Update failed.'
		// })
		// dispatch('addNotification', {
		// 	type: 'warning',
		// 	message: 'Something is missing...'
		// })
	}
}
