<template>
<v-container fluid>
  <v-row width="100%" align="center" justify="center">
    <v-col sm="12" md="6">
        <v-card flat class="transparent">
          <v-img src="@/assets/home/home-top-picture.png" max-width="750" class="mx-auto"></v-img>
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
        <v-card flat class="transparent mx-auto">
          <v-card-title>
            <h1 class="width-100 text-center text-lg-left">Australia's <span class="green--text">Fastest<br>Residential Internet</span><br>Connection</h1>
          </v-card-title>
          <v-card-text class="width-100 text-center text-md-left mx-sm-auto mx-lg-0">
            <h4 class="width-100 text-center text-md-left">based on a comparison with speeds listed in the ACCC Broadband Performance Data Report</h4>
          </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<style>
.width-100 {
  width: 100%;
  max-width: 569px;
  border-right: solid 10px transparent;
}

</style>

<script>
export default {
  name: 'Top'
}
</script>
