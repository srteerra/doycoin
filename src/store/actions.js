const Web3 = require('web3')
const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546')

console.log(web3.providers)

export const actions = {
  async showDonateModal (context) {
    context.commit('showDonateModal')
  }
  // async getAcc () {
  //   this.$store.state.connectBtnState = true
  //   this.$store.state.disconnectBtnState = false
  //   console.log(provider)
  //   if (provider) {
  //     ethereum
  //       .request({ method: 'eth_requestAccounts' })
  //       .then(ethereum._handleAccountsChanged)
  //       .catch((err) => {
  //         if (err.code === 4001) {
  //           // EIP-1193 userRejectedRequest error
  //           // If this happens, the user rejected the connection request.
  //           this.$store.state.connectBtnState = true
  //           console.log('Please connect to MetaMask.')
  //         } else {
  //           console.error(err)
  //         }
  //       })
  //   } else {
  //     console.log('Please install MetaMask!')
  //   }
  //   this.$store.state.address = ethereum.selectedAddress
  //   this.$store.state.isconnected = true
  //   console.log(this.$store.state.isConnected)
  //   if (this.showconnectWalletModal !== false) {
  //     this.showconnectWalletModal = false
  //   } else {
  //     this.showconnectWalletModal = false
  //   }
  // }
}
