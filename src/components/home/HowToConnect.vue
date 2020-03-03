<template>
  <v-container fluid>
    <v-card flat class="d-flex flex-wrap justify-center transparent">
      <v-card flat class="transparent text-centered mx-10" width="240">
        <ContactUs/>
        <v-card-title>
          <h3>Contact Us</h3>
        </v-card-title>
        <v-card-text>
          <p>Get in touch to find out if pineapple is available at your address</p>
        </v-card-text>
      </v-card>
      <v-card flat class="transparent text-centered mx-10" width="240">
        <GetConnected/>
        <v-card-title>
          <h3>Get connected</h3>
        </v-card-title>
        <v-card-text>
          <p>Our team of installers get you connected to our network</p>
        </v-card-text>
      </v-card>
      <v-card flat class="transparent text-centered mx-10" width="240">
        <Enjoy/>
        <v-card-title>
          <h3>Enjoy</h3>
        </v-card-title>
        <v-card-text>
          <p>Fast fibre internet</p>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<style>
h3, p {
  width: 100%;
  text-align: center;
  color: #000;
}
</style>

<script>
import ContactUs from '@/components/svg/ContactUs.vue'
import GetConnected from '@/components/svg/GetConnected.vue'
import Enjoy from '@/components/svg/Enjoy.vue'

export default {
  name: 'HowToConnect',
  components: {
    ContactUs,
    GetConnected,
    Enjoy
  },
  data () {
    return {
      // foneSVG: null,
      // pictureSVG: null
    }
  },
  mounted () {
    // const foneURL = require('@/assets/home/how-to-connect/contact-us.svg')
    // const pictureURL = require('@/assets/home/how-to-connect/contact-us-icon.svg')
    // this.foneSVG = require(foneURL)
    // this.pictureSVG = require(pictureURL)
    // console.log(this.foneSVG, this.pictureSVG)
  }
}
</script>
