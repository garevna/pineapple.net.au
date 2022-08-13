/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/sass/fonts.scss'
import '@/sass/variables.scss'

import SuccessPopup from '@/components/check-availability/SuccessPopup.vue'
import FailurePopup from '@/components/check-availability/FailurePopup.vue'

Vue.component('success-popup', SuccessPopup)
Vue.component('failure-popup', FailurePopup)

const requireComponent = require.context('./components', false, /[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.split('/').pop().slice(0, -4)
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

window[Symbol.for('global.addressData')] = {
  address: '',
  addressComponents: {},
  coordinates: [],
  status: null
}

Vue.config.productionTip = false

Object.assign(Vue.prototype, {
  $geo: window.google.maps,
  $geoCoder: new window.google.maps.Geocoder(),
  $Autocomplete: window.google.maps.places.Autocomplete,
  $geoLocation: window.google.maps.geometry.poly.containsLocation,
  $openExternalLink (url) {
    window.open(url, 'blank')
  }
})

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
