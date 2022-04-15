<template>
    <b-container fluid class="py-3" id="TopAd" v-if="showTopAd">
        <b-row align-v="center">
            <b-col class="text-white d-flex justify-content-center">
              <p class="mx-auto m-0 p-0 font-weight-bold text-center"><b-icon-tree-fill></b-icon-tree-fill> We're introducing support for more wallets...</p>
              <b-button @click="showTopAd=false" class="text-end" size="sm" variant="success"><b-icon-x></b-icon-x></b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
	data () {
		return {
			showTopAd: true
		}
	},
	name: "TopAnnouncement"
}
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  #TopAd {
    background-color: $success;
  }
</style>
