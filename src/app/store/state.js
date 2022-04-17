export default {
	fetchingData: false,
	error: null,
	currentAccount: null,
	isconnected: false,
	connectBtnState: false,
	disconnectBtnState: true,
	showconnectWalletModal: false,
	showinstallMetaModal: false,
	showDonate: false,
	provider: null,
	windowWidth: window.innerWidth,

	donator: {
		donatorName: "",
		donatorEmail: "",
		donatorMessage: "",
	},

	username: "",
	plantedTrees: null
}
