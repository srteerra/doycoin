<template>
    <div id="DonationDash">
      <b-container fluid class="px-0">
        <div class="mx-auto">
          <b-col class="p-0">
            <b-card id="DonationDash-container" class="my-5 px-0 shadow-lg rounded-3">
              <b-card-body>
                <b-container class="py-2 px-0 px-md-4">
                  <b-col class="my-auto px-0 text-center">
                    <div>
                      <div v-if="currentStep==1" border-variant="light" class="p-0">
                        <div>
                          <h4 class="fs-4 text-dark font-weight-bolder">Join us!</h4>
                          <hr>
                        </div>
                        <div class="px-0 pb-5 amountSelection">
                          <div class="amountSelection-item">
                            <input type="radio" id="1Tree" v-model="amountSelectedInput" name="amountSelection" value="1" checked/>
                            <label for="1Tree">1 tree</label>
                          </div>
                          <div class="amountSelection-item">
                            <input type="radio" id="15Trees" v-model="amountSelectedInput" name="amountSelection" value="15"/>
                            <label for="15Trees">15 trees</label>
                          </div>
                          <div class="amountSelection-item">
                            <input type="radio" id="50Trees" v-model="amountSelectedInput" name="amountSelection" value="50"/>
                            <label for="50Trees">50 trees</label>
                          </div>
                          <div class="amountSelection-item">
                            <input type="radio" id="100Trees" v-model="amountSelectedInput" name="amountSelection" value="100"/>
                            <label for="100Trees">100 trees</label>
                          </div>
                        </div>

                        <div>
                          <hr>
                          <p>Or</p>
                        </div>

                        <b-form-group id="amountSelectedGroup" class="text-dark font-weight-bold">
                          <b-form-input id="customAmountInput" v-model="amountSelectedCustomInput" type="number" class="w-100 py-2 px-3 mb-3 DonationInput" placeholder="Enter your amount..." required></b-form-input>
                        </b-form-group>
                        
                        <div>
                          <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Next</b-button>
                        </div>
                      </div>

                      <div v-if="currentStep==2" border-variant="light" class="px-0">
                        <div>
                          <h4 class="fs-4 text-dark font-weight-bolder">Details</h4>
                          <hr>
                        </div>
                        <div class="text-left">
                          <b-form class="pb-5">
                            <b-form-group id="NameInputGroup" class="text-dark font-weight-bold" label="Name" label-for="NameInput">
                              <b-form-input id="NameInput" v-model="NameInput" :readonly="NameInputDisabled" :maxlength="maxLengthName" type="text" class="w-100 py-2 px-3 mb-4 DonationInput" placeholder="Enter your name..." required></b-form-input>
                            </b-form-group>

                            <b-form-group id="EmailInputGroup" class="text-dark font-weight-bold" label="Email address" label-for="EmailInput">
                              <b-form-input id="EmailInput" v-model="EmailInput" :maxlength="maxLengthEmail" type="email" class="w-100 py-2 px-3 mb-4 DonationInput" placeholder="Enter your email..." required></b-form-input>
                            </b-form-group>

                            <b-form-group id="MessageInputGroup" class="text-dark font-weight-bold mb-4" label="Message" label-for="MessageInput">
                              <b-form-textarea id="MessageInput" v-model="MessageInput" :maxlength="maxLengthMessage" type="text" class="w-100 rounded-0 py-2 px-3 mb-2 DonationInput" placeholder="Enter a message..." rows="3" max-rows="6" style="overflow:hidden;" required></b-form-textarea>
                              <p class="font-weight-light">{{ MessageInput.length }} / {{ maxLengthMessage }}</p>
                            </b-form-group>

                            <b-form-group id="AgreeCheckGroup" class="text-dark font-weight-regular" v-slot="{ AgreeCheckGroup }">
                              <b-form-checkbox-group id="AgreeCheck" v-model="AgreeCheck" :aria-describedby="AgreeCheckGroup">
                                <b-form-checkbox value="accepted">I accept the <span><router-link to="/terms" class="font-weight-bold">Terms and Conditions</router-link></span></b-form-checkbox>
                              </b-form-checkbox-group>
                            </b-form-group>

														<b-form-group id="AnonymousCheckGroup" class="text-dark font-weight-regular" v-slot="{ AnonymousCheckGroup }">
                              <b-form-checkbox-group id="AnonymousCheck" v-model="AnonymousCheck" :aria-describedby="AnonymousCheckGroup">
                                <b-form-checkbox value="anonymous" class="">Keep my donation anonymous</b-form-checkbox>
                              </b-form-checkbox-group>
                            </b-form-group>
                          </b-form>
                        </div>
                        <!-- exportDonatorData({name: NameInput, email:EmailInput, message:MessageInput}) -->
                        <div class="mb-2">
                          <b-button id="nextStepButton" :disabled="AgreeBtn" block class="py-2" variant="success" @click="onClickNext">Next</b-button>
                        </div>
                        <div>
                          <b-button id="backStepButton" block class="py-2" variant="light" @click="onClickBack">Back</b-button>
                        </div>
                      </div>

                      <div v-if="currentStep==3" border-variant="light" class="card-style">
                        <b-card-text>For furthermore in 3rd step.</b-card-text>

                        <div class="mb-2">
                          <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Next</b-button>
                        </div>
                        <div>
                          <b-button id="backStepButton" block class="py-2" variant="light" @click="onClickBack">Back</b-button>
                        </div>
                      </div>

                      <div v-if="currentStep==4" border-variant="light" class="card-style">
                        <b-card-text>Will soon finish.</b-card-text>

                        <div class="mb-2">
                          <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Next</b-button>
                        </div>
                        <div>
                          <b-button id="backStepButton" block class="py-2" variant="light" @click="onClickBack">Back</b-button>
                        </div>
                      </div>

                      <div v-if="currentStep==5" border-variant="light" class="card-style">
                        <b-card-text>Finished!</b-card-text>

                        <div class="mb-2">
                          <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Donate!</b-button>
                        </div>
                        <div>
                          <b-button id="backStepButton" block class="py-2" variant="light" @click="onClickBack">Back</b-button>
                        </div>
                      </div>
                    </div>
                    <b-progress :value="currentStep" :max="max_step" class="my-3" variant="success"></b-progress>
                  </b-col>
                </b-container>
              </b-card-body>
            </b-card>
          </b-col>
        </div>
      </b-container>
    </div>
