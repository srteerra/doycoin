<template>
	<div class="notification__list m-3">
		<NoWalletCardVue />
	</div>
</template>

<script>
import NoWalletCardVue from './NoWalletCard.vue'

export default {
	name: 'NotificationList',
	components: {
		NoWalletCardVue
	},
	data() {
		return {

		}
	}
}
</script>

<style lang="scss">
.notification__list {
	width: 500px;
	position: fixed;
	z-index: 10;
	bottom: 0;
	right: 0;
}
</style>
