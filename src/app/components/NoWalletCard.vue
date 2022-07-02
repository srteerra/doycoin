<!-- eslint-disable vue/attribute-hyphenation -->
<template>
	<b-card id="NoWalletCard" class="pl-4 pr-2 m-3">
		<div class="noWalletCard__header">
			<b-button variant="light" size="md" class="mb-0">
				<b-icon-x />
			</b-button>
		</div>
		<div class="noWalletCard__content">
			<h3 class="font-weight-bold mb-4">It looks like you don't have a wallet yet.</h3>
			<p>In order to use the functionalities of this web application it is necessary to to have a cryptocurrency wallet such as Metamask.</p>
		</div>
		<div class="noWalletCard__footer">
			<b-button href="#" class="mx-3 py-2 px-5" pill variant="outline-dark">Dismiss</b-button>
			<b-button href="#" class="mx-3 py-2 px-5" pill variant="success">I want one!</b-button>
		</div>
	</b-card>
</template>

<script>
export default {}
</script>

<style lang="scss">
#NoWalletCard {
	width: 500px;
	position: fixed;
	z-index: 10;
	bottom: 0;
	right: 0;
	border: none;
	border-radius: 20px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	.noWalletCard__header {
		display: flex;
		justify-content: end;
	}

	.noWalletCard__content {
		width: 100%;
		padding-bottom: 50px;

		h3 {
			width: 60%;
		}

		p {
			width: 60%;
		}
	}

	.noWalletCard__footer {
		display: flex;
		justify-content: center;
	}
}
</style>
