/* eslint-disable no-undef */
import state from './state'
// const Web3 = require("web3")
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

export const getAddress = state => {
	return state.currentAccount
}

export const getAddressShort = state => {
	if (state.currentAccount !== null) {
		return (
			state.currentAccount.slice(0, 4) + '...' + state.currentAccount.slice(36)
		)
	} else {
		return 'No address'
	}
}

export const getProvider = state => {
	return state.provider
}

export const getAvatar = state => {
	return state.avatar
}

export const getUsername = state => {
	return state.username
}

export const isMetamask = () => {
	// eslint-disable-next-line no-undef
	return ethereum.isMetaMask
}

export const isConnected = () => {
	return state.isconnected
}
