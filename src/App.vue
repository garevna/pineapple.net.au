<template>
  <v-app>
    <v-content class="mx-0">
      <router-view class="mt-12 mx-0 px-0"></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss">
.v-application .mx-0 {
  padding-bottom: 0!important;
}
</style>

<script>

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',

  data: () => ({

  }),
  mounted () {
    AOS.init()
  }
}
</script>
