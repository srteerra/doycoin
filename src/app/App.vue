<template>
  <div>
    <TopAnnouncement />
    <MainHeader />
		<NotificationList />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import TopAnnouncement from './components/TopAnnouncement.vue'
import NotificationList from './components/NotificationList.vue'

export default {
	name: 'App',
	components: {
		MainHeader,
		MainFooter,
		TopAnnouncement,
		NotificationList
	},
	data() {
		return {}
	}
}
</script>

<style lang="scss"></style>
