<template>
  <div id="profile__container" class="shadow-lg">
    <div class="profile__background"></div>
    <div class="profile__desc">
        <div>
          <b-avatar button class="profile__avatar mx-auto" :src="`${getAvatar}`" size="6rem"></b-avatar>
          <h3 class="font-weight-bold pt-2">{{ getUsername }}</h3>
					<b-button id="CopyAdd" pill size="sm" variant="outline-dark" class="font-weight-light py-2 px-3" @click="copyMyAddress(getAddress)">{{ getAddressShort }} <span class="pl-1"><b-icon-clipboard></b-icon-clipboard></span></b-button>
					<b-popover
						target="CopyAdd"
						placement="top"
						triggers="focus"
						content="Copied!"
					></b-popover>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	data() {
		return {
			editAvatarModal: false
		}
	},
	name: "ProfileCard",
	computed: {
		...mapGetters([
			"getUsername",
			"getAvatar",
			"getAddress",
			"getAddressShort"
		])
	},
	methods: {
		showeditAvatarModal() {
			if (this.editAvatarModal === false) {
				this.editAvatarModal = true
			} else {
				this.editAvatarModal = false
			}
		},
		copyMyAddress(add) {
			navigator.clipboard.writeText(add)
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