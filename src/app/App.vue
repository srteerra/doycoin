<template>
  <div>
    <TopAnnouncement />
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import TopAnnouncement from './components/TopAnnouncement.vue'

export default {
	name: 'App',
	components: {
		MainHeader,
		MainFooter,
		TopAnnouncement
	},
	data() {
		return {}
	}
}
</script>

<style lang="scss"></style>
