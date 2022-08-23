export default {
	fetchingData: false,
	error: null,
	windowWidth: window.innerWidth,

	// Eth or wallet
	provider: null,
	currentAccount: null,
	isconnected: false,
	balanceOf: 0,
	contract: '0xc748673057861a797275CD8A068AbB95A902e8de',
	netID: null,

	selectedCypto: null,

	babyDoge: '0xc748673057861a797275CD8A068AbB95A902e8de',
	elon: '0xd3ecC6a4ce1a9fAEC1AA5E30B55f8a1a4b84F938',

	// Btn states
	connectBtnState: false,
	disconnectBtnState: true,

	// Modals
	showconnectWalletModalState: false,
	showinstallMetaModalState: false,
	showinstallCoinbaseModalState: false,
	showaddressToDonateState: false,
	showpleaseChangeNetState: true,
	showDonate: false,

	// Notification Ex
	noWalletNoti: false,

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
