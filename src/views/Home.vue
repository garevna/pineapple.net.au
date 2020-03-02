<template>
  <v-container fluid>
    <AppHeader :pages="pages" :selected.sync="page"/>
    <v-content tag="main" style="background: #E5E5E5;">
      <!-- ============================= HOME ============================= -->
      <section id="top" class="mb-12">
        <div class="base-title">
          <a href="#top" class="mr-2 d-inline-flex core-goto text--primary"></a>
          <Top/>
        </div>
      </section>
      <!-- ============================= CHECK AVAILABILITY ============================= -->
      <!-- <section id="connect" class="my-12">
        <div class="text-center base-title mx-auto">
          <a href="#connect" class="core-goto"></a>
          <CheckAvailability/>
        </div>
      </section> -->

      <!-- ============================= ABOUT ============================= -->
      <a href="#about"></a>
      <section id="top" class="mb-12">
        <div class="base-title">
          <a href="#about" class="mr-2 d-inline-flex core-goto text--primary"></a>
          <CentralFone/>
        </div>
      </section>

      <!-- ============================= INTERNET PLANS  ============================= -->
      <section id="plans">
        <div class="base-title">
          <a href="#plans" class="core-goto"></a>
          <InternetPlans :mode="plans"/>
        </div>
      </section>

      <!-- ============================= ABOUT ============================= -->

      <!-- <section id="about">
        <div class="base-title">
          <a href="#about" class="core-goto"></a>
            <v-row width="100%">
              <HomeFonePictures/>
            </v-row>
        </div>
      </section> -->

      <!-- ============================= FOOTER ============================= -->
      <section id="connect">
        <div class="base-title">
          <a href="#connect" class="core-goto"></a>
            <HowToConnect/>
            <v-row width="100%">
              <Footer/>
            </v-row>
        </div>
      </section>
    </v-content>
  </v-container>
</template>

<style lang="scss">

</style>

<script>

import AppHeader from '@/components/home/AppHeader.vue'
import Top from '@/components/home/Top.vue'
// import CheckAvailability from '@/components/home/CheckAvailability.vue'
// import HomeFonePictures from '@/components/home/HomeFonePictures.vue'
import CentralFone from '@/components/home/CentralFone.vue'
import InternetPlans from '@/components/home/InternetPlans.vue'
import Footer from '@/components/home/Footer.vue'
import HowToConnect from '@/components/home/HowToConnect.vue'

export default {
  name: 'Home',
  components: {
    InternetPlans,
    AppHeader,
    Top,
    // CheckAvailability,
    // HomeFonePictures,
    CentralFone,
    Footer,
    HowToConnect
  },
  data () {
    return {
      page: 0,
      plans: 'residential',
      pages: ['Home', 'About Us', 'Residential', 'Business', 'Connect', 'Contact Us', 'Sign In'],
      selectors: ['#top', '#about', '#plans', '#plans', '#connect', null, null]
    }
  },
  watch: {
    page (val) {
      if (val === 0) return
      console.log(val, this.selectors[val])
      if (this.pages[val] === 'Residential' || this.pages[val] === 'Business') {
        this.plans = this.pages[val].toLowerCase()
      }
      if (this.selectors[val]) {
        this.$vuetify.goTo(this.selectors[val], {
          duration: 500,
          offset: 0,
          easing: 'easeInOutCubic'
        })
      }
    }
  },
  mounted () {
    this.plans = 'residentials'
  }
}
</script>
