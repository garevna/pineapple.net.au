<template>
  <v-container fluid fill-height>
    <v-img src="@/assets/home/home-central-green-fone.png" cover>
  <!-- <v-container
          fluid
          fill-height
          class="full-background"
          :style="{'background-image': `url(${require('')})`}"
  > -->
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="6">
              <v-card flat class="transparent">
                <Pictures class="d-none d-lg-flex"/>
                <Slider class="d-lg-none"/>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6">
              <v-card flat class="transparent who-are-we mx-auto mx-xl-10" max-width="400">
                <v-card-title>
                  <h2 class="who-are-we--text">Who are we?</h2>
                </v-card-title>
                <v-card-text>
                  <p class="who-are-we--text text-about">
                    Pineapple Net is an authorised retail service provider.
                    Our fibre optic broadband is a superior alternative to the NBN and our speeds start where the NBN typically maxes out.
                  </P>
                </v-card-text>
              </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>

<style>

.text-about {
  line-height: 28px;
}

.who-are-we {
  margin-top: 0;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  margin-bottom: 100px;
  text-align: center;
}

.who-are-we--text {
  color: #fff!important;
  text-align: left;
}

@media screen and (min-width: 900px) {
  .who-are-we { margin-top: 300px; margin-left: 100px; }
}
</style>

<script>

import Pictures from '@/components/central-fone-pictures/Pictures.vue'
import Slider from '@/components/central-fone-pictures/Slider.vue'

export default {
  name: 'WhoAreWe',
  components: {
    Pictures,
    Slider
  },
  data () {
    return {
      backImage: null,
      foneElem: null
    }
  },
  beforeMount () {
    this.backImage = require('@/assets/home/home-central-green-fone.png')
    console.log(this.backImage)
  },
  mounted () {
    // this.foneElem = document.getElementById('card-fone')
    // this.foneElem.style.backgroundImage = `url(${this.backImage})`
    // console.log(this.foneElem.style.backgroundImage)
  }
}
</script>
