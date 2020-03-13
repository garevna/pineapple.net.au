<template>
  <v-container fluid>
    <AppHeader :pages="pages" :selected.sync="page"/>
    <v-content class="contact-fone">
      <v-row class="mx-auto">
        <v-col cols="12" md="4">
          <v-card flat class="transparent mx-auto" max-width="300">
            <v-card-title>
              <h1>Feel free to contact us anytime</h1>
            </v-card-title>
            <v-card-text>
              <h3>address</h3>
              <p>Unit 127/1 Queens Rd, Melbourne VIC</p>
              <p>1300 857 501</p>
              <p><small>Let's connect</small></p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" class="mx-auto">
          <v-card flat class="transparent mx-auto" max-width="700">
            <v-row>
              <v-col cols="12" md="6">
                <p><b>Full name</b></p>
                <v-text-field
                        dence
                        outlined
                        v-model="fullName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <p><b>Email</b></p>
                <v-text-field
                        dence
                        outlined
                        v-model="email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <p><b>Your enquiry</b></p>
                <v-textarea
                        outlined
                        width="80%"
                        height="110"
                        value=""
                        v-model="message"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                    color="buttons"
                    dark
                    rounded
                    width="220"
                    height="40"
                    class="my-10"
                    @click="sendMessage"
                >
                  Send message
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row style="position: relative">
        <!-- ============================= FOOTER && MAP ============================= -->
        <FooterFone style="position: absolute; top: 0; left:0;"/>
        <Map :height="mapHeight" :width="mapWidth" :margin="mapMargin" style="position: absolute; top: 40px; left:0;"/>
        <FooterBottomContent  v-if="viewportWidth >= 770" class="footer-bottom-content" style="top: 610px;" />
        <FooterBottomContentSmall v-if="viewportWidth < 770" class="footer-bottom-content" :style="{ top: bottomContentTop }" />
      </v-row>
    </v-content>
  </v-container>
</template>

<style scoped>
.footer-bottom-content {
  position: absolute;
  overflow: hidden;
}
.contact-fone {
  margin-top: 120px!important;
}
h3, p, small {
  text-align: left;
}
</style>

<script>

import { mapState } from 'vuex'

import AppHeader from '@/components/home/AppHeader.vue'
import FooterFone from '@/components/footer/FooterFone.vue'
import Map from '@/components/map/Map.vue'
import FooterBottomContent from '@/components/footer/BottomContent.vue'
import FooterBottomContentSmall from '@/components/footer/BottomContentSmall.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    FooterFone,
    FooterBottomContent,
    FooterBottomContentSmall,
    Map
  },
  data () {
    return {
      page: 0,
      pages: ['Home', 'About Us', 'Residential', 'Business', 'Connect', 'Contact Us', 'Sign In'],
      fullName: '',
      email: '',
      message: ''
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    plans () {
      return this.selectors[this.page] === '#plans' ? this.pages[this.page].toLowerCase() : 'residential'
    },
    mapHeight () {
      return this.viewportWidth <= 420 ? '300px' : '570px'
    },
    bottomContentTop () {
      return this.viewportWidth <= 420 ? '360px' : '620px'
    },
    mapWidth () {
      return this.viewportWidth <= 420 ? '100%' : '80%'
    },
    mapMargin () {
      return this.viewportWidth <= 420 ? '0%' : '10%'
    }
  },
  watch: {
    page (val) {
      if (this.pages[val] === 'Contact Us') return
      if (this.pages[val] === 'Connect') {
        this.$router.push({ name: 'plans' })
        return
      }
      this.$router.push({ name: 'home', params: { page: val } })
    }
  },
  methods: {
    sendMessage () {
      console.log(this.fullName, this.email, this.message)
    }
  },
  mounted () {
    //
  }
}
</script>
