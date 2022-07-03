export default {
	fetchingData: false,
	error: null,
	windowWidth: window.innerWidth,

	// Eth or wallet
	provider: null,
	currentAccount: null,
	isconnected: false,

	// Btn states
	connectBtnState: false,
	disconnectBtnState: true,

	// Modals
	showconnectWalletModalState: false,
	showinstallMetaModalState: false,
	showinstallCoinbaseModalState: false,
	showDonate: false,

	// Donator data
	donator: {
		donatorName: '',
		donatorEmail: '',
		donatorMessage: ''
	},

	// User data
	username: '',
	plantedTrees: 0,
	avatar: '',
	userCountry: '',

	// Notification center
	notifications: []
}
