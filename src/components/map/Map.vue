<template>
  <div
      id="map-container"
      :style="{ height: height, width: width, marginLeft: margin, marginRight: margin }"
  ></div>
</template>

<style scoped>
#map-container {
  position: absolute;
  box-sizing: border-box;
  box-shadow: -2px -2px 6px #0005;
}
</style>

<script>

import { mapState } from 'vuex'

// import SearchOnMap from '@/components/map/SearchOnMap.vue'
import mapConfigs from '@/components/map/mapConfig'

export default {
  components: {
    // SearchOnMap
  },
  props: ['height', 'width', 'margin'],
  data () {
    return {
      map: null,
      marker: null,
      center: { lat: -37.8357725, lng: 144.9738764 }
    }
  },

  computed: {
    ...mapState({
      screen: 'viewportWidth',
      place: 'map.officeCoords',
      address: 'map.officeAddress'
    })
  },
/* eslint-disable */
  watch: {
    place (val) {
      console.log('PLACE: ', val)
      // this.marker = new google.maps.Marker({
      //   position: val,
      //   map: this.map,
      //   title: this.address
      // })
    }
  },

  methods: {
    //
  },

  mounted () {
    this.$store.dispatch('map/GET_OFFICE_COORDS')
    this.map = new window.google.maps.Map(document.getElementById('map-container'), {
      center: this.center,
      zoom: 13,
      styles: mapConfigs,
      disableDefaultUI: true
    })
    this.marker = new google.maps.Marker({
      position: this.center,
      map: this.map,
      title: this.address
    })
  }
}
</script>
