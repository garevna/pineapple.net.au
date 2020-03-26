/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  officeCoords: null,
  serviceAvailable: null,
  markerImage: 'img/icons/marker-25x34.png'
}

const getters = {
  officeAddress: (state, getters, rootState) => rootState.officeAddress.split(' ').join('+')
}

const mutations = {
  AVAILABLE_POLYGONS: (state, polygons) => { state.serviceAvailable = polygons },
  OFFICE_COORDS: (state, coords) => { state.officeCoords = coords }
}

const actions = {

  async GET_AVAILABLE ({ getters, commit }) {
    const polygons = []
    const response = await (await fetch('https://dka.dgtek.net/api/frontend/polygons')).json()
    const areas = response.features
      .filter(feature => feature.properties.typeOf === 'ServiceAvailable')
      .map(feature => feature.geometry.coordinates)
    for (const area of areas) {
      const [points] = area
      const coords = points.map(point => ({ lat: point[1], lng: point[0] }))
      const polygon = new window.google.maps.Polygon({ paths: coords })
      polygons.push(polygon)
    }
    commit('AVAILABLE_POLYGONS', polygons)
  },

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
