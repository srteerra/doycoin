<!-- eslint-disable vue/attribute-hyphenation -->
<template>
	<div>
		<TopAnnouncement />
		<MainHeader />
		<NotificationList />
		<router-view />
		<MainFooter />

		<!-- Addresses to donate modal -->
		<b-modal
			id="modal-pleaseChangeNet"
			v-model="showpleaseChangeNet"
			centered
			size="md"
			headerBgVariant="light"
			headerTextVariant="dark"
			headerBorderVariant="light"
			footerBgVariant="light"
			footerTextVariant="dark"
			footerBorderVariant="light"
			no-close-on-backdrop="true"
			no-close-on-esc="true"
		>
			<template #modal-header>
				<div class="w-100">
					<p class="font-weight-bold">Check your network</p>
				</div>
			</template>
			<b-row class="px-5">
				<div>
					<p>Currently Dapp only supported in Binance Smart Chain Mainnet</p>
					<div class="d-flex justify-content-center my-5">
						<img src="./assets/vectors/tree-5.png" alt="" style="max-width: 150px;"/>
					</div>
					<b-button block disabled variant="warning">Please switch your network to continue.</b-button>
					<b-button block pill variant="primary" class="font-weight-bold" @click="changeNetwork()">Switch my network</b-button>
				</div>
			</b-row>
			<template #modal-footer>
				<div class="w-100">
				</div>
			</template>
		</b-modal>
	</div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import TopAnnouncement from './components/TopAnnouncement.vue'
import NotificationList from './components/NotificationList.vue'
import $ from 'jquery'
import { mapActions, mapState } from 'vuex'

export default {
	name: 'App',
	components: {
		MainHeader,
		MainFooter,
		TopAnnouncement,
		NotificationList
	},
	data() {
		return {}
	},
	computed: {
		...mapState(['showpleaseChangeNetState', 'netID']),
		showpleaseChangeNet() {
			if (this.netID === null) {
				return false
			} else if (this.netID !== 56) {
				return true
			} else {
				return false
			}
		}
	},
	mounted() {
		$('#pre-loader').fadeOut(2000)
	},
	methods: {
		...mapActions(['changeNetwork'])
	}
}
</script>

<style lang="scss">
</style>
