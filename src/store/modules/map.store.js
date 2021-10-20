/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  officeCoords: null,
  serviceAvailable: null,
  markerImage: 'img/icons/marker-25x34.png',

  status: 'Not available'
}

const getters = {
  officeAddress: (state, getters, rootState) => rootState.officeAddress.split(' ').join('+')
}

const mutations = {
  SET_STATUS: (state, value) => { state.status = value }
}

const actions = {
  async GET_OFFICE_COORDS ({ getters, commit }) {
    const result = (await (await fetch(getters.officeEndpoint)).json()).results[0]
    commit('OFFICE_COORDS', result.geometry.location)
    return {
      lat: result.geometry.location.lat,
      lon: result.geometry.location.lon
    }
  },
  async GET_COORDS_BY_ADDRESS ({ state, getters }, address) {
    const endpoint = `${state.staticPartOfEndpoint}${address}${state.keyPartOfEndpoint}`
    const result = (await (await fetch(endpoint)).json()).results[0]
    return result
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
