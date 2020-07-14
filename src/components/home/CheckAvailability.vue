<template>
  <v-container fluid>
    <div style="position: relative">
      <FoneAsMap/>
      <v-card flat class="transparent check-availability mx-auto my-0 my-lg-12 pt-0 pt-lg-12" width="100%">
        <v-card-text class="mx-auto text-center">
          <h2 :class="`address-title--${screen}`">CHECK AVAILABILITY</h2>
        </v-card-text>
        <v-card-text class="mx-auto">
          <p :class="`address-text address-text--${screen}`">
            {{ checkAddress.text }}
          </p>
        </v-card-text>
        <v-row align="center" justify="center">
            <v-card-text :class="`mx-auto address-card address-card--${screen}`">
              <v-text-field
                    :class="`transparent address-input address-input--${screen}`"
                    :height="buttonHeight"
                    rounded
                    v-model="address"
                    :placeholder="checkAddress.placeholder"
                    id="autocompleteAddress"
                  >
              </v-text-field>
              <v-btn
                    :class="`address-button address-button--${screen}`"
                    depressed
                    dark
                    :height="buttonHeight"
                    color="#72BF44"
                    label="Check Now"
                    @click="checkAvailable"
                    >{{ checkAddress.buttonText }}
              </v-btn>
            </v-card-text>
        </v-row>
      </v-card>
    </div>
    <SuccessPopup
        :success.sync="success"
        :business.sync="businessClicked"
        :residential.sync="residentialClicked"
    />
    <FailurePopup
        :failure.sync="failure"
        :business.sync="businessClicked"
        :residential.sync="residentialClicked"
        :contact.sync="contactClicked"
    />
  </v-container>
</template>

<style scoped>
.address-title {
  color: #363636;
}
.address-title--wide {
  font-size: 36px;
}
.address-title--shrink {
  font-size: 26px;
}

.address-text {
  color: #6D6D6D;
  line-height: 150%;
}
.address-text--wide {
  font-size: 24px;
}
.address-text--shrink {
  font-size: 18px;
}

.check-availability {
  position: absolute;
  top: 0;
  left: 0;
  border-right: solid 10px transparent;
}

.address-card {
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 1000px;
}
.address-card--wide {
  max-width: 820px;
  width: 90%;
  height: 70px!important;
  border-right: solid 10px transparent;
}
.address-card--shrink {
  width: 300px;
  height: 40px!important;
}

.address-input {
  position: absolute;
  background: #ddd;
  border-radius: 1000px;
  letter-spacing: 0.02em;
  color: #000000;
}
.address-input--wide {
  font-size: 16px;
  left: 8px;
  top: -16px;
  width: calc(100% - 320px);
}
.address-input--shrink {
  font-size: 13px;
  top: -14px;
  left: calc(50% - 150px);
  width: 300px;
}

.address-button {
  position: absolute;
  border-radius: 1000px;
  background: #72BF44;
  box-sizing: border-box;
}
.address-button--wide {
  top: 0px;
  right: -10px;
  width: 225px;
  border: solid 2px #fff!important;
  font-size: 16px;
}
.address-button--shrink {
  width: 220px;
  font-size: 13px;
  top: 60px;
  left: calc(50% - 110px);
}
</style>

<script>

import { mapState, mapActions } from 'vuex'

import FoneAsMap from '@/components/check-availability/FoneAsMap.vue'
import SuccessPopup from '@/components/check-availability/SuccessPopup.vue'
import FailurePopup from '@/components/check-availability/FailurePopup.vue'

export default {
  name: 'CheckAvailability',
  components: {
    FoneAsMap,
    SuccessPopup,
    FailurePopup
  },
  props: ['business', 'residential', 'contact'],
  data () {
    return {
      success: false,
      failure: false,
      businessClicked: false,
      residentialClicked: false,
      contactClicked: false
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('map', ['markerImage', 'serviceAvailable']),
    ...mapState('clientInfo', ['personalInfo']),
    ...mapState('content', ['checkAddress']),
    screen () {
      return this.viewportWidth < 960 ? 'shrink' : 'wide'
    },
    buttonHeight () {
      return this.viewportWidth < 960 ? 40 : 70
    },
    address: {
      get () { return this.personalInfo.address },
      set (address) {
        this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'address', value: address })
      }
    },
    location: {
      get () { return this.personalInfo.location },
      set (location) {
        this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'location', value: location })
      }
    },
    addressAvalable: {
      get () { return this.personalInfo.addressAvalable },
      set (addressAvalable) {
        this.$store.commit('clientInfo/UPDATE_PERSONAL_DATA', { prop: 'addressAvalable', value: addressAvalable })
      }
    }
  },
  watch: {
    businessClicked (val) {
      this.$emit('update:business', val)
    },
    residentialClicked (val) {
      this.$emit('update:residential', val)
    },
    contactClicked (val) {
      this.$emit('update:contact', val)
    }
  },
  methods: {
    ...mapActions({
      getAvailable: 'map/GET_AVAILABLE'
    }),
    checkAvailable () {
      if (!this.address) return
      this.success = !!this.serviceAvailable.find(polygon => this.$geoLocation(this.location, polygon))
      this.addressAvalable = this.success
      this.failure = !this.success
    }
  },
  mounted () {
    const inputElement = document.getElementById('autocompleteAddress')
    const autocomplete = new this.$Autocomplete(inputElement, { componentRestrictions: { country: 'au' } })
    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace()
      inputElement.value = place.formatted_address
      this.address = place.formatted_address
      this.location = place.geometry.location
      this.checkAvailable()
    }.bind(this))
  }
}
</script>
