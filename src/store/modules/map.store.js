
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  key: 'AIzaSyBVql75Qc_Y5oGvrxdcNRNMhBlZEzTdk1o',
  officeAddress: 'Unit 127/1 Queens Rd, Melbourne VIC',
  staticPartOfEndpoint: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
  keyPartOfEndpoint: ',+CA&key=AIzaSyBVql75Qc_Y5oGvrxdcNRNMhBlZEzTdk1o',
  officeCoords: null
}

const getters = {
  officeAddress: state => state.officeAddress.split(' ').join('+'),
  officeEndpoint: (state, getters) => `https://maps.googleapis.com/maps/api/geocode/json?address=${getters.officeAddress},+CA&key=${state.key}`
  // https://maps.googleapis.com/maps/api/geocode/json?address=Unit+127/1+Queens+Rd,+Melbourne+VIC,+CA&key=AIzaSyBVql75Qc_Y5oGvrxdcNRNMhBlZEzTdk1o
}

const mutations = {
  OFFICE_COORDS: (state, coords) => { state.officeCoords = coords }
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
