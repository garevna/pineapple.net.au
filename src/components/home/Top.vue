<template>
  <v-row align="center" justify="center">
    <v-col sm="12" md="7" lg="6" class="mx-auto">
      <v-img src="@/assets/home/home-top-picture.png"></v-img>
    </v-col>
    <v-col sm="12" md="5" lg="6" class="mx-auto">
      <v-card flat class="transparent mx-auto">
        <v-card-title class="mx-auto">
          <h1 class="width-100 text-center text-lg-left">Australia's <span class="green--text">Fastest<br>Residential Internet</span><br>Connection</h1>
        </v-card-title>
        <v-card-text class="mx-auto" style="max-width: 500px">
          <h4 class="width-100 text-center text-lg-left">based on a comparison with speeds listed in the ACCC Broadband Performance Data Report</h4>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.width-100 {
  width: 100%;
}
</style>

<script>
export default {
  name: 'Top'
}
</script>
