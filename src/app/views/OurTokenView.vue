<template>
	<div>
		<b-container class="mb-5">
			<b-row class="py-5">
				<b-col
					cols="12"
					md="5"
					lg="4"
					class="d-flex justify-content-center justify-content-lg-end mb-5"
				>
					<img
						src="../assets/vectors/coin-flip.png"
						alt=""
						style="width: 100%;max-width: 250px;"
					/>
				</b-col>

				<b-col cols="12" md="7" class="text-center text-md-left">
					<h2 class="font-weight-bold">About Doycoin Token</h2>

					<p class="font-weight-light">
						Ac cursus ex in viverra gravida diam enim. Cras Donec ex quis lorem.
						consectetur tincidunt lorem. ac ex sit elementum malesuada nulla,
						lobortis, eget sapien
					</p>
				</b-col>
			</b-row>
		</b-container>

		<b-container class="mb-5 py-lg-5">
			<b-row class="mb-3">
				<b-col class="text-center">
					<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px"
								class="pb-2"
							/>
						</span>

						Where to buy?

						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px; transform: scaleX(-1);"
								class="pb-2"
							/>
						</span>
					</h3>

					<p class="font-weight-light w-50 mx-auto">
						You can buy our token on the following deFi dapps. Please use the
						correct address and verify these sites.
					</p>
				</b-col>
			</b-row>

			<b-row class="mb-5 px-5 d-flex flex-wrap justify-content-center explaces">
				<img
					id="pancakeL"
					src="../assets/logos/pancakeswap-logo.png"
					alt=""
					class="tokenSites py-3"
				/>

				<img
					id="unisL"
					src="../assets/logos/uniswap-logo.png"
					alt=""
					class="tokenSites py-3 px-5"
				/>

				<img
					id="sushiL"
					src="../assets/logos/sushiswap-logo.png"
					alt=""
					class="tokenSites py-3"
				/>
			</b-row>
		</b-container>

		<b-container class="my-5 py-sm-5">
			<b-row class="mb-5">
				<b-col class="text-center">
					<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px"
								class="pb-2"
							/>
						</span>

						Tokenomics

						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px; transform: scaleX(-1);"
								class="pb-2"
							/>
						</span>
					</h3>

					<p class="font-weight-light w-50 mx-auto">
						Strongest direction with our community, expecting years of growth.
						Take a look in our token economy for the next years.
					</p>
				</b-col>
			</b-row>

			<b-row class="mb-5">
				<b-col cols="12" lg="6" class="w-100 d-lg-flex">
					<ul
						class="d-flex p-0 flex-wrap justify-content-center justify-content-lg-start text-center text-lg-left tokenomics__list flex-lg-column align-self-lg-center"
					>
						<li>
							<div>
								<div class="d-flex align-items-center">
									<h4 class="font-weight-bold pr-2 m-0">5%</h4>

									<span class="Rdot" style="background-color: #D3D3D3;"></span>
								</div>

								<p>Rewards</p>
							</div>
						</li>

						<li>
							<div>
								<div class="d-flex align-items-center">
									<h4 class="font-weight-bold pr-2 m-0">5%</h4>

									<span class="Rdot" style="background-color: #C5EDAE;"></span>
								</div>

								<p>Burn</p>
							</div>
						</li>

						<li>
							<div>
								<div class="d-flex align-items-center">
									<h4 class="font-weight-bold pr-2 m-0">10%</h4>

									<span class="Rdot" style="background-color: #8DCE63;"></span>
								</div>

								<p>Developers</p>
							</div>
						</li>

						<li>
							<div>
								<div class="d-flex align-items-center">
									<h4 class="font-weight-bold pr-2 m-0">20%</h4>

									<span class="Rdot" style="background-color: #689354;"></span>
								</div>

								<p>Community royalties</p>
							</div>
						</li>

						<li>
							<div>
								<div class="d-flex align-items-center">
									<h4 class="font-weight-bold pr-2 m-0">60%</h4>

									<span class="Rdot" style="background-color: #ADD692;"></span>
								</div>

								<p>Liquidity pool</p>
							</div>
						</li>
					</ul>
				</b-col>

				<b-col cols="12" lg="6" class="d-flex justify-content-center">
					<canvas id="tokenChart"></canvas>
				</b-col>
			</b-row>
		</b-container>

		<b-container class="my-5 pb-lg-5">
			<b-row class="mb-2">
				<b-col class="text-center">
					<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px"
								class="pb-2"
							/>
						</span>

						Token address

						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px; transform: scaleX(-1);"
								class="pb-2"
							/>
						</span>
					</h3>

					<p class="font-weight-light">
						Only this the BSC <span class="font-weight-bold">dev wallet</span>,
						if you want to buy us a coffee. THANKS!
					</p>
				</b-col>
			</b-row>

			<b-row class="mb-5">
				<b-col>
					<b-button
						id="devAdd"
						size="md"
						class="py-4 px-3 my-3 w-100 d-inline-block text-truncate font-weight-bold"
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
import Chart from 'chart.js/auto'

export default {
	name: 'HomeView',

	data() {
		return {}
	},

	mounted() {
		const ctx = document.getElementById('tokenChart')

		const data = {
			datasets: [
				{
					data: [5, 5, 10, 20, 60],

					backgroundColor: [
						'#D3D3D3',

						'#C5EDAE',

						'#8DCE63',

						'#689354',

						'#ADD692'
					],

					hoverOffset: 15,

					rotation: 250
				}
			]
		}

		const tokenChart = new Chart(ctx, {
			type: 'pie',

			data: data
		})

		tokenChart

		//
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
#tokenChart {
	width: 100%;
	max-width: 600px;
	height: auto;
	max-height: 600px;
}

#devAdd {
	background-color: #ebebeb;
	color: black;
	font-weight: 300;
	border: none;
	text-overflow: ellipsis;
	font-size: 1.3em;

	&:focus {
		border: none;
	}
}

.explaces img {
	transition: ease-in-out 0.3s;
}

.explaces:hover > img {
	opacity: 30%;
}
.explaces:hover > img:hover {
	opacity: 100%;
}

.tokenomics__list {
	li:not(:first-of-type) {
		padding-left: 25px;
		@media (min-width: 990px) {
			padding: 0;
		}
	}

	.Rdot {
		height: 20px;
		width: 20px;
		border-radius: 50%;
		display: inline-block;
	}
}

.tokenSites {
	width: 100%;
	max-width: 400px;
}
</style>
