import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      expand: 'mdi-expand-more',
      support: 'mdi-lifebuoy',
      steam: 'mdi-steam-box',
      pc: 'mdi-desktop-classic',
      xbox: 'mdi-xbox',
      playstation: 'mdi-playstation',
      switch: 'mdi-nintendo-switch'
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#4CAF50',
        secondary: '#75BE00',
        accent: '#4527A0',
        error: '#D32F2F',
        info: '#09b',
        warning: '#FF6F00',
        success: '#1B5E20',
        fone: '#75BE00'
      },
      dark: {
        primary: '#4CAF50',
        secondary: '#75BE00'
      }
    }
  }
})
