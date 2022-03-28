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
  #LeadBoard-container {
    border: none;
    border-radius: 80px;
  }
</style>
