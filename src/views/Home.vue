<template>
  <v-container fluid v-scroll="onScroll">
    <!-- <AppHeader :pages="pages" :selected.sync="page"/> -->
    <v-main tag="main" class="homefone">
      <!-- ============================= HOME ============================= -->
      <section id="top" class="mb-12">
        <div class="base-title">
          <a href="#top" class="mr-2 d-inline-flex core-goto text--primary"></a>
          <!-- <CovidInfo /> -->
          <Top />
        </div>
      </section>
      <!-- ============================= CHECK AVAILABILITY ============================= -->
      <section id="check" class="my-12">
        <div class="base-title">
          <a href="#check" class="mr-2 d-inline-flex core-goto text--primary"></a>
          <CheckAvailability
              :residential.sync="residential"
              :business.sync="business"
              :contact.sync="contactUs"
          />
        </div>
        <SpeedTest/>
      </section>

      <!-- ============================= ABOUT ============================= -->
      <section id="about" class="mb-12">
        <div class="base-title">
          <a href="#about" class="mr-2 d-inline-flex core-goto text--primary"></a>
          <WhoAreWe/>
        </div>
      </section>

      <!-- ============================= INTERNET PLANS  ============================= -->
      <section id="plans">
        <div class="base-title">
          <a href="#plans" class="core-goto"></a>
          <InternetPlans
            :connect.sync="getConnected"
            :contact.sync="contactUs"
          />
        </div>

        <v-row justify="center">
          <p
            v-if="showResidentialButton"
            @click="$openExternalLink('/pdf/residential-critical-information-summary.pdf')"
            style="cursor: pointer"
          >
            <v-icon>mdi-file-pdf-box</v-icon>
            Residential Critical Information Summary
          </p>
          <p
            v-if="showBusinessButton"
            @click="$openExternalLink('/pdf/business-critical-information-summary.pdf')"
            style="cursor: pointer"
          >
            <v-icon>mdi-file-pdf-box</v-icon>
            Business Critical Information Summary
          </p>
        </v-row>

      </section>

      <!-- ============================= POWERED BY ============================= -->
      <v-row width="100%">
        <PoweredByDGtek />
      </v-row>

      <!-- ============================= HOW TO CONNECT ============================= -->
      <v-row>
        <section id="how-to-connect">
          <div class="base-title">
            <a href="#how-to-connect" class="core-goto"></a>
            <HowToConnect
                :clicked.sync="howToConnectClicked"
                :contact.sync="contactUs"
                :connect.sync="getConnected"
            />
          </div>
        </section>
      </v-row>

      <!-- ============================= TESTIMONIALS ============================= -->
      <v-row width="100%">
        <Testimonials />
      </v-row>
    </v-main>

  </v-container>
</template>

<style scoped>
section {
  width: 100%;
}
</style>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    // CovidInfo: () => import(/* webpackChunkName: "covid" */ '@/components/home/CovidInfo.vue'),
    Top: () => import(/* webpackChunkName: "top" */ '@/components/home/Top.vue'),
    // CheckAvailability: () => import(/* webpackChunkName: "CheckAvailability" */ '@/components/home/CheckAvailability.vue'),
    PoweredByDGtek: () => import(/* webpackChunkName: "PoweredByDGtek" */ '@/components/home/GreenSection.vue'),
    WhoAreWe: () => import(/* webpackChunkName: "WhoAreWe" */ '@/components/home/WhoAreWeCircles.vue'),
    SpeedTest: () => import(/* webpackChunkName: "SpeedTest" */ '@/components/home/SpeedTest.vue'),
    InternetPlans: () => import(/* webpackChunkName: "InternetPlans" */ '@/components/home/InternetPlans.vue')
  },
  props: ['section'],
  data () {
    return {
      path: '/top',
      howToConnectClicked: 0,
      contactUs: false,
      getConnected: false,
      business: false,
      residential: false
    }
  },

  computed: {
    ...mapState(['plan', 'pages', 'selectors', 'contactEndpoint', 'connectEndpoint', 'signInEndpoint']),
    ...mapGetters('clientInfo', ['address', 'addressAvailable']),
    showResidentialButton () {
      return this.plan === 'residential'
    },
    showBusinessButton () {
      return this.plan === 'business'
    }
  },

  watch: {
    $route: {
      deep: true,
      handler (route) {
        if (route.path === '/contact') return
        this.scrollToRoute(route.path.split('/').join('#'))
      }
    },

    howToConnectClicked (val) {
      if (!val) return
      if (val === 1) this.$router.push({ name: 'contact' })
      if (val === 2) this.$openExternalLink(this.connectEndpoint)
    },

    business (val) {
      if (val) {
        this.$store.commit('CHANGE_PLAN', 'business')
        if (this.$route.path !== '/plans') this.$router.push({ name: 'home', params: { section: 'plans' } })
        else this.scrollToRoute('#plans')
        this.business = false
      }
    },

    residential (val) {
      if (!val) return
      this.$store.commit('CHANGE_PLAN', 'residential')
      if (this.$route.path !== '/plans') this.$router.push({ name: 'home', params: { section: 'plans' } })
      else this.scrollToRoute('#plans')
      this.residential = false
    },

    contactUs (val) {
      if (!val) return
      this.$router.push({ name: 'contact' })
      this.contactUs = false
    }
  },

  methods: {
    onScroll (event) {
      const scrollValue = window.pageYOffset || document.documentElement.scrollTop
      if (scrollValue === 0) this.page = 0
    },

    scrollToRoute (route) {
      this.$vuetify.goTo(route, {
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    }
  },

  mounted () {
    this.page = this.$route.params.page || 0
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      const sectionName = to.path.split('/')
      const section = !sectionName[1] ? '#top' : sectionName.join('#')
      vm.$vuetify.goTo(section, {
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    })
  }
}
</script>
