<template>
  <v-card
    flat
    width="100%"
    class="transparent my-10"
  >
    <v-card-text class="mx-auto text-center">
      <h2>FIBRE <span class="green--text">INTERNET PLANS</span></h2>
    </v-card-text>
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
          :tariffId="getTariffId(index)"
        />

      <v-carousel
          :height="screen < 600 ? 440 : screen < 960 ? 480 : 500"
          hide-delimiter-background
          show-arrows-on-hover
          class="d-block d-md-none"
        >
          <v-carousel-item
            v-for="(item, index) in plans[plan]"
            :key="index"
          >
            <v-sheet
              :height="screen < 600 ? 380 : screen < 960 ? 440 : 460"
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
                :tariffId="getTariffId(index)"
              />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-slide-x-transition>
  </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'InternetPlans',

  components: {
    PriceCard: () => import('@/components/plans/PriceCard.vue'),
    SwitchMode: () => import('@/components/plans/SwitchToggle.vue')
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
    ...mapState('content', ['internetPlans'])
  },

  watch: {
    selected (val) {
      if (val === null) return
      this.$store.dispatch('internetPlans/SELECT_TARIFF', val)
    }
  },

  methods: {
    getTariffId (index) {
      const planName = this.plan === 'business' ? 'commercial' : this.plan
      const plan = this.plans[this.plan][index]
      return `${planName}-${plan.upload || plan.download}`
    }
  }
}
</script>

<style>
.v-btn.v-btn--icon {
  background: #94C578!important;
}
.v-window__prev .v-btn:hover,
.v-window__next .v-btn:hover {
  background: #20731C!important;
}
</style>
