export const WINDOW_WIDTH = (state) => {
	state.windowWidth = window.innerWidth
}

export const SET_PLANTED_TREES = (state, payload) => {
	state.plantedTrees = payload.amount
}

export const SET_USER_COUNTRY = (state, payload) => {
	state.userCountry = payload.country
}

export const SET_USERNAME = (state, payload) => {
	state.username = payload.name
}

export const SET_AVATAR = (state, payload) => {
	if (payload.avatar == undefined) {
		state.avatar = ""
	} else {
		state.avatar = payload.avatar
	}
}

export const DONATOR_DATA = (state, payload) => {
	state.donator = {
		donatorName: payload.name,
		donatorEmail: payload.email,
		donatorMessage: payload.message
	}
}

export const SHOW_DONATE = (state) => {
	if (state.showDonate === false) {
		state.showDonate = true
	} else {
		state.showDonate = false
	}
}

export const SHOW_CONNECT = (state) => {
	if (state.showconnectWalletModalState === false) {
		state.showconnectWalletModalState = true
	} else {
		state.showconnectWalletModalState = false
	}
}

export const SHOW_INSTALL_METAMASK = (state) => {
	if (state.showinstallMetaModalState === false) {
		state.showinstallMetaModalState = true
	} else {
		state.showinstallMetaModalState = false
	}
}

export const SHOW_INSTALL_COINBASE = (state) => {
	if (state.showinstallCoinbaseModalState === false) {
		state.showinstallCoinbaseModalState = true
	} else {
		state.showinstallCoinbaseModalState = false
	}
}

export const CONNECT_BUTTON = (state, status) => {
	state.connectBtnState = status
}

export const DISCONNECT_BUTTON = (state, status) => {
	state.disconnectBtnState = status
}

export const CURRENT_ADDRESS = (state, address) => {
	state.currentAccount = address
}

export const IS_CONNECTED = (state, status) => {
	state.isconnected = status
}

export const LOADING_DATA = (state, status) => {
	state.fetchingData = status
}