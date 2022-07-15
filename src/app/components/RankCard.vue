<!-- eslint-disable vue/attribute-hyphenation -->
<template>
	<div class="myrank__container shadow-lg">
		<b-row>
			<b-col cols="8" align="center">
				<h4 class="font-weight-bold">Your rank</h4>
				<p>Crazy dude</p>
				<div>
					<b-progress
						value="50"
						max="100"
						height="10px"
						class="mb-3"
					></b-progress>
					<a href="#">See the ranking</a>
				</div>
			</b-col>
			<b-col cols="4" class="d-flex align-items-center justify-content-center">
				<img id="rankBadge" src="../assets/badges/Level 10 badge.png" alt="" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'

export default {
	name: 'RankCard',
	data() {
		return {}
	},
	computed: {
		...mapState(['username', 'userCountry', 'fetchingData']),
		...mapGetters(['getUsername', 'getAvatar', 'getAddress', 'getAddressShort'])
	}
}
</script>

<style lang="scss">
#rankBadge {
	max-width: 50px;
}

.myrank__container {
	width: 100%;
	padding: 30px 40px;
	border-radius: 35px;
}
</style>
