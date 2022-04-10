import detectEthereumProvider from '@metamask/detect-provider'

const provider = await detectEthereumProvider()
const ethereum = window.ethereum

console.log(provider)

export const actions = {
  async showDonateModal (context) {
    context.commit('SHOW_DONATE')
  },
  async showconnectWalletModal (context) {
    context.commit('SHOW_CONNECT')
  },
  async showinstallMetaModal (context) {
    context.commit('SHOW_INSTALL_METAMASK')
  },
  async disconnectAcc () {
    window.location.reload()
  },
  async setAcc ({ commit }, acc) {
    commit('CURRENT_ADDRESS', acc)
  },
  async connectAcc ({ commit, dispatch }) {
    commit('CONNECT_BUTTON', true) // Button disabled
    commit('LOADING_DATA', true) // Loading data on

    if (provider) {
      console.log(provider)
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
            dispatch('setAcc', ethereum.selectedAddress)
            commit('IS_CONNECTED', true)
            commit('DISCONNECT_BUTTON', false) // Disconnect button enabled on nav
            commit('LOADING_DATA', false) // Loading data off
            commit('SHOW_CONNECT')
          }
        })
        .catch((err) => {
          if (err.code === 4001) {
            console.log('Please connect to MetaMask.')
            commit('CONNECT_BUTTON', false) // Button enabled
            commit('DISCONNECT_BUTTON', true) // Disconnect button disabled on nav
            commit('LOADING_DATA', false) // Loading data off
            commit('SHOW_CONNECT')
          } else {
            console.error(err)
          }
        })
    } else {
      console.log('Please install MetaMask!')
      commit('SHOW_INSTALL_METAMASK')
      commit('CONNECT_BUTTON', false) // Button enabled
      commit('DISCONNECT_BUTTON', true) // Disconnect button disabled on nav
      commit('LOADING_DATA', false) // Loading data off
      commit('SHOW_CONNECT')
    }
  }
}