import detectEthereumProvider from '@metamask/detect-provider'

const provider = await detectEthereumProvider()
const ethereum = window.ethereum

if (provider) {
  console.log(provider)
} else {
  console.log("There's not a provider")
}

if (provider !== window.ethereum) {
  console.log('Do you have multiple wallets installed?')
}

// eslint-disable-next-line
async function handleChainChanged (_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.reload()
}

async function getAcc () {
  this.$store.state.connectBtnState = true
  this.$store.state.disconnectBtnState = false
  console.log(provider)
  if (provider) {
    ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(ethereum._handleAccountsChanged)
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          this.$store.state.connectBtnState = true
          console.log('Please connect to MetaMask.')
        } else {
          console.error(err)
        }
      })
  } else {
    console.log('Please install MetaMask!')
  }
  this.$store.state.address = ethereum.selectedAddress
  this.$store.state.isconnected = true
  console.log(this.$store.state.isConnected)

  if (this.showconnectWalletModal !== false) {
    this.showconnectWalletModal = false
  } else {
    this.showconnectWalletModal = false
  }
}

// eslint-disable-next-line
async function connectMetamask () {
  if (provider) {
    ethereum
      .request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }]
      })
      .then((permissions) => {
        const accountsPermission = permissions.find(
          (permission) => permission.parentCapability === 'eth_accounts'
        )
        if (accountsPermission) {
          this.loading = true
          console.log('eth_accounts permission successfully requested!')
          getAcc()
        }
      })
      .catch((error) => {
        this.loading = false
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log('Permissions needed to continue.')
        } else {
          console.error(error)
        }
      })
  } else {
    this.loading = false
    this.showconnectWalletModal = false
    this.showinstallMetaModal = true
    console.log('Please install metamask')
  }
}

// eslint-disable-next-line
async function payment () {
  if (ethereum.isConnected()) {
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: '0x28b460e6ef1cc6b2457c140fbb7cef362154da7b',
            to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
            gas: '0x76c0', // 30400
            gasPrice: '0x9184e72a000', // 10000000000000
            value: '0x9184e72a', // 2441406250
            data:
              '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675'
          }
        ]
      })
      .then((res) => {
        // The result varies by RPC method.
        // For example, this method will return a transaction hash hexadecimal string on success.
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        if (err.code === 4001) {
          console.log('User denied the transaction')
        } else {
          console.error(err)
        }
      })
  }
}

// eslint-disable-next-line
async function handleAccountsChanged (accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask.')
  } else if (accounts[0] !== this.currentAccount) {
    this.currentAccount = accounts[0]
    // Do any other work!
  }
}

// eslint-disable-next-line
async function disconnectAcc () {
  window.location.reload()
}
