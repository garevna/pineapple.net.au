<template>
  <!-- <v-container> -->
    <!-- <v-row align="center" justify="center">
      <v-col cols="12" md="6" style="position: relative"> -->
    <v-card flat class="transparent">
      <v-card flat class="transparent" style="position: relative; margin-top: -300px; margin-left: 120px;">
        <img src="@/assets/home/images/2.png"
             class="images images--2"
        />
        <img src="@/assets/home/images/1.png"
             class="images images--1"
        />
        <img src="@/assets/home/images/3.png"
             class="images images--3"
        />
        <img src="@/assets/home/images/4.png"
             class="images images--4"
        />
      </v-card>
    </v-card>
      <!-- </v-col>
    </v-row> -->
  <!-- </v-container> -->
</template>

<style scoped>
.images {
  position: absolute;
  width: var(--image-width);
  border-radius: 15px;
  box-shadow: 2px 2px 5px #0007;
  transition: all 0.5s;
}
.images:hover {
  box-shadow: 5px 5px 8px #0009;
}

.images--1 {
  margin-left: var(--margin-left-1);
  margin-top: var(--margin-top-1);
}
.images--2 {
  margin-left: var(--margin-left-2);
  margin-top: var(--margin-top-2);
}
.images--3 {
  margin-left: var(--margin-left-3);
  margin-top: var(--margin-top-3);
}
.images--4 {
  margin-left: var(--margin-left-4);
  margin-top: var(--margin-top-4);
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'central-home-pictures-slider',
  data () {
    return {
      margins: {
        left: {
          1: { xs: '10px', sm: '0px', md: '0px', lg: '10px', xl: '10px' },
          2: { xs: '150px', sm: '190px', md: '190px', lg: '320px', xl: '320px' },
          3: { xs: '-30px', sm: '-50px', md: '-50px', lg: '-20px', xl: '-20px' },
          4: { xs: '120px', sm: '150px', md: '150px', lg: '230px', xl: '230px' }
        },
        top: {
          1: { xs: '90px', sm: '90px', md: '90px', lg: '0px', xl: '0px' },
          2: { xs: '180px', sm: '190px', md: '190px', lg: '155px', xl: '155px' },
          3: { xs: '220px', sm: '255px', md: '255px', lg: '235px', xl: '235px' },
          4: { xs: '308px', sm: '350px', md: '350px', lg: '380px', xl: '380px' }
        }
      },
      imageWidth: { xs: '170px', sm: '220px', md: '220px', lg: '325px' }
    }
  },
  computed: {
    ...mapState({
      mode: 'viewport'
    })
    // cssVars () {
    //   return {
    //     '--margin-left-1': this.margins.left[1][this.mode],
    //     '--margin-left-2': this.margins.left[2][this.mode],
    //     '--margin-left-3': this.margins.left[3][this.mode],
    //     '--margin-left-4': this.margins.left[4][this.mode],
    //     '--margin-top-1': this.margins.top[1][this.mode],
    //     '--margin-top-2': this.margins.top[2][this.mode],
    //     '--margin-top-3': this.margins.top[3][this.mode],
    //     '--margin-top-4': this.margins.top[4][this.mode],
    //     '--image-width': this.imageWidth[this.mode]
    //   }
    // }
  },
  watch: {
    mode (val) {
      this.changeViewport(val)
    }
  },
  methods: {
    changeViewport (mode) {
      [
        { name: '--margin-left-1', value: this.margins.left[1][mode] },
        { name: '--margin-left-2', value: this.margins.left[2][mode] },
        { name: '--margin-left-3', value: this.margins.left[3][mode] },
        { name: '--margin-left-4', value: this.margins.left[4][mode] },
        { name: '--margin-top-1', value: this.margins.top[1][mode] },
        { name: '--margin-top-2', value: this.margins.top[2][mode] },
        { name: '--margin-top-3', value: this.margins.top[3][mode] },
        { name: '--margin-top-4', value: this.margins.top[4][mode] },
        { name: '--image-width', value: this.imageWidth[mode] }
      ].forEach(item => document.documentElement.style.setProperty(item.name, item.value))
    }
  },
  mounted () {
    this.changeViewport(this.mode)
  }
}
</script>
