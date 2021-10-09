<template>
  <v-card flat class="transparent mx-auto" max-width="700">
    <v-row class="my-0">
      <v-col cols="12" md="6" class="input my-0">
        <p class="mb-0">
          <b>Full name</b>
        </p>
        <v-text-field
          dence
          hide-details
          outlined
          v-model="fullName"
          :hint="fullNameHint"
        />
      </v-col>
      <v-col cols="12" md="6" class="input my-0">
        <p class="mb-0" :style="{ color: emailColor }" >
          <b>Email</b>
        </p>
        <v-text-field
          dence
          hide-details
          outlined
          v-model="email"
          :error="emailError"
          :hint="emailHint"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="input my-0">
        <p class="mb-0">
          <b>Your address</b>
        </p>
        <v-text-field
          outlined
          v-model="address"
          ref="autocompleteAddressField"
          hide-details
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="input my-0">
        <p class="mb-0">
          <b>Your enquiry</b>
        </p>
        <v-select
          :items="targets"
          item-text="text"
          item-value="value"
          label="Your enquiry"
          outlined
          @change="selectTarget"
          hide-details
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="input my-0">
        <p class="mb-0">
          <b>Details</b>
        </p>
        <v-textarea
          outlined
          width="80%"
          height="110"
          value=""
          v-model="message"
          hint="20 symbols or more"
        />
      </v-col>
    </v-row>
    <v-row align-start justify-center max-height="50">
      <v-col class="input my-0">
        <v-btn
            color="buttons"
            dark
            rounded
            width="220"
            height="40"
            class="button-send-message"
            @click="sendMessage"
            :value="buttonValue"
        >
          Send message
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'ContactForm',

  props: ['invalidFormData'],

  data () {
    return {
      page: null,
      emailError: false,
      emailHint: '',
      emailColor: '#000',
      messageError: true,
      fullNameError: true,
      fullNameHint: '',
      buttonValue: '',
      popupType: undefined,
      popupOpened: false,
      mapHeight: 0
    }
  },

  computed: {
    ...mapState('contact', ['userFullName', 'userEmail', 'userAddress', 'targets', 'target', 'userMessage']),
    ...mapState('clientInfo', ['personalInfo']),
    checkedAddress: {
      get () {
        return this.personalInfo.address
      },
      set (val) {
        this.updateAddress(val)
      }
    },
    fullName: {
      get () { return this.userFullName },
      set (val) {
        this.setName(val)
        this.fullNameError = this.fullName.length < 2
        this.fullNameHint = this.fullNameError ? 'Enter your full name please' : ''
      }
    },
    email: {
      get () { return this.userEmail },
      set (val) {
        this.emailError = !this.validateEmail(val)
        this.emailColor = val && this.emailError ? '#f00' : '#000'
        this.emailHint = this.emailError ? 'Invalid email' : ''
        this.setEmail(val)
      }
    },
    address: {
      get () { return this.userAddress },
      set (val) {
        this.setAddress(val)
      }
    },
    message: {
      get () { return this.userMessage },
      set (val) {
        this.messageError = this.message.length < 20
        this.setMessage(val)
      }
    },
    disabledButton () {
      const duplicated = this.buttonValue === this.fullName + this.email + this.message
      return duplicated || this.fullNameError || this.emailError || this.messageError
    }
  },

  methods: {
    ...mapMutations('contact', {
      setName: 'USER_FULL_NAME',
      setEmail: 'USER_EMAIL',
      setAddress: 'USER_ADDRESS',
      setTarget: 'USER_MESSAGE_TARGET',
      setMessage: 'USER_MESSAGE'
    }),

    ...mapMutations('clientInfo', {
      update: 'UPDATE_PERSONAL_DATA'
    }),

    ...mapActions('contact', {
      sendEmail: 'SEND_EMAIL',
      clearForm: 'CLEAR_FIELDS'
    }),

    updateAddress (value) {
      this.update({ prop: 'address', value })
    },

    validateEmail (val) {
      return val.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    },

    async sendMessage () {
      if (!this.fullName || !this.address || !this.validateEmail(this.email)) return this.$emit('update:invalidFormData', true)

      this.buttonValue = this.fullName + this.email + this.message
      await this.sendEmail()
      this.clearForm()
    },

    selectTarget (value) {
      this.setTarget(this.targets.find(item => item.value === value))
    }
  },

  mounted () {
    this.address = this.checkedAddress
    const inputElement = this.$refs.autocompleteAddressField.$refs.input
    const autocomplete = new this.$Autocomplete(inputElement, { componentRestrictions: { country: 'au' } })
    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace()
      inputElement.value = place.formatted_address
      this.address = place.formatted_address
      this.updateAddress(place.formatted_address)
    }.bind(this))
  }
}
</script>

<style scoped>

h3, p, small {
  text-align: left;
}
.input {
  margin-bottom: 0;
  line-height: 0;
}
/* .button-send-message {
  padding: 0;
  margin-top: -30px!important;
  margin-bottom: 30px!important;
  margin-left: calc(50% - 110px);
} */
</style>
