<template>
  <div class="container-fluid px-5 py-4">
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand href="#">
        <img id="principal-logo" src="../assets/principal-logo-dark.png" alt="">
        <img id="secundary-logo" src="../assets/secundary-logo.png" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto text-center text-dark font-weight-bold">
          <router-link to="/" class="px-2">Home</router-link>
          <router-link to="/about" class="px-2">About us</router-link>
          <router-link to="/how" class="px-2">How it works?</router-link>
          <router-link to="/contact" class="px-2">Contact us</router-link>
        </b-navbar-nav>
        <b-button
          id="connectWallet"
          style="max-width:180px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
          :disabled="this.$store.state.connectBtnState"
          class="ml-4 px-4 rounded-pill font-weight-bold"
          variant="success"
          v-on:click="showconnectWalletModal=true"
        >
          {{ $store.state.address }}
        </b-button>
        <b-tooltip v-if="$store.state.connectBtnState === false" variant="secondary" target="connectWallet" triggers="hover">
          {{ $store.state.address }}
        </b-tooltip>
        <b-dropdown id="dropdown-settings-header" no-caret right toggle-class="text-decoration-none" class="m-md-2 pl-1 text-decoration-none" variant="light" v-if="this.$store.state.connectBtnState">
          <template #button-content>
            <b-icon-gear></b-icon-gear>
          </template>
          <b-dropdown-item to="/help">
            <div class="py-2">
              <span class="px-2"><b-icon-question-circle></b-icon-question-circle></span> Need help?
            </div>
          </b-dropdown-item>
          <b-dropdown-item to="/help">
            <div class="py-2">
              <span class="px-2"><b-icon-bug></b-icon-bug></span> Report a bug
            </div>
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button @click="disconnectAcc" :disabled="this.$store.state.disconnectBtnState">
            <div class="py-2">
              <span class="px-2"><b-icon-box-arrow-left></b-icon-box-arrow-left></span> Disconnect
            </div>
          </b-dropdown-item-button>
        </b-dropdown>
      </b-collapse>
    </b-navbar>
    <b-modal id="modal-installMetamask" v-model="showinstallMetaModal" centered size="lg"
      header-bg-variant="light"
      header-text-variant="dark"
      header-border-variant="light"
      footer-bg-variant="light"
      footer-text-variant="dark"
      footer-border-variant="light"
    >
      <template #modal-header>
        <div class="w-100">
          <b-button variant="light" size="md" class="float-right" @click="showinstallMetaModal=false">
            <b-icon-x></b-icon-x>
          </b-button>
        </div>
      </template>
      <b-container class="px-5">
        <b-row class="pb-4">
          <b-col>
            <h4>Please install Metamask</h4>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              variant="light"
              class="border px-4 py-3"
              v-on:click="connectMetamask"
            >
              <span class="pr-3"><img id="wallet-ico" src="../assets/metamask-icon.png" alt=""></span>
              <span class="font-weight-regular">Install it </span>
              <span class="font-weight-regular"> <a href="/">here</a> </span>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <b-button variant="dark" size="md" class="float-right" @click="showinstallMetaModal=false">Close</b-button>
        </div>
      </template>
    </b-modal>
    <b-modal id="modal-connectWallet" v-model="showconnectWalletModal" centered size="lg"
      header-bg-variant="light"
      header-text-variant="dark"
      header-border-variant="light"
      footer-bg-variant="light"
      footer-text-variant="dark"
      footer-border-variant="light"
    >
      <template #modal-header>
        <div class="w-100">
          <b-button variant="light" size="md" class="float-right" @click="showconnectWalletModal=false">
            <b-icon-x></b-icon-x>
          </b-button>
        </div>
      </template>
      <b-overlay :show="loading" rounded="sm">
        <b-container class="px-5">
          <b-row class="pb-4">
            <b-col>
              <h4>Select your wallet extension</h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button
                variant="light"
                class="border px-4 py-3"
                v-on:click="connectMetamask"
              >
                <span class="pr-3"><img id="wallet-ico" src="../assets/metamask-icon.png" alt=""></span>
                <span class="font-weight-regular">Metamask</span>
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-overlay>
      <template #modal-footer>
        <div class="w-100">
          <b-button variant="dark" size="md" class="float-right" @click="showconnectWalletModal=false">Close</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import detectEthereumProvider from '@metamask/detect-provider'

const provider = await detectEthereumProvider()
const ethereum = window.ethereum

if (provider) {
  console.log(provider)
} else {
  console.log("There's not a provider")
}

export default {
  data () {
    return {
      currentAccount: null,
      loading: false,
      addMeta: null,
      showconnectWalletModal: false,
      showinstallMetaModal: false
    }
  },
  computed: {
    connectBtnVerify () {
      if (this.connectBtnDisabled === false) {
        return false
      } else {
        return true
      }
    }
  },
  name: 'MainHeader',
  methods: {
    // async handleAccountsChanged (accounts) {
    //   if (accounts.length === 0) {
    //     // MetaMask is locked or the user has not connected any accounts
    //     console.log('Please connect to MetaMask.')
    //   } else if (accounts[0] !== this.currentAccount) {
    //     this.currentAccount = accounts[0]
    //     // Do any other work!
    //   }
    // },
    async connectMetamask () {
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
              this.getAcc()
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
    },
    async handleChainChanged (_chainId) {
      // We recommend reloading the page, unless you must do otherwise
      window.location.reload()
    },
    async payment () {
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
    },
    async disconnectAcc () {
      window.location.reload()
    },
    async getAcc () {
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

      if (this.showconnectWalletModal !== false) {
        this.showconnectWalletModal = false
      } else {
        this.showconnectWalletModal = false
      }
    }
  }
}
</script>

<style lang="scss">
  #principal-logo {
    display: none;
  }
  #secundary-logo {
    display: none;
  }
  #wallet-ico {
    max-width: 30px;
  }
  #connectWalletOptionsLogo {
    max-width: 40px;
  }

  @media screen and (min-width: 600px) {
    #principal-logo {
      display: initial;
      max-width: 250px;
    }
    #secundary-logo {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    #principal-logo {
      display: none;
    }
    #secundary-logo {
      display: initial;
      max-width: 75px;
    }
  }
</style>
