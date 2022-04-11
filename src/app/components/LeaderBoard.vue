<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols sm="12" md="10" lg="8" xl="6" class="mx-0 px-0 mx-sm-auto">
          <div>
            <div id="LeadBoard-container" class="my-5 rounded-3">
              <div class="px-0 px-md-2">
                <b-tabs pills align="center">
                  <b-tab title="Most Recent" active>
                    <div class="px-0 px-md-4 py-5">
                      <b-list-group v-for="recentDonator in recentDonators" :key="recentDonator.id" flush class="py-2 px-0">
                        <b-list-group-item class="shadow-lg rounded-lg py-4 pl-5 pl-lg-0">
                          <b-row>
                            <b-col v-if="windowWidth>576" sm="2" md="3" lg="3" xl="3" class="my-auto text-center">
                              <b-avatar v-bind:src="'https://i.pravatar.cc/300?' + recentDonator.id" size='4rem'></b-avatar>
                            </b-col>
                            <b-col cols="5" xs="3" sm="5" md="5" lg="5" xl="5" class="my-auto text-left" align-v="center">
                              <h4 class="text-start mb-0 text-dark font-weight-bolder">{{ recentDonator.name }}</h4>
                              <div>
                                <p class="text-start mb-0 text-dark descText font-weight-regular">{{ recentDonator.desc }}</p>
                              </div>
                            </b-col>
                            <b-col cols="7" xs="5" sm="5" md="4" lg="4" xl="4" class="text-right my-auto pr-5">
                              <p class="text-white treesText">{{ recentDonator.trees }} trees!</p>
                              <div class="">
                                <!-- <p class="addressText font-weight-regular text-muted">{{ recentDonator.date }}</p> -->
                                <a class="addressText font-weight-regular text-muted" href="https://www.bscscan.com/address/0x10ed43c718714eb63d5aa57b78b54704e256024e">0x1...6024e <b-icon-box-arrow-up-right></b-icon-box-arrow-up-right> </a>
                              </div>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                      </b-list-group>
                    </div>
                  </b-tab>
                  <b-tab title="Top donations">
                    <div class="py-5">
                      <b-list-group v-for="recentDonator in recentDonators" :key="recentDonator.id" flush class="py-2">
                        <b-list-group-item>
                          <b-row>
                            <b-col class="my-auto text-center">
                              <b-avatar v-bind:src="'https://i.pravatar.cc/300?' + recentDonator.id" size='4rem'></b-avatar>
                            </b-col>
                            <b-col class="my-auto">
                              <p class="text-start">{{ recentDonator.name }}</p>
                              <p class="text-start">{{ recentDonator.desc }}</p>
                            </b-col>
                            <b-col class="my-auto text-center">
                              <b-badge pill variant="primary" class="text-white">{{ recentDonator.trees }} trees!</b-badge>
                              <p>{{ recentDonator.date }}</p>
                            </b-col>
                          </b-row>
                        </b-list-group-item>
                      </b-list-group>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recentDonators: [{ id: 1, name: 'Ale', desc: 'Love the world and specially this movement', trees: 100, date: '02/26/2022' }, { id: 2, name: 'Scar', desc: 'I like the idea to invest my crypto on this.', trees: 50, date: '01/13/2022' }, { id: 3, name: 'Alex', desc: 'More trees!.', trees: 32, date: '05/11/2022' }]
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  name: 'LeaderBoard'
}
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  #LeadBoard-container {
    border: none;
  }

  .treesText {
    display: inline-block;
    background-color: $success;
    padding: 5px 15px;
    font-size: 16px;
    border-radius: 25px;
  }

  .descText {
    font-size: 15px;
  }

  .addressText {
    font-size: 15px;
    margin: 0;
  }
</style>
