/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  top: {
    text: 'Based on a comparison with speeds listed in the ACCC Broadband Performance Data Report'
  },
  footer: {
    topHead: 'READY TO GET STARTED?',
    topText: 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
  },
  about: 'Pineapple Net is an Australian Internet service provider offering the fastest and most affordable fibre optic connection to business and residential customers.',
  copyright: 'Copyright © 2020 MyISP pty ltd ABN 12 644 398 603',
  whoAreWe: 'Pineapple Net is an authorised retail service provider. Our fibre optic broadband is a superior alternative to the NBN.',
  speedTest: {
    text: [
      'With speeds up to 1000Mbps, say goodbye to buffering, enjoy crystal clear video streaming, low latency and superior gaming capability. Talk to family and friends without worrying about call quality.',
      'All Pineapple Net packages include unlimited data with no interruption. Our customers never experience evening congestion and enjoy 99.6% uptime.'
    ]
  },
  howToConnect: {
    header: '',
    text: '',
    button: null,
    items: [
      {
        icon: 'https://api.pineapple.net.au/icons/icon-1.svg',
        title: 'Contact Us',
        text: 'Get in touch to find out if Pineapple is available at your address'
      },
      {
        icon: 'https://api.pineapple.net.au/icons/icon-2.svg',
        title: 'Get connected',
        text: 'Our team of installers get you connected to our network'
      },
      {
        icon: 'https://api.pineapple.net.au/icons/icon-3.svg',
        title: 'Enjoy',
        text: 'Fast fibre internet'
      }
    ]
  },

  checkAddress: {
    text: 'Enter your address to find out if Pineapple Net is available',
    placeholder: 'Enter your address',
    buttonText: 'Check Now'
  },

  internetPlans: {
    text: `Zero connection fee with 12 month plans<br>
          Commitment issues? month-to-month plans also available`
  },

  testimonials: {
    header: ''
  },

  covidLand: {
    text: 'As a Telecommunications company, installers have permission to work during Stage 4 restrictions and are taking heed of advice from the Chief Health Officer of Victoria. Your health and the health of our installation team is crucial to us. To prevent the spread of COVID-19, our onsite installers at all times will be required to:',
    covidList: [
      'Wear PPE such as masks and gloves',
      'Have a maximum of three installers per team',
      'Keep physical distance where possible of 1.5m',
      'Keep the COVIDSafe App running',
      'Not attend site if they experience any cold and/or flu like symptoms or if they have been in contact with anyone who has tested positive for COVID-19 in the past 14 days. '
    ],
    responsibilitiesText: 'We ask you to please be mindful and follow the precautions below when expecting an install team in your home or office. ',
    responsibilitiesList: [
      'Please wear your own mask when our installation team is present in your home.',
      'Please keep 1.5m physical distance where possible.',
      'If someone in your household returns a positive COVID-19 test, is awaiting test results, or begins suffering from cold/flu symptoms ,please inform us promptly so we can rescheule your installation.',
      'Inform us if someone in your household has been overseas in the last 14 days so we can reschedule your installation.'

    ]
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
