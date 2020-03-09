<template>
  <v-container fluid>
    <div style="position: relative">
      <FoneAsMap/>
      <v-card flat class="transparent check-availability mx-auto my-0 my-lg-12 pt-0 pt-lg-12" width="100%">
        <v-card-title class="mx-auto">
          <h2 :class="`address-title--${screen}`">CHECK AVAILABILITY</h2>
        </v-card-title>
        <v-card-text class="mx-auto">
          <p :class="`address-text address-text--${screen}`">
            to find out if Pineapple Net is available at your home or business.
          </p>
        </v-card-text>
        <v-row align="center" justify="center">
          <!-- <v-col cols="12" md="8" lg="6"> -->
            <v-card-text :class="`mx-auto address-card address-card--${screen}`">
              <v-text-field
                    :class="`transparent address-input address-input--${screen}`"
                    label="Enter your address"
                    :v-model="address"
                    :height="buttonHeight"
                    rounded
                    v-model="address"
                  >
              </v-text-field>
              <!-- <v-row align="center" justify="center"> -->
                  <v-btn
                    :class="`address-button address-button--${screen}`"
                    depressed
                    dark
                    :height="buttonHeight"
                    color="#72BF44"
                    label="Check Now"
                    @click="check"
                    >Check Now
                  </v-btn>
              <!-- </v-row> -->
            </v-card-text>
          <!-- </v-col> -->
        </v-row>
      </v-card>
    </div>
    <SuccessPopup :success.sync="success"/>
    <!-- <SuccessPopupSmall :success.sync="success" v-else/> -->
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
  font-size: 28px;
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
  min-width: 340px;
  max-width: 90%;
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
  left: 0;
  width: 100%;
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
  width: 100%;
  font-size: 13px;
  top: 60px;
  left: 0px;
}
</style>

<script>

import { mapState } from 'vuex'

import FoneAsMap from '@/components/check-availability/FoneAsMap.vue'
import SuccessPopup from '@/components/check-availability/SuccessPopup.vue'
// import SuccessPopupSmall from '@/components/check-availability/SuccessPopupSmall.vue'

export default {
  name: 'CheckAvailability',
  components: {
    FoneAsMap,
    SuccessPopup
  },
  data () {
    return {
      address: '',
      success: false
    }
  },
  watch: {
    mode (val) {
      this.changeViewport(val)
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    screen () {
      return this.viewportWidth < 960 ? 'shrink' : 'wide'
    },
    buttonHeight () {
      return this.viewportWidth < 960 ? 40 : 70
    }
  },
  methods: {
    check () {
      this.success = true
    },
    changeViewport (mode) {

    }
  },
  mounted () {
    this.changeViewport(this.mode)
  }
}
</script>
