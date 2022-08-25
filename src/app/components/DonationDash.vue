<!-- eslint-disable vue/no-parsing-error -->
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
													>
														<label for="NameInput"
															>Name
															<span class="font-weight-light">*</span></label
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
													>
														<label for="EmailInput"
															>Email address
															<span class="font-weight-light"
																>(OPTIONAL)</span
															></label
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
													>
														<label for="MessageInput"
															>Message
															<span class="font-weight-light"
																>(OPTIONAL)</span
															></label
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
													class="text-dark font-weight-bold mb-0"
												>
													<div class="d-flex justify-content-between">
														<b-dropdown
															size="md"
															class="my-2"
															variant="link"
															toggle-class="text-decoration-none"
														>
															<template #button-content>
																<span class="pr-1"
																	><img
																		:src="
																			require('../assets/icons/' +
																				selectedCypto +
																				'-icon.png')
																		"
																		alt=""
																		style="max-width: 25px;"
																/></span>
																{{ selectedCypto }}
															</template>
															<b-dropdown-item-button
																v-if="selectedCypto !== 'WBNB'"
																class="py-1"
																@click="
																	selectCrypto({ crypto: 'WBNB' }),
																		getCryptoprice()
																"
															>
																<span class="pr-1"
																	><img
																		src="../assets/icons/WBNB-icon.png"
																		alt=""
																		style="max-width: 25px;"
																/></span>
																WBNB
															</b-dropdown-item-button>
															<b-dropdown-item-button
																v-if="selectedCypto !== 'ETH'"
																class="py-1"
																@click="
																	selectCrypto({ crypto: 'ETH' }),
																		getCryptoprice()
																"
															>
																<span class="pr-1"
																	><img
																		src="../assets/icons/ETH-icon.png"
																		alt=""
																		style="max-width: 25px;"
																/></span>
																ETH
															</b-dropdown-item-button>
															<b-dropdown-item-button
																v-if="selectedCypto !== 'USDC'"
																class="py-1"
																@click="
																	selectCrypto({ crypto: 'USDC' }),
																		getCryptoprice()
																"
															>
																<span class="pr-1"
																	><img
																		src="../assets/icons/USDC-icon.png"
																		alt=""
																		style="max-width: 25px;"
																/></span>
																USDC
															</b-dropdown-item-button>
															<b-dropdown-item-button
																v-if="selectedCypto !== 'BUSD'"
																class="py-1"
																@click="
																	selectCrypto({ crypto: 'BUSD' }),
																		getCryptoprice()
																"
															>
																<span class="pr-1"
																	><img
																		src="../assets/icons/BUSD-icon.png"
																		alt=""
																		style="max-width: 25px;"
																/></span>
																BUSD
															</b-dropdown-item-button>
															<b-dropdown-item-button
																v-if="selectedCypto !== 'DOGE'"
																class="py-1"
																@click="
																	selectCrypto({ crypto: 'DOGE' }),
																		getCryptoprice()
																"
															>
																<span class="pr-1"
																	><img
																		src="../assets/icons/DOGE-icon.png"
																		alt=""
																		style="max-width: 25px;"
																/></span>
																DOGE
															</b-dropdown-item-button>
															<!-- <b-dropdown-item-button
																v-if="selectedCypto !== 'SHIB'"
																class="py-1"
																@click="
																	selectCrypto({ crypto: 'SHIB' }),
																		getCryptoprice()
																"
															>
																<span class="pr-1"
																	><img
																		src="../assets/icons/SHIB-icon.png"
																		alt=""
																		style="max-width: 25px;"
																/></span>
																SHIB
															</b-dropdown-item-button> -->
														</b-dropdown>
														<div class="d-flex align-items-center">
															<p class="p-0 m-0">
																Your balance: <span>{{ balanceOf }}</span>
															</p>
														</div>
													</div>
													<!-- <b-form-input
														id="customAmountInput"
														v-model="customAmountCryptoInput"
														type="number"
														class="w-100 py-5 px-3 my-2 DonationInput"
														placeholder="0"
														required
														oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
													/> -->
													<div class="customAmountCryptoInput__cont my-2">
														<div class="customAmountCryptoInput__cont__input">
															<b-form-input
																id="customAmountInput"
																v-model="customAmountCryptoInput"
																type="number"
																no-wheel="true"
																class="w-100 DonationInput"
																placeholder="0"
																required
															/>
															<b-button
																pill
																size="sm"
																variant="outline-primary"
																class="customAmountCryptoInput__max"
																@click="setMaxAmount()"
																>MAX</b-button
															>
														</div>
														<p class="text-left" style="padding: 0 20px;">
															= ${{
																(
																	customAmountCryptoInput * getCryptoVSPair
																).toLocaleString()
															}}
														</p>
													</div>
												</b-form-group>
											</div>

											<div
												class="d-flex align-items-center justify-content-between mb-3"
											>
												<p class="m-0 p-0" style="opacity: 50%;">
													1 {{ selectedCypto }} =
													{{ getCryptoVSPair.toLocaleString() }}
													{{ selectedPair }}
												</p>
												<div>
													<b-link
														id="reloadCrypto"
														style="opacity: 50%;"
														@click="getCryptoprice()"
														><img
															style="max-width: 20px;"
															src="../assets/icons/reload-icon.png"
															alt=""
													/></b-link>
													<b-dropdown
														size="md"
														class="my-2"
														variant="link"
														toggle-class="text-decoration-none"
														no-caret="true"
														right
														text="Right align"
													>
														<template #button-content>
															<b-link id="reloadCrypto" style="opacity: 50%;"
																><img
																	style="max-width: 20px;"
																	src="../assets/icons/settings-icon.png"
																	alt=""
															/></b-link>
														</template>
														<b-dropdown-header>
															Change pair to
														</b-dropdown-header>
														<b-dropdown-item-button
															v-if="selectedPair !== 'USD'"
															class="py-1"
															@click="selectPair('USD')"
														>
															<span class="pr-1"
																><img
																	src="../assets/icons/united-states.png"
																	alt=""
																	style="max-width: 25px;"
															/></span>
															USD
														</b-dropdown-item-button>
														<b-dropdown-item-button
															v-if="selectedPair !== 'EUR'"
															class="py-1"
															@click="selectPair('EUR')"
														>
															<span class="pr-1"
																><img
																	src="../assets/icons/european-union.png"
																	alt=""
																	style="max-width: 25px;"
															/></span>
															EUR
														</b-dropdown-item-button>
														<b-dropdown-item-button
															v-if="selectedPair !== 'MXN'"
															class="py-1"
															@click="selectPair('MXN')"
														>
															<span class="pr-1"
																><img
																	src="../assets/icons/mexico.png"
																	alt=""
																	style="max-width: 25px;"
															/></span>
															MXN
														</b-dropdown-item-button>
													</b-dropdown>
												</div>
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
													:disabled="donateBtnState"
													@click="
														onClickNext()
														sendDonation({ amount: customAmountCryptoInput })
													"
												>
													Donate
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
									src="../assets/icons/BNB-icon.png"
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
									src="../assets/icons/ETH-icon.png"
									alt=""
									style="width: 15px; height: 15px;"
								/>
								<strong>ETH</strong>
							</template>
							<p>Ethereum Mainnet</p>
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
									src="../assets/icons/DOGE-icon.png"
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
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
	name: 'DonationDash',
	data() {
		return {
			currentStep: 1,
			max_step: 5,

			// Amount group
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
			'username',
			'balanceOf',
			'selectedCypto',
			'cryptoPrice',
			'selectedPair'
		]),

		...mapGetters(['getCryptoVSPair']),

		donateBtnState() {
			if (!this.customAmountCryptoInput) {
				return true
			} else if (parseFloat(this.customAmountCryptoInput) <= 0) {
				return true
			} else if (this.customAmountCryptoInput > this.balanceOf) {
				return false
			} else {
				console.log(this.balanceOf)
				return false
			}
		},

		yearsCalc() {
			return Math.floor(Math.random() * (15 - 5) + 5)
		},

		calcTrees() {
			var convertedAmount =
				this.customAmountCryptoInput * this.cryptoPrice.usd_price
			console.log(convertedAmount)
			return Math.round(
				convertedAmount * 0.05 * 12 * this.yearsCalc
			).toLocaleString()
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
	mounted() {
		this.NameInput = this.$store.state.username
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

		setMaxAmount() {
			this.customAmountCryptoInput = this.balanceOf
		},

		...mapActions([
			'exportDonatorData',
			'sendDonation',
			'showaddressToDonate',
			'updateBalance',
			'selectCrypto',
			'getCryptoprice',
			'selectPair'
		])
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

.customAmountCryptoInput__cont {
	padding: 0 20px;
	background-color: rgb(240, 240, 240);
	color: rgb(127, 127, 127);
	border: 1px solid gray;
	border-radius: 25px;
	overflow: hidden;
	.customAmountCryptoInput__cont__input {
		display: flex;
		padding: 30px 0px 10px;

		.DonationInput {
			background-color: rgb(240, 240, 240);
			border: none;
			outline: none;
			&:focus {
				color: rgb(69, 69, 69);
				font-weight: 700;
				border: none;
				outline: none !important;
				outline-width: 0 !important;
				box-shadow: none;
				-moz-box-shadow: none;
				-webkit-box-shadow: none;
			}
		}
	}

	.customAmountCryptoInput__max {
		width: 150px;
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
