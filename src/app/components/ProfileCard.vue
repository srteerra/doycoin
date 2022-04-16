<template>
  <div id="profile__container" class="shadow-lg">
    <div class="profile__background"></div>
    <div class="profile__desc">
        <div>
          <b-avatar button class="profile__avatar mx-auto" src="https://i.pravatar.cc/300?2" size="6rem"></b-avatar>
          <h3 class="font-weight-bold pt-2">Unamed</h3>
          <p>emailaddress@example.com</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			editAvatarModal: false,
		}
	},
	name: "ProfileCard",
	methods: {
		showeditAvatarModal() {
			if (this.editAvatarModal === false) {
				this.editAvatarModal = true
			} else {
				this.editAvatarModal = false
			}
		}
	}
}
</script>

<style lang="scss">
  #profile__container {
    width: 400px;
    max-width: 400px;
    height: 350px;
    max-height: 350px;
    border-radius: 35px;

    .profile__background {
      height: 50%;
      background-image: url('../assets/images/bg-user.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-top-left-radius: 35px;
      border-top-right-radius: 35px;
    }

    .profile__desc {
      height: 50%;
      position: relative;

      div {
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        top: -60px;
      }
    }
  }
</style>