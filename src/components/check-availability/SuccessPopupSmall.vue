<template>
  <div class="text-center">
      <v-dialog
        v-model="success"
        width="730"
        height="352"
      >
        <v-card
            class="success-content"
            width="298"
            height="477"
        >
          <FoneSymbol class="success-content--svg"/>
          <v-btn
              text
              small
              class="success-content--close-button"
              @click="$emit('update:success', false)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6741 12.0008L0.274578 1.60119C-0.0915623 1.23505 -0.0915623 0.64143 0.274578 0.275337C0.640718 -0.0907557 1.23434 -0.0908026 1.60044 0.275337L12 10.6749L22.3995 0.275337C22.7657 -0.0908026 23.3593 -0.0908026 23.7254 0.275337C24.0915 0.641477 24.0915 1.2351 23.7254 1.60119L13.3259 12.0007L23.7254 22.4003C24.0915 22.7664 24.0915 23.3601 23.7254 23.7261C23.5423 23.9092 23.3024 24.0007 23.0624 24.0007C22.8225 24.0007 22.5826 23.9092 22.3995 23.7261L12 13.3266L1.60048 23.7261C1.41744 23.9092 1.17748 24.0007 0.937531 24.0007C0.697578 24.0007 0.457672 23.9092 0.274578 23.7261C-0.0915623 23.36 -0.0915623 22.7664 0.274578 22.4003L10.6741 12.0008Z" fill="black"/>
            </svg>
          </v-btn>
          <LikeSymbol size="150" class="success-content--like"/>
          <p class="success-content--title">Success!</p>
          <p class="success-content--text">Pineapple Net is available at your address!</p>
          <v-card-actions>
            <v-btn
                class="success-content--button-light"
                rounded
                light
                outlined
                depressed
                height="42"
                width="191"
                color="#20731C"
            >
              Business Pricing
            </v-btn>
            <v-btn
                class="success-content--button-green"
                rounded
                dark
                depressed
                height="42"
                width="200"
                color="#72BF44"
            >
              Residential Pricing
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<style scoped>
  .success-content {
    position: relative;
    top:0;
    left:0;
    overflow: hidden;
  }
  .success-content--svg {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .success-content--close-button {
    position: absolute;
    top: 10px;
    right: 5px;
    transform: scale(0.5, 0.5);
  }
  .success-content--like {
    position: absolute;
    top: 40px;
    left: 0px;
  }
  .success-content--title {
    position: absolute;
    left: 100px;
    top: 200px;
    width: 100%;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    text-align: left;
    letter-spacing: 0.02em;
    color: #4CAF50;
  }
  .success-content--text {
    position: absolute;
    left: 50px;
    top: 250px;
    width: 100%;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.02em;
    text-align: left;
    color: #353535;
  }
  .success-content--button-light {
    position: absolute;
    top: 320px;
    left: 54px;
    width: 191px;
    text-transform: none!important;
    font-size: 13px;
    /* border: solid 1px #20731C; */
  }
  .success-content--button-green {
    position: absolute;
    top: 380px;
    left: 54px;
    width: 191px;
    text-transform: none!important;
  }
</style>

<script>

import FoneSymbol from '@/components/check-availability/FoneSymbol.vue'
import LikeSymbol from '@/components/check-availability/LikeSymbol.vue'

export default {
  name: 'SuccessPopup',
  components: {
    FoneSymbol,
    LikeSymbol
  },
  props: {
    success: Boolean
  }
}
</script>
