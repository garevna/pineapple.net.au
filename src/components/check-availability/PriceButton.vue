<template>
  <v-btn
    rounded
    dark
    depressed
    height="42"
    :width="viewportWidth < 600 ? 230 : 'auto'"
    color="#72BF44"
    @click="showPrices"
  >
    {{ text }}
  </v-btn>
</template>

<script>

import { emitEvent } from '@/helpers'

import { mapState } from 'vuex'

export default {
  name: 'PriceButton',

  props: ['type'],

  data: () => ({
    ...mapState(['viewportWidth'])
  }),

  computed: {
    text () {
      return this.type === 'business' ? 'Business Pricing' : 'Residential Pricing'
    },
    eventName () {
      return this.type === 'business' ? 'show-business-prices' : 'show-residential-prices'
    }
  },

  methods: {
    showPrices () {
      emitEvent(this.eventName)
    }
  }
}
</script>
