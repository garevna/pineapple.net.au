<template>
  <v-card flat class="transparent mt-0 mb-12 pa-0">
    <v-card-title class="plans--title deepgreen text-center px-auto pt-0">
      <ThirdStep/><span>tell us some more about yourself</span>
    </v-card-title>

    <v-card flat class="transparent about mx-auto my-2">
      <div class="about--radio">
        <v-radio-group v-model="plan" :mandatory="false">
          <v-radio class="radio-custom" color="deepgreen" label="i'm a business" value="business" @click="change">
          </v-radio>
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
          <p class="normal-text">email*</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="email"
          ></v-text-field>
        </v-col>
        <v-col>
          <p class="normal-text">date of birth*</p>
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
            <v-date-picker v-model="birthDate" @input="datePicker = false; testBirthday()"></v-date-picker>
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
          <v-text-field
            outlined
            dense
            height="42"
            v-model="occupancyType"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="normal-text">where did you hear about us?*</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="source"
          ></v-text-field>
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

import ThirdStep from '@/components/fibre-internet-plans/steps/ThirdStep.vue'

export default {
  name: 'Modems',
  components: {
    ThirdStep
  },
  props: {
    business: Boolean,
    next: Boolean,
    prev: Boolean
  },
  data () {
    return {
      plan: 'residential',
      businessName: '',
      abnNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthDate: new Date().toISOString().substr(0, 10),
      occupancyType: '',
      source: '',
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
