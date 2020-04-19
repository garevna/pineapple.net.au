<template>
  <v-card flat tile class="transparent mx-auto mt-0 mb-12 pa-0" :width="containerWidth">
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
            v-model="number"
            :rules="cardNumberRules"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense justify="end" class="mx-4 my-0">
        <v-col cols="12" md="6">
          <p class="normal-text">card expiry</p>
          <v-menu
            ref="datePickerMenu"
            v-model="datePicker"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="expiry"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                   ref="picker"
                   v-model="expiry"
                   @change="saveDate"
                   year-icon="mdi-calendar-blank"
                   prev-icon="mdi-skip-previous"
                   next-icon="mdi-skip-next"
                   :min="new Date().toISOString().substr(0, 10)"
            ></v-date-picker>
          </v-menu>

        </v-col>
        <v-col cols="12" md="6">
          <p class="normal-text">ccv</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="ccv"
            :rules="ccvRules"
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
      cardNumberRules: [
        value => !!value || 'Required',
        value => {
          if (!value) {
            this.cardNumberError = true
            return 'Required'
          }
          const pattern = /^[0-9]{14,19}$/gm
          return pattern.test(value.split(' ').join('')) || 'Invalid card number'
        },
        value => {
          if (!value) {
            this.cardNumberError = true
            return 'Required'
          }
          let digits = value.split(' ').join('').split('')
          const lastNumber = Number(digits.pop())
          digits = digits.reverse().map((digit, index) => digit * (index % 2 === 0 ? 2 : 1))
          const result = digits.reduce((accum, digit, index) => {
            return accum + (digit > 9 ? digit - 9 : digit)
          }, 0) * 9
          this.cardNumberError = lastNumber !== result % 10
          return !this.cardNumberError || 'Invalid card number'
        }
      ],
      ccvRules: [
        value => !!value || 'Required',
        value => {
          if (!value) {
            this.ccvError = true
            return 'Required'
          }
          const pattern = /^[0-9]{3}$/gm
          return pattern.test(value.split(' ').join('')) || 'Invalid ccv'
        }
      ],
      datePicker: false
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('clientInfo', ['card']),
    containerWidth () { return this.viewportWidth < 600 ? this.viewportWidth : '680' },
    firstName: {
      get () { return this.card.firstName },
      set (val) { this.$store.commit('clientInfo/UPDATE_PAYMENT_DETAILS', { prop: 'firstName', value: val }) }
    },
    lastName: {
      get () { return this.card.lastName },
      set (val) { this.$store.commit('clientInfo/UPDATE_PAYMENT_DETAILS', { prop: 'lastName', value: val }) }
    },
    number: {
      get () { return this.card.number },
      set (val) { this.$store.commit('clientInfo/UPDATE_PAYMENT_DETAILS', { prop: 'number', value: val }) }
    },
    expiry: {
      get () { return this.card.expiry },
      set (val) { this.$store.commit('clientInfo/UPDATE_PAYMENT_DETAILS', { prop: 'expiry', value: val }) }
    },
    ccv: {
      get () { return this.card.ccv },
      set (val) { this.$store.commit('clientInfo/UPDATE_PAYMENT_DETAILS', { prop: 'ccv', value: val }) }
    }
  },
  methods: {
    change () {
      this.plan = this.plan === 'business' ? 'residential' : 'business'
    },
    saveDate (date) {
      this.$refs.datePickerMenu.save(date)
      this.datePicker = false
    }
  }
}
</script>
