<template>
  <v-card flat tile class="transparent mx-auto mt-0 mb-12 pa-0" :width="containerWidth">
    <StepHeader :tab="5"/>

    <v-card flat class="transparent payment-info mx-auto my-2">
      <v-row class="mt-12">
        <v-col>
          <iframe src="https://app.arrivy.com/bk/17oXqJS " width="100%" style="height: 640px; border: none; box-shadow: 0 0 8px #0005;">
          </iframe>
        </v-col>
      </v-row>

      <v-row dense align="start" justify="center" class="mx-4 mt-10">
        <v-col cols="12" sm="6" class="text-center">
          <v-btn
              color="deepgreen"
              rounded
              outlined
              width="220"
              height="40"
              class="my-2"
              @click="$emit('update:prev', true)"
          >
            Back
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="text-center">
          <v-btn
              color="buttons"
              dark
              rounded
              width="220"
              height="40"
              class="my-2"
              @click="$emit('update:next', true)"
          >
            Continue
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
</v-card>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

import StepHeader from '@/components/fibre-internet-plans/StepHeader.vue'

export default {
  name: 'Booking',
  components: {
    StepHeader
  },

  props: {
    next: Boolean,
    prev: Boolean
  },

  computed: {
    ...mapState(['viewportWidth'])
  },
  methods: {
    //
  },
  mounted () {
    //
  }
}
</script>
