<template>
<v-container fluid style="overflow-x: hidden">
  <v-row width="100%" align="center" justify="center">
    <v-col sm="12" md="6">
        <v-card flat class="transparent mx-auto mt-lg-12">
          <v-img :src="familyPicture" max-width="800" />
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
        <v-card flat class="transparent mx-auto">
          <v-card-title>
            <h1 class="width-100 text-center text-md-left">Australia's <span class="green--text">Fastest<br>Residential Internet</span><br>Connection</h1>
          </v-card-title>
          <v-card-text class="width-100 text-center text-md-left mx-sm-auto mx-lg-0">
            <h4 class="width-100 text-center text-md-left">{{ top.text }}</h4>
          </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<style>
.width-100 {
  width: 100%;
  border-right: solid 10px transparent;
}

</style>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Top',
  computed: {
    ...mapState('content', ['top']),
    ...mapGetters(['familyPicture'])
  }
}
</script>
