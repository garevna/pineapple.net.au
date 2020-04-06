<template>
  <v-card flat tile class="transparent mx-auto mt-0 mb-12 pa-0" :width="containerWidth">
    <StepHeader :tab="4"/>

    <v-card flat class="transparent payment-info mx-auto my-2">
      <v-row dense justify="end" class="mx-4 my-0">
        <v-col>
          <p class="normal-text">Address</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="address"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col>
          <p class="normal-text">Plan</p>
          <span class="dollar-small">$</span>
          <span class="price-small">{{ clientTarif ? clientTarif.price : '' }}</span>
          <span class="mo-small">/mo</span>
        </v-col>
      </v-row>
  </v-card>
  <v-row class="deepgreen mt-12" width="100%">
    <v-col cols="8" class="my-auto pl-6">
      <p class="yellow-text" :style="{ fontSize: yellowFontSize }">what you pay today</p>
    </v-col>
    <v-col cols="4" class="mt-2">
      <sup class="dollar">$</sup>
      <span class="price">{{ clientTarif ? clientTarif.price : '' }}</span>
      <span class="mo">/mo</span>
    </v-col>
  </v-row>
</v-card>
</template>

<style scoped>

.payment-info {
  position: relative;
  top: 14px;
  width: 638px;
  margin-top: 16px;
  padding: 0 30px;
}

.normal-text, .yellow-text {
  font-style: normal;
  letter-spacing: 0.02em;
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  line-height: 100%;
}

.normal-text {
  color: #000;
}

.yellow-text {
  text-transform: uppercase;
  color: #FAFF00;
  margin-top: 16px;
}

.dollar-small, .price-small, .mo-small,
.dollar, .price, .mo {
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.02em;
}

.dollar-small, .price-small, .mo-small {
  color: #20731C;
  font-size: 16px;
}

.mo-small {
  font-weight: normal;
}

.dollar, .price, .mo {
  color: #fff;
}

.dollar {
  margin-top: -40px;
  font-size: 24px;
}
.price {
  font-size: 32px;
}
.mo {
  font-size: 18px;
  font-weight: normal;
}
</style>

<script>

import { mapState, mapGetters } from 'vuex'

import StepHeader from '@/components/fibre-internet-plans/StepHeader.vue'

export default {
  name: 'PaymentInfo',
  components: {
    StepHeader
  },
  props: {
    business: Boolean,
    next: Boolean,
    prev: Boolean
  },
  data () {
    return {
      address: ''
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapGetters('internetPlans', ['clientTarif']),
    containerWidth () { return this.viewportWidth < 600 ? this.viewportWidth : '680' },
    yellowFontSize () { return this.viewportWidth < 600 ? '18px' : '32px' }
  },
  methods: {
    //
  }
}
</script>
