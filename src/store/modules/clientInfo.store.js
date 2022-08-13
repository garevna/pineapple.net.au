/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const state = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    birthDate: null,
    phone: '',
    address: '',
    occupancyType: '',
    infoSource: '',
    addressAvailable: false,
    location: null
  },
  card: {
    firstName: '',
    lastName: '',
    number: '',
    expiry: null,
    ccv: '000'
  },
  businessInfo: {
    businessName: '',
    abnNumber: ''
  },
  promocode: '',
  modemPrice: 0
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  tariff: (state, getters, rootState) => rootState.internetPlans.plans[getters.plan].find(item => item.selected),
  business: (state, getters) => getters.plan === 'business',
  address: state => state.personalInfo.address,
  addressAvailable: state => state.personalInfo.addressAvailable
}

const mutations = {
  SET_ADDRESS_AVAILABLE: (state, value) => { state.personalInfo.addressAvailable = value },
  UPDATE_PERSONAL_DATA: (state, payload) => { Object.assign(state.personalInfo, { [payload.prop]: payload.value }) },
  UPDATE_PAYMENT_DETAILS: (state, payload) => { state.card[payload.prop] = payload.value },
  UPDATE_BUSINESS_INFO: (state, payload) => { state.businessInfo[payload.prop] = payload.value },
  UPDATE_PROMO_CODE: (state, payload) => { state.promocode = payload },
  UPDATE_MODEM_PRICE: (state, payload) => { state.modemPrice = payload }
}

const actions = {

  UPDATE_PLAN ({ commit }, plan) {
    commit('CHANGE_PLAN', plan, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
