<template>
  <v-app class="transparent" style="overflow: hidden">
    <AppHeader :section.sync="section" />

    <transition name="fade" mode="out-in">
      <router-view class="mt-12 mx-0 px-0"></router-view>
    </transition>
    <!-- ============================= FOOTER ============================= -->
    <section id="footer" class="homefone" v-if="$route.name !== 'contact'">
      <div class="base-title">
        <a href="#footer" class="core-goto"></a>
          <v-row width="100%">
            <Footer :page.sync="page" />
          </v-row>
      </div>
    </section>
  </v-app>
</template>

<script>

import 'pineapple-styles'

import { mapState, mapActions } from 'vuex'

// import AppHeader from '@/components/home/AppHeader.vue'
// import Footer from '@/components/home/Footer.vue'

/* HowToConnect */
import 'pineapple-how-to-connect'
import 'pineapple-how-to-connect/dist/pineapple-how-to-connect.css'

/* Testimonials */
import 'pineapple-testimonials'
import 'pineapple-testimonials/dist/pineapple-testimonials.css'

/* Popup */
import 'pineapple-popup'
import 'pineapple-popup/dist/pineapple-popup.css'

export default {
  name: 'App',
  components: {
    AppHeader: () => import('@/components/home/AppHeader.vue'),
    Footer: () => import('@/components/home/Footer.vue')
  },

  data: () => ({
    page: 0,
    section: '#top',
    contactUs: false,
    getConnected: false
  }),

  computed: {
    ...mapState(['plan', 'pages', 'selectors', 'contactEndpoint', 'connectEndpoint', 'signInEndpoint']),
    ...mapState('map', ['serviceAvailable'])
  },

  methods: {
    ...mapActions({
      getGeneralInfo: 'GET_GENERAL_INFO',
      // getPlans: 'internetPlans/GET_PRICES',
      getAvailable: 'map/GET_AVAILABLE',
      getReviews: 'testimonials/GET_CONTENT'
    }),
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
  },

  beforeMount () {
    this.getGeneralInfo()
    // this.getPlans()
    this.getReviews()
  },

  mounted () {
    this.getAvailable()
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>

<style>

html, body {
  width: 100%;
  max-width: 100%;
}

.container.fill-height>.row {
  max-width: 100%!important;
}

.container,
.container--fluid,
.container.fill-height {
  padding: 0!important;
}

.v-main {
  padding-top: 50px !important;
}

.green--text {
  color: #363636;
}

h1, h2, h3, h4, h5, p, a, div, figure, section {
  user-select: none;
}

h1, h2, h3, h4, h5, p {
  font-style: normal;
  line-height: 150%;
  letter-spacing: 0.02em;
}
h1 {
  font-size: 46px;
  font-weight: 900;
}
h2 {
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  color: #363636;
  width: 100%;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 24px;
  color: #6D6D6D;
  font-weight: normal;
}

p {
  font-size: 16px;
  font-weight: normal;
}

.row {
  margin-left: 0!important;
  margin-right: 0!important;
}

svg.defs-only {
  display: block;
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
}

@media (max-width: 600px), (max-height: 600px) {
  h1 { font-size: 28px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4 { font-size: 18px; }
  p { font-size: 16px; }
}

@media (max-width: 400px), (max-height: 400px) {
  h1 { font-size: 26px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4 { font-size: 16px; }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #20731C;
}
::-webkit-scrollbar-thumb {
  background: #4CAF50;
}
::-webkit-scrollbar-thumb:hover {
  background: #72BF44;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
