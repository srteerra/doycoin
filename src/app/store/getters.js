import state from "./state"

export const getAddress = (state) => {
	return state.currentAccount
}

export const getProvider = (state) => {
	return state.provider
}

export const getAvatar = (state) => {
	return state.avatar
}

export const isMetamask = () => {
	// eslint-disable-next-line no-undef
	return ethereum.isMetaMask
}

export const isConnected = () => {
	return state.isConnected
}