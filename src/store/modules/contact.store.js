/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  userFullName: '',
  userEmail: '',
  userAddress: '',
  userMessage: ''
}

const getters = {
  endpoint: (state, getters, rootState) => rootState.contactEndpoint,
  pages: (state, getters, rootState) => rootState.pages.filter(item => item !== 'Contact Us'),
  selectors: (state, getters, rootState) => rootState.selectors.filter(item => item !== '#contact')
}

const mutations = {
  USER_FULL_NAME: (state, name) => { state.userFullName = name },
  USER_EMAIL: (state, email) => { state.userEmail = email },
  USER_ADDRESS: (state, address) => { state.userAddress = address },
  USER_MESSAGE: (state, message) => { state.userMessage = message }
}

const actions = {

  async SEND_EMAIL ({ state, getters }) {
    const response = await fetch(getters.endpoint, {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: 'Pineapple.net',
        email: state.userEmail,
        message: `
          <p>Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.</p>
          <p>Details:</p>
          <h3>Full name: ${state.userFullName}</h3>
          <h4>Email: ${state.userEmail}</h4>
          <h4>Address: ${state.userAddress}</h4>
          <h4>Your enquiry:</h4>
          <p>${state.userMessage.split('\n').join('<br>')}</p>
        `
      })
    })
    return response.ok
  },
  CLEAR_FIELDS: ({ commit }) => {
    commit('USER_FULL_NAME', '')
    commit('USER_EMAIL', '')
    commit('USER_ADDRESS', '')
    commit('USER_MESSAGE', '')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
