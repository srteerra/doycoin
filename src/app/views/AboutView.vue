<template>
  <div>
    <b-container class="py-5">
			<!-- First section -->
      <b-row class="pb-5 trees-section">
				<b-col cols="12" md="6" class="mb-5">
					<h2 class="font-weight-bold pb-4">About us</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque culpa id magni quos itaque quasi similique voluptas atque. Ea odit excepturi repudiandae error itaque. Asperiores tempora eius qui sequi!</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque culpa id magni quos itaque quasi similique voluptas atque. Ea odit excepturi repudiandae error itaque. Asperiores tempora eius qui sequi!</p>
				</b-col>
				<b-col cols="12" md="6" class="text-center mt-5">
					<img src="../assets/images/trees.png" alt="trees" class="trees">
					<img src="../assets/icons/cryptos-icon 1.png" alt="cryptos" class="crypto">
				</b-col>
      </b-row>
			<!-- Members section -->
      <b-row class="pb-4 pt-5">
        <h2 class="font-weight-bold text-center w-100">Members</h2>
      </b-row>
			<b-row class="py-5">
				<b-col cols="12" sm="12" md="8" lg="4" class="mx-auto my-3">
					<MemberCard nickName="Carlos Sanchez" position="CTO" facebookURL="https://www.instagram.com/" twitterURL="https://www.instagram.com/" instaURL="https://www.instagram.com/"/>
				</b-col>
				<b-col cols="12" sm="12" md="8" lg="4" class="mx-auto my-3">
					<MemberCard nickName="Angel Lopez" position="CEO/Founder" facebookURL="https://www.instagram.com/" twitterURL="https://www.instagram.com/" instaURL="https://www.instagram.com/"/>
				</b-col>
				<b-col cols="12" sm="12" md="8" lg="4" class="mx-auto my-3">
					<MemberCard nickName="Jonathan Ocampo" position="CSO" facebookURL="https://www.instagram.com/" twitterURL="https://www.instagram.com/" instaURL="https://www.instagram.com/"/>
				</b-col>
			</b-row>
    </b-container>
		<!-- Contact us section -->
		<section class="contact py-3">
			<b-container>
				<b-row class="my-5">
					<b-col cols="12" md="12" lg="6" class="mb-5">
						<h2 class="font-weight-bold">Get in touch</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nisi eaque! Assumenda quos cum perferendis provident aperiam earum minima, in voluptatibus ipsum eos labore ducimus ea facere incidunt officiis hic!</p>
					</b-col>
					<b-col cols="12" md="12" lg="6" class="text-center my-auto">
						<b-button pill variant="success" class="p-3 w-50 font-weight-bold">Contact us</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<b-container>
			<b-row>
				<h2 class="mx-auto font-weight-bold">Roadmap</h2>
			</b-row>
		</b-container>

		<!-- Roadmap section -->
		<b-container class="roadmap">
			<b-row>
				<b-col cols="12" md="6">
					<img src="../assets/vectors/tree-5.png" alt="tree" class="w-40">
					<div class="mx-auto ">
						<h4 class="font-weight-bold">Stage 1</h4>
						<ul>
							<li>pancakeswap Launch</li>
							<li>Launch of socials</li>
							<li>Launch of Dapp v 1.0</li>
							<li>Organic Growth</li>
							<li>Swing Trading</li>
						</ul>
					</div>
				</b-col>
				<b-col cols="12" md="6">
					
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="6">
					
				</b-col>
				<b-col cols="12" md="6">
					<div class="mx-auto w-50 text-right">
						<h4 class="font-weight-bold" animation="fade">Stage 1</h4>
						<ul>
							<li>pancakeswap Launch</li>
							<li>Launch of socials</li>
							<li>Launch of Dapp v 1.0</li>
							<li>Organic Growth</li>
							<li>Swing Trading</li>
						</ul>
					</div>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="6">
					<div class="mx-auto w-50">
						<h4 class="font-weight-bold" animation="fade">Stage 1</h4>
						<ul>
							<li>pancakeswap Launch</li>
							<li>Launch of socials</li>
							<li>Launch of Dapp v 1.0</li>
							<li>Organic Growth</li>
							<li>Swing Trading</li>
						</ul>
					</div>
				</b-col>
				<b-col cols="12" md="6">
					
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="6">
					
				</b-col>
				<b-col cols="12" md="6">
					<div class="mx-auto w-50 text-right">
						<h4 class="font-weight-bold" animation="fade">Stage 1</h4>
						<ul>
							<li>pancakeswap Launch</li>
							<li>Launch of socials</li>
							<li>Launch of Dapp v 1.0</li>
							<li>Organic Growth</li>
							<li>Swing Trading</li>
						</ul>
					</div>
				</b-col>
			</b-row>
		</b-container>

		<b-container class="my-5">
			<div class="text-center">
				<h2 class="font-weight-bold">Give us a coffee</h2>
				<p class="my-5 w-50 mx-auto">If you'd like to donate to the Devs, send ETH, SHIB, USDT here. Thank you for your support!</p>
				<p class="address py-3 px-5">0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375</p>
			</div>
		</b-container>
  </div>
</template>

<script>
import MemberCard from "../components/MemberCard.vue"

export default {
	components: {
		MemberCard
	}
}
</script>

<style lang="scss">
    

    #member-card {
        border-radius: 30px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

		.trees-section{
			.trees{
				width: 60%;
				position: relative;
			}
			.crypto{
				width: 100px;
				position: absolute;
				right: 70px;
				top: -50px;
			}
		}

		.contact{
			background-color: #262626;
			color: white;
		}

		.address{
			background-color: #EBEBEB80;
		}

		.roadmap{
			img{
				width: 100px;
			}
		}
</style>
