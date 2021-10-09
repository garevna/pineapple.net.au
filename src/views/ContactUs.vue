<template>
  <v-container fluid class="homefone">
    <v-main class="contact-fone">
      <v-progress-linear
        color="primary"
        :active="progress"
        :indeterminate="progress"
      ></v-progress-linear>
      <v-row class="mx-auto">
        <v-col cols="12" md="4">
          <v-card flat class="transparent mx-auto" max-width="300">
            <v-card-title>
              <h1 d-none d-md-block>Feel free to contact us anytime</h1>
            </v-card-title>
            <v-card-text>
              <h3>address</h3>
              <p>{{ officeAddress }}</p>
              <p>{{ officePhone }}</p>
              <p><small>Let's connect</small></p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" class="mx-auto">
          <ContactForm :invalidFormData.sync="invalidFormData" />
        </v-col>
      </v-row>
      <!-- ============================= FOOTER && MAP ============================= -->
      <Map :height.sync="mapHeight" />
    </v-main>
    <Popup :opened.sync="popupOpened" :type="popupType" />
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'ContactUs',
  components: {
    ContactForm: () => import('@/components/contact/ContactForm.vue'),
    Map: () => import('@/components/map/Map.vue')
  },
  data () {
    return {
      page: null,
      popupType: undefined,
      popupOpened: false,
      mapHeight: 0,
      invalidFormData: false
    }
  },

  watch: {
    progress (newVal, oldVal) {
      this.popupType = this.response ? 'success' : 'error'
      this.popupOpened = !newVal && oldVal
    },
    invalidFormData (val) {
      if (val) {
        this.popupType = 'error'
        this.popupOpened = true
      }
    }
  },

  computed: {
    ...mapState(['viewportWidth', 'officeAddress', 'officePhone', 'connectEndpoint', 'signInEndpoint']),
    ...mapState('contact', ['progress', 'response'])
  },

  mounted () {
    this.$vuetify.goTo(0)
  }
}
</script>

<style scoped>

.contact-fone {
  margin-top: 160px!important;
  padding-top: 0px!important;
}

@media screen and (max-width: 420px) {
  .contact-fone {
    margin-top: 64px!important;
  }
}
</style>
