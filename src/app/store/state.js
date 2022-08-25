export default {
	fetchingData: false,
	error: null,
	windowWidth: window.innerWidth,

	// Eth or wallet
	provider: null,
	currentAccount: null,
	isconnected: false,
	balanceOf: 0,
	contract: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	netID: null,

	selectedCypto: null,
	selectedPair: 'USD',

	// Contracts
	wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	babyDoge: '0xc748673057861a797275CD8A068AbB95A902e8de',
	shib: '0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',
	elon: '0xd3ecC6a4ce1a9fAEC1AA5E30B55f8a1a4b84F938',
	eth: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
	busd: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
	usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
	dogecoin: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',

	// Prices
	cryptoPrice: {
		usd_price: 0,
		eur_price: 0,
		mxn_price: 0
	},

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
