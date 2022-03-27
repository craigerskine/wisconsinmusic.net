export const state = () => ({
  mast: '/assets/img/_mast-placeholder.jpg',
})
   
export const mutations = {
  change_mast(state, mast) {
    state.mast = mast;
  }
}

//this.$store.commit('change_mast',value)