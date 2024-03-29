<template>
  <v-card
    flat
    class="transparent ma-auto"
    max-width="832"
    min-height="320"
  >
    <div style="position: relative">
      <FoneAsMap />
      <v-card flat class="transparent check-availability mx-auto my-0 my-lg-12 pt-0 pt-lg-12" width="100%">
        <v-progress-linear
          v-if="progress"
          :indeterminate="progress"
          color="primary"
          absolute
          bottom
          rounded
          style="width: 80%; margin-left: 10%; bottom: -4px;"
        />
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
                :id="autocompleteId"
              />

              <v-btn
                :class="`address-button address-button--${screen}`"
                depressed
                dark
                :height="buttonHeight"
                color="#72BF44"
                label="Check Now"
                @click="checkAvailable"
              >
                {{ checkAddress.buttonText }}
              </v-btn>
            </v-card-text>
        </v-row>
      </v-card>
    </div>
  </v-card>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import { createAutocomplete, emitEvent } from '@/helpers'

export default {
  name: 'CheckAvailability',

  components: {
    FoneAsMap: () => import('@/components/check-availability/FoneAsMap.vue')
  },

  props: ['business', 'residential', 'contact', 'popup', 'open'],

  data () {
    return {
      progress: false,
      success: false,
      failure: false,
      autocompleteId: `autocomplete-address-${Date.now()}`
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
    businessClicked: {
      get () {
        return this.business
      },
      set (val) {
        this.$emit('update:business', val)
      }
    },
    residentialClicked: {
      get () {
        return this.residential
      },
      set (val) {
        this.$emit('update:residential', val)
      }
    },
    contactClicked: {
      get () {
        return this.contact
      },
      set (val) {
        this.$emit('update:contact', val)
      }
    },
    buttonHeight () {
      return this.viewportWidth < 960 ? 40 : 70
    },

    address: {
      get () { return this.personalInfo.address },
      set (value) {
        if (!value) this.addressAvailable = false
        this.update({ prop: 'address', value })
        this.setAddress(value)
      }
    },

    location: {
      get () { return this.personalInfo.location },
      set (value) {
        this.update({ prop: 'location', value })
      }
    },

    addressAvailable: {
      get () {
        return this.personalInfo.addressAvailable
      },
      set (value) {
        this.update({ prop: 'addressAvailable', value })
      }
    }
  },

  watch: {
    businessClicked (val) {
      this.$emit('update:business', val)
    },

    residentialClicked (val) {
      this.$emit('update:residential', val)
    }
  },

  methods: {
    ...mapMutations('clientInfo', {
      update: 'UPDATE_PERSONAL_DATA',
      setAddressAvailable: 'SET_ADDRESS_AVAILABLE'
    }),

    ...mapMutations('contact', {
      setAddress: 'USER_ADDRESS'
    }),

    startProgress () {
      this.progress = true
    },

    stopProgress () {
      this.progress = false
    },

    async checkAvailable () {
      if (!window[Symbol.for('global.addressData')].address) return
      // this.setSearchResult()
      const { address, status } = window[Symbol.for('global.addressData')]
      this.address = address
      this.update({ prop: 'address', value: address })
      this.setAddress(address)
      this.setAddressAvailable(status === 'success')
      const eventName = status === 'success' ? 'open-success-popup' : 'open-failure-popup'
      emitEvent(eventName)
    }
  },

  beforeMount () {
    window.addEventListener('set-progress-on', this.startProgress)
    window.addEventListener('set-progress-off', this.stopProgress)
  },

  beforeDestroy () {
    window.removeEventListener('set-progress-on', this.startProgress)
    window.removeEventListener('set-progress-off', this.stopProgress)
  },

  mounted () {
    const inputElement = document.getElementById(this.autocompleteId)
    createAutocomplete(inputElement)
  }
}
</script>

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
