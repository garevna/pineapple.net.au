<template>
  <v-card
    class="transparent text-center pa-4"
    width="320"
    :height="viewportWidth > 1055 ? 480 : 360"
    :class="{ 'package-card-with-border': active }"
  >
      <v-card flat class="transparent text-center" :height="viewportWidth > 1055 ? 360 : 240">
        <h4>{{ currentPackage.title }}</h4>
        <p class="package-card-text">
          <small>{{ currentPackage.subtitle }}</small>
        </p>
        <p v-for="(text, num) in currentPackage.text" :key="num" class="package-card-text">
          {{ text }}
        </p>
        <br>
        <p class="package-card-text">{{ currentPackage.priceText }}</p>
        <p class="package-card-text">${{ currentPackage.price }}</p>
      </v-card>
      <v-card flat class="transparent text-center mt-2 mt-md-4 mt-lg-6">
        <v-btn
          v-if="index !== selected"
          color="buttons"
          dark
          rounded
          outlined
          width="180"
          height="40"
          @click="$emit('update:selected', index)"
        >
          Choose package
        </v-btn>
      </v-card>
  </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'PackageCard',
  props: {
    index: Number,
    selected: Number /* sync */
  },
  computed: {
    ...mapState(['viewportWidth', 'plan']),
    ...mapState('internetPlans', ['packages']),
    currentPackage () {
      return typeof this.index === 'number' ? this.packages[this.plan][this.index] : undefined
    },
    active () {
      return this.index === this.selected
    }
  }
}
</script>

<style scoped>
.package-card-text {
  line-height: 100%!important;
  margin-bottom: 0;
}
.package-card-with-border {
  box-sizing: border-box;
  border-style: solid;
  border-radius: 16px!important;
  transition: all 0.8s;
  border-bottom: 4px solid #20731C!important;
  border-right: 4px solid #20731C!important;
  border-top: 4px solid #20731C90!important;
  border-left: 4px solid #20731C90!important;
  padding-top: 48px!important;
}
</style>
