<template>
  <v-card flat class="transparent mt-0 mb-12 pa-0">
    <v-card-title class="plans--title deepgreen text-center px-auto pt-0">
      <FourthStep/><span>what are your payment details</span>
    </v-card-title>

    <v-card flat class="transparent about mx-auto my-2">
      <v-row dense justify="end" class="mx-4 my-0">
        <v-col>
          <p class="normal-text">first name*</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="firstName"
          ></v-text-field>
        </v-col>
        <v-col>
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
        <v-col>
          <p class="normal-text">card expiry</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="cardExpiry"
          ></v-text-field>
        </v-col>
        <v-col>
          <p class="normal-text">ccv</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="ccv"
          ></v-text-field>
        </v-col>
      </v-row>

    <v-row dense justify="end" class="mx-4 my-0">
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

import FourthStep from '@/components/fibre-internet-plans/steps/FourthStep.vue'
import CreditCards from '@/components/fibre-internet-plans/cards/Cards.vue'

export default {
  name: 'Modems',
  components: {
    FourthStep,
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
