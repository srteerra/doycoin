<template>
	<b-card id="notificationMessage" class="pl-4 pr-2 mb-3">
		<div class="notificationMessage__content m-0 p-0">
			<div>
				<p class="m-0 p-0 font-weight-bold">
					<span :class="typeMessage" class="dot mr-2"></span> {{ notification.message }}
				</p>
			</div>
			<div class="notificationMessage__btn">
				<b-button
					variant="light"
					size="md"
					class="m-0"
					@click="noWalletquit = false"
				>
					<b-icon-x />
				</b-button>
			</div>
		</div>
		<b-progress
			:value="70"
			:variant="notification.type"
			:max="100"
			class="notificationMessage__timeline mb-3 p-0"
		></b-progress>
	</b-card>
</template>

<script>
export default {
	props: ['notification'],
	computed: {
		typeMessage() {
			return `alert-${this.notification.type}`
		}
	}
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

#notificationMessage {
	width: 100%;
	height: 90px;
	border: none;
	border-radius: 30px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	.notificationMessage__content {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.notificationMessage__btn {
			justify-items: end;
		}
	}
}

.notificationMessage__timeline {
	width: 422px;
	max-height: 7px;
	position: relative;
	bottom: -5px;
	left: -5px;
	border-radius: 30px !important;
}

.dot {
	display: inline-flex;
	height: 15px;
	width: 15px;
	border-radius: 50%;
}

.alert-success {
	background-color: $success;
}

.alert-danger {
	background-color: $danger;
}

.alert-warning {
	background-color: $warning;
}

</style>
