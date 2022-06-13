<template>
  <div>
    <TopAnnouncement />
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue"
import MainFooter from "./components/MainFooter.vue"
import TopAnnouncement from "./components/TopAnnouncement.vue"

export default {
	data () {
		return {
		}
	},
	name: "App",
	components: {
		MainHeader,
		MainFooter,
		TopAnnouncement
	}
}
</script>

<style lang="scss">
</style>
