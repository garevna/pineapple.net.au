
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
    console.log('ENDPOINT: ', getters.officeEndpoint)
    const result = (await (await fetch(getters.officeEndpoint)).json()).results[0]
    commit('OFFICE_COORDS', result.geometry.location)
    console.log(result.geometry.location)
    return {
      lat: result.geometry.location.lat,
      lon: result.geometry.location.lon
    }
  },
  async GET_COORDS_BY_ADDRESS ({ state, getters }, address) {
    const endpoint = `${state.staticPartOfEndpoint}${address}${state.keyPartOfEndpoint}`
    const result = (await (await fetch(endpoint)).json()).results[0]
    console.log(result)
    return result
  },
  /* eslint-disable no-console */
  async WRITE_FILE ({ getters, commit }, { filePath, fileContent }) {
    const formData = new FormData()
    formData.set('content', JSON.stringify(fileContent))
    const response = await (
      fetch(filePath, {
        method: 'POST',
        body: formData
      }).catch(err => console.warn(err))
    )
    return response
  },

  async WRITE_POINTS ({ state, getters, dispatch }) {
    const response = await dispatch('WRITE_FILE', {
      filePath: `${getters.markersEndpoint}/points.json`,
      fileContent: state.points
    })
    console.log(response)
  },

  async WRITE_POLYGONS ({ state, getters, dispatch }) {
    const response = await dispatch('WRITE_FILE', {
      filePath: `${getters.markersEndpoint}/polygons.json`,
      fileContent: state.polygons
    })
    console.log(response)
  },

  async SAVE_POLYGONS ({ getters, commit }, polygons) {
    const response = await fetch(getters.polygonsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(polygons)
    })
    /* eslint-disable-next-line */
    console.log(response)
    return response
  },

  async GET_POINTS ({ state, getters, commit }) {
    commit('MAP_POINTS', await (await fetch(getters.pointsEndpoint)).json())
    return state.points
  },

  async SAVE_POINTS ({ getters, commit }, points) {
    const response = await fetch(getters.pointsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(points)
    })
    /* eslint-disable-next-line */
    console.log(response)
    return response
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
