<template>
    <b-modal id="modal-donate" v-model="this.$store.state.showDonate" centered size="lg"
      header-bg-variant="light"
      header-text-variant="dark"
      header-border-variant="light"
      footer-bg-variant="light"
      footer-text-variant="dark"
      footer-border-variant="light"
    >
      <template #modal-header>
        <div class="w-100">
          <b-button variant="light" size="md" class="float-right" @click="showDonateModal()">
            <b-icon-x></b-icon-x>
          </b-button>
        </div>
      </template>
      <b-container class="px-5" v-if="this.$store.state.isconnected === false">
        <b-row>
          <b-col>
            <h4>1. First you need to connect your wallet</h4>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="px-5" v-if="this.$store.state.isconnected === true">
        <b-row>
          <b-col>
            <h4>You're connected!</h4>
          </b-col>
        </b-row>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <b-button variant="dark" size="md" class="float-right" @click="showDonateModal()">
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DonationDash',
  methods: {
    ...mapActions(['showDonateModal'])
  },
  computed: {
    addressDetection () {
      if (this.$store.state.address === null) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss">

</style>
