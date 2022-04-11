export const WINDOW_WIDTH = (state) => {
  state.windowWidth = window.innerWidth
}

export const DONATOR_DATA = (state, payload) => {
  state.donator = {
    donatorName: payload.name,
    donatorEmail: payload.email,
    donatorMessage: payload.message
  }
}

export const SHOW_DONATE = (state) => {
  if (state.showDonate === false) {
    state.showDonate = true
  } else {
    state.showDonate = false
  }
}

export const SHOW_CONNECT = (state) => {
  if (state.showconnectWalletModal === false) {
    state.showconnectWalletModal = true
  } else {
    state.showconnectWalletModal = false
  }
}

export const SHOW_INSTALL_METAMASK = (state) => {
  if (state.showinstallMetaModal === false) {
    state.showinstallMetaModal = true
  } else {
    state.showinstallMetaModal = false
  }
}

export const CONNECT_BUTTON = (state, status) => {
  state.connectBtnState = status
}

export const DISCONNECT_BUTTON = (state, status) => {
  state.disconnectBtnState = status
}

export const CURRENT_ADDRESS = (state, address) => {
  state.currentAccount = address
}

export const IS_CONNECTED = (state, status) => {
  state.isconnected = status
}

export const LOADING_DATA = (state, status) => {
  state.fetchingData = status
}