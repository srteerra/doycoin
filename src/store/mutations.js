export const SHOW_DONATE = (state) => {
  if (state.showDonate === false) {
    state.showDonate = true
  } else {
    state.showDonate = false
  }
}
