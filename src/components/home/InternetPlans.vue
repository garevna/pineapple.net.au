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
      <p v-html="internetPlans.text"></p>
    </v-card-text>

    <v-card-text width="100%" class="mx-0 px-0 text-center">
      <SwitchMode />
    </v-card-text>

    <v-slide-x-transition leave-absolute>
      <v-card
              flat
              class="d-flex flex-wrap justify-center transparent"
      >
        <PriceCard class="d-none d-md-block"
                  v-for="(item, index) in plans[plan]"
                  :key="index"
                  :item="item"
                  :index="index"
                  :selected.sync="selected"
                  :connect.sync="getConnect"
                  :contact.sync="getContact"
        />

      <v-carousel
          :height="carouselHeight"
          hide-delimiter-background
          show-arrows-on-hover
          class="d-block d-md-none"
        >
          <v-carousel-item
            v-for="(item, index) in plans[plan]"
            :key="index"
          >
            <v-sheet
              height="320"
              light
              class="transparent"
            >
              <v-row
                class="fill-height transparent"
                align="center"
                justify="center"
              >
              <PriceCard
                        :mode="plan"
                        :item="item"
                        :index="index"
                        :selected.sync="selected"
                        :connect.sync="getConnect"
                        :contact.sync="getContact"
              />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-slide-x-transition>
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
import SwitchMode from '@/components/plans/SwitchToggle.vue'

export default {
  name: 'InternetPlans',
  components: {
    PriceCard,
    SwitchMode
  },
  props: ['connect', 'contact'],
  data () {
    return {
      getConnect: false,
      getContact: false,
      selected: null
    }
  },
  computed: {
    ...mapState({ screen: 'viewportWidth', plan: 'plan' }),
    ...mapState('internetPlans', ['plans']),
    ...mapState('content', ['internetPlans']),
    carouselHeight () {
      return this.screen < 960 ? this.screen < 600 ? 420 : 480 : 420
    }
  },
  watch: {
    selected (val) {
      if (val === null) return
      this.$store.dispatch('internetPlans/SELECT_TARIF', val)
    },
    getConnect (val) {
      this.$emit('update:connect', val)
    },
    getContact (val) {
      this.$emit('update:contact', val)
    }
  },
  methods: {
    goToConnect () {

    }
  },
  mounted () {
    //
  }
}
</script>
