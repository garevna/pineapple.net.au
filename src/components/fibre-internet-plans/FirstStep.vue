<template>
  <v-card flat class="transparent mt-0 mb-12 pa-0">
    <v-card-title class="plans--title deepgreen text-center px-auto pt-0">
      <FirstStep/><span>I want an internet service</span>
    </v-card-title>

    <v-card flat class="transparent mx-auto my-2">
      <SwitchMode :mode.sync="plan"/>
    </v-card>

    <v-card flat hover class="white-card mx-auto my-2">
      <v-row align="center" justify="space-around">
        <v-col cols="3">
          <sup class="dollar">$</sup>
          <span class="price">50</span>
          <span class="mo">/mo</span>
        </v-col>
        <v-col cols="4">
          <p class="normal-text">
            50 Mbps Download<br>
            50 Mbps Upload<br>
            Unlimited Data
          </p>
        </v-col>
        <v-col cols="5">
          <p class="bold-text">
            Does your building contain more than 60 apartments?
          </p>
          <Menu :confirm.sync="apartments"/>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat hover dark color="buttons" class="green-card text--white mx-auto my-2">
      <v-row align="center" justify="space-around">
        <v-col cols="3">
          <sup class="dollar">$</sup>
          <span class="price">69</span>
          <span class="mo">/mo</span>
        </v-col>
        <v-col cols="4">
          <p class="normal-text">
            150 Mbps Download<br>
            150 Mbps Upload<br>
            Unlimited Data
          </p>
        </v-col>
        <v-col cols="5">
          <p class="bold-text">
            Does your building contain more than 60 apartments?
          </p>
          <Menu
              :confirm.sync="apartments"
              color="#fff"
              fontSize="14px"
          />
        </v-col>
      </v-row>
    </v-card>

    <v-card flat hover class="white-card mx-auto my-2">
      <v-row align="center" justify="space-around">
        <v-col cols="3">
          <sup class="dollar">$</sup>
          <span class="price">140</span>
          <span class="mo">/mo</span>
        </v-col>
        <v-col cols="4">
          <p class="normal-text">
            500 Mbps Download<br>
            500 Mbps Upload<br>
            Unlimited Data
          </p>
        </v-col>
        <v-col cols="5">
          <p class="bold-text">
            Does your building contain more than 60 apartments?
          </p>
          <Menu :confirm.sync="apartments"/>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat hover class="white-card mx-auto my-2">
      <v-row align="center" justify="space-around">
        <v-col cols="3">
          <sup class="dollar">$</sup>
          <span class="price">250</span>
          <span class="mo">/mo</span>
        </v-col>
        <v-col cols="4">
          <p class="normal-text">
            1000 Mbps Download<br>
            1000 Mbps Upload<br>
            Unlimited Data
          </p>
        </v-col>
        <v-col cols="5">
          <p class="bold-text">
            Does your building contain more than 60 apartments?
          </p>
          <Menu :confirm.sync="apartments"/>
        </v-col>
      </v-row>
    </v-card>

    <v-row dense justify="end" class="mx-auto my-2">
      <v-col></v-col>
      <v-col>
        <v-btn
            color="deepgreen"
            rounded
            outlined
            width="220"
            height="40"
            class="my-10"
            @click="$emit('update: prev', true)"
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
            @click="$emit('update: next', true)"
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

.white-card, .green-card {
  position: relative;
  top: 14px;
  height: 140px;
  width: 638px;
  margin-top: 16px;
}
.white-card {
  background-color: #fff;
  color: #353535;
}
.green-card {
  color: #fff;
}

.bold-text, .normal-text {
  font-style: normal;
  letter-spacing: 0.02em;
  text-align: left;
  font-size: 14px;
}

.bold-text {
  font-weight: bold;
  line-height: 150%;
}
.normal-text {
  font-weight: normal;
  line-height: 250%;
}

.white-card .bold-text, .white-card .normal-text {
  color: #353535;
}
.green-card .bold-text, .green-card .normal-text {
  color: #fff;
}

.dollar, .price, .mo {
  font-style: normal;
  font-weight: 900;
  color: #20731C;
  letter-spacing: 0.02em;
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
.green-card .dollar, .green-card .price, .green-card .mo {
  color: #fff;
}

</style>

<script>

import FirstStep from '@/components/fibre-internet-plans/steps/FirstStep.vue'
import SwitchMode from '@/components/plans/SwitchMode.vue'
import Menu from '@/components/plans/Menu.vue'

export default {
  name: 'Modems',
  components: {
    FirstStep,
    SwitchMode,
    Menu
  },
  props: {
    next: Boolean,
    prev: Boolean
  },
  data () {
    return {
      plan: 'residential',
      apartments: false
    }
  },
  mounted () {
    document.documentElement.style.setProperty('--switch-padding-top', '16px')
    document.documentElement.style.setProperty('--switch-width', '340px')
  }
}
</script>
