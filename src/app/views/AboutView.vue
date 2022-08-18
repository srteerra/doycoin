<template>
	<div>
		<b-container class="py-5">
			<!-- First section -->
			<b-row class="pb-5 trees-section">
				<b-col cols="12" md="6" class="mb-5">
					<h2 class="font-weight-bold pb-4">About us</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
						doloremque culpa id magni quos itaque quasi similique voluptas
						atque. Ea odit excepturi repudiandae error itaque. Asperiores
						tempora eius qui sequi!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
						doloremque culpa id magni quos itaque quasi similique voluptas
						atque. Ea odit excepturi repudiandae error itaque. Asperiores
						tempora eius qui sequi!
					</p>
				</b-col>
				<b-col cols="12" md="6" class="text-center mt-5">
					<img src="../assets/images/trees.png" alt="trees" class="trees" />
					<img
						src="../assets/icons/cryptos-icon 1.png"
						alt="cryptos"
						class="crypto"
					/>
				</b-col>
			</b-row>
			<!-- Members section -->
			<b-row class="pb-4 pt-5">
				<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
					<span>
						<img
							src="../assets/vectors/leave-5.png"
							alt=""
							style="width: 30px"
							class="pb-2"
						/>
					</span>

					Members

					<span>
						<img
							src="../assets/vectors/leave-5.png"
							alt=""
							style="width: 30px; transform: scaleX(-1);"
							class="pb-2"
						/>
					</span>
				</h3>
			</b-row>
			<b-row class="py-5 members">
				<b-col cols="12" sm="12" md="8" lg="4" class="my-2">
					<MemberCard
						nickName="Carlos Sanchez"
						position="CTO"
						facebookURL="https://www.instagram.com/"
						twitterURL="https://www.instagram.com/"
						instaURL="https://www.instagram.com/"
					/>
				</b-col>
				<b-col cols="12" sm="12" md="8" lg="4" class="my-2">
					<MemberCard
						nickName="Angel Lopez"
						position="CEO/Founder"
						facebookURL="https://www.instagram.com/"
						twitterURL="https://www.instagram.com/"
						instaURL="https://www.instagram.com/"
					/>
				</b-col>
				<b-col cols="12" sm="12" md="8" lg="4" class="my-2">
					<MemberCard
						nickName="Jonathan Ocampo"
						position="CSO"
						facebookURL="https://www.instagram.com/"
						twitterURL="https://www.instagram.com/"
						instaURL="https://www.instagram.com/"
					/>
				</b-col>
			</b-row>
		</b-container>
		<!-- Contact us section -->
		<section class="contact py-3">
			<b-container>
				<b-row class="my-5">
					<b-col cols="12" md="12" lg="6" class="mb-5">
						<h2 class="font-weight-bold">Get in touch</h2>
						<img
							class="contact-stack-img"
							src="../assets/vectors/stack-1.png"
							alt="stack"
						/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
							nisi eaque! Assumenda quos cum perferendis provident aperiam earum
							minima, in voluptatibus ipsum eos labore ducimus ea facere
							incidunt officiis hic!
						</p>
					</b-col>
					<b-col cols="12" md="12" lg="6" class="text-center my-auto">
						<b-button pill variant="success" class="p-3 w-50 font-weight-bold"
							>Contact us</b-button
						>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<!-- Roadmap section -->
		<b-container class="mt-5">
			<h3 class="text-dark font-weight-bold text-center py-5">
				<span>
					<img
						src="../assets/vectors/leave-5.png"
						alt=""
						style="width: 30px"
						class="pb-2"
					/>
				</span>
				Roadmap
				<span>
					<img
						src="../assets/vectors/leave-5.png"
						alt=""
						style="width: 30px; transform: scaleX(-1);"
						class="pb-2"
					/>
				</span>
			</h3>
			<b-row class="roadmap pt-5 my-3">
				<b-col cols="12" md="12" xl="6" class="stage-content">
					<img src="../assets/vectors/tree-5.png" alt="tree-5" />
					<ul class="mx-3">
						<h4 class="font-weight-bold">
							Stage 1
						</h4>
						<li>Pancakeswap Launch</li>
						<li>Launch of Socials</li>
						<li>Launch of Dapp v1.0</li>
						<li>Organic Growth</li>
						<li>Swing Trading</li>
					</ul>
				</b-col>
				<b-col cols="12" md="12" xl="6"></b-col>
			</b-row>
			<b-row class="roadmap pt-5 my-3">
				<b-col cols="12" md="12" xl="6"></b-col>
				<b-col cols="12" md="12" xl="6" class="stage-content">
					<ul class="mx-3 text-right">
						<h4 class="font-weight-bold">
							Stage 2
						</h4>
						<li>Twitter marketing</li>
						<li>+500 holders</li>
						<li>Disord server</li>
						<li>Sponsorship Crypto Events</li>
						<li>Interactive campaign</li>
					</ul>
					<img src="../assets/vectors/tree-10.png" alt="tree-10" />
				</b-col>
			</b-row>
			<b-row class="roadmap pt-5 my-3">
				<b-col cols="12" md="12" xl="6" class="stage-content">
					<img src="../assets/vectors/tree-3.png" alt="tree-3" />
					<ul class="mx-3">
						<h4 class="font-weight-bold">
							Stage 3
						</h4>
						<li>Mobile App</li>
						<li>+1000 holders</li>
						<li>Listing on exchanges</li>
						<li>NFT Platform</li>
						<li>Official merch</li>
					</ul>
				</b-col>
				<b-col cols="12" md="12" xl="6"> </b-col>
			</b-row>
			<b-row class="roadmap pt-5 my-3">
				<b-col cols="12" md="12" xl="6"> </b-col>
				<b-col cols="12" md="12" xl="6" class="stage-content mx-auto">
					<ul class="mx-3 text-right">
						<h4 class="font-weight-bold">
							Stage 4
						</h4>
						<li>Rebranding</li>
						<li>+5000 holders</li>
						<li>Launch of Dapp v2.0</li>
						<li>Massive marketing</li>
						<li>Diversity Funding</li>
					</ul>
					<img src="../assets/vectors/tree-1.png" alt="tree-1" />
				</b-col>
			</b-row>
		</b-container>

		<!-- Give us a coffe secton -->

		<b-container class="coffee mx-auto pb-lg-5">
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
						Give us a coffee
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
						If you'd like to donate to the Devs, send ETH, SHIB, USDT here.
						Thank you for your support!
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
						0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375
						<span class="pl-1"><b-icon-clipboard /></span>
					</b-button>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import MemberCard from '../components/MemberCard.vue'

export default {
	components: {
		MemberCard
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
#member-card {
	border-radius: 30px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.members {
	display: flex;
	justify-content: center;
}

.trees-section {
	.trees {
		width: 60%;
		position: relative;
	}
	.crypto {
		width: 100px;
		position: absolute;
		right: 70px;
		top: -50px;
	}
}

.contact {
	background-color: #262626;
	color: white;
	margin-top: 200px;
	.contact-stack-img {
		width: 200px;
		position: absolute;
		top: -263px;
	}
}

.roadmap {
	img {
		width: 200px;
		height: 200px;
	}
	.stage-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.coffee {
	margin: 200px 0;
}

@media (max-width: 500px) {
	.stage-content {
		img {
			display: none;
		}
		ul {
			padding: 0;
		}
		* {
			text-align: center;
		}
	}
}
</style>
