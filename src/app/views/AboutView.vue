<template>
  <div>
    <b-container class="py-5">
			<!-- First section -->
      <b-row class="pb-5 trees-section">
				<b-col cols="12" md="6" class="mb-5">
					<h2 class="font-weight-bold">About us</h2>
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
				<b-col cols="12" sm="12" md="8" lg="4" class="memberCard">
					<MemberCard nickName="Carlos Sanchez" position="CTO" facebookURL="https://www.instagram.com/" twitterURL="https://www.instagram.com/" instaURL="https://www.instagram.com/"/>
				</b-col>
				<b-col cols="12" sm="12" md="8" lg="4" class="memberCard">
					<MemberCard nickName="Angel Lopez" position="CEO/Founder" facebookURL="https://www.instagram.com/" twitterURL="https://www.instagram.com/" instaURL="https://www.instagram.com/"/>
				</b-col>
				<b-col cols="12" sm="12" md="8" lg="4" class="memberCard">
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
			<!-- our blog section -->
			<b-row class="py-5">
        <b-col class="pt-5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque culpa id magni quos itaque quasi similique voluptas atque. Ea odit excepturi repudiandae error itaque. Asperiores tempora eius qui sequi!</p>
        </b-col>
      </b-row>
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

		.memberCard{
			margin: 5px auto;
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
</style>
