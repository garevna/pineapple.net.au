<template>
  <v-card class="d-flex flex-wrap justify-center transparent">
    <v-card flat class="transparent">
          <ContactUs/>
          <ContactUsIcon class="icon"/>
    </v-card>
    <v-card flat class="transparent">
          <ContactUs/>
          <ContactUsIcon class="icon"/>
    </v-card>
    <v-card flat class="transparent">
          <ContactUs/>
          <ContactUsIcon class="icon"/>
    </v-card>
  </v-card>
</template>

<style>
.wrapper {
  position: relative;
  top: 0;
  left: 0;
  width: 290px;
  height: 290px;
}
.content {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 290px;
  height: 290px;
}
</style>

<script>
import ContactUs from '@/components/svg/ContactUs.vue'
import ContactUsIcon from '@/components/svg/ContactUsIcon.vue'

export default {
  name: 'HowToConnect',
  components: {
    ContactUs,
    ContactUsIcon
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
