<template>
  <v-card flat class="transparent mx-auto mt-0 mb-12 pa-0" :width="containerWidth">
    <StepHeader :tab="3"/>

    <v-card flat class="transparent about mx-auto my-2">
      <v-row dense justify="end" class="mx-4 my-0">
        <v-col cols="12" md="6">
          <p class="normal-text">first name*</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="firstName"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <p class="normal-text">last name*</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="lastName"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense justify="end" class="mx-4 my-0">
        <v-col>
          <p class="normal-text">card number <CreditCards/></p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="cardNumber"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense justify="end" class="mx-4 my-0">
        <v-col cols="12" md="6">
          <p class="normal-text">card expiry</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="cardExpiry"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <p class="normal-text">ccv</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="ccv"
          ></v-text-field>
        </v-col>
      </v-row>

    <v-row dense align="start" justify="center" class="mx-4 mt-10">
      <v-col cols="12" sm="6" class="text-center">
        <v-btn
            color="deepgreen"
            rounded
            outlined
            width="220"
            height="40"
            class="my-2"
            @click="$emit('update:prev', true)"
        >
          Back
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="text-center">
        <v-btn
            color="buttons"
            dark
            rounded
            width="220"
            height="40"
            class="my-2"
            @click="$emit('update:next', true)"
        >
          Continue
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</v-card>
</template>

<style>

.radio-custom label {
  font-style: normal!important;
  font-weight: bold!important;
  line-height: 250%!important;
  letter-spacing: 0.02em!important;
  color: #000!important;
  text-align: left!important;
  font-size: 14px!important;
  left: 10px!important;
}
</style>

<style scoped>

.about {
  position: relative;
  top: 14px;
  width: 638px;
  margin-top: 16px;
  padding: 0 30px;
}

.normal-text, .grey-comment {
  font-style: normal;
  letter-spacing: 0.02em;
  text-align: left;
  font-size: 14px;
}
.normal-text {
  font-weight: bold;
  line-height: 100%;
  color: #000;
}

.grey-comment {
  font-style: normal;
  font-weight: normal;
  line-height: 120%;
  color: #767676;
  padding: 0 16px;
  margin-top: -20px;
}
</style>

<script>

import { mapState } from 'vuex'

import StepHeader from '@/components/fibre-internet-plans/StepHeader.vue'
import CreditCards from '@/components/fibre-internet-plans/cards/Cards.vue'

export default {
  name: 'PaymentDetails',
  components: {
    StepHeader,
    CreditCards
  },
  props: {
    business: Boolean,
    next: Boolean,
    prev: Boolean
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      cardNumber: '',
      cardExpiry: '',
      ccv: '',
      datePicker: false,
      minDate: new Date(new Date() - 18 * 365 * 24 * 60 * 60 * 1000),
      maxDate: new Date(new Date() - 100 * 365 * 24 * 60 * 60 * 1000)
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    containerWidth () { return this.viewportWidth < 600 ? this.viewportWidth : '680' }
  },
  methods: {
    change () {
      this.plan = this.plan === 'business' ? 'residential' : 'business'
    },
    getRelativeData (data, days) {
      if (!(data instanceof Date)) return
      return new Date(data.setDate(data.getDate() + days))
    },
    testBirthday () {
      return this.birthDate <= this.minDate && this.birthDate > this.maxDate
    }
  }
}
</script>
