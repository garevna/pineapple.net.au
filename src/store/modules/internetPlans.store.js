/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const state = {
  endpoint: 'https://api.pineapple.net.au/content/plans',
  external: 'https://pineapple.chargebee.com/hosted_pages/plans',
  plans: {
    residential: [
      { name: 'Budget', upload: 50, download: 50, price: 50, tariffId: 'residential-50', selected: false },
      { name: 'Boost', upload: 150, download: 150, price: 69, tariffId: 'residential-150', selected: false },
      { name: 'Budget', upload: 250, download: 250, price: 99, tariffId: 'residential-250', selected: false },
      { name: 'Budget', upload: 500, download: 500, price: 140, tariffId: 'residential-500', selected: false },
      { name: 'Budget', upload: 1000, download: 1000, price: 250, tariffId: 'residential-1000', selected: false }
    ],
    business: [
      { name: 'Boost', upload: 150, download: 150, price: 150, tariffId: 'commercial-150', selected: false },
      { name: 'Accelerate', upload: 250, download: 250, price: 200, tariffId: 'commercial-250', selected: false },
      { name: 'Premium', upload: 500, download: 500, price: 240, tariffId: 'commercial-500', selected: false },
      { name: 'Ultimate', upload: 1000, download: 1000, price: 500, tariffId: 'commercial-1000', selected: false }
    ]
  },
  packages: {
    residential: [
      {
        title: 'MONTH/MONTH',
        subtitle: '',
        text: [
          'No-lock in contract',
          'Gigabit Router',
          'Connection Fee $99'
        ],
        priceText: 'Total Payable Today:',
        price: 99,
        confirmation: [
          'You are signing up for a Pineapple Net Internet Service at ',
          'By ticking the box below, you agree to our Terms and Conditions and for your payment method provided to be debited the cost of the set-up fee, and for the details to be stored on your account for future monthly billing purposes.',
          'A one-time set-up fee of $99 will be charged to your provided payment method upon receipt of this confirmation.'
        ],
        id: ''
      },
      {
        title: '6 Months Contract',
        subtitle: '',
        text: [
          'Gigabit Router',
          'Connection Fee',
          'First month of service free'
        ],
        priceText: 'Total Payable Today:',
        price: 0,
        confirmation: [
          'You are signing up for a Pineapple Net Internet Service at ',
          'By ticking the box below, you confirm to sign a contract for the term selected. A $220 disconnection fee applies if contract is terminated earlier than the contract expiry date. The contract will begin on the day your connection becomes active.',
          'You agree to our Terms and Conditions and for your payment method provided to be stored on your account for future monthly billing purposes.'
        ],
        id: '-6m-1m'
      },
      {
        title: '12 Months Contract',
        subtitle: '(Most Popular!)',
        text: [
          'Gigabit Router',
          'Connection Fee',
          'First 3 months of service free'
        ],
        priceText: 'Total Payable Today:',
        price: 0,
        confirmation: [
          'You are signing up for a Pineapple Net Internet Service at ',
          'By ticking the box below, you confirm to sign a contract for the term selected. A $220 disconnection fee applies if contract is terminated earlier than the contract expiry date. The contract will begin on the day your connection becomes active.',
          'You agree to our Terms and Conditions and for your payment method provided to be stored on your account for future monthly billing purposes.'
        ],
        id: '-12m-3m'
      }
    ],
    commercial: [
      {
        title: 'MONTH/MONTH',
        subtitle: '',
        text: [
          'No-lock in contract',
          'Gigabit Router',
          'Connection Fee $290'
        ],
        priceText: 'Total Payable Today:',
        price: 290,
        confirmation: [
          'You are signing up for a Pineapple Net Internet Service at ',
          'By ticking the box below, you agree to our Terms and Conditions and for your payment method provided to be debited the cost of the set-up fee, and for the details to be stored on your account for future monthly billing purposes.',
          'A one-time set-up fee of $290 will be charged to your provided payment method upon receipt of this confirmation.'
        ],
        id: ''
      },
      {
        title: '12 Months Contract',
        subtitle: '(Most Popular!)',
        text: [
          'Gigabit Router',
          'Connection Fee'
        ],
        priceText: 'Total Payable Today:',
        price: 0,
        confirmation: [
          'You are signing up for a Pineapple Net Internet Service at ',
          'By ticking the box below, you confirm to sign a contract for the term selected. Early contract break terms will be specified in the contract. The contract will begin on the day your connection becomes active.',
          'You agree to our Terms and Conditions and for your payment method provided to be stored on your account for future monthly billing purposes.'
        ],
        id: '-12m'
      }
    ]
  },
  occupancyTypes: [
    'Single Dwelling House',
    'Multi Dwelling Unit',
    'Apartment complex',
    'Business Park',
    'Office Building'
  ],
  infoSources: [
    'Google',
    'Friend',
    'Facebook',
    'Instagram',
    'LinkedIn'
  ]
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  planName: (state, getters) => getters.plan === 'business' ? 'commercial' : getters.plan,
  tariff: (state, getters) => state.plans[getters.plan].find(item => item.selected)?.tariffId,
  package: (state, getters) => (packageIndex) => state.packages[getters.planName][packageIndex].id,
  link: (state, getters) => (packageNum) => getters.tariff ? `${state.external}/${getters.tariff}${getters.package(packageNum)}` : null
}

const mutations = {
  // UPDATE_INTERNET_PLANS: (state, payload) => {
  //   state.plans = payload
  // },
}

const actions = {

  // async GET_PRICES ({ state, commit }, payload) {
  //   const { plans } = await (await fetch(state.endpoint)).json()
  //   commit('UPDATE_INTERNET_PLANS', plans)
  // },

  SELECT_PLAN ({ commit }, payload) {
    commit('CHANGE_PLAN', payload, { root: true })
  },

  SELECT_TARIFF ({ state, getters }, tariffIndex) {
    state.plans.residential.forEach((tariff) => { tariff.selected = false })
    state.plans.business.forEach((tariff) => { tariff.selected = false })
    state.plans[getters.plan][tariffIndex].selected = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
