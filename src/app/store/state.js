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
	showconnectWalletModalState: false,
	showinstallMetaModalState: false,
	showDonate: false,

	// Donator data
	donator: {
		donatorName: "",
		donatorEmail: "",
		donatorMessage: "",
	},

	// User data
	username: "",
	plantedTrees: 0,
	avatar: ""
}
