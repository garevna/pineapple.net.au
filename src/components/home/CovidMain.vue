<template>
  <v-container fluid>
    <v-row d-flex align="center" justify="center" class="ml-10 mr-10 mt-15">
      <v-col sm="12" md="6" xl="4">
        <v-card flat class="transparent mx-auto">
          <v-img :src="familyPicture" max-width="800" class="mx-auto"></v-img>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" xl="4">
        <v-card flat color="homefone" class="covid-land-title-text mx-auto ml-6">{{covidLand.text}}</v-card>
        <v-card flat color="homefone" class="covid-land-list mx-auto">
          <ul>
            <li v-for="index in covidLand.covidList" :key="index.covidList" >
            {{index}}
            </li>
          </ul>
        </v-card>
      </v-col>
    </v-row>
    <v-row d-flex justify="center" class="mt-10 ml-10 mr-10">
      <v-col sm="12" md="6" xl="4">
        <v-card flat color="homefone" class="mx-auto">
          <h1 class="width-100 text-center">Your responsibilities:</h1>
          <p class="width-100 text-center">{{covidLand.responsibilitiesText}}</p>
        </v-card>
         <v-card flat color="homefone" class="covid-land-list mx-auto">
          <ul class="pa-3">
            <li v-for="index in covidLand.responsibilitiesList" :key="index.responsibilitiesList" >
            {{index}}
            </li>
          </ul>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" xl="4">
        <v-card flat color="homefone" class="mx-auto">
          <h1 class="width-100 text-center">COVID-19 Support package</h1>
          <v-card-text class="covid-support-text mx-auto">
            If Pineapples were not sweet enough already, we are offering <span class="green--text"><strong>3 months of free internet and free installation, including a free router for new onboarding customers that have been affected by COVID-19.</strong></span>
            <br>To redeem this offer, please send an email to <router-link to="/contact">info@pineapple.net.au</router-link> stating your name, your service address, and how you have been affected by COVID-19 and someone will be in touch with you within 48 hours.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  ul {
    list-style: none;
  }
  li {
    line-height: 180%;
    color: #6D6D6D;
  }
  p {
    font-weight: 400;
    font-size: 18px;
  }
  .covid-land-title-text {
    font-weight: 600;
    font-size: 20px;
    text-align: justify;
    line-height: 180%;
  }
  .covid-land-list {
    font-weight: 500;
    font-size: 20px;
    text-align: justify;
    border-radius: 0px;
    line-height: 180%;
  }
  .covid-support-text {
    font-weight: 500;
    font-size: 20px;
    text-align: justify;
    margin-top: 75px;
    line-height: 180%;
  }
  @media screen and (max-width: 1024px) {
    .covid-support-text {
      margin-top: 110px;
    }
  }
  @media screen and (max-width: 768px) {
    .covid-support-text {
      margin-top: 15px;
    }
    .mr-10, .ml-10 {
      margin: 0px !important;
    }
  }
  @media screen and (min-width: 1904px) and (max-width: 2009px) {
    .covid-support-text {
      margin-top: 8px;
    }
  }
</style>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('content', ['covidLand']),
    ...mapGetters(['familyPicture'])
  }
}
</script>
