<template>
	<div class="container-fluid px-0 mx-0">
		<b-container
			:style="{
				height: 'auto',
				'background-repeat': 'no-repeat',
				'background-position': 'center',
				'background-size': 'cover',
				'background-image':
					'url(' + require('../assets/images/main-bg.png') + ')'
			}"
			fluid
			class="py-5"
		>
			<div>
				<b-row class="pt-5">
					<b-col cols="12">
						<b-row class="pt-5">
							<b-col class="text-center">
								<h1 class="fs-2 text-dark font-weight-bold">
									<ICountUp
										:delay="delay"
										:endVal="totalTreesPlanted"
										:options="options"
										@ready="onReady"
									/>
								</h1>
							</b-col>
						</b-row>
						<b-row>
							<b-col class="text-center">
								<p class="text-dark text-uppercase font-weight-light">
									Trees already planted
								</p>
								<h4 class="fs-3 text-dark font-weight-light pb-3">
									We're planting
									<span class="font-weight-bold">
										<ICountUp
											:delay="delay"
											:endVal="totalTreesMonthly"
											:options="options"
											@ready="onReady"
										/>
									</span>
									per month
									<span
										><router-link to="/how" class="px-1"
											><b-icon-question-circle></b-icon-question-circle></router-link
									></span>
								</h4>
								<b-icon-caret-down-fill></b-icon-caret-down-fill>
							</b-col>
						</b-row>
						<b-row>
							<b-col class="text-center px-0">
								<DonationDash />
							</b-col>
						</b-row>
					</b-col>
				</b-row>
			</div>
		</b-container>
		<b-container>
			<b-row class="py-3">
				<b-col cols="6" sm="8" lg="10" class="text-center mx-auto">
					<p class="text-dark px-0 px-md-5">
						Start planting trees around the world with your favorite
						cryptocurrencies.
					</p>
				</b-col>
			</b-row>
		</b-container>
		<b-container fluid class="py-0 py-sm-4 py-md-5 mb-5">
			<b-row class="pt-3 pb-5">
				<b-col class="px-0 px-sm-3">
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
import ICountUp from 'vue-countup-v2'

export default {
	name: 'HomeView',
	components: {
		LeaderBoard,
		DonationDash,
		ICountUp
	},
	data() {
		return {
			delay: 1000,
			options: {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			}
		}
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
		totalTreesPlanted() {
			return 1000000
		},
		totalTreesMonthly() {
			return 1340
		}
	},
	methods: {
		...mapActions(['showDonateModal'])
	}
}
</script>

<style lang="scss"></style>
