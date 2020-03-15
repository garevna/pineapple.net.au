/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  userFullName: '',
  userEmail: '',
  userMessage: ''
}

const getters = {
  endpoint: (state, getters, rootState) => rootState.contactEndpoint
}

const mutations = {
  USER_FULL_NAME: (state, name) => { state.userFullName = name },
  USER_EMAIL: (state, email) => { state.userEmail = email },
  USER_MESSAGE: (state, message) => { state.userMessage = message }
}

const actions = {

  async SEND_MESSAGE ({ getters, commit }, file) {
    // const result = await (await fetch(getters.endpoint)).text()
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
