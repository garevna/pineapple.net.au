/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  testimonials: null
}

const getters = {
  host: (state, getters, rootState) => rootState.host,
  db: (state, getters, rootState) => `${rootState.testimonialsEndpoint}/testimonials/testimonials.json`,
  photos: (state, getters, rootState) => `${rootState.testimonialsEndpoint}/img/testimonials`
}

const mutations = {
  UPDATE_CONTENT (state, payload) {
    state.testimonials = JSON.parse(JSON.stringify(payload))
  }
}

const actions = {
  async GET_CONTENT ({ getters, commit }) {
    let content = await (await fetch(getters.db)).json()
    content = content.map((item) => Object.assign({}, item, { photo: `${getters.photos}/${item.photo}` }))
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
