<template>
  <v-app class="transparent">
    <!-- <v-content class="mx-0"> -->
      <router-view class="mt-12 mx-0 px-0"></router-view>
    <!-- </v-content> -->
  </v-app>
</template>

<style lang="scss">

html {
  margin-right: -20px;
  margin-bottom: -10px;
  background: #FBFBFB;
}

main {
  padding: 0!important;
  margin: 0!important;
}

.container {
  padding: 0!important;
}

.green--text {
  color: #363636;
}
h1 {
  font-size: 46px;
  font-style: normal;
  line-height: 150%;
  font-weight: 900;
  letter-spacing: 0.02em;
}
h2 {
  font-size: 32px;
  font-style: normal;
  line-height: 150%;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.02em;
  color: #363636;
  width: 100%;
}
h3 {
  font-size: 28px;
  line-height: 150%;
}
h4 {
  font-size: 24px;
  color: #6D6D6D;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: 0.02em;
}

p {
  font-size: 16px;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: 0.02em;
}

.row {
  margin-left: 0!important;
  margin-right: 0!important;
}

svg.defs-only {
  display: block;
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
}

@media (max-width: "600px"), (max-height: "600px") {
  h1 { font-size: 28px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4 { font-size: 18px; }
  p { font-size: 16px; }
}

@media (max-width: '400px'), (max-height: '400px') {
  h4 { font-size: 16px; }
}

</style>

<script>

export default {
  name: 'App',

  data: () => ({

  }),
  methods: {
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
