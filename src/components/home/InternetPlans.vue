<template>
    <v-card
        flat
        width="100%"
        class="transparent"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
      <v-card-title>
        <h2>FIBRE <span class="green--text">INTERNET PLANS</span></h2>
      </v-card-title>
      <v-card-text>
        <p>
          Zero connection fee with 12 month plans<br>
          Commitment issues? month-to-month plans also available
        </p>
      </v-card-text>

      <v-card-text>
        <SwitchMode :mode.sync="regime"/>
      </v-card-text>

      <v-card
          v-if="regime === 'residential'"
          flat
          class="d-flex flex-wrap justify-center transparent"
      >
          <PriceCard
              v-for="(item, index) in residential"
              :key="index"
              mode="residential"
              :upload="item.upload"
              :download="item.download"
              :price="item.price"
          />
      </v-card>
      <v-card
          v-if="regime === 'business'"
          flat
          class="d-flex flex-wrap justify-center transparent"
      >
          <PriceCard
              v-for="(item, index) in business"
              :key="index"
              mode="business"
              :upload="item.upload"
              :download="item.download"
              :price="item.price"
          />
      </v-card>
    </v-card>
</template>

<style>
</style>

<script>

import PriceCard from '@/components/PriceCard.vue'
import SwitchMode from '@/components/home/SwitchMode.vue'

export default {
  name: 'InternetPlans',
  components: {
    PriceCard,
    SwitchMode
  },
  props: {
    mode: String
  },
  data () {
    return {
      regime: null,
      residential: [
        { upload: 50, download: 50, price: 50 },
        { upload: 150, download: 150, price: 69 },
        { upload: 500, download: 500, price: 140 },
        { upload: 1000, download: 1000, price: 250 }
      ],
      business: [
        { upload: 150, download: 150, price: 150 },
        { upload: 500, download: 500, price: 240 },
        { upload: 1000, download: 1000, price: 500 }
      ]
    }
  },
  watch: {
    regime (val) {
      console.log('Regime was changed: ', val)
    }
  },
  mounted () {
    console.log('Mode: ', this.mode)
    this.regime = this.mode || 'residential'
  }
}
</script>
