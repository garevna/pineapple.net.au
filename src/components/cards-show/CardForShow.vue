<template>
  <v-card flat
          class="component sample-scroll pa-4"
          ripple
          hover
  >
    <v-row align="center" justify="center">
      <v-col xs="12" md="6">
        <!-- <v-card flat> -->
          <v-card-title><h4>{{title}}</h4></v-card-title>
          <v-card-text class="text-justify">
            <slot></slot>
          </v-card-text>
        <!-- </v-card> -->
      </v-col>
      <v-col xs="12" md="6">
        <!-- <v-card flat width="fit-content" class="ml-lg-12"> -->
          <v-img :src="image" max-height="200" max-width="100%"/>
          <v-card-text>
            <h6>
              #{{records[0]}}
              #{{records[1]}}
              #{{records[2]}}
              #{{records[3]}}
            </h6>
          </v-card-text>
        <!-- </v-card> -->
      </v-col>
    </v-row>
  </v-card>
</template>

<style>
/* .sample-scroll {
  opacity: 0;
  transform: translate3d(-1000px, 0, 0);
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.component {
  margin: 32px;
  padding: 8px 16px;
} */
</style>

<script>

export default {
  name: 'CardsShow',

  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    records: {
      type: Array,
      required: true,
      validator (value) {
        return value
          .filter(item => typeof item !== 'string')
          .length === 0
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
