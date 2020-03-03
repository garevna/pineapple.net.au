<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" style="position: relative">
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
    </v-row>
  </v-container>
</template>

<style>
.images {
  position: absolute;
  with: 290px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #0007;
  transition: all 0.5s;
}
.images:hover {
  box-shadow: 5px 5px 8px #0009;
}

.images--1 {
  margin-left: 50px;
  margin-top: 0;
}
.images--2 {
  margin-left: 320px;
  margin-top: 155px;
}
.images--3 {
  margin-left: -20px;
  margin-top: 235px;
}
.images--4 {
  margin-left: 230px;
  margin-top: 380px;
}
</style>

<script>
export default {
  name: 'central-home-pictures-slider',
  data () {
    return {
      //
    }
  }
}
</script>
