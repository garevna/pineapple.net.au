<template>
  <div class="text-center">
    <v-dialog
      v-model="success"
      :width="width"
      :height="height"
    >
      <v-card
        :width="width"
        :height="height"
      >
        <v-toolbar class="transparent mx-0 px-0" style="position: absolute; top: 0; right:0; box-shadow: none!important; z-index: 5">
          <v-spacer />
          <v-btn text @click="$emit('update:success', false)">
            <v-icon large color="#777">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <svg width="240" height="219" viewBox="0 0 240 219" fill="none" style="position: absolute; bottom: 0; right: 0; z-index: 0">
          <path d="M239.21 0.651337C107.098 0.651325 -4.71642e-06 98.4093 -1.52588e-05 219L229.21 219C234.733 219 239.21 214.523 239.21 209L239.21 0.651337Z" fill="#E6FED8"/>
          <path d="M239.21 57.6468C141.583 57.6468 62.4408 129.887 62.4408 219L219.21 219C228.638 219 233.352 219 236.281 216.071C239.21 213.142 239.21 208.428 239.21 199L239.21 57.6468Z" fill="#D8FEC2"/>
          <path d="M239.21 117.05C177.525 117.05 127.52 162.695 127.52 219L229.21 219C234.733 219 239.21 214.523 239.21 209L239.21 117.05Z" fill="#C2E9AB"/>
        </svg>
        <v-row align="center" justify="center" class="mt-8 mt-md-0" style="position: absolute; top: -32px; left: 0; width: 100%; z-index: 1">
          <v-col cols="12" md="4">
            <LikeSymbol :size="likeSize" />
          </v-col>
          <v-col cols="12" md="8">
            <h1
              class="text-center text-md-left"
              :style="{ color: '#4CAF50', fontSize: screen < 600 ? '28px' : '32px' }"
            >
              Success!
            </h1>
            <h5
              class="text-center text-md-left"
              :style="{ fontSize: screen < 960 ? '16px' : '20px' }"
            >
              Pineapple Net is available at your address!
            </h5>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" style="position: absolute; bottom: 24px; left: 0; width: 100%; z-index: 2">
          <v-col cols="12" md="6" class="text-center">
            <v-btn
              v-if="!popup"
              rounded
              light
              outlined
              depressed
              height="42"
              width="191"
              color="buttons"
              @click="businessPricing"
            >
              Business Pricing
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <v-btn
              v-if="!popup"
              rounded
              dark
              depressed
              height="42"
              width="191"
              color="buttons"
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
  name: 'SuccessPopup',
  components: {
    LikeSymbol: () => import('@/components/check-availability/LikeSymbol.vue')
  },
  props: {
    popup: Boolean,
    success: Boolean,
    business: Boolean,
    residential: Boolean
  },
  computed: {
    ...mapState({
      screen: 'viewportWidth'
    }),
    size () {
      return this.screen >= 960 ? 'wide' : 'shrink'
    },
    width () {
      return this.screen >= 960 ? 730 : 298
    },
    height () {
      return this.screen >= 960 ? 352 : 477
    },
    likeSize () {
      return this.screen >= 960 ? 290 : 150
    }
  },
  methods: {
    residentialPricing () {
      this.$emit('update:residential', true)
      this.$emit('update:success', false)
    },
    businessPricing () {
      this.$emit('update:business', true)
      this.$emit('update:success', false)
    }
  }
}
</script>

<style>

p {
  word-break: normal;
  white-space: wrap;
}
</style>
