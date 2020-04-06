<template>
  <v-container fluid v-scroll="onScroll">
    <AppHeader :pages="pages" :selected.sync="page"/>
    <v-content tag="main" class="homefone">
      <!-- ============================= HOME ============================= -->
      <section id="top" class="mb-12">
        <div class="base-title">
          <a href="#top" class="mr-2 d-inline-flex core-goto text--primary"></a>
          <Top/>
        </div>
      </section>
      <!-- ============================= CHECK AVAILABILITY ============================= -->
      <section class="my-12">
        <div class="text-center base-title mx-auto">
          <CheckAvailability/>
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
          <InternetPlans :mode="plans"/>
        </div>
      </section>

      <!-- ============================= FOOTER ============================= -->
      <v-row width="100%">
        <HowToConnect/>
      </v-row>
      <v-row width="100%">
        <Testimonials/>
      </v-row>

      <section id="footer">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
            <v-row width="100%">
              <Footer :page.sync="page" :user.sync="user"/>
            </v-row>
        </div>
      </section>

    </v-content>
  </v-container>
</template>

<style>

</style>

<script>

import AppHeader from '@/components/home/AppHeader.vue'
import Top from '@/components/home/Top.vue'
import CheckAvailability from '@/components/home/CheckAvailability.vue'
import WhoAreWe from '@/components/home/WhoAreWeCircles.vue'
import InternetPlans from '@/components/home/InternetPlans.vue'
import Footer from '@/components/home/Footer.vue'
import HowToConnect from '@/components/home/HowToConnect.vue'
import SpeedTest from '@/components/home/SpeedTest.vue'
import Testimonials from '@/components/home/Testimonials.vue'

export default {
  name: 'Home',
  components: {
    InternetPlans,
    Top,
    CheckAvailability,
    WhoAreWe,
    Footer,
    HowToConnect,
    AppHeader,
    SpeedTest,
    Testimonials
  },
  data () {
    return {
      page: 0,
      pages: ['Home', 'About Us', 'Residential', 'Business', 'Connect', 'Contact Us', 'Sign In'],
      selectors: ['#top', '#about', '#plans', '#plans', '#connect', '#contact', null],
      user: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  computed: {
    plans () {
      return this.selectors[this.page] === '#plans' ? this.pages[this.page].toLowerCase() : 'residential'
    }
  },
  watch: {
    page (val) {
      // if (val === 0) return
      if (this.selectors[val] === '#connect') {
        this.$router.push({ name: 'plans' })
        return
      }
      if (this.selectors[val] === '#contact') {
        this.$router.push({ name: 'contact' })
        return
      }
      if (this.selectors[val]) {
        this.$vuetify.goTo(this.selectors[val], {
          duration: 500,
          offset: 0,
          easing: 'easeInOutCubic'
        })
      }
    },
    user (val) {
      console.log(val)
    }
  },
  methods: {
    onScroll (event) {
      const scrollValue = window.pageYOffset || document.documentElement.scrollTop
      if (scrollValue === 0) this.page = 0
    }
  },
  mounted () {
    this.page = this.$route.params.page || 0
  }
}
</script>
