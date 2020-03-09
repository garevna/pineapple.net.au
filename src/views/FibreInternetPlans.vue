<template>
  <v-container fluid fill-height class="mt-0 mx-auto" align-content="start" justify="center">
    <v-row dense width="1180" align="start" align-content="start" justify="center">
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
    </v-row>
  </v-container>
</template>

<style scoped>
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
import FirstStep from '@/components/fibre-internet-plans/FirstStep.vue'
import Modems from '@/components/fibre-internet-plans/Modems.vue'
import ClientInfo from '@/components/fibre-internet-plans/ClientInfo.vue'
import PaymentDetails from '@/components/fibre-internet-plans/PaymentDetails.vue'

export default {
  name: 'FibreInternetPlans',

  components: {
    FirstStep,
    Modems,
    ClientInfo,
    PaymentDetails
  },

  data: () => ({
    //
  })
}

</script>
