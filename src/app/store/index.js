/* eslint-disable no-undef */
import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import * as getters from "./getters"
import * as mutations from "./mutations"
import { actions } from "./actions"

const Web3 = require("web3")
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

web3.eth.getGasPrice().then((res) => {
	state.gasPrice = res
})