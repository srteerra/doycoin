<template>
    <div>
      <b-container>
        <b-row>
          <b-col cols lg="8" xl="6" class="mx-auto">
            <div>
              <b-card id="DonationDash-container" class="my-5 shadow-lg rounded-3">
                <b-card-body>
                  <b-container class="py-2 px-4">
                    <b-col class="my-auto text-center">
                      <div>
                        <h4 class="fs-4 text-dark font-weight-bolder">JOIN US!</h4>
                        <hr>
                      </div>
                      <div>
                        <div v-if="currentStep==1" border-variant="light" class="p-0">
                          <div class="px-0 pt-2 pb-4 amountSelection">
                            <div class="amountSelection-item">
                              <input type="radio" id="1Tree" name="amountSelection" value="1" checked/>
                              <label for="1Tree">1 tree</label>
                            </div>
                            <div class="amountSelection-item">
                              <input type="radio" id="15Trees" name="amountSelection" value="15"/>
                              <label for="15Trees">15 trees</label>
                            </div>
                            <div class="amountSelection-item">
                              <input type="radio" id="50Trees" name="amountSelection" value="50"/>
                              <label for="50Trees">50 trees</label>
                            </div>
                            <div class="amountSelection-item">
                              <input type="radio" id="100Trees" name="amountSelection" value="100"/>
                              <label for="100Trees">100 trees</label>
                            </div>
                          </div>
                          <div>
                            <hr>
                            <p>Or</p>
                          </div>
                          <div class="CustomTrees">
                            <input type="text" class="w-100 py-2 px-3 mb-5" placeholder="Enter your amount..."/>
                          </div>
                          <div>
                            <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Next</b-button>
                          </div>
                        </div>

                        <b-card v-if="currentStep==2" border-variant="light" class="card-style">
                          <b-card-text>Do something for second step.</b-card-text>
                          
                          <div class="mb-2">
                            <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Next</b-button>
                          </div>
                          <div>
                            <b-button id="backStepButton" block class="py-2" variant="light" @click="onClickBack">Back</b-button>
                          </div>
                        </b-card>

                        <b-card v-if="currentStep==3" border-variant="light" class="card-style">
                          <b-card-text>For furthermore in 3rd step.</b-card-text>

                          <div class="mb-2">
                            <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Next</b-button>
                          </div>
                          <div>
                            <b-button id="backStepButton" block class="py-2" variant="light" @click="onClickBack">Back</b-button>
                          </div>
                        </b-card>

                        <b-card v-if="currentStep==4" border-variant="light" class="card-style">
                          <b-card-text>Will soon finish.</b-card-text>

                          <div class="mb-2">
                            <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Next</b-button>
                          </div>
                          <div>
                            <b-button id="backStepButton" block class="py-2" variant="light" @click="onClickBack">Back</b-button>
                          </div>
                        </b-card>

                        <b-card v-if="currentStep==5" border-variant="light" class="card-style">
                          <b-card-text>Finished!</b-card-text>

                          <div class="mb-2">
                            <b-button id="nextStepButton" block class="py-2" variant="success" @click="onClickNext">Donate!</b-button>
                          </div>
                          <div>
                            <b-button id="backStepButton" block class="py-2" variant="light" @click="onClickBack">Back</b-button>
                          </div>
                        </b-card>
                      </div>
                      <b-progress :value="currentStep" :max="max_step" class="my-3" variant="success"></b-progress>
                    </b-col>
                  </b-container>
                </b-card-body>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>

export default {
  name: 'DonationDash',
  data () {
    return {
      currentStep: 1,
      max_step: 5
    }
  },
  methods: {
    onClickNext() {
      this.currentStep++;
    },
    onClickBack() {
      this.currentStep--;
    },
    onClickFirst() {
      this.currentStep = 1;
    }
  },
  computed: {
    progress() {
      return Math.round(100 / this.max_step) * this.currentStep;
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  #progress-bar {
      border-radius: 20px;
  }

  #DonationDash-container {
    border: none;
    border-radius: 80px;
  }

  #nextStepButton {
    border: none;
    border-radius: 25px;
  }

  #backStepButton {
    border: 1px solid gray;
    border-radius: 25px;
  }

  .CustomTrees {
    input[type="text"] {
      background-color: rgb(240, 240, 240);
      color: rgb(127, 127, 127);
      border: 1px solid gray;
      border-radius: 25px;
      &:focus {
        color: rgb(69, 69, 69);
        font-weight: 700;
        border: none;
      }
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
