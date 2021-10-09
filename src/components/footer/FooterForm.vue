<template>
  <v-card flat class="transparent footer--top-content" v-if="footer">
    <v-card-text class="text-center">
      <h2 class="white-text centered">{{ header }}</h2>
      <h5 class="white-text centered mt-8">
          {{ text }}
      </h5>
    </v-card-text>
    <v-row justify="center">
      <v-btn
        class="mx-auto"
        height="53"
        max-width="280"
        min-width="280"
        rounded
        light
        @click="$router.push({ name: 'contact' })"
        style="color: #20731C"
      >Get started</v-btn>
    </v-row>
  </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'FooterForm',

  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['footer']),
    header () {
      return this.footer && this.footer.topHead ? this.footer.topHead : 'READY TO GET STARTED?'
    },
    text () {
      return this.footer && this.footer.topText ? this.footer.topText : 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
    }
  }
}
</script>

<style scoped>
* {
  color: #fff;
}
.footer--top-content {
  position: absolute;
  width: 100%;
}
.input-field-rounded {
  border-radius: 48px!important;
}
.input-field {
  width: 280px;
}
.centered {
  text-align: center;
}
.white-text {
  color: #fff;
}
</style>
