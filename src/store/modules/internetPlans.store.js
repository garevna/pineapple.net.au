/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const state = {
  plans: {
    residential: [
      { upload: 50, download: 50, price: 50, selected: false },
      { upload: 150, download: 150, price: 69, selected: false },
      { upload: 500, download: 500, price: 140, selected: false },
      { upload: 1000, download: 1000, price: 250, selected: false }
    ],
    business: [
      { upload: 150, download: 150, price: 150, selected: false },
      { upload: 500, download: 500, price: 240, selected: false },
      { upload: 1000, download: 1000, price: 500, selected: false }
    ]
  },
  occupancyTypes: ['first', 'second', 'third'],
  infoSources: ['source 1', 'source 2', 'source 3'],
  cardsInfo: {
    'American Express': {
      begin: ['34', 37],
      length: 15
    },
    'Diners Club - Carte Blanche': {
      begin: ['300', '301', '302', '303', '304', '305'],
      length: 14
    },
    'Diners Club - International': {
      begin: ['36'],
      length: 14
    },
    'Diners Club - USA & Canada': {
      begin: ['54'],
      length: 16
    },
    Discover: {
      begin: ['6011', '622', '644', '645', '646', '647', '648', '649', '65'],
      length: [16, 17, 18, 19]
    },
    InstaPayment: {
      begin: ['637', '638', '639'],
      length: 16
    },
    JCB: {
      begin: ['35'],
      length: [16, 17, 18, 19]
    },
    Maestro: {
      begin: ['5018', '5020', '5038', '5893', '6304', '6759', '6761', '6762', '6763'],
      length: [16, 17, 18, 19]
    },
    MasterCard: {
      begin: ['51', '52', '53', '54', '55', '222100-272099'],
      length: 16
    },
    Visa: {
      begin: ['4'],
      length: [13, 16, 19]
    },
    'Visa Electron': {
      begin: ['4026', '417500', '4508', '4844', '4913', '4917'],
      length: 16
    }
  }
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  tarif: (state, getters) => state.plans[getters.plan].find(item => item.selected)
}

const actions = {

  SELECT_PLAN ({ commit }, payload) {
    commit('CHANGE_PLAN', payload, { root: true })
  },

  SELECT_TARIF ({ state, getters }, tarifIndex) {
    state.plans.residential.forEach((tarif) => { tarif.selected = false })
    state.plans.business.forEach((tarif) => { tarif.selected = false })
    state.plans[getters.plan][tarifIndex].selected = true
  },

  LOG_ERROR ({ commit }, error) {
    commit('ERROR_HANDLER', { moduleName: 'plans', error }, { root: true })
    return null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
