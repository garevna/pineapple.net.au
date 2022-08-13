import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      expand: 'mdi-expand-more',
      home: 'mdi-home-circle',
      prev: 'mdi-arrow-left-bold-box-outline',
      next: 'mdi-arrow-right-bold-box-outline'
    }
  },
  directives: {
    Ripple
  },
  theme: {
    themes: {
      light: {
        primary: '#4CAF50',
        secondary: '#75BE00',
        buttons: '#72BF44',
        greentext: '#20731C',
        deepgreen: '#20731C',
        homefone: '#FAFAFA',
        plansfone: '#E5FDD7',
        warning: '#FAFF00'
      },
      dark: {
        primary: '#4CAF50',
        secondary: '#75BE00',
        buttons: '#72BF44',
        greentext: '#20731C',
        deepgreen: '#20731C',
        homefone: '#FAFAFA',
        plansfone: '#E5FDD7',
        warning: '#FAFF00'
      }
    }
  }
})
