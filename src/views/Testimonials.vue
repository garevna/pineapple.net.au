<template>
  <v-container fluid>
    <v-card flat class="transparent mx-auto my-12 text-center" max-width="1360">
      <v-card-title class="text-center" max-width="940">
        <h1 style="width: 100%; text-align: center">Our customers <span class="green--text">love us.</span></h1>
      </v-card-title>

      <v-slide-group
        v-if="screen >= 600"
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(testimonial, index) in testimonials"
          :key="index"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            class="ma-4"
            height="212"
            width="376"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-card flat hover :width="cardWidth" height="212" style="position: relative" pa-4>
                  <v-avatar size="36px" class="testimonial-photo">
                    <img :src="testimonial.photoURL" :alt="testimonial.name"/>
                  </v-avatar>
                  <p class="testimonial-name">{{ testimonial.name }}</p>
                  <p class="testimonial-text" :style="{ fontSize: textSize }">{{ testimonial.text }}</p>
                  <p class="testimonial-date">{{ testimonial.date.toLocaleDateString() }}</p>
                </v-card>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-carousel
            v-else
            :continuous="false"
            :show-arrows="false"
            hide-delimiter-background
            height="300"
            light
            class="transparent"
      >
        <v-carousel-item
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <v-sheet height="100%" tile class="transparent">
            <v-row align="center" justify="center">
              <v-card flat hover :width="cardWidth" height="212" style="position: relative" pa-4>
                <v-avatar size="36px" class="testimonial-photo">
                  <img :src="testimonial.photoURL" :alt="testimonial.name"/>
                </v-avatar>
                <p class="testimonial-name">{{ testimonial.name }}</p>
                <p class="testimonial-text" :style="{ fontSize: textSize }">{{ testimonial.text }}</p>
                <p class="testimonial-date">{{ testimonial.date.toLocaleDateString() }}</p>
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<style scoped>

.testimonial-name,
.testimonial-text,
.testimonial-date,
.testimonial-photo {
  position: absolute;
}

.testimonial-name,
.testimonial-text,
.testimonial-date {
  text-align: left;
}

.testimonial-photo {
  top: 30px;
  left: 20px;
  border-radius: 50%!important;
}
.testimonial-name {
  top: 36px;
  left: 70px;
  font-size: 15px;
  font-weight: bold;
}
.testimonial-text {
  position: absolute;
  top: 80px;
  left: 20px;
  width: calc(100% - 40px);
  /* font-size: 14px; */
  font-weight: normal;
}
.testimonial-date {
  position: absolute;
  bottom: 4px;
  left: 12px;
  font-size: 12px;
  font-weight: normal;
}
</style>

<script>

import { mapState } from 'vuex'

// import CardsShow from '@/components/CardsShow.vue'

export default {
  name: 'Testimonials',

  data: () => ({
    model: 0
  }),

  computed: {
    ...mapState('testimonials', ['testimonials']),
    ...mapState({
      screen: 'viewportWidth'
    }),
    cardWidth () {
      return this.screen < 600 ? this.screen - 40 : 376
    },
    textSize () {
      return this.screen < 600 ? '12px' : '14px'
    }
  }
}

</script>
