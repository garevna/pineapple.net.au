<template>
    <v-card-title class="plans--title deepgreen text-center px-auto pt-3" :style="{ height: headerHeight }">
      <FirstTab v-if="tab === 0" :width="svgWidth" :height="svgHeight"/>
      <SecondTab v-if="tab === 1" :width="svgWidth" :height="svgHeight"/>
      <ThirdTab v-if="tab === 2" :width="svgWidth" :height="svgHeight"/>
      <FourthTab v-if="tab === 3" :width="svgWidth" :height="svgHeight"/>
      <LastTab v-if="tab === 4" :width="svgWidth" :height="svgHeight"/>
      <span :style="{ fontSize: headerFont }">{{ stepHeaders[tab] }}</span>
    </v-card-title>
</template>

<style scoped>
.plans--title {
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  line-height: 29px;
  color: #fff;
  padding: 0px 10px;
}
</style>

<script>

import { mapState } from 'vuex'

import FirstTab from '@/components/fibre-internet-plans/steps/FirstStep.vue'
import SecondTab from '@/components/fibre-internet-plans/steps/SecondStep.vue'
import ThirdTab from '@/components/fibre-internet-plans/steps/ThirdStep.vue'
import FourthTab from '@/components/fibre-internet-plans/steps/FourthStep.vue'
import LastTab from '@/components/fibre-internet-plans/steps/LastStep.vue'

export default {
  name: 'StepHeader',
  components: {
    FirstTab,
    SecondTab,
    ThirdTab,
    FourthTab,
    LastTab
  },
  props: {
    tab: [Number, String]
  },
  data () {
    return {
      stepHeaders: [
        'I want an internet service',
        'Do you need a modem?',
        'Some more about you',
        'Your payment details',
        'Payment information'
      ]
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    headerFont () { return this.viewportWidth < 600 ? '18px' : '24px' },
    headerHeight () { return this.viewportWidth < 600 ? '80px' : '110px' },
    svgWidth () { return this.viewportWidth < 600 ? 46 : '86' },
    svgHeight () { return this.viewportWidth < 600 ? 48 : '90' }
  }
}
</script>
