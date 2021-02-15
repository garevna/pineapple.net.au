<template>
  <v-container fluid fill-height class="px-0">
    <CentralGreenCircles>
      <v-container fluid fill-height class="px-0">
          <v-row align-content="center" align="center" justify="space-around">
            <v-col
                cols="12"
                sm="6"
                order="last"
                order-xs="first"
                class="images"
            >
              <Pictures v-if="picturesVisibility" />
              <Slider v-if="!picturesVisibility" />
            </v-col>
            <v-col
                  cols="12"
                  sm="6"
                  order-xs="first"
                  order-sm="last"
                  class="text"
            >
                <v-card flat class="transparent text mx-0" max-width="90%">
                  <v-card-title>
                    <h2 class="who-are-we--text">Who are we?</h2>
                  </v-card-title>
                  <v-card-text>
                    <p class="who-are-we--text text-about">
                      {{ whoAreWe }}
                    </P>
                  </v-card-text>
                </v-card>
          </v-col>
        </v-row>
      </v-container>
    </CentralGreenCircles>
  </v-container>
</template>

<style scoped>

.images {
  margin-top: var(--pictures-margin-top);
  margin-left: var(--pictures-margin-left);
  max-width: var(--pictures-max-width);
}

.text {
  margin-top: var(--text-margin-top);
  margin-left: var(--text-margin-left);
  max-width: var(--text-max-width);
}

.text-about {
  line-height: 28px;
}

.who-are-we--text {
  color: #fff!important;
  text-align: left;
}
</style>

<script>

import { mapState } from 'vuex'

import CentralGreenCircles from '@/components/central-fone-pictures/CentralGreenCircles.vue'
import Pictures from '@/components/central-fone-pictures/Pictures.vue'
import Slider from '@/components/central-fone-pictures/Slider.vue'

export default {
  name: 'WhoAreWe',
  components: {
    CentralGreenCircles,
    Pictures,
    Slider
  },
  data () {
    return {
      backImage: null,
      foneElem: null,
      picturesMarginLeft: { xl: '-100px', lg: '-250px', md: '-50px', sm: '10px', xs: '-210px' },
      picturesMarginTop: { xl: '-50px', lg: '10px', md: '20px', sm: '-10px', xs: '220px' },
      picturesDisplayMode: { xl: true, lg: true, md: true, sm: false, xs: true },
      picturesMaxWidth: { xl: '400px', lg: '400px', md: '400px', sm: '300px', xs: '320px' },
      textMarginLeft: { xl: '-50px', lg: '50px', md: '0px', sm: '0px', xs: '0px' },
      textMarginTop: { xl: '40px', lg: '40px', md: '40px', sm: '14px', xs: '0px' },
      textMaxWidth: '400px'
    }
  },
  watch: {
    mode (val) {
      this.changeViewport(val)
    }
  },
  computed: {
    ...mapState({
      mode: 'viewport',
      screen: 'viewportWidth'
    }),
    ...mapState('content', ['whoAreWe']),
    picturesVisibility () {
      return this.picturesDisplayMode[this.mode]
    }
  },
  methods: {
    changeViewport (mode) {
      [
        { name: '--pictures-margin-left', value: this.picturesMarginLeft[mode] },
        { name: '--pictures-margin-top', value: this.picturesMarginTop[mode] },
        { name: '--pictures-max-width', value: this.picturesMaxWidth[mode] },
        { name: '--text-margin-left', value: this.textMarginLeft[mode] },
        { name: '--text-margin-top', value: this.textMarginTop[mode] },
        { name: '--text-max-width', value: this.textMaxWidth }
      ].forEach(item => document.documentElement.style.setProperty(item.name, item.value))
    }
  },
  mounted () {
    this.changeViewport(this.mode)
  }
}
</script>
