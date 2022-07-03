<template>
	<div class="notification__list m-3">
		<NotificationMessage />
		<NoWalletCardVue />
	</div>
</template>

<script>
import NoWalletCardVue from './NoWalletCard.vue'
import NotificationMessage from './NotificationMessage.vue'

export default {
	name: 'NotificationList',
	components: {
		NoWalletCardVue,
		NotificationMessage
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
