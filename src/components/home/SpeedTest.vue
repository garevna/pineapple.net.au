<template>
  <v-card flat class="transparent mx-auto pa-4" :style="{ marginTop: containerMarginTop, maxWidth: '1200px' }">
    <h1 class="text-center text-md-left mb-8">Australia's <span class="green--text">Premium<br>Optical Fibre</span> Network</h1>
    <p :style="{ fontSize: fontSize }">{{ speedTest.text[0] }}</p>
    <p :style="{ fontSize: fontSize }">{{ speedTest.text[1] }}</p>
  </v-card>
</template>

<style scoped>

p {
  text-align: justify;
  line-height: 150%;
  color: #6D6D6D;
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      screen: 'viewportWidth'
    }),
    ...mapState('content', ['speedTest']),
    fontSize () {
      return this.screen < 600 ? '13px' : '24px'
    },
    containerMarginTop () {
      return '80px'
    }
  }
}
</script>
