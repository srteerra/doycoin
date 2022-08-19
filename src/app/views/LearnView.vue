<template>
	<div>
		<b-container class="mb-5">
			<b-row class="py-5">
				<b-col cols="12" md="6" class="text-center text-md-left">
					<h2 class="font-weight-bold pb-3">Learn</h2>

					<p class="font-weight-light">
						Ac cursus ex in viverra gravida diam enim. Cras Donec ex quis lorem.
						consectetur tincidunt lorem. ac ex sit elementum malesuada nulla,
						lobortis, eget sapien
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col class="d-inline-flex justify-content-center flex-wrap">
					<div class="learn__card my-5">
						<div class="learn__head">
							<h4 class="font-weight-bold">What is our procces?</h4>
							<img
								src="../assets/vectors/tree-5.png"
								alt=""
								style="max-width: 100px;"
							/>
						</div>
						<div class="learn__desc">
							<p class="py-4">
								Learn more about our proccess to keep planting trees every
								month.
							</p>
						</div>
						<div class="learn__btn text-center">
							<b-button variant="primary" disabled pill class="mx-auto px-4"
								>Coming soon...</b-button
							>
						</div>
					</div>
					<div class="learn__card my-5">
						<div class="learn__head">
							<h4 class="font-weight-bold">Where do all the funds go?</h4>
							<img
								src="../assets/vectors/tree-4.png"
								alt=""
								style="max-width: 100px;"
							/>
						</div>
						<div class="learn__desc">
							<p class="py-4">
								Learn more about our proccess to keep planting trees every
								month.
							</p>
						</div>
						<div class="learn__btn text-center">
							<b-button variant="primary" disabled pill class="mx-auto px-4"
								>Coming soon...</b-button
							>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
		<b-container class="mb-5">
			<b-row class="py-5">
				<b-col cols="12" class="text-center">
					<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px"
								class="pb-2"
							/>
						</span>

						What’s the point?

						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px; transform: scaleX(-1);"
								class="pb-2"
							/>
						</span>
					</h3>

					<p class="font-weight-light">
						Ac cursus ex in viverra gravida diam enim. Cras Donec ex quis lorem.
						consectetur tincidunt lorem.
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col class="d-flex justify-content-center d-md-block"> </b-col>
			</b-row>
		</b-container>
		<b-container class="mb-5">
			<b-row class="py-5">
				<b-col cols="12" class="text-center">
					<h3 class="text-dark font-weight-bold mx-auto pt-5 pt-sm-0">
						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px"
								class="pb-2"
							/>
						</span>

						Our Blog

						<span>
							<img
								src="../assets/vectors/leave-5.png"
								alt=""
								style="width: 30px; transform: scaleX(-1);"
								class="pb-2"
							/>
						</span>
					</h3>

					<p class="font-weight-light">
						Coming soon...
					</p>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.learn__card {
	width: 100%;
	max-width: 400px;
	background-color: white;
	padding: 40px;
	border-radius: 2rem;
	margin: 0 40px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	.learn__head {
		display: flex;
		justify-content: space-between;
	}
}
</style>
