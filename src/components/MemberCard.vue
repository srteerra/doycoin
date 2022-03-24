<template>
  <div class="px-3">
    <b-card id="member-card" class="text-center p-5" border-variant="light">
      <div class="px-4">
        <div class="pb-4">
          <b-avatar src="https://i.pravatar.cc/300?4" size='4rem'></b-avatar>
        </div>
        <b-card-title>{{ nickName }}</b-card-title>
        <b-card-text>{{ position }}</b-card-text>
        <div class="d-flex justify-content-around">
          <a v-bind:href="facebookURL">
            <b-icon-facebook></b-icon-facebook>
          </a>
          <a v-bind:href="twitterURL">
            <b-icon-twitter></b-icon-twitter>
          </a>
          <a v-bind:href="instaURL">
            <b-icon-instagram></b-icon-instagram>
          </a>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['nickName', 'position', 'facebookURL', 'twitterURL', 'instaURL'],
  name: 'MemberCard'
}
</script>

<style>

</style>
