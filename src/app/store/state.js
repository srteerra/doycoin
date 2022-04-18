export default {
	fetchingData: false,
	error: null,
	windowWidth: window.innerWidth,

	// Eth or wallet
	provider: null,
	currentAccount: null,
	isconnected: false,
	gasPrice: "",

	// Btn states
	connectBtnState: false,
	disconnectBtnState: true,

	// Modals
	showconnectWalletModal: false,
	showinstallMetaModal: false,
	showDonate: false,

	// Donator data
	donator: {
		donatorName: "",
		donatorEmail: "",
		donatorMessage: "",
	},

	// User data
	username: "",
	plantedTrees: null,
	avatar: ""
}
