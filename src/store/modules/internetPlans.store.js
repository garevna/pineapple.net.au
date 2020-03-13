/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const state = {
  plans: {
    residential: [
      { upload: 50, download: 50, price: 50, color: '#fff' },
      { upload: 150, download: 150, price: 69, color: '#72BF44' },
      { upload: 500, download: 500, price: 140, color: '#fff' },
      { upload: 1000, download: 1000, price: 250, color: '#fff' }
    ],
    business: [
      { upload: 150, download: 150, price: 150, color: '#fff' },
      { upload: 500, download: 500, price: 240, color: '#fff' },
      { upload: 1000, download: 1000, price: 500, color: '#fff' }
    ]
  },
  userInfo: {
    plan: 'residential',
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
  occupancyTypes: [1, 2, 3],
  infoSources: ['1...', '2...', '3...']
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  currentPlan: (state, getters) => state.plans[getters.plan]
  // articleEndpoint: (state, getters, rootState) => `${rootState.host}/blog/article`,
  // uploadPictureEndpoint: (state, getters, rootState) => `${rootState.host}/blog/picture`,
  // uploadAvatarEndpoint: (state, getters, rootState) => `${rootState.host}/blog/avatar`,
  // staticPictureEndpoint: (state, getters, rootState) => `${rootState.host}/images`,
  // staticAvatarEndpoint: (state, getters, rootState) => `${rootState.host}/avatars`,
  // picturesEndpoint: (state, getters, rootState) => `${rootState.host}/blog/images`,
  // avatarsEndpoint: (state, getters, rootState) => `${rootState.host}/blog/avatars`,
  // imageSrc: (folderName, fileName) => (state, getters, rootState) => `${rootState.host}/${folderName}/${fileName}`
}

const mutations = {
  USER_PLAN: (state, bool) => { state.userInfo.plan = bool },
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
