<template>
  <v-card flat width="100%" class="transparent">
    <v-img src="@/assets/home/home-central-green-fone.png" cover>
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
    </v-img>
  </v-card>
</template>

<style>
.card-with-pictures {
  position: relative;
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
  position: absolute;
  width: 21%;
  min-with: 290px;
  /* height: 230px; */
  border-radius: 10px;
  box-shadow: 2px 2px 5px #0007;
  transition: all 0.5s;
}
.images:hover {
  box-shadow: 3px 3px 6px #0009;
}

.images--1 {
  left: 13%;
  top: 7%;
}
.images--2 {
  left: 32%;
  top: 28%;
}
.images--3 {
  left: 10%;
  top: 36%;
}
.images--4 {
  left: 28%;
  top: 57%;
}
</style>
