<template>
  <v-container fluid class="container-top-0" align="start" justify="center">
    <v-row class="mt-0 pt-0 mx-auto" width="100%">
      <v-card flat class="plansfone mt-0 mx-auto">
      <v-tabs
        v-model="tab"
        background-color="primary"
        centered
        dark
        icons-and-text
        height="50"
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          <FirstTab/>
        </v-tab>

        <v-tab href="#tab-2">
          <SecondTab/>
        </v-tab>

        <v-tab href="#tab-3">
          <ThirdTab/>
        </v-tab>

        <v-tab href="#tab-4">
          <FourthTab/>
        </v-tab>

        <v-tab href="#tab-5">
          <LastTab/>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="plansfone">
        <v-tab-item value="tab-1">
          <FirstStep :next.sync="firstTabNext"/>
        </v-tab-item>
        <v-tab-item value="tab-2">
          <Modems :prev.sync="secondTabPrev" :next.sync="secondTabNext"/>
        </v-tab-item>
        <v-tab-item value="tab-3">
          <ClientInfo :prev.sync="thirdTabPrev" :next.sync="thirdTabNext"/>
        </v-tab-item>
        <v-tab-item value="tab-4">
          <PaymentDetails :prev.sync="fourthTabPrev" :next.sync="fourthTabNext"/>
        </v-tab-item>
        <v-tab-item value="tab-5">
          <v-card flat class="plansfone mx-auto" width="480" height="342">
            <v-card-title class="plans--title deepgreen text-center">
              <span style="width: 100%; margin-top: 0">payment information</span>
            </v-card-title>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

      <!-- <v-row dense width="1180" align="start" align-content="start" justify="center">

        <v-col width="680" class="main-column plansfone pa-0">
          <FirstStep/>
          <Modems/>
          <ClientInfo/>
          <PaymentDetails/>
        </v-col>
        <v-col width="480" class="additional-column">
          <v-card flat class="plansfone mx-auto" width="480" height="342">
            <v-card-title class="plans--title deepgreen text-center">
              <span style="width: 100%; margin-top: 0">payment information</span>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row> -->
    </v-row>
  </v-container>
</template>

<style scoped>
.container-top-0 {
  margin-top: 0!important;
}
.main-column {
  margin-left: calc(50% - 590px);
  margin-right: 20px;
  padding: 0;
  height: 3158px;
}
.additional-column {
  margin: 0;
}
.plans--title {
  height: 110px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #fff;
  padding: 0px 20px;
}

.plans--title > * {
  margin-top: -24px;
}

</style>

<script>
import FirstTab from '@/components/fibre-internet-plans/steps/FirstStep.vue'
import SecondTab from '@/components/fibre-internet-plans/steps/SecondStep.vue'
import ThirdTab from '@/components/fibre-internet-plans/steps/ThirdStep.vue'
import FourthTab from '@/components/fibre-internet-plans/steps/FourthStep.vue'
import LastTab from '@/components/fibre-internet-plans/steps/LastStep.vue'

import FirstStep from '@/components/fibre-internet-plans/FirstStep.vue'
import Modems from '@/components/fibre-internet-plans/Modems.vue'
import ClientInfo from '@/components/fibre-internet-plans/ClientInfo.vue'
import PaymentDetails from '@/components/fibre-internet-plans/PaymentDetails.vue'

export default {
  name: 'FibreInternetPlans',

  components: {
    FirstTab,
    SecondTab,
    ThirdTab,
    FourthTab,
    LastTab,
    FirstStep,
    Modems,
    ClientInfo,
    PaymentDetails
  },

  data: () => ({
    tab: 0
  }),
  computed: {
    firstTabNext: {
      get () { return false },
      set (val) { this.tab = val ? 'tab-2' : this.tab }
    },
    secondTabPrev: {
      get () { return false },
      set (val) { this.tab = val ? 'tab-1' : this.tab }
    },
    secondTabNext: {
      get () { return false },
      set (val) { this.tab = val ? 'tab-3' : this.tab }
    },
    thirdTabPrev: {
      get () { return false },
      set (val) { this.tab = val ? 'tab-2' : this.tab }
    },
    thirdTabNext: {
      get () { return false },
      set (val) { this.tab = val ? 'tab-4' : this.tab }
    },
    fourthTabPrev: {
      get () { return false },
      set (val) { this.tab = val ? 'tab-3' : this.tab }
    },
    fourthTabNext: {
      get () { return false },
      set (val) { this.tab = val ? 'tab-5' : this.tab }
    }
  }
}

</script>
