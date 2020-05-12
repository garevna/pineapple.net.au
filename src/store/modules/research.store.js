/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */

const state = {
  mediaContent: null
}

const getters = {
  // newsEndpoint: (state, getters, rootState) => `${rootState.host}/news`,
  // staticLogoEndpoint: (state, getters, rootState) => `${rootState.host}/logos`,
  // logosEndpoint: (state, getters, rootState) => `${rootState.host}/news/logos`,
  // uploadLogoEndpoint: (state, getters, rootState) => `${rootState.host}/news/logo`
}

const mutations = {

  SET_MEDIA_CONTENT: (state, content) => {
    state.mediaContent = content
  }
}

const actions = {

  //
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
