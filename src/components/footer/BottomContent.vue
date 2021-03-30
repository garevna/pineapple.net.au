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
          <p class="left-14 ref" @click="$router.push({ name: 'contact' })">Contact Us</p>
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
    <v-col style="max-width: 180px">
      <v-card flat class="transparent mx-auto">
        <v-card-title>
          <p class="left-16">CONNECT</p>
        </v-card-title>
        <v-card-text>
          <a :href="faceBook" target="_blank" class="ref">
            <p class="left-14 ref">
              <v-img src="@/assets/icons/facebook.svg" class="icon"></v-img>Facebook
            </p>
          </a>
          <a :href="linkedIn" target="_blank" class="ref">
            <p class="left-14 ref">
              <v-img src="@/assets/icons/linkedin.svg" class="icon"></v-img> Linkedin
            </p>
          </a>
          <br>
          <a
            class="left-14 ref"
            href="Pineapple_Net_Service_Agreement_Blank_Complete_2020_10.pdf"
            download>
            <p class="left-14 ref">
              Download Service Agreement
            </p>
          </a>
          <!-- <p class="left-14 ref">FAQs & Support</p> -->
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

      console.log(this.selectors[index])

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
