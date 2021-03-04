/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const state = {
  endpoint: 'https://api.pineapple.net.au/content/plans',
  external: 'https://pineapple.chargebee.com/hosted_pages/plans',
  plans: {
    residential: [
      { upload: 50, download: 50, price: 50, tariffId: 'residential-50', selected: false },
      { upload: 150, download: 150, price: 69, tariffId: 'residential-150', selected: false },
      { upload: 250, download: 250, price: 99, tariffId: 'residential-250', selected: false },
      { upload: 500, download: 500, price: 140, tariffId: 'residential-500', selected: false },
      { upload: 1000, download: 1000, price: 250, tariffId: 'residential-1000', selected: false }
    ],
    business: [
      { upload: 150, download: 150, price: 150, tariffId: 'commercial-150', selected: false },
      { upload: 250, download: 250, price: 200, tariffId: 'commercial-250', selected: false },
      { upload: 500, download: 500, price: 240, tariffId: 'commercial-500', selected: false },
      { upload: 1000, download: 1000, price: 500, tariffId: 'commercial-1000', selected: false }
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
  tariff: (state, getters) => state.plans[getters.plan].find(item => item.selected),
  link: (state, getters) => getters.tariff ? `${state.external}/${getters.tariff.tariffId}` : null
}

const mutations = {
  // UPDATE_INTERNET_PLANS: (state, payload) => {
  //   state.plans = payload
  // },
}

const actions = {

  // async GET_PRICES ({ state, commit }, payload) {
  //   const { plans } = await (await fetch(state.endpoint)).json()
  //   commit('UPDATE_INTERNET_PLANS', plans)
  // },

  SELECT_PLAN ({ commit }, payload) {
    commit('CHANGE_PLAN', payload, { root: true })
  },

  SELECT_TARIFF ({ state, getters }, tariffIndex) {
    state.plans.residential.forEach((tariff) => { tariff.selected = false })
    state.plans.business.forEach((tariff) => { tariff.selected = false })
    state.plans[getters.plan][tariffIndex].selected = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
