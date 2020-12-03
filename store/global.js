export const state = () => ({
  showOverLay: false
})

export const mutations = {
  SET_OVER_LAY (state, show) {
    state.showOverLay = show
  }
}
