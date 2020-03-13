<template>
  <v-container fluid id="map-search">
    <div class="w-100">
      <div class="row search-form map-input p-5 justify-content-center">
        <input type="text" id="mapSearch" name="search" class="col-12 col-md" placeholder="Your address" />
        <button id="startSearch" class="col-12 col-md-auto button-type-two">{{ $t('home.components.map.buttonSubmit') }}</button>
      </div>
      <div class="row">

        <div class="col-12 col-md-6 mb-10 d-flex justify-content-center">
          <label class="radio-container pl-30">
            <span class="map-legend-text">Service available</span>
            <!-- <input type="radio" name="radio" checked> -->
            <span class="checkmark-red"></span>
          </label>
        </div>

        <div class="col-12 col-md-6 mb-10 ml-2 ml-md-0 d-flex justify-content-center">
          <label class="radio-container pl-30">
            <span class="map-legend-text">Build commenced</span>
            <!-- <input type="radio" name="radio"> -->
            <span class="checkmark-black"></span>
          </label>
        </div>

      </div>
    </div>
  </v-container>
</template>

<style scoped>

</style>
