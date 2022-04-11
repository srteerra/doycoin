<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols lg="8" xl="7" class="mx-auto">
          <div>
            <b-card id="LeadBoard-container" class="my-5 shadow-lg rounded-3">
              <b-card-body>
                <b-tabs pills align="center">
                  <b-tab title="Most Recent" active>
                    <div class="px-4 py-5">
                      <b-list-group v-for="recentDonator in recentDonators" :key="recentDonator.id" flush class="py-2">
                        <b-list-group-item>
                          <b-row>
                            <b-col cols xl="3" class="my-auto text-center">
                              <b-avatar v-bind:src="'https://i.pravatar.cc/300?' + recentDonator.id" size='4rem'></b-avatar>
                            </b-col>
                            <b-col cols xl="4" class="my-auto">
                              <p class="text-start">{{ recentDonator.name }}</p>
                              <p class="text-start">{{ recentDonator.desc }}</p>
                            </b-col>
                            <b-col cols xl="5" class="text-right">
                              <p class="text-white treesText">{{ recentDonator.trees }} trees!</p>
                              <div class="text-right">
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
              </b-card-body>
            </b-card>
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
  name: 'LeaderBoard'
}
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  #LeadBoard-container {
    border: none;
    border-radius: 80px;
  }

  .treesText {
    display: inline-block;
    background-color: $success;
    padding: 5px 15px;
    font-size: 16px;
    border-radius: 25px;
  }

  .addressText {
    font-size: 15px;
    margin: 0;
  }
</style>
