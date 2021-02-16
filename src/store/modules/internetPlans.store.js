/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const state = {
  endpoint: 'https://api.pineapple.net.au/content/plans',
  plans: {
    residential: [
      { upload: 50, download: 50, price: 49.99, selected: false },
      { upload: 150, download: 150, price: 69, selected: false },
      { upload: 250, download: 250, price: 99, selected: false },
      { upload: 500, download: 500, price: 140, selected: false },
      { upload: 1000, download: 1000, price: 250, selected: false }
    ],
    business: [
      { upload: 150, download: 150, price: 150, selected: false },
      { upload: 250, download: 250, price: 200, selected: false },
      { upload: 500, download: 500, price: 240, selected: false },
      { upload: 1000, download: 1000, price: 500, selected: false }
    ]
  },
  occupancyTypes: [
    'Single Dwelling House',
    'Multi Dwelling Unit',
    'Apartment complex',
    'Business Park',
    'Office Building'
  ],
  infoSources: [
    'Google',
    'Friend',
    'Facebook',
    'Instagram',
    'LinkedIn'
  ]
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  tarif: (state, getters) => state.plans[getters.plan].find(item => item.selected)
}

const mutations = {
  // UPDATE_INTERNET_PLANS: (state, payload) => {
  //   state.plans = payload
  // }
}

const actions = {

  // async GET_PRICES ({ state, commit }, payload) {
  //   const { plans } = await (await fetch(state.endpoint)).json()
  //   commit('UPDATE_INTERNET_PLANS', plans)
  // },

  SELECT_PLAN ({ commit }, payload) {
    commit('CHANGE_PLAN', payload, { root: true })
  },

  SELECT_TARIF ({ state, getters }, tarifIndex) {
    state.plans.residential.forEach((tarif) => { tarif.selected = false })
    state.plans.business.forEach((tarif) => { tarif.selected = false })
    state.plans[getters.plan][tarifIndex].selected = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
