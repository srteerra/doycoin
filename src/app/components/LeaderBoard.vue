<!-- eslint-disable vue/attribute-hyphenation -->
<template>
	<div id="LeadboardBlock">
		<b-container fluid>
			<b-row class="pt-0 pt-md-5">
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
						Leaderboard
						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px; transform: scaleX(-1);"
								class="pb-2"
							/>
						</span>
					</h3>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols sm="12" md="12" lg="9" xl="6" class="mx-0 px-0 mx-sm-auto">
					<div>
						<div id="LeadBoard-container" class="my-5">
							<div class="px-0">
								<b-tabs pills align="center">
									<b-tab title="Top donations" active>
										<div class="px-0 py-5">
											<ul id="leadboard__listTop" class="py-2 px-0">
												<li
													v-for="topDonator in filteredTopItem"
													id="leadboard__item"
													:key="topDonator.id"
													class="shadow-lg py-4 mb-4"
												>
													<b-row class="px-4 px-sm-5 leadboard__item__content">
														<div
															id="topdonator__background"
															:style="{
																'background-repeat': 'no-repeat',
																'background-position': 'center',
																'background-size': 'cover',
																'background-image':
																	'url(' +
																	require('../assets/images/main-bg.png') +
																	')'
															}"
														></div>
														<!-- Avatar col -->
														<b-col
															v-if="windowWidth >= 576"
															xs="12"
															sm="12"
															md="12"
															lg="12"
															xl="12"
															align="center"
															class="my-auto d-flex justify-content-center leadboard__item__col"
														>
															<div class="leadboardTop__avatar">
																<b-avatar
																	id="donator__avatar"
																	:src="
																		'https://i.pravatar.cc/300?' + topDonator.id
																	"
																	size="6rem"
																/>
															</div>
														</b-col>
														<!-- End of Avatar col -->

														<!-- Desc col -->
														<b-col
															cols="12"
															xs="12"
															sm="12"
															md="12"
															lg="12"
															xl="12"
															class="my-auto text-center d-flex justify-content-center leadboard__item__col"
														>
															<div class="leadboardTop__desc">
																<div>
																	<h4
																		class="text-start mb-0 text-dark font-weight-bolder py-3"
																	>
																		{{ topDonator.name }}
																	</h4>
																</div>
																<div>
																	<p
																		class="text-white treesText font-weight-bolder"
																	>
																		{{ topDonator.trees }} trees!
																	</p>
																</div>
																<div class="text-center">
																	<p
																		class="text-center mb-0 text-dark descText font-weight-regular"
																	>
																		{{ topDonator.desc }}
																	</p>
																</div>
															</div>
														</b-col>
														<!-- End of Desc col -->

														<!-- Info col -->
														<b-col
															cols="12"
															xs="12"
															sm="12"
															md="12"
															lg="12"
															xl="12"
															class="my-auto d-flex justify-content-end justify-content-sm-center justify-content-md-end leadboard__item__col"
														>
															<div class="leadboardTop__trees">
																<div>
																	<!-- <p class="addressText font-weight-regular text-muted">{{ recentDonator.date }}</p> -->
																	<a
																		class="addressText font-weight-bolder text-muted"
																		href="https://www.bscscan.com/address/0x10ed43c718714eb63d5aa57b78b54704e256024e"
																		>0x1...6024e
																		<b-icon-box-arrow-up-right />
																	</a>
																</div>
															</div>
														</b-col>
														<!-- End of Info col -->
													</b-row>
												</li>
												<li
													v-for="topdonators in itemsForListTop"
													id="leadboard__item"
													:key="topdonators.id"
													class="shadow-lg py-4 mb-4"
												>
													<b-row class="px-4 px-sm-5 leadboard__item__content">
														<!-- Avatar col -->
														<b-col
															v-if="windowWidth >= 576"
															xs="4"
															sm="4"
															md="3"
															lg="3"
															xl="4"
															align="start"
															class="my-auto d-flex justify-content-end justify-content-md-center leadboard__item__col"
														>
															<div class="leadboardTop__avatar">
																<b-avatar
																	id="donator__avatar"
																	:src="
																		'https://i.pravatar.cc/300?' +
																			topdonators.id
																	"
																	size="4rem"
																/>
																<img
																	id="donator__badge"
																	class="ml-4"
																	:src="
																		require('../assets/badges/Level ' +
																			`${topdonators.level}` +
																			' badge.png')
																	"
																/>
															</div>
														</b-col>
														<!-- End of Avatar col -->

														<!-- Desc col -->
														<b-col
															cols="5"
															xs="4"
															sm="4"
															md="3"
															lg="3"
															xl="4"
															class="my-auto text-left d-flex justify-content-start leadboard__item__col"
														>
															<div class="leadboardTop__desc">
																<h4
																	class="text-start mb-0 text-dark font-weight-bolder"
																>
																	{{ topdonators.name }}
																</h4>
																<div>
																	<p
																		class="text-start mb-0 text-dark descText font-weight-regular"
																	>
																		{{ topdonators.desc }}
																	</p>
																</div>
															</div>
														</b-col>
														<!-- End of Desc col -->

														<!-- Info col -->
														<b-col
															cols="7"
															xs="4"
															sm="4"
															md="6"
															lg="6"
															xl="4"
															class="my-auto d-flex justify-content-end justify-content-sm-center justify-content-md-end leadboard__item__col"
														>
															<div class="leadboardTop__trees">
																<p
																	class="text-white treesText font-weight-bolder"
																>
																	{{ topdonators.trees }} trees!
																</p>
																<div>
																	<!-- <p class="addressText font-weight-regular text-muted">{{ recentDonator.date }}</p> -->
																	<a
																		class="addressText font-weight-bolder text-muted"
																		href="https://www.bscscan.com/address/0x10ed43c718714eb63d5aa57b78b54704e256024e"
																		>0x1...6024e
																		<b-icon-box-arrow-up-right />
																	</a>
																</div>
															</div>
														</b-col>
														<!-- End of Info col -->
													</b-row>
												</li>
											</ul>
										</div>
									</b-tab>
									<b-tab title="Most recent">
										<div class="px-0 py-5">
											<ul id="leadboard__listRecent" class="py-2 px-0">
												<li
													v-for="recentDonator in itemsForListRecent"
													id="leadboard__item"
													:key="recentDonator.id"
													class="shadow-lg py-4 mb-4"
												>
													<b-row class="px-4 px-sm-5">
														<!-- Avatar col -->
														<b-col
															v-if="windowWidth >= 576"
															xs="4"
															sm="4"
															md="3"
															lg="3"
															xl="4"
															align="start"
															class="my-auto d-flex justify-content-end justify-content-md-center"
														>
															<div>
																<b-avatar
																	id="donator__avatar"
																	:src="
																		'https://i.pravatar.cc/300?' +
																			recentDonator.id
																	"
																	size="4rem"
																/>
																<img
																	id="donator__badge"
																	class="ml-4"
																	:src="
																		require('../assets/badges/Level ' +
																			`${recentDonator.level}` +
																			' badge.png')
																	"
																/>
															</div>
														</b-col>
														<!-- End of Avatar col -->

														<!-- Desc col -->
														<b-col
															cols="5"
															xs="4"
															sm="4"
															md="3"
															lg="3"
															xl="4"
															class="my-auto text-left d-flex justify-content-start"
														>
															<div>
																<h4
																	class="text-start mb-0 text-dark font-weight-bolder"
																>
																	{{ recentDonator.name }}
																</h4>
																<div>
																	<p
																		class="text-start mb-0 text-dark descText font-weight-regular"
																	>
																		{{ recentDonator.desc }}
																	</p>
																</div>
															</div>
														</b-col>
														<!-- End of Desc col -->

														<!-- Info col -->
														<b-col
															cols="7"
															xs="4"
															sm="4"
															md="6"
															lg="6"
															xl="4"
															class="my-auto d-flex justify-content-end justify-content-sm-center justify-content-md-end"
														>
															<div>
																<p
																	class="text-white treesText font-weight-bolder"
																>
																	{{ recentDonator.trees }} trees!
																</p>
																<div>
																	<!-- <p class="addressText font-weight-regular text-muted">{{ recentDonator.date }}</p> -->
																	<a
																		class="addressText font-weight-bolder text-muted"
																		href="https://www.bscscan.com/address/0x10ed43c718714eb63d5aa57b78b54704e256024e"
																		>0x1...6024e
																		<b-icon-box-arrow-up-right />
																	</a>
																</div>
															</div>
														</b-col>
														<!-- End of Info col -->
													</b-row>
												</li>
											</ul>
											<b-pagination
												v-model="currentPage"
												:total-rows="Recentrows"
												:per-page="RecentperPage"
												pills
												align="center"
												aria-controls="leadboard__listRecent"
												first-number
												last-number
											></b-pagination>
										</div>
									</b-tab>
								</b-tabs>
							</div>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'LeaderBoard',
	data() {
		return {
			TopperPage: 5,
			RecentperPage: 3,
			currentPage: 1,
			recentDonators: [
				{
					id: 1,
					name: 'Ale',
					desc: 'Love the world and specially this movement',
					trees: 10000,
					level: 2,
					date: '02/26/2022'
				},
				{
					id: 2,
					name: 'Scar',
					desc: 'I like the idea to invest my crypto on this.',
					trees: 50,
					level: 3,
					date: '01/13/2022'
				},
				{
					id: 3,
					name: 'Alex',
					desc: 'More trees!.',
					trees: 32,
					level: 5,
					date: '05/11/2022'
				},
				{
					id: 4,
					name: 'Ana',
					desc: 'More trees yeiii!.',
					trees: 500,
					level: 1,
					date: '05/11/2022'
				},
				{
					id: 5,
					name: 'Ale',
					desc: 'Love the world and specially this movement',
					trees: 100,
					level: 2,
					date: '02/26/2022'
				},
				{
					id: 6,
					name: 'Scar',
					desc: 'I like the idea to invest my crypto on this.',
					trees: 50,
					level: 3,
					date: '01/13/2022'
				},
				{
					id: 7,
					name: 'Alex',
					desc: 'More trees!.',
					trees: 32,
					level: 5,
					date: '05/11/2022'
				},
				{
					id: 8,
					name: 'Ana',
					desc: 'More trees yeiii!.',
					trees: 500,
					level: 1,
					date: '05/11/2022'
				}
			]
		}
	},
	computed: {
		windowWidth() {
			return this.$store.state.windowWidth
		},
		Recentrows() {
			return this.recentDonators.length
		},
		Toprows() {
			return this.recentDonators.length
		},
		itemsForListRecent() {
			return this.recentDonators.slice(
				(this.currentPage - 1) * this.RecentperPage,
				this.currentPage * this.RecentperPage
			)
		},
		itemsForListTop() {
			return this.recentDonators.slice(1, 5)
		},
		filteredTopItem() {
			return this.recentDonators.slice(0, 1)
		}
	}
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

