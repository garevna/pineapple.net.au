<template>
  <v-container fluid>
    <v-card flat class="d-flex flex-wrap justify-center transparent">
      <v-card flat class="transparent text-centered mx-10" width="240">
        <ContactUs/>
        <v-card-title>
          <h3>Contact Us</h3>
        </v-card-title>
        <v-card-text>
          <p>{{ home.contactUs }}</p>
        </v-card-text>
      </v-card>
      <v-card flat class="transparent text-centered mx-10" width="240">
        <GetConnected/>
        <v-card-title>
          <h3>Get connected</h3>
        </v-card-title>
        <v-card-text>
          <p>{{ home.getConnected }}</p>
        </v-card-text>
      </v-card>
      <v-card flat class="transparent text-centered mx-10" width="240">
        <Enjoy/>
        <v-card-title>
          <h3>Enjoy</h3>
        </v-card-title>
        <v-card-text>
          <p>{{ home.enjoy }}</p>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<style>
h3, p {
  width: 100%;
  text-align: center;
  color: #000;
}
</style>

<script>

import { mapState } from 'vuex'

import ContactUs from '@/components/svg/ContactUs.vue'
import GetConnected from '@/components/svg/GetConnected.vue'
import Enjoy from '@/components/svg/Enjoy.vue'

export default {
  name: 'HowToConnect',
  components: {
    ContactUs,
    GetConnected,
    Enjoy
  },
  computed: {
    ...mapState('content', ['home'])
  }
}
</script>
