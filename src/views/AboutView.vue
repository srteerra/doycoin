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
                  <div>
                      <b-card id="member-card" class="text-center py-3 px-5" border-variant="light">
                          <div class="pb-4">
                              <b-avatar src="https://i.pravatar.cc/300?4" size='4rem'></b-avatar>
                          </div>
                          <b-card-title>Angel Lopez</b-card-title>
                          <b-card-text>CEO & Founder</b-card-text>
                          <div class="d-flex justify-content-around">
                              <a href="">
                                  <b-icon-facebook></b-icon-facebook>
                              </a>
                              <a href="">
                                  <b-icon-twitter></b-icon-twitter>
                              </a>
                              <a href="">
                                  <b-icon-instagram></b-icon-instagram>
                              </a>
                          </div>
                      </b-card>
                  </div>
                  <div>
                      <b-card id="member-card" class="text-center py-3 px-5" border-variant="light">
                          <div class="pb-4">
                              <b-avatar src="https://i.pravatar.cc/300?4" size='4rem'></b-avatar>
                          </div>
                          <b-card-title>Angel Lopez</b-card-title>
                          <b-card-text>CEO & Founder</b-card-text>
                          <div class="d-flex justify-content-around">
                              <a href="">
                                  <b-icon-facebook></b-icon-facebook>
                              </a>
                              <a href="">
                                  <b-icon-twitter></b-icon-twitter>
                              </a>
                              <a href="">
                                  <b-icon-instagram></b-icon-instagram>
                              </a>
                          </div>
                      </b-card>
                  </div>
                  <div>
                      <b-card id="member-card" class="text-center py-3 px-5" border-variant="light">
                          <div class="pb-4">
                              <b-avatar src="https://i.pravatar.cc/300?4" size='4rem'></b-avatar>
                          </div>
                          <b-card-title>Angel Lopez</b-card-title>
                          <b-card-text>CEO & Founder</b-card-text>
                          <div class="d-flex justify-content-around">
                              <a href="">
                                  <b-icon-facebook></b-icon-facebook>
                              </a>
                              <a href="">
                                  <b-icon-twitter></b-icon-twitter>
                              </a>
                              <a href="">
                                  <b-icon-instagram></b-icon-instagram>
                              </a>
                          </div>
                      </b-card>
                  </div>
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
export default {

}
</script>

<style lang="scss">
    #team-img {
        height:300px;
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
