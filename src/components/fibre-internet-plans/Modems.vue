<template>
  <v-card flat class="transparent mt-0 mb-12 pa-0">
    <v-card-title class="plans--title deepgreen text-center px-auto pt-0">
      <SecondStep/><span>Do you need a modem?</span>
    </v-card-title>

    <v-card flat hover class="white-card mx-auto my-2">
      <p class="large-text">
        I need a modem
      </p>
      <div class="price">
        <span class="dollar">$</span>
        <span class="price">180</span>
      </div>
      <p class="normal-text">
        Preconfigured for you for easy setup
      </p>
    </v-card>

    <v-card flat hover class="white-card mx-auto my-2">
      <p class="large-text">
        BYO modem
      </p>
      <p class="normal-text">
        You’ll need a Gigabit modem which can be reconfigured
      </p>
    </v-card>

    <v-card flat hover class="white-card mx-auto my-2">
      <p class="large-text">
        I need a modem
      </p>
      <div class="price">
        <span class="dollar">$</span>
        <span class="price">0</span>
      </div>
      <p class="normal-text">
        Yes, I need a $0 modem (on 12 month contracts)
      </p>
    </v-card>

    <v-row dense justify="end" class="mx-auto my-0">
      <v-col></v-col>
      <v-col>
        <v-btn
            color="deepgreen"
            rounded
            outlined
            width="220"
            height="40"
            class="my-10"
            @click="$emit('update:prev', true)"
        >
          Back
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
            color="buttons"
            dark
            rounded
            width="220"
            height="40"
            class="my-10"
            @click="$emit('update:next', true)"
        >
          Continue
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.plans--title {
  height: 110px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #fff;
  padding: 0px 10px;
}

.plans--title > * {
  margin-top: -24px;
}

.white-card {
  position: relative;
  top: 14px;
  height: 140px;
  width: 638px;
  margin-top: 16px;
  background-color: #fff;
}

.large-text, .normal-text {
  position: absolute;
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #353535;
  text-align: left;
}

.large-text {
  top: 13px;
  left: 40px;
  font-size: 28px;
}
.normal-text {
  top: 72px;
  left: 250px;
  max-width: 360px;
  font-size: 14px;
}

.dollar, .price {
  position: absolute;
  font-style: normal;
  font-weight: 900;
  color: #20731C;
  letter-spacing: 0.02em;
}

.dollar {
  top: 28px;
  left: 32px;
  font-size: 24px;
}
.price {
  top: 32px;
  left: 48px;
  font-size: 32px;
}

</style>

<script>

import SecondStep from '@/components/fibre-internet-plans/steps/SecondStep.vue'

export default {
  name: 'Modems',
  components: {
    SecondStep
  },
  props: {
    next: Boolean,
    prev: Boolean
  }
}
</script>
