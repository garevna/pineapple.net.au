import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: location.origin,
    connectEndpoint: 'https://user.pineapple.net.au/signup',
    signInEndpoint: 'https://user.pineapple.net.au/',
    contactEndpoint: 'https://api.pineapple.net.au/email/forms',
    generalInfoEndpoint: 'https://api.pineapple.net.au/content/general',
    emailSubject: 'Pineapple NET',
    emailText: 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.',
    viewport: 'lg',
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    plan: 'residential',
    pages: ['Home', 'About Us', 'Residential', 'Business', 'Connect', 'Contact Us', 'Sign In'],
    selectors: ['top', 'about', 'plans', 'plans', 'connect', 'contact', 'sign-in']
  },
  modules,

  getters: {
    familyPicture: (state) => {
      const size = state.viewportWidth < 600 ? 'small' : state.viewportWidth < 1440 ? 'medium' : 'large'
      return `${state.host}/img/family-${size}.png`
    }
  },

  mutations: {
    CHANGE_VIEWPORT: (state) => {
      // state.viewport = window.innerWidth >= 1904 ? 'xl'
      //   : window.innerWidth >= 1264 ? 'lg'
      //     : window.innerWidth >= 960 ? 'md'
      //       : window.innerWidth >= 600 ? 'sm' : 'xs'
      state.viewportWidth = window.innerWidth
      state.viewportHeight = window.innerHeight
    },
    CHANGE_VIEWPORT_WIDTH: (state, width) => { state.viewportWidth = width },
    CHANGE_VIEWPORT_HEIGHT: (state, height) => { state.viewportHeight = height },

    CHANGE_PLAN: (state, plan) => { state.plan = plan },

    // ERROR_HANDLER: (state, { moduleName, error }) => {
    //   state.errorsLog.push({
    //     module: moduleName,
    //     error,
    //     time: new Date().getTime()
    //   })
    // },
    // ERRORS_CLEAR: (state) => {
    //   state.errorsLog = []
    // },
    SET_PROPERTY: (state, payload) => {
      Vue.set(payload.object, payload.propertyName, payload.value)
    },
    DELETE_PROPERTY: (state, payload) => {
      Vue.delete(payload.object, payload.propertyName)
    }
  },

  actions: {

    async GET_GENERAL_INFO ({ state, commit }) {
      const generalInfo = await (await fetch(state.generalInfoEndpoint)).json()
      for (const field in generalInfo) {
        commit('SET_PROPERTY', {
          object: state,
          propertyName: field,
          value: generalInfo[field]
        })
      }
    }
  }
})
