<template>
    <v-container class="land-covid-ref">
    <v-row>
      <v-col>
        <v-card
            flat
            color="primary"
            height="100%"
            class="land-covid-title"
        >
          COVID-19 UPDATE: In the light of the Victorian Government's Stage 4 restrictions, Pineapple Net would like to assure you that we are still trading.<br>
          <u @click="$router.push({ name: 'covid' })">Click here to find out more.</u>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
<style scoped>
a {
  text-decoration: none;
}
u {
  cursor: pointer;
}
.land-covid-ref {
  min-width: 100%!important;
  text-align: center;
  background-color: #4CAF50;
  margin-bottom: 80px;
}
.land-covid-title {
  font-weight: 550;
  font-size: 20px;
  color: #FAFAFA !important;
  padding: 5px 0;
}
@media screen and (max-width: 400px) {
  .land-covid-title {
    font-size: 16px;
  }
}
</style>
