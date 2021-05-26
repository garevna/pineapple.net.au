<template>
  <v-container fluid class="homefone">
    <v-main class="contact-fone">
      <v-row class="mx-auto">
        <v-col cols="12" md="4">
          <v-card flat class="transparent mx-auto" max-width="300">
            <v-card-title>
              <h1 d-none d-md-block>Feel free to contact us anytime</h1>
            </v-card-title>
            <v-card-text>
              <h3>address</h3>
              <p>{{ officeAddress }}</p>
              <p>{{ officePhone }}</p>
              <p><small>Let's connect</small></p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" class="mx-auto">
          <v-card flat class="transparent mx-auto" max-width="700">
            <v-row class="my-0">
              <v-col cols="12" md="6" class="input my-0">
                <p><b>Full name</b></p>
                <v-text-field
                        dence
                        hide-details
                        outlined
                        v-model="fullName"
                        :hint="fullNameHint"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="input my-0">
                <p
                    :style="{ color: emailColor }"
                ><b>Email</b></p>
                <v-text-field
                        dence
                        hide-details
                        outlined
                        v-model="email"
                        :error="emailError"
                        :hint="emailHint"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="input my-0">
                <p><b>Your address</b></p>
                <v-text-field
                      outlined
                      v-model="address"
                      ref="autocompleteAddressField"
                    >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="input my-0">
                <p><b>Your enquiry</b></p>
                <v-textarea
                        outlined
                        width="80%"
                        height="110"
                        value=""
                        v-model="message"
                        hint="20 symbols or more"
                ></v-textarea>
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
        </v-col>
      </v-row>
      <!-- ============================= FOOTER && MAP ============================= -->
      <Map :height.sync="mapHeight" class="mb-12"/>
    </v-main>
    <Popup :opened.sync="popupOpened" :type="popupType" />
  </v-container>
</template>

<style scoped>

.contact-fone {
  margin-top: 160px!important;
  padding-top: 0px!important;
}
.button-send-message {
  padding: 0;
  margin-top: -30px!important;
  margin-bottom: 30px!important;
  margin-left: calc(50% - 110px);
}

h3, p, small {
  text-align: left;
}
.input {
  margin-bottom: 0;
  line-height: 0;
}

@media screen and (max-width: 420px) {
  .contact-fone {
    margin-top: 64px!important;
  }
}
</style>

<script>

import { mapState, mapMutations, mapGetters } from 'vuex'

// import Map from '@/components/map/Map.vue'

export default {
  name: 'ContactUs',
  components: {
    Map: () => import('@/components/map/Map.vue')
  },
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
    ...mapState(['viewportWidth', 'officeAddress', 'officePhone', 'connectEndpoint', 'signInEndpoint']),
    ...mapState('contact', ['userFullName', 'userEmail', 'userAddress', 'userMessage']),
    ...mapGetters('contact', ['pages', 'selectors']),
    ...mapState('clientInfo', ['personalInfo']),
    checkedAddress: {
      get () {
        return this.personalInfo.address
      },
      set (val) {
        this.updateAddress(val)
      }
    },
    plans () {
      return this.selectors[this.page] === '#plans' ? this.pages[this.page].toLowerCase() : 'residential'
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
      setMessage: 'USER_MESSAGE'
    }),
    ...mapMutations('clientInfo', {
      update: 'UPDATE_PERSONAL_DATA'
    }),
    updateAddress (value) {
      this.update({ prop: 'address', value })
    },
    validateEmail (val) {
      return val.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    },
    async sendMessage () {
      if (!this.fullName || !this.address || !this.validateEmail(this.email)) {
        this.popupType = 'error'
        this.popupOpened = true
        return
      }
      this.buttonValue = this.fullName + this.email + this.message
      const res = await this.$store.dispatch('contact/SEND_EMAIL')
      this.popupType = res ? 'success' : 'error'
      this.popupOpened = true
      this.$store.dispatch('contact/CLEAR_FIELDS')
    }
  },
  mounted () {
    this.address = this.checkedAddress
    this.$vuetify.goTo(0)
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
