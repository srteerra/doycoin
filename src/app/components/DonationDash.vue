<!-- eslint-disable vue/attribute-hyphenation -->
<template>
	<div id="DonationDash" class="px-0 px-sm-4">
		<b-container fluid class="px-0">
			<div class="mx-auto">
				<b-col class="p-0">
					<b-card
						id="DonationDash-container"
						class="my-5 px-0 shadow-lg rounded-3"
					>
						<b-card-body>
							<b-container class="py-2 px-0 px-md-4">
								<b-col class="my-auto px-0 text-center">
									<div>
										<div
											v-if="currentStep == 1"
											border-variant="light"
											class="p-0"
										>
											<div>
												<h4 class="fs-4 text-dark font-weight-bolder">
													Join us!
												</h4>
												<hr />
											</div>

											<div v-if="!isconnected">
												<b-row>
													<b-col
														class="d-flex align-items-center justify-content-start text-left"
													>
														<h4 class="font-weight-bold">
															Connect your wallet and start planting trees!
														</h4>
													</b-col>
													<b-col
														class="d-flex align-items-center justify-content-center"
													>
														<img
															src="../assets/vectors/tree-3.png"
															alt=""
															style="max-width: 90%; max-height: 80%;"
														/>
													</b-col>
												</b-row>
											</div>

											<div v-else>
												<b-row>
													<b-col
														class="d-flex align-items-center justify-content-start"
													>
														<div class="text-left">
															<h4 class="font-weight-bold">
																Welcome {{ username }}!
															</h4>
															<p>
																More trees are waiting for you...
															</p>
														</div>
													</b-col>
													<b-col>
														<img
															src="../assets/vectors/trees-1.png"
															alt=""
															style="max-width: 100%;"
														/>
													</b-col>
												</b-row>
											</div>

											<div>
												<b-button
													id="nextStepButton"
													block
													class="py-2"
													variant="primary"
													:disabled="!isconnected"
													@click="onClickNext"
												>
													Next
												</b-button>
											</div>
										</div>

										<div
											v-if="currentStep == 2"
											border-variant="light"
											class="px-0"
										>
											<div>
												<h4 class="fs-4 text-dark font-weight-bolder">
													Details
												</h4>
												<hr />
											</div>
											<div class="text-left">
												<b-form class="pb-5">
													<b-form-group
														id="NameInputGroup"
														class="text-dark font-weight-bold"
														label="Name"
														label-for="NameInput"
													>
														<b-form-input
															id="NameInput"
															v-model="NameInput"
															:readonly="NameInputDisabled"
															:maxlength="maxLengthName"
															type="text"
															class="w-100 py-2 px-3 mb-4 DonationInput"
															placeholder="Enter your name..."
															required
														/>
													</b-form-group>

													<b-form-group
														id="EmailInputGroup"
														class="text-dark font-weight-bold"
														label="Email address"
														label-for="EmailInput"
													>
														<b-form-input
															id="EmailInput"
															v-model="EmailInput"
															:maxlength="maxLengthEmail"
															type="email"
															class="w-100 py-2 px-3 mb-4 DonationInput"
															placeholder="Enter your email..."
															required
														/>
													</b-form-group>

													<b-form-group
														id="MessageInputGroup"
														class="text-dark font-weight-bold mb-4"
														label="Message"
														label-for="MessageInput"
													>
														<b-form-textarea
															id="MessageInput"
															v-model="MessageInput"
															:maxlength="maxLengthMessage"
															type="text"
															class="w-100 rounded-0 py-2 px-3 mb-2 DonationInput"
															placeholder="Enter a message..."
															rows="3"
															max-rows="6"
															style="overflow:hidden;"
															required
														/>
														<p class="font-weight-light">
															{{ MessageInput.length }} / {{ maxLengthMessage }}
														</p>
													</b-form-group>

													<b-form-group
														id="AgreeCheckGroup"
														v-slot="{ AgreeCheckGroup }"
														class="text-dark font-weight-regular"
													>
														<b-form-checkbox-group
															id="AgreeCheck"
															v-model="AgreeCheck"
															:aria-describedby="AgreeCheckGroup"
														>
															<b-form-checkbox value="accepted">
																I accept the
																<span
																	><router-link
																		to="/terms"
																		class="font-weight-bold"
																		>Terms and Conditions</router-link
																	></span
																>
															</b-form-checkbox>
														</b-form-checkbox-group>
													</b-form-group>

													<b-form-group
														id="AnonymousCheckGroup"
														v-slot="{ AnonymousCheckGroup }"
														class="text-dark font-weight-regular"
													>
														<b-form-checkbox-group
															id="AnonymousCheck"
															v-model="AnonymousCheck"
															:aria-describedby="AnonymousCheckGroup"
														>
															<b-form-checkbox value="anonymous" class="">
																Keep my donation anonymous
															</b-form-checkbox>
														</b-form-checkbox-group>
													</b-form-group>
												</b-form>
											</div>

											<div class="mb-2">
												<b-button
													id="nextStepButton"
													:disabled="AgreeBtn"
													block
													class="py-2"
													variant="primary"
													@click="
														onClickNext()
														exportDonatorData({
															name: NameInput,
															email: EmailInput,
															message: MessageInput
														})
													"
												>
													Next
												</b-button>
											</div>
											<div>
												<b-button
													id="backStepButton"
													block
													class="py-2"
													variant="light"
													@click="onClickBack"
												>
													Back
												</b-button>
											</div>
										</div>

										<div
											v-if="currentStep == 3"
											border-variant="light"
											class="card-style"
										>
											<b-card-text>Select your favorite crypto!</b-card-text>

											<div class="px-0 pt-3 cryptoSelection">
												<b-form-group
													id="amountSelectedGroup"
													class="text-dark font-weight-bold"
												>
													<div class="d-flex justify-content-between">
														<b-form-select
															v-model="cryptoSelectForm"
															size="sm"
															class="w-25 cryptoSelectForm"
														>
															<template #first>
																<b-form-select-option value="bnb">
																	<span>
																		<img
																			src="../assets/icons/bnb-icon.png"
																			alt=""
																			style="width: 10px; height: 10px; position: absolute;"
																		/>
																	</span>
																	BNB
																</b-form-select-option>
															</template>

															<b-form-select-option
																value="dot"
																class="cryptoOption"
																>DOT</b-form-select-option
															>
															<b-form-select-option value="doge"
																>DOGE</b-form-select-option
															></b-form-select
														>
														<p class="p-0 m-0">
															Your balance: <span>0.0002</span>
														</p>
													</div>
													<b-form-input
														id="customAmountInput"
														v-model="customAmountCryptoInput"
														type="number"
														class="w-100 py-5 px-3 my-2 DonationInput"
														placeholder="0"
														required
														oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
													/>
												</b-form-group>
											</div>

											<p>
												This could be <strong>{{ calcTrees }}</strong> new trees
												for the next <span>{{ yearsCalc }}</span> years
											</p>

											<div>
												<hr />
												<p>Or</p>
											</div>

											<div class="mb-4">
												<b-button
													id="donateAddresses"
													block
													class="py-2"
													style="outline: none"
													variant="link"
													@click="showaddressToDonate()"
												>
													Donate through an address
												</b-button>
											</div>

											<div class="mb-2">
												<b-button
													id="nextStepButton"
													block
													class="py-2"
													variant="primary"
													@click="
														onClickNext()
														sendDonation()
													"
												>
													Approve it
												</b-button>
											</div>
											<div>
												<b-button
													id="backStepButton"
													block
													class="py-2"
													variant="light"
													@click="onClickBack"
												>
													Back
												</b-button>
											</div>
										</div>

										<div
											v-if="currentStep == 4"
											border-variant="light"
											class="card-style"
										>
											<b-card-text>Will soon finish.</b-card-text>

											<div class="mb-2">
												<b-button
													id="nextStepButton"
													block
													class="py-2"
													variant="primary"
													@click="onClickNext"
												>
													Next
												</b-button>
											</div>
											<div>
												<b-button
													id="backStepButton"
													block
													class="py-2"
													variant="light"
													@click="onClickBack"
												>
													Back
												</b-button>
											</div>
										</div>

										<div
											v-if="currentStep == 5"
											border-variant="light"
											class="card-style"
										>
											<b-card-text>Finished!</b-card-text>

											<div class="mb-2">
												<b-button
													id="nextStepButton"
													block
													class="py-2"
													variant="primary"
													@click="onClickNext"
												>
													Donate!
												</b-button>
											</div>
											<div>
												<b-button
													id="backStepButton"
													block
													class="py-2"
													variant="light"
													@click="onClickBack"
												>
													Back
												</b-button>
											</div>
										</div>
									</div>
									<b-progress
										:value="currentStep"
										:max="max_step"
										class="my-3"
										variant="primary"
									/>
								</b-col>
							</b-container>
						</b-card-body>
					</b-card>
				</b-col>
			</div>
		</b-container>

		<!-- Addresses to donate modal -->
		<b-modal
			id="modal-addressToDonate"
			v-model="showaddressToDonateState"
			centered
			size="lg"
			header-bg-variant="light"
			header-text-variant="dark"
			header-border-variant="light"
			footer-bg-variant="light"
			footer-text-variant="dark"
			footer-border-variant="light"
		>
			<template #modal-header>
				<div class="w-100">
					<b-button
						variant="light"
						size="md"
						class="float-right"
						@click="showaddressToDonate()"
					>
						<b-icon-x />
					</b-button>
				</div>
			</template>
			<b-row class="pb-4 px-5">
				<b-col class="text-center">
					<h3 class="font-weight-bold">Our address book</h3>
					<p>To never stop growing this movement</p>
					<div class="px-5">
						<small>
							<strong>Notice:</strong> If you make a donation of any amount to
							any of the following addresses. It will be completely
							<strong>Anonymous</strong>.
						</small>
					</div>
				</b-col>
			</b-row>
			<b-row class="pb-4 px-5">
				<b-col class="text-center">
					<b-tabs content-class="mt-5" fill pills>
						<b-tab active>
							<template #title>
								<img
									src="../assets/icons/btc-icon.png"
									alt=""
									style="width: 15px; height: 15px;"
								/>
								<strong>BTC</strong>
							</template>

							<p>Bitcoin Address</p>
							<img
								src="../assets/QR/qr.png"
								alt=""
								style="max-width: 500px; max-height: 500px;"
							/>
							<b-button
								pill
								size="sm"
								variant="outline-dark"
								class="font-weight-light py-2 px-3 my-3"
								@click="
									copyAddress('0xb37ecc72b98d7004c284fda84315eac16903bda3')
								"
							>
								0xb37ecc72b98d7004c284fda84315eac16903bda3
								<span class="pl-1"><b-icon-clipboard /></span>
							</b-button>
							<div>
								<small>
									<strong>Remember:</strong> You only have to send
									<strong>BTC</strong> to this address. If you send
									<br />
									another token, we will not receive it and will be lost.
								</small>
							</div>
						</b-tab>
						<b-tab>
							<template #title>
								<img
									src="../assets/icons/bnb-icon.png"
									alt=""
									style="width: 15px; height: 15px;"
								/>
								<strong>BNB</strong>
							</template>
							<p>Binance Smart Chain (BSC)</p>
							<img
								src="../assets/QR/qr.png"
								alt=""
								style="max-width: 500px; max-height: 500px;"
							/>
							<b-button
								pill
								size="sm"
								variant="outline-dark"
								class="font-weight-light py-2 px-3 my-3"
								@click="
									copyAddress('0xb37ecc72b98d7004c284fda84315eac16903bda3')
								"
							>
								0xb37ecc72b98d7004c284fda84315eac16903bda3
								<span class="pl-1"><b-icon-clipboard /></span>
							</b-button>
							<div>
								<small>
									<strong>Remember:</strong> You only have to send
									<strong>BNB</strong> to this address. If you send
									<br />
									another token, we will not receive it and will be lost.
								</small>
							</div></b-tab
						>
						<b-tab>
							<template #title>
								<img
									src="../assets/icons/eth-icon.png"
									alt=""
									style="width: 15px; height: 15px;"
								/>
								<strong>ETH</strong>
							</template>
							<p>Ethereum Mainnet (ERC-20)</p>
							<img
								src="../assets/QR/qr.png"
								alt=""
								style="max-width: 500px; max-height: 500px;"
							/>
							<b-button
								pill
								size="sm"
								variant="outline-dark"
								class="font-weight-light py-2 px-3 my-3"
								@click="
									copyAddress('0xb37ecc72b98d7004c284fda84315eac16903bda3')
								"
							>
								0xb37ecc72b98d7004c284fda84315eac16903bda3
								<span class="pl-1"><b-icon-clipboard /></span>
							</b-button>
							<div>
								<small>
									<strong>Remember:</strong> You only have to send
									<strong>ETH</strong> to this address. If you send
									<br />
									another token, we will not receive it and will be lost.
								</small>
							</div></b-tab
						>
						<b-tab disabled
							><template #title>
								<img
									src="../assets/icons/doge-icon.png"
									alt=""
									style="width: 15px; height: 15px;"
								/>
								<strong>DOGE</strong>
							</template>
							<p>Ethereum Mainnet (ERC-20)</p>
							<img
								src="../assets/QR/qr.png"
								alt=""
								style="max-width: 500px; max-height: 500px;"
							/>
							<b-button
								pill
								size="sm"
								variant="outline-dark"
								class="font-weight-light py-2 px-3 my-3"
								@click="
									copyAddress('0xb37ecc72b98d7004c284fda84315eac16903bda3')
								"
							>
								0xb37ecc72b98d7004c284fda84315eac16903bda3
								<span class="pl-1"><b-icon-clipboard /></span>
							</b-button>
							<div>
								<small>
									<strong>Remember:</strong> You only have to send
									<strong>DOGE</strong> to this address. If you send
									<br />
									another token, we will not receive it and will be lost.
								</small>
							</div></b-tab
						>
					</b-tabs>
				</b-col>
			</b-row>
			<template #modal-footer>
				<div class="w-100">
					<b-button
						variant="dark"
						size="md"
						class="float-right"
						@click="showaddressToDonate()"
					>
						Close
					</b-button>
				</div>
			</template>
		</b-modal>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
	name: 'DonationDash',
	data() {
		return {
			currentStep: 1,
			max_step: 5,

			// Amount group
			cryptoSelectForm: 'bnb',
			customAmountCryptoInput: null,

			// Name group
			NameInput: '',
			NameInputDisabled: false,
			maxLengthName: 35,

			// Email group
			EmailInput: '',
			maxLengthEmail: 35,

			// Message group
			MessageInput: '',
			maxLengthMessage: 50,

			// Terms group
			AgreeCheck: [],
			AnonymousCheck: [],

			// Buttons state
			AgreeBtn: true
		}
	},
	computed: {
		progress() {
			return Math.round(100 / this.max_step) * this.currentStep
		},

		...mapState([
			'donator',
			'showaddressToDonateState',
			'isconnected',
			'username'
		]),

		yearsCalc() {
			return Math.floor(Math.random() * (15 - 5) + 5)
		},

		calcTrees() {
			return Math.round(
				this.customAmountCryptoInput * 0.05 * 12 * this.yearsCalc
			).toLocaleString('en-US')
		}
	},
	watch: {
		AgreeCheck() {
			if (this.AgreeCheck[0] !== 'accepted') {
				this.AgreeBtn = true
			} else {
				this.AgreeBtn = false
			}
		},
		AnonymousCheck() {
			if (this.AnonymousCheck[0] === 'anonymous') {
				this.NameInput = 'Anonymous'
				this.NameInputDisabled = true
			} else {
				this.NameInput = ''
				this.NameInputDisabled = false
			}
		}
	},
	methods: {
		onClickNext() {
			this.currentStep++
		},
		onClickBack() {
			this.currentStep--
		},
		onClickFirst() {
			this.currentStep = 1
		},
		copyAddress(add) {
			navigator.clipboard.writeText(add).then(
				() => {
					console.log('copied')
				},
				() => {
					console.log('not copied')
				}
			)
		},

		...mapActions(['exportDonatorData', 'sendDonation', 'showaddressToDonate'])
	}
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

#DonationDash {
	max-width: 650px;
	width: 100%;
	padding: 0 10px;
	display: inline-flex;
	position: relative;
	top: 0;
	left: 0;
}

#progress-bar {
	border-radius: 20px;
}

#DonationDash-container {
	border: none;
	border-radius: 40px;
}

#nextStepButton {
	border: none;
	border-radius: 25px;
}

#backStepButton {
	border: 1px solid gray;
	border-radius: 25px;
}

.DonationInput {
	background-color: rgb(240, 240, 240);
	color: rgb(127, 127, 127);
	border: 1px solid gray;
	border-radius: 25px;
	overflow: hidden;
	&:focus {
		color: rgb(69, 69, 69);
		font-weight: 700;
		border: none;
	}
}

.cryptoSelection-icon {
	max-width: 30px;
}

.cryptoSelection {
	width: 100%;

	.cryptoSelectForm {
		border: none;
		outline: none;

		&:focus {
			border: none;
			box-shadow: none;
		}
	}
}

@media screen and (max-width: 500px) {
	.amountSelection {
		.amountSelection-item {
			width: 100%;
			margin: 0;
		}
	}
}
</style>
