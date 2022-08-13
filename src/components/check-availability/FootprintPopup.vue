<template>
  <v-dialog
    v-model="opened"
    :width="width"
    :height="height"
    persistent
  >
    <v-card
      class="py-0"
      :width="width"
      :height="height"
    >
      <v-toolbar class="transparent mx-0 px-0" style="position: absolute; top: 0; right:0; box-shadow: none!important; z-index: 5">
        <v-spacer />
        <v-btn text @click="opened = false">
          <v-icon large color="#777">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <svg width="240" height="219" viewBox="0 0 240 219" fill="none" style="position: absolute; bottom: 0; right: 0; z-index: 0">
        <path d="M239.21 0.651337C107.098 0.651325 -4.71642e-06 98.4093 -1.52588e-05 219L229.21 219C234.733 219 239.21 214.523 239.21 209L239.21 0.651337Z" fill="#E6FED8"/>
        <path d="M239.21 57.6468C141.583 57.6468 62.4408 129.887 62.4408 219L219.21 219C228.638 219 233.352 219 236.281 216.071C239.21 213.142 239.21 208.428 239.21 199L239.21 57.6468Z" fill="#D8FEC2"/>
        <path d="M239.21 117.05C177.525 117.05 127.52 162.695 127.52 219L229.21 219C234.733 219 239.21 214.523 239.21 209L239.21 117.05Z" fill="#C2E9AB"/>
      </svg>
      <v-row align="center" justify="center" class="mt-4 mt-md-0" style="position: absolute; top: 0; left: 0; width: 100%; z-index: 1">
        <v-col cols="12" md="4">
          <ContactSymbol :size="symbolSize" />
        </v-col>
        <v-col cols="12" md="8" class="pr-md-8" style="margin-top: -60px">
          <h1
            class="text-center text-md-left"
            :style="{ color: '#4CAF50', fontSize: viewportWidth < 600 ? '28px' : '32px' }"
          >
          Your address is within DGtek fibre network.
          </h1>
          <h5
            class="text-center text-md-left"
            :style="{ fontSize: viewportWidth < 960 ? '16px' : '20px' }"
          >
            Some premises may need additional work to be completed first.
          </h5>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
        class="px-md-8"
        style="position: absolute; bottom: 24px; left: 0; width: 100%; z-index: 2"
      >
        <v-col cols="12" md="4" class="text-center text-right pa-1">
          <v-btn
            rounded
            light
            outlined
            depressed
            height="42"
            :width="viewportWidth < 600 ? 230 : 'auto'"
            color="#20731C"
            @click="contactUs"
          >
            Register your interest
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-md-right pa-1">
          <PriceButton v-if="!checkAddressPopup" type="business" />
        </v-col>
        <v-col cols="12" md="4" class="text-center text-left pa-1">
          <PriceButton v-if="!checkAddressPopup" type="residential" />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

// import { setSearchResult } from '@/helpers'

import PriceButton from '@/components/check-availability/PriceButton.vue'
import ContactSymbol from '@/components/check-availability/ContactSymbol.vue'

export default {
  name: 'FootprintPopup',
  components: {
    ContactSymbol,
    PriceButton
  },

  data: () => ({
    opened: false
  }),

  computed: {
    ...mapState(['viewportWidth', 'eventTimeStamp', 'checkAddressPopup']),
    width () {
      return this.viewportWidth > 960 ? 730 : 320
    },
    height () {
      return this.viewportWidth > 960 ? 360 : 480
    },
    symbolSize () {
      return this.viewportWidth > 960 ? 290 : 150
    }
  },

  methods: {
    ...mapMutations({
      setTimeStamp: 'SET_EVENT_TIME_STAMP',
      setCheckAddressPopup: 'SET_CHECK_ADDRESS_POPUP'
    }),

    ...mapMutations('clientInfo', {
      update: 'UPDATE_PERSONAL_DATA',
      setAddressAvailable: 'SET_ADDRESS_AVAILABLE'
    }),

    ...mapMutations('contact', {
      setAddress: 'USER_ADDRESS'
    }),

    open (event) {
      const { address, status } = window[Symbol.for('global.addressData')]
      this.update({ prop: 'address', value: address })
      this.setAddress(address)
      this.setAddressAvailable(status === 'success')
      this.opened = event.timeStamp - this.eventTimeStamp > 1000
      this.opened && this.setTimeStamp(event.timeStamp)
    },
    contactUs () {
      this.opened = false
      this.setCheckAddressPopup(false)
      this.$router.push({ name: 'contact' })
    },
    close () {
      this.opened = false
    }
  },

  beforeMount () {
    window.addEventListener('show-residential-prices', this.close)
    window.addEventListener('show-business-prices', this.close)
  },

  beforeDestroy () {
    window.removeEventListener('show-residential-prices', this.close)
    window.removeEventListener('show-business-prices', this.close)
  },

  mounted () {
    window.addEventListener('open-footprint-popup', this.open)
  }
}
</script>