#LeadboardBlock {
	width: 100%;
	height: auto;
	display: inline;
	position: relative;
	top: 0;
	left: 0;
}

#LeadBoard-container {
	border: none;
}

#leadboard__item {
	border-radius: 20px;
	background-color: white;

	#topdonator__background {
		width: 100%;
		height: 100px;
	}
}

// #leadboard__listTop {
// 	#leadboard__item {
// 		&:first-of-type {
// 			.leadboard__item__content {
// 				width: 100%;
// 				height: 300px;
// 				display: grid;
// 				grid-template-columns: 1fr;
// 				grid-template-rows: repeat(3, 1fr);

// 				.leadboard__item__col {
// 					flex: none;
// 					width: 100%;
// 					max-width: 100%;

// 					.leadboardTop__avatar {
// 						grid-row: 1;
// 						text-align: center;
// 					}

// 					.leadboardTop__desc {
// 						grid-row: 2;
// 						margin: 0 auto;
// 						text-align: center;
// 					}

// 					.leadboardTop__trees {
// 						grid-row: 3;
// 						text-align: end;
// 					}
// 				}
// 			}
// 		}
// 	}
// }

#donator__badge {
	max-width: 20px;
}

.treesText {
	display: inline-block;
	background-color: $primary;
	padding: 5px 15px;
	font-size: 16px;
	border-radius: 25px;
}

.descText {
	font-size: 15px;
}

.addressText {
	font-size: 15px;
	margin: 0;
}
</style>
