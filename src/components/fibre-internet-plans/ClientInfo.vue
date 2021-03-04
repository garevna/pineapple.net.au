<template>
  <v-card flat class="transparent mx-auto mt-0 mb-12 pa-0" :width="containerWidth">
    <StepHeader :tab="2"/>

    <v-card flat class="transparent about mx-auto my-2">
      <div class="about--radio">
        <v-radio-group v-model="trigger">
          <v-radio class="radio-custom"
                   color="deepgreen"
                   label="I'm a business"
                   :value="plan === 'residential' ? null : plan"
                   :hint="businessHint"
                   @click="toggle"
          ></v-radio>
        </v-radio-group>
      </div>

      <v-row v-if="trigger">
        <v-col cols="12" md="6" class="py-0">
          <p class="normal-text">business name</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="businessName"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <p class="normal-text">abn number</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="abnNumber"
            :rules="abnRules"
          ></v-text-field>
        </v-col>
        <p class="grey-comment">
          Please note that this is for invoicing purposes only and won't change the service or product grade provided.
        </p>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="py-0">
          <p class="normal-text">first name*</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="firstName"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
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
        <v-col cols="12" md="6" class="py-0">
          <p class="normal-text">
              email*
          </p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="email"
            :rules="emailRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <p class="normal-text">
            date of birth*
          </p>
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
                  v-model="birthDate"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                     ref="picker"
                     v-model="birthDate"
                     @change="saveDate"
                     year-icon="mdi-calendar-blank"
                     prev-icon="mdi-skip-previous"
                     next-icon="mdi-skip-next"
                     :max="new Date(new Date() - 18 * 365 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10)"
                     :min="new Date(new Date() - 100 * 365 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10)"
              ></v-date-picker>
            </v-menu>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="py-0">
          <p class="normal-text">mobile number*</p>
          <v-text-field
            outlined
            dense
            height="42"
            v-model="phone"
            :rules="phoneRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
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
        <v-col class="py-0">
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

import { mapState, mapGetters } from 'vuex'

import StepHeader from '@/components/fibre-internet-plans/StepHeader.vue'

export default {
  name: 'ClientInfo',
  components: {
    StepHeader
  },
  props: {
    next: Boolean,
    prev: Boolean
  },
  data () {
    return {
      businessHint: '',
      emailError: false,
      abnError: false,
      phoneError: false,
      datePicker: false,
      abnRules: [
        value => !!value || 'Required',
        value => {
          if (!value) {
            this.abnError = true
            return 'Required'
          }
          const pattern = /^[0-9]{11}$/gm
          return pattern.test(value.split(' ').join('')) || 'Invalid ABN number'
        },
        value => {
          if (!value) {
            this.abnError = true
            return 'Required'
          }
          const weight = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
          const array = value.split(' ').join('').split('')
          array.unshift(array.shift() - 1)
          const result = array.reduce((accum, item, index) => { return accum + item * weight[index] }, 0)
          this.abnError = result % 89 !== 0
          return !this.abnError || 'Invalid ABN number'
        }
      ],
      phoneRules: [
        value => !!value || 'Required',
        value => {
          if (!value) {
            this.phoneError = true
            return 'Required'
          }
          const pattern = /^[0-9]{10,12}$/gm
          this.phoneError = !pattern.test(value.split(' ').join(''))
          return !this.phoneError || 'Invalid phone number'
        }
      ],
      emailRules: [
        value => !!value || 'Required',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          this.emailError = !pattern.test(value)
          return !this.emailError || 'Invalid e-mail'
        }
      ]
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('clientInfo', ['personalInfo']),
    ...mapGetters('clientInfo', ['plan', 'tariff']),
    ...mapState('internetPlans', ['occupancyTypes', 'infoSources']),
    ...mapGetters('internetPlans', ['plan']),
    trigger: {
      get () {
        return this.plan === 'business' ? this.plan : null
      },
      set (newVal) {
        this.businessHint = 'It will break selected tariff'
        // this.business = !this.business
      }
    },
    containerWidth () { return this.viewportWidth < 600 ? this.viewportWidth : 680 },
    businessName: {
      get () { return this.personalInfo.businessName },
      set (val) { this.$store.commit('clientInfo/UPDATE_BUSINESS_INFO', { prop: 'businessName', value: val }) }
    },
    abnNumber: {
      get () { return this.personalInfo.abnNumber },
      set (val) {
        this.abnError || this.$store.commit('clientInfo/UPDATE_BUSINESS_INFO', { prop: 'abnNumber', value: val })
      }
    },
    firstName: {
      get () { return this.personalInfo.firstName },
      set (val) { this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'firstName', value: val }) }
    },
    lastName: {
      get () { return this.personalInfo.lastName },
      set (val) { this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'lastName', value: val }) }
    },
    email: {
      get () { return this.personalInfo.email },
      set (val) {
        this.emailError || this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'email', value: val })
      }
    },
    birthDate: {
      get () { return this.personalInfo.birthDate },
      set (val) {
        this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'birthDate', value: val })
      }
    },
    phone: {
      get () { return this.personalInfo.phone },
      set (val) { this.phoneError || this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'phone', value: val }) }
    },
    occupancyType: {
      get () { return this.personalInfo.occupancyType },
      set (val) { this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'occupancyType', value: val }) }
    },
    infoSource: {
      get () { return this.personalInfo.infoSource },
      set (val) { this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'infoSource', value: val }) }
    }
  },

  methods: {
    toggle () {
      this.trigger = this.trigger ? null : 'business'
      this.$store.commit('CHANGE_PLAN', this.trigger || 'residential')
    },
    saveDate (date) {
      this.$refs.datePickerMenu.save(date)
      this.datePicker = false
    }
  },
  mounted () {
    // this.trigger = this.plan === 'business' ? 'business' : null
  }
}
</script>
