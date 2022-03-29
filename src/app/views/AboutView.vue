<template>
  <div>
    <b-container class="py-5">
      <b-row class="py-3">
        <b-col>
          <h2 class="font-weight-bold">About us</h2>
        </b-col>
      </b-row>
      <b-row class="pb-5">
        <b-col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque culpa id magni quos itaque quasi similique voluptas atque. Ea odit excepturi repudiandae error itaque. Asperiores tempora eius qui sequi!</p>
        </b-col>
      </b-row>
      <b-row id="team-img" class="py-5">
        <b-col></b-col>
      </b-row>
      <b-row class="py-5">
        <b-col>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, vitae? Obcaecati sequi labore nihil dolore itaque quos molestias doloremque, neque quidem suscipit ea voluptate provident eum? Voluptates placeat architecto repudiandae officiis unde, cupiditate laboriosam amet ipsa mollitia excepturi eaque exercitationem laudantium, earum deleniti sequi? Laborum cum perferendis quas alias ipsa?</p>
        </b-col>
      </b-row>
      <b-row class="pb-4 pt-5">
        <h2 class="font-weight-bold">Our team</h2>
      </b-row>
      <b-row class="container py-5">
        <b-col class="d-flex justify-content-around flex-wrap">
          <MemberCard nickName="Angel Lopez" position="Founder & CEO" facebookURL="https://www.instagram.com/" twitterURL="https://www.instagram.com/" instaURL="https://www.instagram.com/"/>
          <MemberCard nickName="Angel Lopez" position="Founder & CEO" facebookURL="https://www.instagram.com/" twitterURL="https://www.instagram.com/" instaURL="https://www.instagram.com/"/>
          <MemberCard nickName="Angel Lopez" position="Founder & CEO" facebookURL="https://www.instagram.com/" twitterURL="https://www.instagram.com/" instaURL="https://www.instagram.com/"/>
        </b-col>
      </b-row>
      <b-row class="py-5">
        <b-col class="pt-5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque culpa id magni quos itaque quasi similique voluptas atque. Ea odit excepturi repudiandae error itaque. Asperiores tempora eius qui sequi!</p>
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
  }
}
</script>

<style lang="scss">
    #team-img {
        height: 300px;
        max-width: 100%;
        background-image: url('../assets/images/team.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #member-card {
        border-radius: 30px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
</style>
