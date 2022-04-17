<template>
  <div class="container-fluid px-5 py-4">
    <b-navbar toggleable="lg" type="light" variant="white">
      <!-- Navbar logo -->
      <b-navbar-brand href="#">
        <img id="principal-logo" src="../assets/logos/principal-logo-dark.png" alt="">
        <img id="secundary-logo" src="../assets/logos/secundary-logo.png" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Navbar links -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center text-dark font-weight-bold">
          <router-link to="/" class="px-2">Home</router-link>
          <router-link to="/about" class="px-2">About us</router-link>
          <router-link to="/token" class="px-2">Our token</router-link>
          <router-link to="/how" class="px-2">How it works?</router-link>
          <router-link to="/contact" class="px-2">Contact us</router-link>
        </b-navbar-nav>

        <!-- Connect wallet -->
        <b-button
          id="connectWallet"
          style="max-width:180px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
          :disabled="this.$store.state.connectBtnState"
          class="ml-4 px-4 rounded-pill font-weight-bold"
          variant="success"
          v-on:click="showconnectWalletModal()"
        >
          {{ walletConnectText }}
        </b-button>

        <!-- Controls dropdown -->
        <b-dropdown right toggle-class="no-caret text-decoration-none" class="m-md-2 pl-1" variant="light" v-if="this.$store.state.isconnected" no-caret>
          <template #button-content>
            <b-avatar :src="`${getAvatar}`" size='4rem'></b-avatar>
          </template>
          <b-dropdown-item to="/profile">
            <div class="py-2">
              <span class="px-2"><b-icon-person></b-icon-person></span> My profile
            </div>
          </b-dropdown-item>
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
          <b-dropdown-item-button @click="disconnectAcc()" :disabled="this.$store.state.disconnectBtnState">
            <div class="py-2">
              <span class="px-2"><b-icon-box-arrow-left></b-icon-box-arrow-left></span> Disconnect
            </div>
          </b-dropdown-item-button>
        </b-dropdown>
      </b-collapse>
    </b-navbar>

    <!-- Missing Metamask modal -->
    <b-modal id="modal-installMetamask" v-model="this.$store.state.showinstallMetaModal" centered size="md"
      header-bg-variant="light"
      header-text-variant="dark"
      header-border-variant="light"
      footer-bg-variant="light"
      footer-text-variant="dark"
      footer-border-variant="light"
    >
      <template #modal-header>
        <div class="w-100">
          <b-button variant="light" size="md" class="float-right" @click="showinstallMetaModal()">
            <b-icon-x></b-icon-x>
          </b-button>
        </div>
      </template>
      <b-container class="px-5">
        <b-row class="pb-4">
          <b-col class="text-center">
            <img src="../assets/icons/advertencia.png" class="pb-4" style="max-width:80px;max-height:80px;">
            <h4>Something is missing!</h4>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <p class="font-weight-regular">
              You must to have <span class="font-weight-bold">Metamask</span> on your browser to connect. Install it
              <span class="font-weight-regular text-primary"> <a href="https://metamask.io/" target="_blank">here</a> </span>
            </p>
          </b-col>
        </b-row>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <b-button variant="dark" size="md" class="float-right" @click="showinstallMetaModal()">Close</b-button>
        </div>
      </template>
    </b-modal>
    
    <!-- Selecting wallet modal -->
    <b-modal id="modal-connectWallet" v-model="this.$store.state.showconnectWalletModal" centered size="lg"
      header-bg-variant="light"
      header-text-variant="dark"
      header-border-variant="light"
      footer-bg-variant="light"
      footer-text-variant="dark"
      footer-border-variant="light"
    >
      <template #modal-header>
        <div class="w-100">
          <b-button variant="light" size="md" class="float-right" @click="showconnectWalletModal()">
            <b-icon-x></b-icon-x>
          </b-button>
        </div>
      </template>
      <b-overlay :show="this.$store.state.fetchingData" rounded="sm">
        <b-container class="px-5">
          <b-row class="pb-4">
            <b-col>
              <h4>Select your wallet extension</h4>
            </b-col>
          </b-row>
          <b-row class="pb-5">
            <b-col>
              <b-button
                variant="light"
                class="border px-4 py-3"
                v-on:click="connectAcc()"
              >
                <span class="pr-3"><img id="wallet-ico" src="../assets/logos/metamask-icon.png" alt=""></span>
                <span class="font-weight-regular">Metamask</span>
              </b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="font-weight-light">*If you're using <span class="font-weight-bold">Brave</span> as your browser, it might be a problem selecting a wallet. We recommend you move to another browser or change the <span class="font-weight-bold">"Default cryptocurrency wallet"</span> on your settings to have the best experience.</p>
            </b-col>
          </b-row>
        </b-container>
      </b-overlay>
      <template #modal-footer>
        <div class="w-100">
          <b-button variant="dark" size="md" class="float-right" @click="showconnectWalletModal()">Close</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import { mapGetters } from "vuex"

export default {
	data () {
		return {
			currentAccount: null,
		}
	},
	watch: {},
	computed: {
		walletConnectText () {
			if (this.$store.state.currentAccount === null) {
				return "Connect Wallet"
			} else {
				return this.$store.state.currentAccount.slice(0, 4) + "..." + this.$store.state.currentAccount.slice(36, 50)
			}
		},
		...mapGetters([
			"getAvatar"
		])
	},
	name: "MainHeader",
	methods: {
		...mapActions([
			"disconnectAcc",
			"connectAcc",
			"showconnectWalletModal",
			"showinstallMetaModal",
		])
	},
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
