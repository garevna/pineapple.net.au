/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  userFullName: '',
  userEmail: '',
  userAddress: '',
  userMessage: '',
  targets: [
    { text: 'New connections', value: 'sales@pineapple.net.au' },
    { text: 'Technical Support', value: 'support@pineapple.net.au' },
    { text: 'Existing account', value: 'billing@pineapple.net.au' },
    { text: 'General enquiry', value: 'info@pineapple.net.au' }
  ],
  target: {
    text: 'New connections',
    value: 'sales@pineapple.net.au'
  },
  progress: false,
  response: null
}

const getters = {
  endpoint: (state, getters, rootState) => rootState.contactEndpoint,
  pages: (state, getters, rootState) => rootState.pages.filter(item => item !== 'Contact Us'),
  selectors: (state, getters, rootState) => rootState.selectors.filter(item => item !== '#contact')
}

const mutations = {
  SET_PROGRESS: (state, value) => { state.progress = value },
  SET_RESPONSE: (state, value) => { state.response = value },
  USER_FULL_NAME: (state, name) => { state.userFullName = name },
  USER_EMAIL: (state, email) => { state.userEmail = email },
  USER_ADDRESS: (state, address) => { state.userAddress = address },
  USER_MESSAGE_TARGET: (state, target) => Object.assign(state.target, target),
  USER_MESSAGE: (state, message) => { state.userMessage = message }
}

const actions = {
  async SEND_EMAIL ({ state, getters, commit }) {
    commit('SET_PROGRESS', true)
    const response = await fetch(getters.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: [state.target.value, state.userEmail],
        subject: `Pineapple.net: ${state.target.text} (${state.target.value})`,
        html: `
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

    commit('SET_PROGRESS', false)
    commit('SET_RESPONSE', response.ok)

    return response.ok
  },

  CLEAR_FIELDS: ({ state, commit }) => {
    commit('USER_FULL_NAME', '')
    commit('USER_EMAIL', '')
    commit('USER_ADDRESS', '')
    commit('USER_MESSAGE_TARGET', state.targets[0])
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
