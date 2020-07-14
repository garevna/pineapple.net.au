/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  testimonials: null,
  db: 'https://api.pineapple.net.au/testimonials'
}

const getters = {
  host: (state, getters, rootState) => rootState.host
}

const mutations = {
  UPDATE_CONTENT (state, payload) {
    state.testimonials = JSON.parse(JSON.stringify(payload))
  }
}

const actions = {
  async GET_CONTENT ({ state, commit }) {
    const content = await (await fetch(state.db)).json()
    commit('UPDATE_CONTENT', content)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
