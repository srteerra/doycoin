import state from "./state"

export const getAddress = (state) => {
  return state.currentAccount
}

export const getProvider = (state) => {
  return state.provider
}

export const isMetamask = () => {
  return ethereum.isMetaMask
}

export const isConnected = () => {
  return state.isConnected
}