import { plans, packages, occupancyTypes, infoSources } from './data'

const state = {
  demo: false,
  endpoint: location.search === '?staging' ? 'https://pineapple-net-land.glitch.me/content/plans' : 'https://api.pineapple.net.au/content/plans',
  external: 'https://pineapple.chargebee.com/hosted_pages/plans',
  plans,
  packages,
  occupancyTypes,
  infoSources
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  planName: (state, getters) => getters.plan === 'business' ? 'commercial' : getters.plan,
  tariff: (state, getters) => state.plans[getters.plan].find(item => item.selected)?.tariffId,
  package: (state, getters) => (packageIndex) => state.packages[getters.planName][packageIndex].id,
  link: (state, getters) => (packageNum) => {
    const url = `${state.external}/${getters.tariff}${getters.package(packageNum)}`
    if (location.search === '?staging') alert(url)
    return url
  }
}

const mutations = {
  UPDATE_INTERNET_PLANS: (state, payload) => {
    const { plans, packages } = payload
    Object.assign(state, { plans, packages })
  }
}

const actions = {

  async GET_PRICES ({ state, commit }, payload) {
    const { plans, packages } = await (await fetch(state.endpoint)).json()
    commit('UPDATE_INTERNET_PLANS', { plans, packages })
  },

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
