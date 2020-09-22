<template>
  <v-container fluid class="deepgreen py-12 mt-12">
    <v-card flat class="transparent mx-auto" max-width="600">
      <v-card-text class="text-center" width="100%">
        <h2>Powered By DGtek</h2>
        <p><small>DGtek is an infrastructure provider running fibre optics down Melbourne’s streets. We retail their world-class FTTP network, and that’s how our residential speeds are faster and cheaper than all our competitors.</small></p>
      </v-card-text>
      <v-card-text class="text-center">
        <a href="https://dgtek.net" target="_blank">
          <p>
            <span>Pineapple NET is powered by </span>
            <v-img
                  src="@/assets/icons/dgtek-logo-white.svg"
                  class="logo"
                  width="50"
                  contain
            ></v-img>
          </p>
        </a>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
h2, p {
  color: #fff;
  width: 100%;
}
.logo {
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'GreenSection',
  computed: {
    ...mapState('content', ['greenSection'])
  }

}
</script>
