<template>
<v-container fluid class="footer--bottom-content">
  <v-row width="100%" justify="center" class="mx-auto">
    <v-col style="min-width: 340px; max-width: 340px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">ABOUT PINEAPPLE NET</p>
        </v-card-title>
        <v-card-text>
          <p class="left-14">{{ about }}</p>
          <p class="left-14">{{ officeAddress }}</p>
          <p class="left-14">
            <span width="10" height="10" class="mr-2" style="display: inline-block;">
              <v-img src="@/assets/icons/phone.svg" width="10" height="10" contain></v-img>
            </span>
            {{ officePhone }}
          </p>
          <p class="left-14">{{ officeEmail }}</p>
          <p class="left-14">ABN: {{ officeABN }}</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col style="max-width: 180px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">COMPANY</p>
        </v-card-title>
        <v-card-text>
          <p class="left-14 ref" @click="goto(0)">Home</p>
          <p class="left-14 ref" @click="goto(1)">About</p>
          <!-- <p class="left-14 ref" @click="goto(2)">Residential</p>
          <p class="left-14 ref" @click="goto(3)">Business</p> -->
          <!-- <p class="left-14 ref" @click="$openExternalLink(connectEndpoint, '_blank')">Connect</p> -->
          <p
            v-if="$route.name !== 'contact'"
            @click="$router.push({ name: 'contact' })"
            class="left-14 ref"
          >
            Contact Us
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col style="max-width: 180px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">PRODUCTS</p>
        </v-card-title>
        <v-card-text>
          <p class="left-14 ref" @click="goto(2)">Residential Internet</p>
          <p class="left-14 ref" @click="goto(3)">Business Internet</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col style="max-width: 420px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">CONNECT</p>
        </v-card-title>
        <v-card-text>
          <p class="left-14 ref" @click="$openExternalLink(faceBook)">
            <v-img src="@/assets/icons/facebook.svg" class="icon"></v-img>Facebook
          </p>
          <p class="left-14 ref" @click="$openExternalLink(linkedIn)">
            <v-img src="@/assets/icons/linkedin.svg" class="icon"></v-img> Linkedin
          </p>
          <br style="font-size: 9px">
          <p class="left-14 ref" @click="$openExternalLink('/pdf/service-agreement.pdf')">
            <v-icon small color="#fff">mdi-file-pdf-box</v-icon>
            Service Agreement
          </p>
          <br style="font-size: 9px">
          <p class="left-14 ref" @click="$openExternalLink('/pdf/privacy-policy.pdf')">
            <v-icon small color="#fff">mdi-file-pdf-box</v-icon>
            Privacy Policy
          </p>
          <p class="left-14 ref" @click="$openExternalLink('/pdf/complaints-policy.pdf')">
            <v-icon small color="#fff">mdi-file-pdf-box</v-icon>
            Complaints Policy
          </p>
          <p class="left-14 ref" @click="$openExternalLink('/pdf/financial-hardship-policy.pdf')">
            <v-icon small color="#fff">mdi-file-pdf-box</v-icon>
            Financial Hardship Policy
          </p>
          <p class="left-14 ref" @click="$openExternalLink('/pdf/appointment-of-authorised-representative.pdf')">
            <v-icon small color="#fff">mdi-file-pdf-box</v-icon>
            Appointment of Authorised Representative
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'FooterBottomContent',
  computed: {
    ...mapState(['officePhone', 'officeAddress', 'officeEmail', 'officeABN', 'linkedIn', 'faceBook', 'connectEndpoint', 'signInEndpoint', 'pages', 'selectors']),
    ...mapState('content', ['about', 'copyright'])
  },
  methods: {
    openNewWindow (target) {
      this.$openExternalLink(target)
    },

    goto (index) {
      if (index === undefined) return
      // if (this.selectors[index] === 'sign-in') {
      //   this.$openExternalLink(this.signInEndpoint)
      //   this.$emit('update:section', undefined)
      //   return
      // }
      // if (this.selectors[index] === 'connect') {
      //   this.$openExternalLink(this.connectEndpoint)
      //   this.$emit('update:section', undefined)
      //   return
      // }
      // if (this.selectors[index] === 'contact') {
      //   this.$router.push({ name: 'contact', params: { section: null } })
      //   this.$emit('update:section', undefined)
      //   return
      // }

      if (this.$route.path === `/${this.selectors[index]}`) {
        this.$vuetify.goTo(`#${this.selectors[index]}`, {
          duration: 500,
          offset: 0,
          easing: 'easeInOutCubic'
        })
      } else this.$router.push({ name: 'home', params: { section: this.selectors[index] } })
      if (this.selectors[index] === 'plans') this.$store.commit('CHANGE_PLAN', this.pages[index].toLowerCase())
    }
  }
}
</script>

<style scoped>

.left-14 {
  font-size: 13px !important;
}

.footer--bottom-content {
  position: absolute;
  left: 0;
  /* overflow: hidden; */
  margin-bottom: -4px;
  bottom: 40px;
}

p {
  line-height: 140% !important;
  margin: 0;
}
</style>
