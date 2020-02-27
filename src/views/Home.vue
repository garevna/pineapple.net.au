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
      <section id="connect" class="my-12">
        <div class="text-center base-title mx-auto">
          <a href="#connect" class="core-goto"></a>
          <CheckAvailability/>
        </div>
      </section>

      <!-- ============================= ABOUT ============================= -->
      <a href="#about"></a>
      <section id="top" class="mb-12">
        <div class="base-title">
          <a href="#about" class="mr-2 d-inline-flex core-goto text--primary"></a>
          <v-row width="100%">
            <HomeFonePictures/>
          </v-row>
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

      <section id="about">
        <div class="base-title">
          <a href="#about" class="core-goto"></a>

        </div>
      </section>
    </v-content>

    <!-- ============================= FOOTER ============================= -->
    <v-footer width="100%" class="pt-12 px-0 pb-0 ma-0" style="padding: 0; margin-bottom:-10px; background-color: #E5E5E5">
      <v-card flat width="100%" color="transparent">
        <v-img src="@/assets/home/footer.png" width="100%"></v-img>
      </v-card>
    </v-footer>
  </v-container>
</template>

<style lang="scss">
main {
  padding: 0!important;
}
.green--text {
  color: #363636;
}
h1 {
  font-size: 46px;
  font-style: normal;
  line-height: 150%;
  font-weight: 900;
  letter-spacing: 0.02em;
}
h2 {
  font-size: 32px;
  font-style: normal;
  line-height: 150%;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.02em;
  color: #363636;
  width: 100%;
}
h3 {
  font-size: 28px;
  line-height: 150%;
}
h4 {
  font-size: 24px;
  color: #6D6D6D;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
}
@media (max-width: "600px"), (max-height: "600px") {
  h1 {
    font-size: 28px;
  }
}
</style>

<script>

import AppHeader from '@/components/home/AppHeader.vue'
import Top from '@/components/home/Top.vue'
import CheckAvailability from '@/components/home/CheckAvailability.vue'
import HomeFonePictures from '@/components/home/HomeFonePictures.vue'
import InternetPlans from '@/components/home/InternetPlans.vue'

export default {
  name: 'Home',
  components: {
    InternetPlans,
    AppHeader,
    Top,
    CheckAvailability,
    HomeFonePictures
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
