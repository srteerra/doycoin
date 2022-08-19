<!-- eslint-disable vue/attribute-hyphenation -->
<template>
	<div>
		<b-container fluid class="py-5 my-5" style="max-width: 1400px;">
			<b-row>
				<!-- Left side col -->
				<b-col cols="12" sm="10" xl="4" class="profile__cards mr-5 mx-auto">
					<b-row class="mb-5">
						<ProfileCard />
					</b-row>
					<b-row class="mb-5">
						<RankCard />
					</b-row>
					<b-row>
						<COSPCard />
					</b-row>
				</b-col>
				<!-- Right side col -->
				<b-col cols="12" sm="10" xl="7" class="mx-auto mt-5 mt-xl-0">
					<b-row class="mt-5 mt-xl-0">
						<p class="pb-2 mx-auto mx-xl-0">Latest donations</p>
						<b-list-group
							v-for="myDonation in myDonations"
							:key="myDonation.id"
							flush
							class="w-100"
						>
							<b-list-group-item
								id="donation__item"
								class="shadow-lg py-4 mb-4"
							>
								<b-row>
									<b-col
										cols="5"
										xs="3"
										sm="7"
										md="7"
										lg="6"
										xl="6"
										class="my-auto text-left"
										align-v="center"
									>
										<div>
											<p
												class="text-start mb-0 text-dark descText font-weight-regular"
											>
												{{ myDonation.desc }}
											</p>
											<p
												class="text-start mb-0 pt-3 text-dark descText font-weight-regular"
											>
												{{ myDonation.date }}
											</p>
										</div>
									</b-col>
									<b-col
										cols="7"
										xs="5"
										sm="5"
										md="5"
										lg="6"
										xl="6"
										class="text-right my-auto"
									>
										<p class="text-white treesText">
											{{ myDonation.trees }} trees!
										</p>
										<div class="">
											<a
												class="addressText font-weight-regular text-muted"
												href="https://www.bscscan.com/address/0x10ed43c718714eb63d5aa57b78b54704e256024e"
												>0x1...6024e
												<b-icon-box-arrow-up-right></b-icon-box-arrow-up-right>
											</a>
										</div>
									</b-col>
								</b-row>
							</b-list-group-item>
						</b-list-group>
					</b-row>
				</b-col>
			</b-row>
			<!-- <img
				id="profileTrees__vec"
				class="d-none d-xl-block"
				src="../assets/vectors/trees-1.png"
				alt=""
			/> -->
		</b-container>
	</div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue'
import COSPCard from '../components/COSPCard.vue'
import RankCard from '../components/RankCard.vue'

export default {
	components: {
		ProfileCard,
		COSPCard,
		RankCard
	},
	data() {
		return {
			myDonations: [
				{
					id: 1,
					name: 'Ale',
					desc: 'Love the world and specially this movement',
					trees: 100,
					date: '02/26/2022'
				},
				{
					id: 2,
					name: 'Scar',
					desc: 'I like the idea to invest my crypto on this.',
					trees: 50,
					date: '01/13/2022'
				},
				{
					id: 3,
					name: 'Alex',
					desc: 'More trees! Lets donate more trees......',
					trees: 32,
					date: '05/11/2022'
				}
			]
		}
	}
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

#donation__item {
	width: 100%;
	max-width: 100%;
	border-radius: 20px;
}

// #profileTrees__vec {
// 	position: absolute;
// 	right: 100px;
// 	bottom: 0;
// 	width: 350px;
// 	z-index: -10;
// }

.treesText {
	display: inline-block;
	background-color: $primary;
	padding: 5px 15px;
	font-size: 16px;
	border-radius: 25px;
}
</style>