</template>

<script>
import { mapState } from "vuex"
import { mapActions } from "vuex"

export default {
	name: "DonationDash",
	data () {
		return {
			currentStep: 1,
			max_step: 5,

			// Amount group
			amountSelected: "",
			amountSelectedInput: "",
			amountSelectedCustomInput: "",

			// Name group
			NameInput: "",
			NameInputDisabled: false,
			maxLengthName: 35,

			// Email group
			EmailInput: "",
			maxLengthEmail: 35,

			// Message group
			MessageInput: "",
			maxLengthMessage: 50,

			// Terms group
			AgreeCheck: [],
			AnonymousCheck: [],

			// Buttons state
			AgreeBtn: true

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

		...mapActions([
			"exportDonatorData"
		])
	},
	watch: {
		AgreeCheck() {
			if (this.AgreeCheck[0] !== "accepted") {
				this.AgreeBtn = true
			} else {
				this.AgreeBtn = false
			}
		},
		AnonymousCheck() {
			if (this.AnonymousCheck[0] === "anonymous") {
				this.NameInput = "Anonymous"
				this.NameInputDisabled = true
			} else {
				this.NameInput = ""
				this.NameInputDisabled = false
			}
		},
		amountSelectedCustomInput() {
			if (this.amountSelectedCustomInput !== "") {
				this.amountSelectedInput = ""
				this.amountSelected = this.amountSelectedCustomInput
			}
		},
		amountSelectedInput() {
			if (this.amountSelectedInput !== "") {
				this.amountSelectedCustomInput = ""
				this.amountSelected = this.amountSelectedInput
			}
		}
	},
	computed: {
		progress() {
			return Math.round(100 / this.max_step) * this.currentStep
		},

		...mapState([
			"donator",
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

  .amountSelection {
    width: 100%;
    justify-content: center;
    display: inline-flex;
    flex-wrap: wrap;

    input[type="radio"] {
      opacity: 0;
      visibility: hidden;
      width: 0;
      &:checked + label {
        color: white;
        background-color: $success;
        border-color: $success;
      }
    }

    label {
      width: 100%;
      display: inline-block;
      color: rgb(127, 127, 127);
      font-weight: 800;
      background-color: rgb(240, 240, 240);
      padding: 15px 10px;
      cursor: pointer;
      border: 1px solid gray;
      border-radius: 25px;
    }

    input[type="text"] {
      width: 60%;
    }

    .amountSelection-item {
      width: 45%;
      height: 70px;
      margin: 0 5px;
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
