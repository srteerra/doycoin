<template>
	<div>
		<b-container>
			<b-row class="py-5">
				<b-col
					cols="12"
					class="d-flex justify-content-center justify-content-lg-end mb-5"
				>
					<img
						src="../assets/vectors/coin-flip.png"
						alt=""
						style="max-width: 250px;"
					/>
				</b-col>
				<b-col cols="12" class="text-center">
					<h2 class="font-weight-bold">About Doycoin Token</h2>
					<p class="font-weight-light">
						Ac cursus ex in viverra gravida diam enim. Cras Donec ex quis lorem.
						consectetur tincidunt lorem. ac ex sit elementum malesuada nulla,
						lobortis, eget sapien
					</p>
				</b-col>
			</b-row>
		</b-container>
		<b-container>
			<b-row class="mb-3">
				<b-col class="text-center">
					<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
						Where to buy?
					</h3>
					<p class="font-weight-light">
						You can buy our token on the following deFi dapps. Please use the
						correct address and verify these sites.
					</p>
				</b-col>
			</b-row>
			<b-row class="mb-5 px-5">
				<img
					src="../assets/logos/pancakeswap-logo.png"
					alt=""
					class="tokenSites py-3"
				/>
				<img
					src="../assets/logos/sushiswap-logo.png"
					alt=""
					class="tokenSites py-3"
				/>
				<img
					src="../assets/logos/uniswap-logo.png"
					alt=""
					class="tokenSites py-3"
				/>
			</b-row>
		</b-container>
		<b-container>
			<b-row class="mb-3">
				<b-col class="text-center">
					<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
						Tokenomics
					</h3>
				</b-col>
			</b-row>
		</b-container>
		<b-container>
			<b-row class="mb-3">
				<b-col class="text-center">
					<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
						Token address
					</h3>
					<p class="font-weight-light">
						Only this the <span class="font-weight-bold">dev address</span>,
						please verify it before making any transaction.
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-button
						id="devAdd"
						size="md"
						class="py-2 px-3 my-3 w-100"
						@click="copyAddress('0xb37ecc72b98d7004c284fda84315eac16903bda3')"
					>
						0xb37ecc72b98d7004c284fda84315eac16903bda3
						<span class="pl-1"><b-icon-clipboard /></span>
					</b-button>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'HomeView',
	data() {
		return {}
	},
	methods: {
		copyAddress(add) {
			navigator.clipboard.writeText(add).then(
				() => {
					console.log('copied')
				},
				() => {
					console.log('not copied')
				}
			)
		}
	}
}
</script>

<style lang="scss">
#devAdd {
	background-color: #ebebeb;
	color: black;
	font-weight: 300;
	transition: ease-in-out 0.2s;
	border: none;

	&:hover {
		background-color: #ebebeb;
		font-weight: 800;
	}
	&:focus {
		border: none;
	}
}
.tokenSites {
	max-width: 100%;
}
</style>
