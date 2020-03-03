<template>
  <v-container>
    <v-row align="center" justify="center" class="mx-10">
      <v-col cols="12" md="6">
        <v-carousel
                :show-arrows="false"
                cycle
                continuous
                height="215"
                width="320"
                hide-delimiters
                vertical
        >
          <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              width="320"
              height="215"
              style="border-radius: 15px"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>

<script>
export default {
  name: 'central-home-pictures-slider',
  data () {
    return {
      items: [
        { src: require('@/assets/home/images/1.png') },
        { src: require('@/assets/home/images/2.png') },
        { src: require('@/assets/home/images/3.png') },
        { src: require('@/assets/home/images/4.png') }
      ]
    }
  }
}
</script>
