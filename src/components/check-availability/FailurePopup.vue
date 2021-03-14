<template>
  <div class="text-center">
      <v-dialog
        v-model="failure"
        :width="width"
        :height="height"
      >
        <v-card
            class="py-0"
            :width="width"
            :height="height"
        >
          <v-toolbar class="transparent mx-0 px-0" style="position: absolute; top: 0; right:0; box-shadow: none!important; z-index: 5">
            <v-spacer />
            <v-btn text @click="$emit('update:failure', false)">
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
                :style="{ color: '#4CAF50', fontSize: screen < 600 ? '28px' : '32px' }"
              >
                Sorry...
              </h1>
              <h5
                class="text-center text-md-left"
                :style="{ fontSize: screen < 960 ? '16px' : '20px' }"
              >
                Unfortunately Pineapple Net is not available at your address right now
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
                :width="screen < 600 ? 230 : 'auto'"
                color="#20731C"
                @click="contactUs"
              >
                Register your interest
              </v-btn>
            </v-col>
            <v-col cols="12" md="4" class="text-center text-md-right pa-1">
              <v-btn
                v-if="!popup"
                rounded
                dark
                depressed
                height="42"
                :width="screen < 600 ? 230 : 'auto'"
                color="#72BF44"
                @click="businessPricing"
              >
                Business Pricing
              </v-btn>
            </v-col>
            <v-col cols="12" md="4" class="text-center text-left pa-1">
              <v-btn
                v-if="!popup"
                rounded
                dark
                depressed
                height="42"
                :width="screen < 600 ? 230 : 'auto'"
                color="#72BF44"
                @click="residentialPricing"
              >
                Residential Pricing
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FailurePopup',
  components: {
    ContactSymbol: () => import('@/components/check-availability/ContactSymbol.vue')
  },
  props: {
    failure: Boolean,
    residential: Boolean,
    business: Boolean,
    contact: Boolean,
    popup: Boolean
  },
  computed: {
    ...mapState({
      screen: 'viewportWidth'
    }),
    width () {
      return this.screen > 960 ? 730 : 320
    },
    height () {
      return this.screen > 960 ? 360 : 480
    },
    symbolSize () {
      return this.screen > 960 ? 290 : 150
    }
  },
  methods: {
    residentialPricing () {
      this.$emit('update:residential', true)
      this.$emit('update:failure', false)
    },
    businessPricing () {
      this.$emit('update:business', true)
      this.$emit('update:failure', false)
    },
    contactUs () {
      this.$emit('update:contact', true)
      this.$emit('update:failure', false)
      if (this.popup) this.$router.push({ name: 'contact' })
    }
  }
}
</script>
