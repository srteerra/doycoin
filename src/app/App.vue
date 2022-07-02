<template>
  <div>
    <TopAnnouncement />
    <MainHeader />
		<NoWalletCardVue />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import TopAnnouncement from './components/TopAnnouncement.vue'
import NoWalletCardVue from './components/NoWalletCard.vue'

export default {
	name: 'App',
	components: {
		MainHeader,
		MainFooter,
		TopAnnouncement,
		NoWalletCardVue
	},
	data() {
		return {}
	}
}
</script>

<style lang="scss"></style>
