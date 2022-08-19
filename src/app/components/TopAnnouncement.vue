<!-- eslint-disable vue/attribute-hyphenation -->
<template>
	<b-container v-if="showTopAd" id="TopAd" fluid class="py-3">
		<b-row align-v="center">
			<b-col class="text-white d-flex justify-content-center">
				<p class="mx-auto m-0 p-0 font-weight-regular text-center">
					<b-icon-tree-fill /> Please make sure you're visiting
					<strong>https://doycoin.site</strong> - verify this site.
				</p>
				<b-button
					class="text-end"
					size="sm"
					variant="primary"
					@click="showTopAd = false"
				>
					<b-icon-x />
				</b-button>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'TopAnnouncement',
	data() {
		return {
			showTopAd: true
		}
	}
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

#TopAd {
	background-color: $primary;
}
</style>
