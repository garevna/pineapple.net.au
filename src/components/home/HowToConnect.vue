<template>
  <v-container fluid>
    <v-card flat class="d-flex flex-wrap justify-center transparent">
      <v-card flat class="transparent text-centered mx-10" width="240">
        <ContactUs :contact.sync="contactClicked" />
        <v-card-title>
          <h3>Contact Us</h3>
        </v-card-title>
        <v-card-text v-html="howToConnect.contactUs">
          <!-- <p>{{ howToConnect.contactUs }}</p> -->
        </v-card-text>
      </v-card>
      <v-card flat class="transparent text-centered mx-10" width="240">
        <GetConnected :connect.sync="connectClicked" />
        <v-card-title>
          <h3>Get connected</h3>
        </v-card-title>
        <v-card-text>
          <p>{{ howToConnect.getConnected }}</p>
        </v-card-text>
      </v-card>
      <v-card flat class="transparent text-centered mx-10" width="240">
        <Enjoy/>
        <v-card-title with="100%">
          <h3>Enjoy</h3>
        </v-card-title>
        <v-card-text>
          <p>{{ howToConnect.enjoy }}</p>
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
  props: ['contact', 'connect'],
  components: {
    ContactUs,
    GetConnected,
    Enjoy
  },
  data () {
    return {
      contactClicked: false,
      connectClicked: false
    }
  },
  computed: {
    ...mapState('content', ['howToConnect'])
  },
  watch: {
    contactClicked (val) {
      this.$emit('update:contact', val)
    },
    connectClicked (val) {
      this.$emit('update:connect', val)
    }
  }
}
</script>
