<template>
<v-container fluid>
  <v-card flat tile class="transparent mx-auto mt-0 mb-12 pa-0" :width="containerWidth">
    <StepHeader :tab="0"/>

    <v-card flat class="transparent mx-auto my-4">
      <SwitchMode />
      <v-card-text class="text-center">
        <h3>{{ plan.toUpperCase() }}</h3>
      </v-card-text>
    </v-card>
    <v-row v-if="viewportWidth > 680" class="mx-auto">
      <v-card
            hover
            width="640"
            height="140"
            v-for="(tarif, index) in plans[plan]"
            :key="index"
            class="card--wide mx-auto my-2"
            @click="selectTarif(index)"
            :color="tarif.selected ? selectedColor : 'white'"
      >
        <v-row align="center" justify="space-around" width="100%">
          <v-col cols="3">
            <sup class="dollar" :style="{ color: greenTextColor(tarif) }">$</sup>
            <span class="price" :style="{ color: greenTextColor(tarif) }">{{ tarif.price }}</span>
            <span class="mo" :style="{ color: greenTextColor(tarif) }">/mo</span>
          </v-col>
          <v-col cols="4">
            <p class="normal-text" :style="{ color: grayTextColor(tarif) }">
              {{ tarif.download }} Mbps Download<br>
              {{ tarif.download }} Mbps Upload<br>
              Unlimited Data
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-row v-else>
      <v-card
            flat
            hover
            width="340"
            height="158"
            v-for="(tarif, index) in tarifs"
            :key="index"
            class="mx-auto my-2"
            @click="selectTarif(index)"
            :color="tarif.selected ? selectedColor : 'white'"
      >
        <v-row align="center" justify="space-around" width="100%">
          <v-col cols="6">
            <sup class="dollar" :style="{ color: greenTextColor(tarif) }">$</sup>
            <span class="price" :style="{ color: greenTextColor(tarif) }">{{ tarif.price }}</span>
            <span class="mo" :style="{ color: greenTextColor(tarif) }">/mo</span>
            <br><br>
            <p class="normal-text shrink" :style="{ color: grayTextColor(tarif) }">
              {{ tarif.download }} Mbps Download<br>
              {{ tarif.download }} Mbps Upload<br>
              Unlimited Data
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-row class="my-12">
        <v-col xs="12" class="mx-auto">
          <v-row justify="center" class="text-center mx-auto mx-md-10 mx-lg-6 my-2 py-10" style="max-width: 680px">
            <v-col
               cols="12"
               md="8"
               my-0
               py-0
            >
                <v-text-field
                    single-line
                    dense
                    solo
                    flat
                    background-color="transparent"
                    placeholder="Add a promo code"
                    color="deepgreen"
                    height="40"
                    min-width="320"
                    class="promo-code"
                    v-model="promocode"
                ></v-text-field>
            </v-col>

            <v-col
               cols="8"
               sm="6"
               md="4"
               my-0
               py-0
            >
                <v-btn
                    color="buttons"
                    dark
                    rounded
                    width="100%"
                    height="40"
                    @click="$emit('update:next', true)"
                >
                  Continue
                </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

  </v-card>
</v-container>
</template>

<style scoped>

.card {
  position: relative;
  top: 14px;
  height: 140px;
  width: 638px;
  margin-top: 16px;
}

.shrink {
  font-size: 13px!important;
  line-height: 150%!important;
}

.bold-text, .normal-text {
  font-style: normal;
  letter-spacing: 0.02em;
  text-align: left;
  font-size: 14px;
}

.bold-text {
  font-weight: bold;
  line-height: 150%;
}
.normal-text {
  font-weight: normal;
  line-height: 250%;
}

.white-card .bold-text, .white-card .normal-text {
  color: #353535;
}
.green-card .bold-text, .green-card .normal-text {
  color: #fff;
}

.dollar, .price, .mo {
  font-style: normal;
  font-weight: 900;
  color: #20731C;
  letter-spacing: 0.02em;
}

.dollar {
  margin-top: -40px;
  font-size: 24px;
}
.price {
  font-size: 32px;
}
.mo {
  font-size: 18px;
  font-weight: normal;
}
.green-card .dollar, .green-card .price, .green-card .mo {
  color: #fff;
}

.promo-code {
  border: solid 1px #20731C;
  border-radius: 40px!important;
  height: 40px;
  font-size: 14px;
  padding: 0 16px;
  color: #20731C;
}

</style>

<script>

import { mapState } from 'vuex'

import StepHeader from '@/components/fibre-internet-plans/StepHeader.vue'
import SwitchMode from '@/components/plans/SwitchToggle.vue'
// import Menu from '@/components/plans/Menu.vue'

export default {
  name: 'FirstStep',
  components: {
    // Menu,
    StepHeader,
    SwitchMode
  },
  props: {
    next: Boolean,
    prev: Boolean
  },
  data () {
    return {
      // apartments: false,
      selectedColor: '#72BF44',
      promocode: ''
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'plan']),
    ...mapState('internetPlans', ['plans']),
    tarifs () {
      return this.plans[this.plan]
    },
    header () {
      return this.plan.toUpperCase()
    },
    buttonWidth () { return this.viewportWidth < 600 ? '100%' : '220px' },
    containerWidth () { return this.viewportWidth < 600 ? this.viewportWidth : '680' }
  },
  watch: {
    promocode (val) {
      this.$store.commit('clientInfo/SET_PROMO_CODE', val)
    }
  },
  methods: {
    grayTextColor (tarif) {
      return tarif.selected ? '#fff' : '#353535'
    },
    blackTextColor (tarif) {
      return tarif.selected ? '#fff' : '#000'
    },
    greenTextColor (tarif) {
      return tarif.selected ? '#fff' : '#20731C'
    },
    selectTarif (index) {
      this.$store.dispatch('internetPlans/SELECT_TARIF', index)
    }
  },
  mounted () {
    document.documentElement.style.setProperty('--switch-padding-top', '16px')
    document.documentElement.style.setProperty('--switch-width', '340px')
  }
}
</script>
