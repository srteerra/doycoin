<template>
  <div id="profile__container" class="shadow-lg">
    <div class="profile__background"></div>
    <div class="profile__desc">
        <div>
          <b-avatar button v-b-modal.editAvatarModal class="profile__avatar mx-auto" src="https://i.pravatar.cc/300?2" size="6rem"></b-avatar>
          <h3 class="font-weight-bold">Unamed</h3>
          <p>emailaddress@example.com</p>
        </div>
    </div>
    <b-modal id="editAvatarModal"
      centered
      title="Change avatar"
      :header-bg-variant="light"
      :header-text-variant="dark"
      :footer-bg-variant="light"
      :footer-text-variant="dark"
    >
      <p class="my-4">Vertically centered modal!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
	data() {
		return {}
	},
	name: "ProfileCard",
	methods: {
		editAvatar() {
			this.$bvModal.msgBoxOk("User name: Fred Flintstone", {
				title: "User Info",
				size: "sm",
				buttonSize: "sm",
				okVariant: "success",
				headerClass: "p-2 border-bottom-0",
				footerClass: "p-2 border-top-0"
			})
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