<template>
  <div class="container-fluid px-0 mx-0">
    <b-container fluid id="main-bg" class="py-5">
      <div class="pb-5">
        <b-row class="py-5">
          <b-col cols="12">
            <b-row class="pt-5 pb-2">
              <b-col class="text-center">
                <h1 class="fs-2 text-dark">1,400,000</h1>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <p class="text-dark text-uppercase font-weight-light">Trees already planted</p>
                <h4 class="fs-3 text-dark font-weight-light pb-3">We're planting <span class="font-weight-bold">1,340 trees</span> per month</h4>
                <b-icon-caret-down-fill></b-icon-caret-down-fill>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                <DonationDash />
              </b-col>
            </b-row>
            <b-row class="pb-5 px-2 px-md-5">
              <b-col cols="6" sm="8" lg="4" class="text-center mx-auto pb-5">
                <p class="pb-5 text-dark">Start planting trees around the world with your favorite cryptocurrencies.</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container fluid class="py-0 py-sm-4 py-md-5 mb-5">
      <b-row class="pt-0 pt-md-5">
        <b-col class="text-center">
          <h3 class="text-dark font-weight-bold mx-auto">Leaderboard</h3>
        </b-col>
      </b-row>
      <b-row class="pt-3 pb-5">
        <b-col>
          <LeaderBoard />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LeaderBoard from '../components/LeaderBoard.vue'
import DonationDash from '../components/DonationDash.vue'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  name: 'HomeView',
  components: {
    LeaderBoard,
    DonationDash
  },
  computed: {
    // metaAddressConnected () {
    //   if (ethereum.selectedAddress === null) {
    //     console.log('Not connected')
    //     return false
    //   } else {
    //     console.log('Connected')
    //     return true
    //   }
    // }
  },
  methods: {
    ...mapActions(['showDonateModal'])
  }
}
</script>

<style lang="scss">
  #main-bg {
    background-image: url('../assets/images/main-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  #donate-btn {
    &:hover {
      span {
        display: none;
      }

      &:before {
        content: 'with crypto!';
      }
    }
  }
</style>
