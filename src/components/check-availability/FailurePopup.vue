<template>
  <div class="text-center">
      <v-dialog
        v-model="failure"
        :width="width"
        :height="height"
      >
        <v-card
            class="failure-content"
            :width="width"
            :height="height"
        >
          <FoneSymbol class="failure-content--svg"/>
          <v-btn
              text
              small
              :class="`failure-content-${size}--close-button`"
              @click="$emit('update:failure', false)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6741 12.0008L0.274578 1.60119C-0.0915623 1.23505 -0.0915623 0.64143 0.274578 0.275337C0.640718 -0.0907557 1.23434 -0.0908026 1.60044 0.275337L12 10.6749L22.3995 0.275337C22.7657 -0.0908026 23.3593 -0.0908026 23.7254 0.275337C24.0915 0.641477 24.0915 1.2351 23.7254 1.60119L13.3259 12.0007L23.7254 22.4003C24.0915 22.7664 24.0915 23.3601 23.7254 23.7261C23.5423 23.9092 23.3024 24.0007 23.0624 24.0007C22.8225 24.0007 22.5826 23.9092 22.3995 23.7261L12 13.3266L1.60048 23.7261C1.41744 23.9092 1.17748 24.0007 0.937531 24.0007C0.697578 24.0007 0.457672 23.9092 0.274578 23.7261C-0.0915623 23.36 -0.0915623 22.7664 0.274578 22.4003L10.6741 12.0008Z" fill="black"/>
            </svg>
          </v-btn>
          <ContactSymbol :size="likeSize" :class="`failure-content-${size}--like`"/>
          <p :class="`failure-content--title failure-content-${size}--title`">Sorry...</p>
          <p :class="`failure-content--text failure-content-${size}--text`">Unfortunately Pineapple Net is not available at your address right now</p>
          <v-card-actions justify-center style="position: absolute; bottom: 20px; width: 88%; margin-left: 6%;">
            <v-row justify="center" class="mx-auto" style="width: 88%">
              <v-col cols="12" md="4" class="mx-auto text-center my-1 py-0">
                <v-btn
                    :class="`failure-content-button failure-content-button-${size}`"
                    rounded
                    light
                    outlined
                    depressed
                    height="42"
                    width="200"
                    color="#20731C"
                >
                  Register your interest
                </v-btn>
              </v-col>
              <v-col cols="12" md="4" class="mx-auto text-center my-1 py-0">
                <v-btn
                    :class="`failure-content-button failure-content-button-${size}`"
                    rounded
                    dark
                    depressed
                    height="42"
                    width="200"
                    color="#72BF44"
                >
                  Business Pricing
                </v-btn>
              </v-col>
              <v-col cols="12" md="4" class="mx-auto text-center my-1 py-0">
                <v-btn
                    :class="`failure-content-button failure-content-button-${size}`"
                    rounded
                    dark
                    depressed
                    height="42"
                    width="200"
                    color="#72BF44"
                >
                  Residential Pricing
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<style scoped>
.failure-content {
  position: relative;
  top:0;
  left:0;
  overflow: hidden;
}
.failure-content > * {
  position: absolute;
}
.failure-content--svg {
  right: 0;
  bottom: 0;
}
.failure-content--title {
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #4CAF50;
}
.failure-content--text {
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #353535;
}
.failure-content-button {
  text-transform: none!important;
}

.failure-content-wide--close-button {
  top: 29px;
  right: 32px;
}
.failure-content-shrink--close-button {
  top: 10px;
  right: 5px;
  transform: scale(0.5, 0.5);
}

.failure-content-wide--like {
  top: 24px;
  left: -18px;
}
.failure-content-shrink--like {
  top: 40px;
  left: 0px;
}

.failure-content-wide--title {
  left: 274px;
  top: 60px;
  font-size: 42px;
  text-align: left;
}
.failure-content-shrink--title {
  left: calc(50% - 100px);
  top: 160px;
  width: 200px;
  text-align: center;
  font-size: 24px;
}

.failure-content-wide--text {
  left: 274px;
  top: 130px;
  width: 327px;
  font-size: 24px;
  text-align: left;
}
.failure-content-shrink--text {
  left: calc(50% - 125px);
  top: 200px;
  width: 250px;
  text-align: center;
  font-size: 18px;
}

.failure-content-button-shrink {
  font-size: 13px;
  width: 220px;
}

.failure-content-button-wide {

}

</style>

<script>
import { mapState } from 'vuex'

import FoneSymbol from '@/components/check-availability/FoneSymbol.vue'
import ContactSymbol from '@/components/check-availability/ContactSymbol.vue'

export default {
  name: 'FailurePopup',
  components: {
    FoneSymbol,
    ContactSymbol
  },
  props: {
    failure: Boolean
  },
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapState({
      screen: 'viewportWidth'
    }),
    size () {
      return this.screen > 750 ? 'wide' : 'shrink'
    },
    width () {
      return this.screen > 750 ? 730 : 298
    },
    height () {
      return this.screen > 750 ? 352 : 477
    },
    likeSize () {
      return this.screen > 750 ? 290 : 150
    }
  }
}
</script>
