<template>
    <b-modal id="modal-donate" v-model="this.$store.state.showDonateModal" centered size="lg"
      header-bg-variant="light"
      header-text-variant="dark"
      header-border-variant="light"
      footer-bg-variant="light"
      footer-text-variant="dark"
      footer-border-variant="light"
    >
      <template #modal-header>
        <div class="w-100">
          <b-button variant="light" size="md" class="float-right" @click="this.$store.state.showDonateModal=false">
            <b-icon-x></b-icon-x>
          </b-button>
        </div>
      </template>
      <b-container class="px-5">
        <b-row>
          <b-col>
            <h4>1. First you need to connect your wallet</h4>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="px-5">
        <b-row>
          <b-col>
            <h4>You're connected!</h4>
          </b-col>
        </b-row>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <b-button @click="testMeta">Test</b-button>
          <b-button variant="dark" size="md" class="float-right" @click="this.$store.state.showDonateModal=false">
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
</template>

<script>
export default {
  name: 'DonationDash'
}
</script>

<style lang="scss">

</style>
