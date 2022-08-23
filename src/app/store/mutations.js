export const WINDOW_WIDTH = state => {
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
		state.avatar = ''
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

export const SHOW_DONATE = state => {
	if (state.showDonate === false) {
		state.showDonate = true
	} else {
		state.showDonate = false
	}
}

export const SHOW_CONNECT = state => {
	if (state.showconnectWalletModalState === false) {
		state.showconnectWalletModalState = true
	} else {
		state.showconnectWalletModalState = false
	}
}

export const SHOW_INSTALL_METAMASK = state => {
	if (state.showinstallMetaModalState === false) {
		state.showinstallMetaModalState = true
	} else {
		state.showinstallMetaModalState = false
	}
}

export const SHOW_INSTALL_COINBASE = state => {
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

export const SET_BALANCE = (state, payload) => {
	state.balanceOf = payload.balance
}

export const CLEAR_BALANCE = (state) => {
	state.balanceOf = 0
}

export const SET_CONTRACT = (state, payload) => {
	state.contract = payload
}

export const SET_NET = (state, payload) => {
	state.netID = payload
}

export const CHANGE_CRYPTO = (state, payload) => {
	state.selectedCypto = payload.crypto

	if (payload.crypto === 'DOGE') {
		state.contract = state.babyDoge
	} else if (payload.crypto === 'BNB') {
		state.contract = state.elon
	}
}

export const LOADING_DATA = (state, status) => {
	state.fetchingData = status
}

export const SHOW_NOWALLET_NOTIFICATION = state => {
	state.noWalletNoti = !state.noWalletNoti
}

export const SHOW_ADDRESS_TO_DONATE = state => {
	state.showaddressToDonateState = !state.showaddressToDonateState
}

export const SHOW_CHANGE_NETWORK = state => {
	state.showpleaseChangeNetState = !state.showpleaseChangeNetState
}

export const PUSH_NOTIFICATION = (state, payload) => {
	state.notifications.push({
		...payload,
		id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
	})
}

export const REMOVE_NOTIFICATION = (state, NotificationToRemove) => {
	state.notifications = state.notifications.filter(notification => {
		return notification.id != NotificationToRemove.id
	})
}
