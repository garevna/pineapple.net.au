<template>
  <v-container fluid fill-height class="homefone pa-auto">
    <v-card flat max-width="320" max-height="200" class="transparent ma-auto">
      <v-card-text class="text-center">
        <h1>404</h1>
      </v-card-text>
      <v-card-text class="text-center">
        <h3>Page not found</h3>
      </v-card-text>
      <v-row justify="center" style="cursor: pointer;" @click="goHome">
        <svg
          height="48"
          viewBox="0 0 24 24"
          width="48"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#72BF44" />
        </svg>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'NotFound',
  data () {
    return {
      ret: false
    }
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home-top' })
    }
  }
}
</script>

<style scoped>
.iconify {
  width: 64px;
  height: 64px;
  cursor: pointer;
}
h1, h3 {
  width: 100%;
}
</style>
