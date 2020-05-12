/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/sass/fonts.scss'
import '@/sass/variables.scss'

Vue.config.productionTip = false

Vue.prototype.$geo = window.google.maps
Vue.prototype.$geoCoder = new window.google.maps.Geocoder()
Vue.prototype.$Autocomplete = window.google.maps.places.Autocomplete
Vue.prototype.$geoLocation = window.google.maps.geometry.poly.containsLocation

Vue.prototype.$openExternalLink = function (url) {
  window.open(url, 'blank')
}

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
