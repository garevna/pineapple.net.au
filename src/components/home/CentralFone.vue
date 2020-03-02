<template>
  <v-card
          flat
          tile
          width="100%"
          height="680"
          class="transparent card-fone"
          :style="{'background-image': `url(${require('@/assets/home/home-central-green-fone.png')})`}"
  >
      <v-card flat class="ma-4 transparent">
        <v-row>
          <v-col cols="12" lg="6">
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
          </v-col>
          <v-col cols="12" lg="6" align="center" justify="center">
            <v-card-title class="title">
              <h2 style="color: #fff!important">Who are we?</h2>
            </v-card-title>
          </v-col>
        </v-row>
      </v-card>
    <!-- </v-img> -->
  </v-card>
</template>

<style>
@media screen and (min-width: 1440px) {
  .card-fone {
    background-size: contain!important;
    background-position: center center;
  }
}
.card-fone {
  background-size: cover;
  /* height: 680px; */
}
.card-with-pictures {
  /* position: relative; */
  width: 100%;
}
.title {
  position: absolute;
  top: 35%;
  right: 30%;
  color: #fff;
  /* font-family: 'Gilroy';
  font-size: 36px;
  font-weight: 900; */
}
.fone-image {
  width: 100%;
  padding: 0;
  margin: 0;
}
.images {
  position: relative;
  width: 30%;
  min-with: 290px;
  /* height: 230px; */
  border-radius: 15px;
  box-shadow: 2px 2px 5px #0007;
  transition: all 0.5s;
}
.images:hover {
  box-shadow: 4px 4px 8px #0009;
  border: solid 1px #dfe9;
}

.images--1 {
  left: -16%;
  top: 5%;
}
.images--2 {
  left: 40%;
  top: 40%;
}
.images--3 {
  left: -52%;
  top: 58%;
}
.images--4 {
  left: 32%;
  top: 42%;
}
</style>

<script>
export default {
  name: 'CentralFone',
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
