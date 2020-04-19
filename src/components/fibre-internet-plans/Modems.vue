<template>
  <v-card flat tile class="transparent mx-auto mt-0 mb-12 pa-0" :width="containerWidth">
    <StepHeader :tab="1"/>

    <v-row class="mx-auto mt-4">
      <v-card
            hover
            width="100%"
            height="140"
            v-for="(modem, index) in modems"
            :key="index"
            class="mx-1 my-2 px-1 mx-sm-4 my-md-4 px-sm-4"
            @click="selectModem(index)"
            :color="modem.selected ? selectedColor : 'white'"
      >
        <v-row align="center" align-content="center" justify="center" style="width: 100%; min-height: 110px;">
          <v-col cols="6">
            <p class="modem-caption"  :style="{ fontSize: titleFont, color: blackTextColor(modem) }">
              {{ modem.title }}
            </p>
            <div v-if="typeof modem.price === 'number'">
              <sup class="dollar" :style="{ color: greenTextColor(modem) }">$</sup>
              <span class="price" :style="{ color: greenTextColor(modem) }">{{ modem.price }}</span>
              <span class="mo" :style="{ color: greenTextColor(modem) }">/mo</span>
            </div>
          </v-col>
          <v-col cols="6">
            <p class="normal-text" :style="{ fontSize: textFont, color: grayTextColor(modem) }">
              {{ modem.text }}
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

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

<style scoped>

.white-card {
  top: 14px;
  margin-top: 16px;
  background-color: #fff;
}

.modem-caption, .normal-text {
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #353535;
  text-align: left;
}

.modem-caption {
  font-size: 28px;
}
.normal-text {
  max-width: 360px;
  font-size: 14px;
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

@media screen and (max-width: 600px) {

}

</style>

<script>

import { mapState } from 'vuex'

import StepHeader from '@/components/fibre-internet-plans/StepHeader.vue'

export default {
  name: 'Modems',
  components: {
    StepHeader
  },
  props: {
    next: Boolean,
    prev: Boolean
  },
  data () {
    return {
      modems: [
        {
          title: 'I need a modem',
          text: 'Yes, I need to purchase a modem (0 month contracts)',
          price: 180,
          selected: false
        },
        {
          title: 'BYO modem',
          text: 'You’ll need a Gigabit modem which can be reconfigured',
          price: null,
          selected: false
        },
        {
          title: 'I need a modem',
          text: 'Yes, I need a $0 modem (on 12 month contracts)',
          price: 0,
          selected: false
        }
      ],
      selectedColor: '#72BF44'
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    buttonWidth () { return this.viewportWidth < 600 ? '100%' : '220px' },
    containerWidth () { return this.viewportWidth < 680 ? this.viewportWidth : '680' },
    cardWidth () { return this.viewportWidth < 640 ? '300px' : '640px' },
    cardHeight () { return this.viewportWidth < 600 ? '120px' : '140px' },
    titleFont () { return this.viewportWidth < 600 ? '18px' : '28px' },
    textFont () { return this.viewportWidth < 600 ? '13px' : '14px' }
  },
  methods: {
    grayTextColor (modem) {
      return modem.selected ? '#fff' : '#353535'
    },
    blackTextColor (modem) {
      return modem.selected ? '#fff' : '#000'
    },
    greenTextColor (modem) {
      return modem.selected ? '#fff' : '#20731C'
    },
    selectModem (index) {
      this.modems.forEach((modem) => { modem.selected = false })
      this.modems[index].selected = true
      this.$store.commit('clientInfo/UPDATE_MODEM_PRICE', this.modems[index].price ? this.modems[index].price : 0)
    }
  }
}
</script>
