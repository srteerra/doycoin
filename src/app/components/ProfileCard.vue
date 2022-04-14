<template>
  <div id="profile__container" class="shadow-lg rounded-lg">
      <div class="profile__background"></div>
      <div class="profile__desc">
          <b-avatar class="profile__avatar mx-auto" size="5rem"></b-avatar>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    name: 'ProfileCard'
}
</script>

<style lang="scss">
    #profile__container {
        width: 400px;
        max-width: 400px;
        height: 350px;
        max-height: 350px;

        .profile__background {
            height: 50%;
            background-image: url('../assets/images/main-bg.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }

        .profile__desc {
            height: 50%;
            position: relative;
            background-color: yellowgreen;

            .profile__avatar {
                position: absolute;
                left: 0;
                right: 0;
                top: -30px;
            }
        }
    }
</style>