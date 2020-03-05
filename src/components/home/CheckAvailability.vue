<template>
  <v-container fluid>
    <div style="position: relative">
      <FoneAsMap/>
      <v-card flat class="transparent check-availability mx-auto mt-12 pt-12" width="100%">
        <v-card-title class="mx-auto">
          <h2>CHECK AVAILABILITY</h2>
        </v-card-title>
        <v-card-text>
          <p>to find out if Pineapple Net is available at your home or business.</p>
        </v-card-text>
        <v-row align="center" justify="center">
          <v-col cols="10" md="8" lg="6">
            <v-card-text
                class="input-address mx-auto"
            >
                  <v-text-field
                    height="50"
                    max-width="820"
                    class="transparent"
                    label="Enter your address"
                    :v-model="address"
                    rounded
                    v-model="address"
                    style="position: absolute; top: -14px; left: 0; font-size: 16px; v-align: middle"
                  >
                </v-text-field>
                <v-btn
                  class="input-address--button"
                  max-width="225"
                  min-width="225"
                  depressed
                  height="50"
                  label="Check Now"
                  dark
                  color="#72BF44"
                  @click="check"
                  >Check Now</v-btn>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped>
.check-availability {
  position: absolute;
  top: 0;
  left: 0;
  border-right: solid 10px transparent;
}
.input-address {
  position: relative;
  max-width: 820px;
  width: 90%;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 1000px;
  border-right: solid 10px transparent;
}
.input-address--button {
  position: absolute;
  top: 0px;
  right: -10px;
  border-radius: 1000px;
  border: solid 2px #fff!important;
  box-sizing: border-box;
}
</style>

<script>
import FoneAsMap from '@/components/check-availability/FoneAsMap.vue'

export default {
  name: 'CheckAvailability',
  components: {
    FoneAsMap
  },
  data () {
    return {
      address: ''
    }
  },
  methods: {
    check () {
      console.log(this.address)
    }
  }
}
</script>
