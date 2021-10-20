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
  // USER_BUSINESS_NAME: (state, payload) => { state.businessName = payload },
  // USER_ABN_NUMBER: (state, payload) => { state.abnNumber = payload },
  // USER_FIRST_NAME: (state, payload) => { state.personalInfo.firstName = payload },
  // USER_LAST_NAME: (state, payload) => { state.personalInfo.lastName = payload },
  // USER_EMAIL: (state, payload) => { state.personalInfo.email = payload },
  // USER_BIRTHDATE: (state, payload) => { state.personalInfo.birthDate = payload },
  // USER_PHONE: (state, payload) => { state.personalInfo.phone = payload },
  // USER_OCCUPANCY: (state, payload) => { state.personalInfo.occupancyType = payload },
  // USER_INFO_SOURCE: (state, payload) => { state.personalInfo.infoSource = payload },
  // USER_CARD_FIRSTNAME: (state, payload) => { state.card.firstName = payload },
  // USER_CARD_LASTNAME: (state, payload) => { state.card.lastName = payload },
  // USER_CARD_NUMBER: (state, payload) => { state.card.number = payload },
  // USER_CARD_EXPIRY: (state, payload) => { state.card.expiry = payload },
  // USER_CARD_CCV: (state, payload) => { state.card.ccv = payload },
  // USER_ADDRESS: (state, payload) => { state.personalInfo.address = payload },
  // ADDRESS_AVAILABLE: (state, payload) => { state.personalInfo.addressAvailable = payload },
  UPDATE_MODEM_PRICE: (state, payload) => { state.modemPrice = payload }
}

const actions = {

  UPDATE_PLAN ({ commit }, plan) {
    commit('CHANGE_PLAN', plan, { root: true })
  }

  // async SAVE_USER_DATA ({ state, getters }) {
  //   const requestBody = Object.assign({},
  //     state.personalInfo,
  //     state.card,
  //     state.businessInfo,
  //     {
  //       plan: getters.plan,
  //       tariff: getters.tariff,
  //       modemPrice: state.modemPrice,
  //       promocode: state.promocode
  //     }
  //   )
  //   try {
  //     const response = await fetch(getters.customerEndpoint, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(requestBody)
  //     })
  //   } catch (error) { dispatch('LOG_ERROR', error) }
  // },

  // LOG_ERROR ({ commit }, error) {
  //   commit('ERROR_HANDLER', { moduleName: 'plans', error }, { root: true })
  //   return null
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
