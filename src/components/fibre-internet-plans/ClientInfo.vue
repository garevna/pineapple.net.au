<template>
  <v-card flat class="transparent mt-0 mb-12 pa-0">
    <v-card-title class="plans--title deepgreen text-center px-auto pt-0">
      <ThirdStep/><span>tell us some more about yourself</span>
    </v-card-title>

    <v-card flat class="transparent about mx-auto my-2">
      <div class="about--radio">
        <v-radio-group v-model="business">
          <v-radio class="radio-custom"
                   color="deepgreen"
                   label="i'm a business"
                   :value=true
                   @click="togglePlan"
          ></v-radio>
        </v-radio-group>
      </div>

      <v-row v-if="plan==='business'">
        <v-col>
          <p class="normal-text">business name</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="businessName"
          ></v-text-field>
        </v-col>
        <v-col>
          <p class="normal-text">abn number</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="abnNumber"
          ></v-text-field>
        </v-col>
        <p class="grey-comment">
          Please note that this is for invoicing purposes only and won't change the service or product grade provided.
        </p>
      </v-row>

      <v-row>
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

      <v-row>
        <v-col>
          <p
              class="normal-text"
              :style="{ color: emailColor }"
          >
              email*
          </p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="email"
            :error="emailError"
            :error-message="emailErrorMessage"
          ></v-text-field>
        </v-col>
        <v-col>
          <p
              class="normal-text"
              :style="{ color: dateColor }"
          >
            date of birth*
          </p>
            <v-menu
              v-model="datePicker"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="birthDate"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                     v-model="birthDate"
                     @input="datePicker = false"
                     year-icon="mdi-calendar-blank"
                     prev-icon="mdi-skip-previous"
                     next-icon="mdi-skip-next"
              ></v-date-picker>
            </v-menu>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="normal-text">mobile number*</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="phone"
          ></v-text-field>
        </v-col>
        <v-col>
          <p class="normal-text">occupancy type*</p>
          <v-combobox
            v-model="occupancyType"
            :items="occupancyTypes"
            outlined
            dense
            autocomplete="off"
          ></v-combobox>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="normal-text">where did you hear about us?*</p>
          <v-combobox
            v-model="infoSource"
            :items="infoSources"
            outlined
            dense
            autocomplete="off"
          ></v-combobox>
        </v-col>
      </v-row>
    </v-card>

    <v-row dense justify="end" class="ma-4">
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

import { mapState } from 'vuex'

import ThirdStep from '@/components/fibre-internet-plans/steps/ThirdStep.vue'

const emailValidator = require('email-validator')

export default {
  name: 'Modems',
  components: {
    ThirdStep
  },
  props: {
    next: Boolean,
    prev: Boolean
  },
  data () {
    return {
      business: this.plan === 'business',
      emailError: false,
      emailErrorMessage: '',
      emailColor: '#000',
      dateError: false,
      datePicker: false,
      dateColor: '#000',
      minDate: new Date(new Date() - 18 * 365 * 24 * 60 * 60 * 1000),
      maxDate: new Date(new Date() - 100 * 365 * 24 * 60 * 60 * 1000)
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.internetPlans.userInfo,
      occupancyTypes: state => state.internetPlans.occupancyTypes,
      infoSources: state => state.internetPlans.infoSources
    }),
    plan: {
      get () { return this.userInfo.plan },
      set (val) { this.$store.commit('internetPlans/USER_PLAN', val) }
    },
    businessName: {
      get () { return this.userInfo.businessName },
      set (val) { this.$store.commit('internetPlans/USER_BUSINESS_NAME', val) }
    },
    abnNumber: {
      get () { return this.userInfo.abnNumber },
      set (val) { this.$store.commit('internetPlans/USER_ABN_NUMBER', val) }
    },
    firstName: {
      get () { return this.userInfo.firstName },
      set (val) { this.$store.commit('internetPlans/USER_FIRST_NAME', val) }
    },
    lastName: {
      get () { return this.userInfo.lastName },
      set (val) { this.$store.commit('internetPlans/USER_LAST_NAME', val) }
    },
    email: {
      get () { return this.userInfo.email },
      set (val) {
        this.emailError = !emailValidator.validate(val)
        this.emailColor = this.emailError ? '#f00' : '#000'
        this.emailError || this.$store.commit('internetPlans/USER_EMAIL', val)
      }
    },
    birthDate: {
      get () {
        return this.userInfo.birthDate
      },
      set (val) {
        this.$store.commit('internetPlans/USER_BIRTHDATE', val)
        this.dateError = new Date(this.birthDate) > this.minDate || new Date(this.birthDate) < this.maxDate
        this.dateColor = this.dateError ? '#f00' : '#000'
      }
    },
    phone: {
      get () { return this.userInfo.phone },
      set (val) { this.$store.commit('internetPlans/USER_PHONE', val) }
    },
    occupancyType: {
      get () { return this.userInfo.occupancyType },
      set (val) { this.$store.commit('internetPlans/USER_OCCUPANCY', val) }
    },
    infoSource: {
      get () { return this.userInfo.infoSource },
      set (val) { this.$store.commit('internetPlans/USER_INFO_SOURCE', val) }
    }
  },

  methods: {
    togglePlan () {
      this.business = !this.business
      this.plan = this.business ? 'business' : 'residential'
      this.$store.commit('internetPlans/USER_PLAN', this.plan)
    },
    getRelativeData (data, days) {
      if (!(data instanceof Date)) return
      return new Date(data.setDate(data.getDate() + days))
    }
  }
}
</script>
