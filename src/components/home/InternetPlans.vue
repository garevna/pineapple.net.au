<template>
  <v-card
          flat
          width="100%"
          class="transparent my-10"
  >
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

    <v-slide-x-transition leave-absolute>
      <v-card
              v-if="regime === 'residential'"
              flat
              class="d-flex flex-wrap justify-center transparent"
      >
        <PriceCard class="d-none d-md-block"
                  v-for="(item, index) in residential"
                  :key="index"
                  mode="residential"
                  :name="item.name"
                  :upload="item.upload"
                  :download="item.download"
                  :price="item.price"
        />

      <v-carousel
          v-model="cardNum"
          :height="carouselHeight"
          hide-delimiter-background
          show-arrows-on-hover
          class="d-block d-md-none"
        >
          <v-carousel-item
            v-for="(item, index) in residential"
            :key="index"
          >
            <v-sheet
              height="420"
              light
              class="transparent"
            >
              <v-row
                class="fill-height transparent"
                align="center"
                justify="center"
              >
              <PriceCard
                        mode="residential"
                        :name="item.name"
                        :upload="item.upload"
                        :download="item.download"
                        :price="item.price"
              />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-slide-x-transition>

    <v-slide-x-reverse-transition leave-absolute>
      <v-card
              v-if="regime === 'business'"
              flat
              class="d-flex flex-wrap justify-center transparent"
              transition="slide-x-transition"
      >
        <PriceCard class="d-none d-md-block"
                    v-for="(item, index) in business"
                    :key="index"
                    mode="business"
                    :name="item.name"
                    :upload="item.upload"
                    :download="item.download"
                    :price="item.price"
        />

        <v-carousel
            v-model="cardNum"
            :height="carouselHeight"
            hide-delimiter-background
            show-arrows-on-hover
            class="d-block d-md-none"
          >
            <v-carousel-item
              v-for="(item, index) in business"
              :key="index"
            >
              <v-sheet
                height="420"
                light
                class="transparent"
              >
                <v-row
                  class="fill-height transparent"
                  align="center"
                  justify="center"
                >
                <PriceCard
                          mode="business"
                          :name="item.name"
                          :upload="item.upload"
                          :download="item.download"
                          :price="item.price"
                />
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
      </v-card>
    </v-slide-x-reverse-transition>
  </v-card>
</template>

<style>
.theme--dark.v-btn.v-btn--icon {
  background: #94C578!important;
}
.v-window__prev .v-btn:hover, .v-window__next .v-btn:hover {
  background: #20731C!important;
}
</style>

<script>

import { mapState } from 'vuex'

import PriceCard from '@/components/plans/PriceCard.vue'
import SwitchMode from '@/components/plans/SwitchMode.vue'

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
      regime: 'residential',
      cardNum: 0,
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
  computed: {
    ...mapState({
      screen: 'viewportWidth'
    }),
    carouselHeight () {
      return this.screen < 960 ? this.screen < 600 ? 530 : 580 : 530
    }
  },
  watch: {
    mode (val) {
      this.regime = val
    }
  }
}
</script>
