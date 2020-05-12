<template>
  <v-container fluid>
    <v-card flat class="transparent mx-auto my-12 text-center" max-width="1360">
      <v-card-title class="text-center" max-width="940">
        <h1 style="width: 100%; text-align: center">Our customers <span class="green--text">love us.</span></h1>
      </v-card-title>

      <!-- <v-row v-if="testimonials"> -->

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
              flat
              class="ma-4"
              height="250"
              width="376"
              @click="toggle"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <v-scale-transition>
                  <TestimonialsCard
                      :date="testimonial.date"
                      :name="testimonial.name"
                      :photo="testimonial.photo"
                      :text="testimonial.text"
                />
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>

        <v-carousel
              v-else
              :continuous="true"
              :show-arrows="true"
              hide-delimiters
              height="280"
              width="100%"
              light
              class="testimonials transparent"
        >
          <v-carousel-item
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <v-sheet height="100%" flat tile class="transparent">
              <v-row align="center" justify="center">
                <TestimonialsCard
                      :date="testimonial.date"
                      :name="testimonial.name"
                      :photo="testimonial.photo"
                      :text="testimonial.text"
                />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      <!-- </v-row> -->
    </v-card>
  </v-container>
</template>

<style>
.testimonials .v-btn__content,
.testimonials .mdi::before,
.testimonials .mdi-chevron-right::before,
.testimonials .v-icon::after {
  color: #fff!important;
}

.testimonials .theme--light.v-btn.v-btn--icon {
  background: #7b79!important;
  color: #fff!important;
}
</style>

<style scoped>

.v-carousel__controls {
  z-index: 0!important;
}

</style>

<script>

import { mapState } from 'vuex'

import TestimonialsCard from '@/components/home/TestimonialsCard.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialsCard
  },
  data: () => ({
    model: 0
  }),
  computed: {
    ...mapState('testimonials', ['testimonials']),
    ...mapState({ screen: 'viewportWidth' })
  }
}

</script>
