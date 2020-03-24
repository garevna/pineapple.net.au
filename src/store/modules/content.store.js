/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  top: {
    text: 'Based on a comparison with speeds listed in the ACCC Broadband Performance Data Report'
  },
  footer: {
    topHead: 'READY TO GET STARTED?',
    topText: 'Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.'
  },
  about: 'Pineapple Net is an Australian Internet service provider offering the fastest and most affordable fibre optic connection to business and residential customers.',
  copyright: 'Copyright © 2020 TPG Internet Pty Ltd ABN 15 068 383 737',
  whoAreWe: 'Pineapple Net is an authorised retail service provider. Our fibre optic broadband is a superior alternative to the NBN and our speeds start where the NBN typically maxes out.',
  speedTest: {
    text: [
      'With speeds up to 1000Mbps, say goodbye to buffering, enjoy crystal clear video streaming, low latency and superior gaming capability. Talk to family and friends without worrying about call quality.',
      'All Pineapple Net packages include unlimited data with no interruption. Our customers never experience evening congestion and enjoy 99.99% uptime.'
    ]
  },
  home: {
    contactUs: 'Get in touch to find out if Pineapple is available at your address',
    getConnected: 'Our team of installers get you connected to our network',
    enjoy: 'Fast fibre internet'
  }
}

const getters = {
  editorEndpoint: (state, getters, rootState) => `${rootState.host}/content`
}

const mutations = {
  MAP_POINTS: (state, points) => { state.points = JSON.parse(JSON.stringify(points)) },
  MAP_POLYGONS: (state, polygons) => { state.polygons = JSON.parse(JSON.stringify(polygons)) }
}

const actions = {
  async GET_MAP_DATA ({ getters, commit }) {
    const [polygons, points] = await Promise.all((await Promise.all([
      fetch(getters.polygonsEndpoint),
      fetch(getters.pointsEndpoint)
    ])).map(response => response.json()))
    commit('MAP_POINTS', points)
    commit('MAP_POLYGONS', polygons)
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
