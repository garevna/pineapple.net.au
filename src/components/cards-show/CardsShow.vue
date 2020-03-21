<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" xs="12" sm="10" md="8">
        <CardForShow
           v-for="(prop, index) in properties"
           :key="index"
           :title="prop.title"
           :image="prop.image"
           v-bind:records="prop.records"
           :data-aos="animationName"
        >
          {{prop.text}}
        </CardForShow>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>

</style>

<script>

import CardForShow from '@/components/CardForShow.vue'

// import { ScrollFromLeft } from '@/directives/ScrollFromLeft.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'CardsShow',
  components: {
    CardForShow
    // HomePhonePictures
  },
  // directives: {
  //   ScrollFromLeft
  // },
  props: {
    properties: Array
  },
  data () {
    return {

    }
  },
  computed: {
    animationName: () => (['slide-right', 'slide-left'][Math.round(Math.random() * 2)])
  },
  mounted () {
    AOS.init({ duration: 1200, offset: 100 })
  }
}
</script>
