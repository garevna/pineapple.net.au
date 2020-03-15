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
  userInfo: {
    plan: 'residential',
    promocode: '',
    businessName: '',
    abnNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: null,
    phone: '',
    occupancyType: '',
    infoSource: '',
    card: {
      number: '',
      expiry: null,
      ccv: '000'
    }
  },
  occupancyTypes: ['first', 'second', 'third'],
  infoSources: ['1...', '2...', '3...']
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  // plans: (state, getters, rootState) => rootState.plans,
  currentPlan: (state, getters) => getters.plans[getters.plan]
  // imageSrc: (folderName, fileName) => (state, getters, rootState) => `${rootState.host}/${folderName}/${fileName}`
}

const mutations = {
  SELECT_PLAN: (state, plan) => { state.userInfo.plan = plan },
  SELECT_TARIF: (state, tarifIndex) => { state.plans[state.userInfo.plan][tarifIndex].selected = true },
  CLEAR_SELECTION: (state) => {
    state.plans.residential.forEach((tarif) => { tarif.selected = false })
    state.plans.business.forEach((tarif) => { tarif.selected = false })
  },
  SET_PROMO_CODE: (state, promo) => { state.userInfo.promocode = promo },
  USER_BUSINESS_NAME: (state, name) => { state.userInfo.businessName = name },
  USER_ABN_NUMBER: (state, num) => { state.userInfo.abnNumber = num },
  USER_FIRST_NAME: (state, name) => { state.userInfo.firstName = name },
  USER_LAST_NAME: (state, name) => { state.userInfo.lastName = name },
  USER_EMAIL: (state, email) => { state.userInfo.email = email },
  USER_BIRTHDATE: (state, date) => { state.userInfo.birthDate = date },
  USER_PHONE: (state, phone) => { state.userInfo.phone = phone },
  USER_OCCUPANCY: (state, occupancy) => { state.userInfo.occupancyType = occupancy },
  USER_INFO_SOURCE: (state, source) => { state.userInfo.infoSource = source },
  USER_CARD_NUMBER: (state, num) => { state.userInfo.card.num = num },
  USER_CARD_EXPIRY: (state, exp) => { state.userInfo.card.expiry = exp },
  USER_CARD_CCV: (state, ccv) => { state.userInfo.card.ccv = ccv }
}

const actions = {

  // async GET_BLOG_CONTENT ({ getters, dispatch }) {
  //   let blogContent = null
  //   try {
  //     const response = await (await fetch(getters.contentEndpoint)).json()
  //     blogContent = response.data
  //   } catch (error) { dispatch('LOG_ERROR', response) }

  //   return blogContent
  // },

  // async SAVE_ARTICLE_BY_ID ({ getters, commit, dispatch }, { id, article }) {
  //   const requestBody = Object.assign({}, ...state.articleFields.map(key => ({ [key]: article[key] })))
  //   try {
  //     const response = await fetch(`${getters.articleEndpoint}/${id}`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(requestBody)
  //     })
  //   } catch (error) { dispatch('LOG_ERROR', error) }
  // },

  LOG_ERROR ({ commit }, error) {
    commit('ERROR_HANDLER', { moduleName: 'plans', error }, { root: true })
    return null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
